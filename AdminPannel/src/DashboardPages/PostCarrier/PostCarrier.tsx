import React, { useState, ChangeEvent, FormEvent } from "react";
import "./PostCarrier.css";

interface JobFormData {
  designation: string;
  experience: string;
  salary: string;
  location: string;
  type: string;
  vacancies: string;
  skills: string;
  email: string;
  whatsapp: string;
}

const PostCarrier: React.FC = () => {
  const [jobs, setJobs] = useState<JobFormData[]>([]);
  const [formData, setFormData] = useState<JobFormData>({
    designation: "",
    experience: "",
    salary: "",
    location: "",
    type: "",
    vacancies: "",
    skills: "",
    email: "",
    whatsapp: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.designation || !formData.email) {
      alert("Please fill all required fields!");
      return;
    }

    setJobs([...jobs, formData]);

    setFormData({
      designation: "",
      experience: "",
      salary: "",
      location: "",
      type: "",
      vacancies: "",
      skills: "",
      email: "",
      whatsapp: "",
    });
  };

  const handleDelete = (index: number) => {
    const updated = jobs.filter((_, i) => i !== index);
    setJobs(updated);
  };

  return (
    <div className="postcarrier-wrapper">
      <h2 className="postcarrier-title">Career Management</h2>
      <p className="postcarrier-purpose">
        Purpose: To post and manage job openings for recruitment.
      </p>

      <form className="postcarrier-form" onSubmit={handleSubmit}>
        <div className="postcarrier-grid">
          <div className="postcarrier-group">
            <label>Designation Name *</label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              placeholder="e.g. Frontend Developer"
              required
            />
          </div>

          <div className="postcarrier-group">
            <label>Experience Required (in years)</label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="e.g. 2"
            />
          </div>

          <div className="postcarrier-group">
            <label>Salary Range</label>
            <input
              type="text"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="e.g. ₹30,000 - ₹50,000"
            />
          </div>

          <div className="postcarrier-group">
            <label>Job Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Mumbai"
            />
          </div>

          <div className="postcarrier-group">
            <label>Job Type</label>
            <select name="type" value={formData.type} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Internship">Internship</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          <div className="postcarrier-group">
            <label>Number of Vacancies</label>
            <input
              type="number"
              name="vacancies"
              value={formData.vacancies}
              onChange={handleChange}
              placeholder="e.g. 3"
            />
          </div>

          <div className="postcarrier-group">
            <label>Skills Required (comma separated)</label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="e.g. React, Node.js, HTML"
            />
          </div>

          <div className="postcarrier-group">
            <label>Official Applying Email ID *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. hr@company.com"
              required
            />
          </div>

          <div className="postcarrier-group">
            <label>WhatsApp Contact Number</label>
            <input
              type="text"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="e.g. +91 9876543210"
            />
          </div>
        </div>

        <button type="submit" className="postcarrier-btn">
          Post Job
        </button>
      </form>

      {/* ===================== */}
      {/* Posted Jobs Section */}
      {/* ===================== */}
      <div className="postcarrier-table-section">
        <h3>Posted Jobs</h3>
        {jobs.length === 0 ? (
          <p className="postcarrier-nojobs">No job openings posted yet.</p>
        ) : (
          <table className="postcarrier-table">
            <thead>
              <tr>
                <th>Designation</th>
                <th>Experience</th>
                <th>Location</th>
                <th>Type</th>
                <th>Vacancies</th>
                <th>Skills</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr key={index}>
                  <td>{job.designation}</td>
                  <td>{job.experience || "-"}</td>
                  <td>{job.location || "-"}</td>
                  <td>{job.type || "-"}</td>
                  <td>{job.vacancies || "-"}</td>
                  <td>{job.skills}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(index)}
                      className="postcarrier-delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default PostCarrier;
