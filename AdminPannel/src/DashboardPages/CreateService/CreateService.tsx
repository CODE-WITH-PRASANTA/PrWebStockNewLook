import React, { useState, ChangeEvent, FormEvent } from "react";
import "./CreateService.css";

interface Service {
  id: number;
  name: string;
  description: string;
  image: string;
  published: boolean;
}

const CreateService: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [formData, setFormData] = useState<Omit<Service, "id">>({
    name: "",
    description: "",
    image: "",
    published: false,
  });

  const [editingId, setEditingId] = useState<number | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked, files } = e.target as HTMLInputElement;
    if (type === "file" && files && files[0]) {
      setFormData({ ...formData, image: URL.createObjectURL(files[0]) });
    } else if (type === "checkbox") {
      setFormData({ ...formData, published: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.description) return;

    if (editingId !== null) {
      // Update existing service
      setServices((prev) =>
        prev.map((s) => (s.id === editingId ? { ...s, ...formData } : s))
      );
      setEditingId(null);
    } else {
      // Add new service
      const newService: Service = { ...formData, id: Date.now() };
      setServices([...services, newService]);
    }

    // Reset form
    setFormData({ name: "", description: "", image: "", published: false });
  };

  const handleDelete = (id: number) => {
    setServices(services.filter((service) => service.id !== id));
  };

  const handleTogglePublish = (id: number) => {
    setServices(
      services.map((s) =>
        s.id === id ? { ...s, published: !s.published } : s
      )
    );
  };

  const handleEdit = (id: number) => {
    const selected = services.find((s) => s.id === id);
    if (selected) {
      setFormData({
        name: selected.name,
        description: selected.description,
        image: selected.image,
        published: selected.published,
      });
      setEditingId(id);
    }
  };

  return (
    <div className="create-service-container">
      {/* LEFT SIDE FORM */}
      <div className="create-service-left">
        <h2>{editingId ? "Edit Service" : "Add New Service"}</h2>
        <form onSubmit={handleSubmit} className="service-form">
          <div className="form-group">
            <label>Service Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter service name"
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter service description"
            />
          </div>

          <div className="form-group">
            <label>Upload Image</label>
            <input type="file" name="image" accept="image/*" onChange={handleChange} />
            {formData.image && (
              <img src={formData.image} alt="Preview" className="preview-img" />
            )}
          </div>

          <div className="form-toggle">
            <label>Published</label>
            <label className="switch">
              <input
                type="checkbox"
                name="published"
                checked={formData.published}
                onChange={handleChange}
              />
              <span className="slider"></span>
            </label>
          </div>

          <button type="submit" className="add-btn">
            {editingId ? "Update Service" : "Add Service"}
          </button>
        </form>
      </div>

      {/* RIGHT SIDE PREVIEW */}
      <div className="preview-service-right">
        <h2>Service Preview</h2>

        {services.length === 0 ? (
          <p className="no-services">No services added yet.</p>
        ) : (
          <div className="service-card-grid">
            {services.map((service) => (
              <div
                key={service.id}
                className={`service-card ${
                  service.published ? "published" : "unpublished"
                }`}
              >
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.name}
                    className="service-img"
                  />
                ) : (
                  <div className="photo-placeholder">📷</div>
                )}
                <h3>{service.name}</h3>
                <p>{service.description}</p>

                <div className="service-actions">
                  <button
                    onClick={() => handleEdit(service.id)}
                    className="edit-btn action-btn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(service.id)}
                    className="delete-btn action-btn"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleTogglePublish(service.id)}
                    className={`publish-btn action-btn ${
                      service.published ? "published" : ""
                    }`}
                  >
                    {service.published ? "Published" : "Unpublished"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateService;
