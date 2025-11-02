import React, { useState, ChangeEvent, FormEvent } from "react";
import "./CreateProject.css";
import {
  Upload,
  Image,
  Link as LinkIcon,
  Folder,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

interface ProjectData {
  image: File | string;
  name: string;
  url: string;
  category: string;
  published: boolean;
}

const CreateProject: React.FC = () => {
  const [projectData, setProjectData] = useState<ProjectData>({
    image: "",
    name: "",
    url: "",
    category: "",
    published: false,
  });

  const [previewURL, setPreviewURL] = useState<string>("");
  const [reviewMode, setReviewMode] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file" && files && files.length > 0) {
      const file = files[0];
      setProjectData((prev) => ({ ...prev, image: file }));
      setPreviewURL(URL.createObjectURL(file));
    } else {
      setProjectData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Project Saved:", projectData);
    alert("Project saved successfully!");
    setReviewMode(true);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      setProjectData({
        image: "",
        name: "",
        url: "",
        category: "",
        published: false,
      });
      setPreviewURL("");
      setReviewMode(false);
      alert("Project deleted successfully!");
    }
  };

  const handleEdit = () => setReviewMode(false);

  return (
    <div className="createproject-container">
      {/* Left: Form Section */}
      <div className="createproject-form">
        <h2 className="createproject-title">Create New Project</h2>
        <p className="createproject-purpose">
          <strong>Purpose:</strong> Manage the “Our Projects” section displayed
          on the website.
        </p>

        <form onSubmit={handleSubmit} className="project-form">
          {/* Upload */}
          <div className="form-group file-upload">
            <label htmlFor="image">
              <Image className="form-icon" /> Upload Project Image
            </label>
            <div className="upload-box">
              <Upload className="upload-icon" size={22} />
              <p>Drag & Drop or Click to Upload</p>
              <input
                id="image"
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
              />
            </div>
            {previewURL && (
              <img src={previewURL} alt="Preview" className="upload-preview" />
            )}
          </div>

          {/* Project Name */}
          <div className="form-group">
            <label htmlFor="name">
              <Folder className="form-icon" /> Project Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter project name"
              value={projectData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Project URL */}
          <div className="form-group">
            <label htmlFor="url">
              <LinkIcon className="form-icon" /> Project URL (Live Link)
            </label>
            <input
              id="url"
              type="url"
              name="url"
              placeholder="https://example.com"
              value={projectData.url}
              onChange={handleChange}
              required
            />
          </div>

          {/* Category */}
          <div className="form-group">
            <label htmlFor="category">Project Category</label>
            <input
              id="category"
              type="text"
              name="category"
              placeholder="e.g., Web App, Mobile App, Fintech, CRM..."
              value={projectData.category}
              onChange={handleChange}
            />
          </div>

          {/* Toggle */}
          <div className="form-toggle">
            <label>Publish / Unpublish</label>
            <label className="switch">
              <input
                type="checkbox"
                name="published"
                checked={projectData.published}
                onChange={handleChange}
              />
              <span className="slider round"></span>
            </label>
          </div>

          {/* Buttons */}
          <div className="form-buttons">
            <button
              type="button"
              className="btn-review"
              onClick={() => setReviewMode(true)}
            >
              <Eye size={16} /> Review
            </button>
            <button type="submit" className="btn-submit">
              Save Project
            </button>
          </div>
        </form>
      </div>

      {/* Right: Review Section */}
      {reviewMode && (
        <div className="createproject-review">
          <h3>Project Review</h3>
          <div className="review-card">
            {previewURL ? (
              <img src={previewURL} alt="Preview" className="review-image" />
            ) : (
              <div className="review-placeholder">No image uploaded</div>
            )}

            <div className="review-info">
              <h4>{projectData.name || "Untitled Project"}</h4>
              <p>
                <strong>Category:</strong>{" "}
                {projectData.category || "Not specified"}
              </p>
              <p>
                <strong>URL:</strong>{" "}
                {projectData.url ? (
                  <a href={projectData.url} target="_blank" rel="noreferrer">
                    {projectData.url}
                  </a>
                ) : (
                  "Not provided"
                )}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                {projectData.published ? "Published ✅" : "Unpublished ❌"}
              </p>
            </div>
          </div>

          <div className="review-actions">
            <button className="btn-edit" onClick={handleEdit}>
              <Pencil size={16} /> Edit
            </button>
            <button className="btn-delete" onClick={handleDelete}>
              <Trash2 size={16} /> Delete
            </button>
          </div>

          <button
            className="btn-close-review"
            onClick={() => setReviewMode(false)}
          >
            Close Review
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateProject;
