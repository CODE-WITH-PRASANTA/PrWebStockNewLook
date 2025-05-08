import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../Api';
import './ManageProjects.css';
import { FaTrash } from 'react-icons/fa';

const ManageProjects = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    desc: '',
    logo: null,
    link: '',
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${API_URL}/projects/all`);
      setProjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'logo') {
      setFormData({ ...formData, logo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.desc || !formData.logo || !formData.link) return;

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('desc', formData.desc);
    formDataToSend.append('logo', formData.logo);
    formDataToSend.append('link', formData.link);

    try {
      const response = await axios.post(`${API_URL}/projects/add`, formDataToSend);
      setProjects([...projects, response.data]);
      setFormData({ name: '', desc: '', logo: null, link: '' });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/projects/delete/${id}`);
      setProjects(projects.filter((project) => project._id !== id));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="manage-project-container">
      <h2 className="manage-project-title">Manage Projects</h2>

      <form className="manage-project-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Project Name"
          className="manage-project-input"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="desc"
          placeholder="Project Description"
          className="manage-project-textarea"
          value={formData.desc}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="logo"
          accept=".webp, .avif"
          className="manage-project-input"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="link"
          placeholder="Project Link"
          className="manage-project-input"
          value={formData.link}
          onChange={handleChange}
          required
        />
        <button type="submit" className="manage-project-button">Submit</button>
      </form>

      {projects.length > 0 && (
        <table className="manage-project-table">
          <thead>
            <tr>
              <th>Logo</th>
              <th>Name</th>
              <th>Description</th>
              <th>Link</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project._id}>
                <td><img src={project.logo} alt="Logo" className="manage-project-logo" /></td>
                <td>{project.name}</td>
                <td className="manage-project-desc">{project.desc}</td>
                <td>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">View</a>
                </td>
                <td>
                  <FaTrash
                    className="manage-project-delete"
                    onClick={() => handleDelete(project._id)}
                    title="Delete"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageProjects;