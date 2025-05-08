import React, { useState, useEffect } from 'react';
import './ProductContent.css';
import { API_URL } from '../../Api'; // adjust the path based on your project structure

const ProductContent = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${API_URL}/services/all`);
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };
    fetchServices();
  }, []);

  return (
    <>
      {services.map((service) => (
        <div key={service._id} className="Product-Content-Page-service-card">
          <div className="Product-Content-Page-card-image">
            <img src={service.coverPhoto} alt={service.title} />
          </div>
          <div className="Product-Content-Page-card-content">
            <div className="Product-Content-Page-card-header">
              <h2>{service.title}</h2>
              <div className="Product-Content-Page-price-tag">
  {new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(service.price)} /-
</div>

            </div>
            <p dangerouslySetInnerHTML={{ __html: service.description }} />
            <table className="Product-Content-Page-card-info">
              <tbody>
                {service.features.map((feature, index) => (
                  <tr key={index}>
                    <td>{feature.info}</td>
                    <td>{feature.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <a
  className="Product-Content-Page-interest-btn"
  href={`https://wa.me/917205995722?text=${encodeURIComponent(
    `👋 Hello!\n\nI am interested in your service: *${service.title}* 💼✨\nPlease provide more details.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
>
YES, I AM INTERESTED !
</a>

          </div>
        </div>
      ))}
    </>
  );
};

export default ProductContent;