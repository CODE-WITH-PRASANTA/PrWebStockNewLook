import React, { useState } from "react";
import "./ProductContent.css";

const ProductContent = () => {
  // ✅ Dummy services data
  const [services] = useState([
    {
      _id: 1,
      title: "Basic Business Website",
      coverPhoto:
        "https://cdn.pixabay.com/photo/2015/01/08/18/25/startup-593341_1280.jpg",
      price: 4999,
      description:
        "A responsive and professional website for startups and small businesses. Perfect to showcase your services online.",
      features: [
        { info: "Pages", details: "Up to 5 Pages" },
        { info: "Domain", details: "Free .in Domain (1 Year)" },
        { info: "Hosting", details: "Free for 1 Year" },
        { info: "SSL Certificate", details: "Included" },
        { info: "Support", details: "Email & WhatsApp Support" },
      ],
    },
    {
      _id: 2,
      title: "E-Commerce Website",
      coverPhoto:
        "https://cdn.pixabay.com/photo/2017/12/22/08/02/online-shopping-3037727_1280.jpg",
      price: 14999,
      description:
        "Launch your online store with cart management, payment integration, and an easy-to-use admin panel.",
      features: [
        { info: "Products", details: "Unlimited Product Uploads" },
        { info: "Payment Gateway", details: "Integrated (Razorpay / Paytm)" },
        { info: "Order Management", details: "Admin Panel Dashboard" },
        { info: "Reports", details: "Sales & Analytics" },
        { info: "Support", details: "1 Year Free Maintenance" },
      ],
    },
    {
      _id: 3,
      title: "Custom Web Application",
      coverPhoto:
        "https://cdn.pixabay.com/photo/2017/02/05/12/10/web-application-2042644_1280.jpg",
      price: 24999,
      description:
        "Tailored web apps built with MERN Stack for business automation, CRM systems, and custom dashboards.",
      features: [
        { info: "Technology", details: "React, Node.js, MongoDB" },
        { info: "Authentication", details: "JWT / OAuth2 Integration" },
        { info: "Database", details: "MongoDB or MySQL" },
        { info: "Deployment", details: "Cloud or Shared Server" },
        { info: "Support", details: "Dedicated Developer Assistance" },
      ],
    },
  ]);

  return (
    <>
      {services.map((service) => (
        <div
          key={service._id}
          className="Product-Content-Page-service-card"
        >
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
                }).format(service.price)}{" "}
                /-
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
              YES, I AM INTERESTED!
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductContent;
