import React, { useState } from "react";
import "./ClientsDetailsWorks.css";
import { Edit, Trash2, Save } from "lucide-react";

interface ClientData {
  id: number;
  name: string;
  demand: string;
  price: string;
  finalizedDate: string;
  deliveryDate: string;
  yearlyCharge: string;
  photo: string;
}

const ClientsDetailsWorks: React.FC = () => {
  const [clients, setClients] = useState<ClientData[]>([]);
  const [formData, setFormData] = useState<Omit<ClientData, "id">>({
    name: "",
    demand: "",
    price: "",
    finalizedDate: "",
    deliveryDate: "",
    yearlyCharge: "",
    photo: "",
  });

  const [editingId, setEditingId] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData((prev) => ({
          ...prev,
          photo: event.target?.result as string,
        }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId) {
      setClients((prev) =>
        prev.map((client) =>
          client.id === editingId ? { ...client, ...formData } : client
        )
      );
      setEditingId(null);
    } else {
      const newClient = { ...formData, id: Date.now() };
      setClients((prev) => [...prev, newClient]);
    }

    setFormData({
      name: "",
      demand: "",
      price: "",
      finalizedDate: "",
      deliveryDate: "",
      yearlyCharge: "",
      photo: "",
    });
  };

  const handleEdit = (id: number) => {
    const clientToEdit = clients.find((client) => client.id === id);
    if (clientToEdit) {
      const { id: _, ...rest } = clientToEdit;
      setFormData(rest);
      setEditingId(id);
    }
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this client?")) {
      setClients((prev) => prev.filter((client) => client.id !== id));
    }
  };

  return (
    <div className="clients-container">
      <div className="client-form-section">
        <h2 className="client-title">
          {editingId ? "Update Client Details" : "Add New Client"}
        </h2>

        <form onSubmit={handleSubmit} className="client-form">
          <input
            type="text"
            name="name"
            placeholder="Client Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="demand"
            placeholder="Client Demand"
            value={formData.demand}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="finalizedDate"
            placeholder="Date of Finalization"
            value={formData.finalizedDate}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="deliveryDate"
            placeholder="Delivery Date"
            value={formData.deliveryDate}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="yearlyCharge"
            placeholder="Per Year Charges"
            value={formData.yearlyCharge}
            onChange={handleChange}
            required
          />
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
          />
          <button type="submit" className="submit-btn">
            {editingId ? (
              <>
                <Save size={16} /> Update Client
              </>
            ) : (
              "Add Client"
            )}
          </button>
        </form>
      </div>

      <div className="client-list-section">
        <h2 className="client-list-title">All Clients</h2>
        <div className="client-grid">
          {clients.length > 0 ? (
            clients.map((client) => (
              <div className="client-card" key={client.id}>
                {client.photo && (
                  <img
                    src={client.photo}
                    alt={client.name}
                    className="client-photo"
                  />
                )}
                <div className="client-info">
                  <h3>{client.name}</h3>
                  <p>
                    <strong>Demand:</strong> {client.demand}
                  </p>
                  <p>
                    <strong>Price:</strong> ₹{client.price}
                  </p>
                  <p>
                    <strong>Finalized:</strong> {client.finalizedDate}
                  </p>
                  <p>
                    <strong>Delivery:</strong> {client.deliveryDate}
                  </p>
                  <p>
                    <strong>Yearly Charge:</strong> ₹{client.yearlyCharge}
                  </p>
                </div>
                <div className="client-actions">
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(client.id)}
                  >
                    <Edit size={16} /> Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(client.id)}
                  >
                    <Trash2 size={16} /> Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="no-clients">No clients added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientsDetailsWorks;
