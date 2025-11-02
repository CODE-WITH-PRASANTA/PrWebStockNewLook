import React from "react";
import "./PreviewProduct.css";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  published: boolean;
}

const PreviewProduct: React.FC = () => {
  const demoProducts: Product[] = [
    {
      id: 1,
      name: "Smart Business Dashboard",
      description:
        "A modern analytics dashboard for tracking business performance with interactive visualizations.",
      price: "₹89,900",
      category: "Software",
      image:
        "https://images.unsplash.com/photo-1611078489935-0cb964de46d2?auto=format&fit=crop&w=800&q=80",
      published: true,
    },
    {
      id: 2,
      name: "Mobile API Suite",
      description:
        "A scalable and secure API service built for mobile and enterprise integration.",
      price: "₹49,500",
      category: "API Service",
      image:
        "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
      published: false,
    },
    {
      id: 3,
      name: "UX/UI Subscription Kit",
      description:
        "A monthly design subscription offering unlimited UI/UX design requests and fast delivery.",
      price: "₹29,999",
      category: "Subscription",
      image:
        "https://images.unsplash.com/photo-1604145559206-e3bce0040e5c?auto=format&fit=crop&w=800&q=80",
      published: true,
    },
  ];

  return (
    <div className="preview-product-container">
      <h2 className="preview-title">Preview Products</h2>
      <p className="preview-subtitle">
        Demo product data displayed below. This section will later fetch live data.
      </p>

      <div className="product-grid">
        {demoProducts.map((product) => (
          <div
            key={product.id}
            className={`product-card ${product.published ? "published" : "unpublished"}`}
          >
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-desc">{product.description}</p>
              <div className="product-meta">
                <span className="product-category">{product.category}</span>
                <span className="product-price">{product.price}</span>
              </div>
              <span
                className={`status-badge ${product.published ? "active" : "inactive"}`}
              >
                {product.published ? "Published" : "Unpublished"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviewProduct;
