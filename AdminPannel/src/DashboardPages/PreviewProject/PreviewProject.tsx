import React from "react";
import "./PreviewProject.css";
import { Eye, Pencil, Trash2 } from "lucide-react";

interface Project {
  id: number;
  image: string;
  name: string;
  url: string;
  category: string;
  published: boolean;
}

const PreviewProject: React.FC = () => {
  // ✅ Demo Data (for now)
  const demoProjects: Project[] = [
    {
      id: 1,
      image: "https://via.placeholder.com/400x250?text=Project+1",
      name: "AI Dashboard System",
      url: "https://example.com/project1",
      category: "Web App",
      published: true,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/400x250?text=Project+2",
      name: "E-commerce Platform",
      url: "https://example.com/project2",
      category: "E-Commerce",
      published: false,
    },
    {
      id: 3,
      image: "https://via.placeholder.com/400x250?text=Project+3",
      name: "Mobile CRM App",
      url: "https://example.com/project3",
      category: "Mobile App",
      published: true,
    },
  ];

  return (
    <div className="previewproject-container">
      <h2 className="previewproject-title">Preview All Projects</h2>
      <p className="previewproject-desc">
        This section shows a preview of all created projects (demo data for now).
      </p>

      <div className="previewproject-grid">
        {demoProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-img-wrapper">
              <img
                src={project.image}
                alt={project.name}
                className="project-img"
              />
              <span
                className={`project-status ${
                  project.published ? "published" : "unpublished"
                }`}
              >
                {project.published ? "Published" : "Unpublished"}
              </span>
            </div>

            <div className="project-info">
              <h3>{project.name}</h3>
              <p className="project-category">{project.category}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                {project.url}
              </a>

              <div className="project-actions">
                <button className="btn-view">
                  <Eye size={16} /> View
                </button>
                <button className="btn-edit">
                  <Pencil size={16} /> Edit
                </button>
                <button className="btn-delete">
                  <Trash2 size={16} /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviewProject;
