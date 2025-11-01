import React, { useState } from "react";
import "./CreateProduct.css";

const CreateProduct = () => {
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    location: "",
    type: "",
    features: [""],
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setProductData({ ...productData, image: files[0] });
    } else {
      setProductData({ ...productData, [name]: value });
    }
  };

  const handleFeatureChange = (index, value) => {
    const updatedFeatures = [...productData.features];
    updatedFeatures[index] = value;
    setProductData({ ...productData, features: updatedFeatures });
  };

  const addFeature = () => {
    setProductData({ ...productData, features: [...productData.features, ""] });
  };

  const removeFeature = (index) => {
    const updatedFeatures = productData.features.filter((_, i) => i !== index);
    setProductData({ ...productData, features: updatedFeatures });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Posted:", productData);
    alert("Product information submitted successfully!");
  };

  return (
    <div className="create-product-container">
      <h2 className="create-product-title">Create / Manage Product</h2>
      <p className="create-product-purpose">
        Purpose: To manage product details offered by our company.
      </p>

      <form onSubmit={handleSubmit} className="create-product-form">
        {/* Product Title */}
        <div className="form-group">
          <label>Product Title *</label>
          <input
            type="text"
            name="title"
            value={productData.title}
            onChange={handleChange}
            placeholder="Enter product title"
            required
          />
        </div>

        {/* Description */}
        <div className="form-group">
          <label>Description *</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            placeholder="Write a short description"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Service Location */}
        <div className="form-group">
          <label>Service Location *</label>
          <input
            type="text"
            name="location"
            value={productData.location}
            onChange={handleChange}
            placeholder="Enter service location"
            required
          />
        </div>

        {/* Product Type */}
        <div className="form-group">
          <label>Product Type *</label>
          <select
            name="type"
            value={productData.type}
            onChange={handleChange}
            required
          >
            <option value="">Select Type</option>
            <option value="Software">Software</option>
            <option value="Subscription">Subscription</option>
            <option value="API Service">API Service</option>
          </select>
        </div>

        {/* Key Features */}
        <div className="form-group">
          <label>Key Features *</label>
          {productData.features.map((feature, index) => (
            <div key={index} className="feature-item">
              <input
                type="text"
                value={feature}
                onChange={(e) =>
                  handleFeatureChange(index, e.target.value)
                }
                placeholder="Enter key feature"
                required
              />
              {index > 0 && (
                <button
                  type="button"
                  className="remove-feature"
                  onClick={() => removeFeature(index)}
                >
                  ✕
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            className="add-feature-btn"
            onClick={addFeature}
          >
            + Add Feature
          </button>
        </div>

        {/* Price */}
        <div className="form-group">
          <label>Price (₹) *</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            placeholder="Enter price"
            required
          />
        </div>

        {/* Upload Image */}
        <div className="form-group">
          <label>Upload Image (optional)</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        {/* Action Buttons */}
        <div className="form-actions">
          <button type="submit" className="btn-post">Post</button>
          <button type="button" className="btn-update">Update</button>
          <button type="button" className="btn-delete">Delete</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
