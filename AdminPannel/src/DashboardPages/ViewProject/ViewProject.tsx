import React, { useState } from "react";
import "./ViewProject.css";
import { Edit, Trash2, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  image: string;
  name: string;
  url: string;
  category: string;
  published: boolean;
}

const ViewProject: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      image: "https://via.placeholder.com/300x180.png?text=Project+1",
      name: "Travel Booking App",
      url: "https://travelapp.com",
      category: "Web App",
      published: true,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300x180.png?text=Project+2",
      name: "Fintech Dashboard",
      url: "https://fintech.com",
      category: "Fintech",
      published: false,
    },
  ]);

  // ✅ Handle project deletion
  const handleDelete = (id: number): void => {
    const confirmDelete = window.confirm("Are you sure you want to delete this project?");
    if (confirmDelete) {
      setProjects((prevProjects) => prevProjects.filter((project) => project.id !== id));
    }
  };

  // ✅ Handle project editing (to be implemented later)
  const handleEdit = (id: number): void => {
    alert(`Edit functionality for Project ID ${id} coming soon!`);
  };

  return (
    <div className="viewproject-container">
      <h2 className="viewproject-title">Manage All Projects</h2>
      <p className="viewproject-subtitle">
        Review, edit, or remove projects displayed on your website.
      </p>

      <div className="viewproject-grid">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div className="project-card" key={project.id}>
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />

              <div className="project-content">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-category">{project.category}</p>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <ExternalLink size={16} /> Visit Project
                </a>

                <span
                  className={`status-badge ${
                    project.published ? "published" : "unpublished"
                  }`}
                >
                  {project.published ? "Published" : "Unpublished"}
                </span>

                <div className="project-actions">
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(project.id)}
                  >
                    <Edit size={18} /> Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(project.id)}
                  >
                    <Trash2 size={18} /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-projects">No projects found. Please create one.</p>
        )}
      </div>
    </div>
  );
};

export default ViewProject;
