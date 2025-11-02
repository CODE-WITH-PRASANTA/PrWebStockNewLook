import React, { useState } from "react";
import "./ClientsDetailsWorksPreview.css";

const ClientsDetailsWorksPreview: React.FC = () => {
  const [clients, setClients] = useState([
    {
      id: 1,
      name: "John Anderson",
      demand: "Custom Web Application",
      price: "$4,500",
      finalizedDate: "2025-01-12",
      deliveryDate: "2025-02-10",
      yearlyCharges: "$800 / Year",
      photo: "https://via.placeholder.com/100x100.png?text=John",
    },
    {
      id: 2,
      name: "Sarah Williams",
      demand: "E-commerce Platform",
      price: "$6,200",
      finalizedDate: "2025-03-08",
      deliveryDate: "2025-04-05",
      yearlyCharges: "$1,000 / Year",
      photo: "https://via.placeholder.com/100x100.png?text=Sarah",
    },
    {
      id: 3,
      name: "Michael Smith",
      demand: "Mobile App Development",
      price: "$5,000",
      finalizedDate: "2025-05-20",
      deliveryDate: "2025-06-15",
      yearlyCharges: "$900 / Year",
      photo: "https://via.placeholder.com/100x100.png?text=Mike",
    },
  ]);

  const handleEdit = (id: number) => {
    alert(`Edit Client ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this client?")) {
      setClients(clients.filter((client) => client.id !== id));
    }
  };

  const handleUpdate = (id: number) => {
    alert(`Update Client ID: ${id}`);
  };

  return (
    <div className="clients-preview-container">
      <h2 className="clients-preview-title">Clients Details & Works Preview</h2>
      <p className="clients-preview-subtitle">
        Review client details, pricing, and project timelines.
      </p>

      <div className="clients-grid">
        {clients.map((client) => (
          <div key={client.id} className="client-card">
            <img src={client.photo} alt={client.name} className="client-photo" />
            <div className="client-info">
              <h3>{client.name}</h3>
              <p><strong>Demand:</strong> {client.demand}</p>
              <p><strong>Price:</strong> {client.price}</p>
              <p><strong>Finalized Date:</strong> {client.finalizedDate}</p>
              <p><strong>Delivery Date:</strong> {client.deliveryDate}</p>
              <p><strong>Per Year Charges:</strong> {client.yearlyCharges}</p>
            </div>
            <div className="client-actions">
              <button className="edit-btn" onClick={() => handleEdit(client.id)}>Edit</button>
              <button className="update-btn" onClick={() => handleUpdate(client.id)}>Update</button>
              <button className="delete-btn" onClick={() => handleDelete(client.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsDetailsWorksPreview;
