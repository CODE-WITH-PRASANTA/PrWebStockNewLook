import React, { useState } from "react";
import "./PreviewServices.css";

interface Service {
  id: number;
  name: string;
  description: string;
  image: string;
  published: boolean;
}

const PreviewServices: React.FC = () => {
  const [services, setServices] = useState<Service[]>([
    {
      id: 1,
      name: "Web Development",
      description:
        "We provide responsive, SEO-friendly, and high-performing web applications.",
      image: "https://via.placeholder.com/300x180.png?text=Web+Development",
      published: true,
    },
    {
      id: 2,
      name: "UI/UX Design",
      description:
        "Creative and user-centered design solutions for your digital products.",
      image: "https://via.placeholder.com/300x180.png?text=UI%2FUX+Design",
      published: false,
    },
    {
      id: 3,
      name: "App Development",
      description:
        "We build scalable and modern mobile applications for Android and iOS.",
      image: "https://via.placeholder.com/300x180.png?text=App+Development",
      published: true,
    },
  ]);

  const handleDelete = (id: number) => {
    setServices(services.filter((service) => service.id !== id));
  };

  const handleTogglePublish = (id: number) => {
    setServices(
      services.map((service) =>
        service.id === id
          ? { ...service, published: !service.published }
          : service
      )
    );
  };

  const handleEdit = (id: number) => {
    alert(`Editing service with ID: ${id}`);
  };

  return (
    <div className="preview-service-right">
      <h2>Preview Services</h2>
      <div className="service-card-grid">
        {services.map((service) => (
          <div
            key={service.id}
            className={`service-card ${
              service.published ? "published" : "unpublished"
            }`}
          >
            <img
              src={service.image}
              alt={service.name}
              className="service-img"
            />
            <h3>{service.name}</h3>
            <p>{service.description}</p>

            <div className="service-actions">
              <button
                className="edit-btn"
                onClick={() => handleEdit(service.id)}
              >
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDelete(service.id)}
              >
                Delete
              </button>
              <button
                className={`publish-btn ${
                  service.published ? "published" : "unpublished"
                }`}
                onClick={() => handleTogglePublish(service.id)}
              >
                {service.published ? "Unpublish" : "Publish"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviewServices;
