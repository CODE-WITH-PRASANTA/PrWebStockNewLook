import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './ManageProducts.css';

const ManageProducts = () => {
  const [features, setFeatures] = useState([{ info: '', details: '' }]);
  const [service, setService] = useState({
    title: '',
    description: '',
    price: '',
    coverPhoto: ''
  });
  

  const handleServiceChange = (field, value) => {
    setService({ ...service, [field]: value });
  };

  const handleFeatureChange = (index, field, value) => {
    const updated = [...features];
    updated[index][field] = value;
    setFeatures(updated);
  };

  const handleEditorChange = (content) => {
    setService({ ...service, description: content });
  };

  const addFeature = () => {
    const lastFeature = features[features.length - 1];
    if (lastFeature.info.trim() && lastFeature.details.trim()) {
      setFeatures([...features, { info: '', details: '' }]);
    } else {
      alert("Please fill both 'Feature Info' and 'Feature Details' before adding a new one.");
    }
  };

  const removeFeature = (index) => {
    const filtered = features.filter((_, i) => i !== index);
    setFeatures(filtered);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = service.title && service.description && service.price && features.every(f => f.info && f.details) && service.coverPhoto;
    if (!isValid) {
      alert("Please fill in all required fields before submitting.");
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append('title', service.title);
      formData.append('description', service.description);
      formData.append('price', service.price);
      formData.append('features', JSON.stringify(features));
  
      // Convert base64 cover photo to file
      const coverPhotoFile = await fetch(service.coverPhoto).then(res => res.blob()).then(blob => new File([blob], 'coverPhoto.webp', { type: 'image/webp' }));
      formData.append('coverPhoto', coverPhotoFile);
  
      const response = await fetch('http://localhost:5000/api/services/add', {
        method: 'POST',
        body: formData,
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log('Service added successfully:', data);
        alert('Service added successfully!');
      } else {
        console.error('Error adding service:', data);
        alert('Error adding service: ' + data.error);
      }
    } catch (error) {
      console.error('Error adding service:', error);
      alert('Error adding service: ' + error.message);
    }
  };

  return (
    <div className="manage-product-container">
      <h2 className="manage-product-heading">Manage Service</h2>

      <form className="manage-product-form" onSubmit={handleSubmit}>
        <div className="manage-product-group">
          <label>Service Title <span>*</span></label>
          <input
            type="text"
            placeholder="Enter service title"
            value={service.title}
            onChange={(e) => handleServiceChange('title', e.target.value)}
          />
        </div>

        <div className="manage-product-group">
          <label>Service Description <span>*</span></label>
          <Editor
            apiKey='p5ob9ls7zt44cj3jn7ojq3tam1vzegkshlkvsf4x5et303rx'
            init={{
              plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
              toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
            }}
            initialValue={service.description}
            onEditorChange={handleEditorChange}
          />
        </div>

        <div className="manage-product-group">
          <label>Service Pricing (INR) <span>*</span></label>
          <input
            type="number"
            placeholder="Enter price"
            value={service.price}
            onChange={(e) => handleServiceChange('price', e.target.value)}
          />
        </div>

        <div className="manage-product-group">
  <label>Upload Cover Photo (WebP Only) <span>*</span></label>
  <input
    type="file"
    accept="image/webp"
    onChange={(e) => {
      const file = e.target.files[0];
      if (file && file.type === 'image/webp') {
        const reader = new FileReader();
        reader.onloadend = () => {
          setService((prev) => ({ ...prev, coverPhoto: reader.result }));
        };
        reader.readAsDataURL(file);
      } else {
        alert('Only .webp image format is allowed.');
        e.target.value = ''; // Clear invalid file
      }
    }}
  />
  {service.coverPhoto && (
    <div className="manage-product-cover-preview">
      <img src={service.coverPhoto} alt="Cover Preview" />
    </div>
  )}
</div>


        <div className="manage-product-group">
          <label>Service Features <span>*</span></label>
          {features.map((feature, index) => (
            <div key={index} className="manage-product-feature-box">
              <input
                type="text"
                placeholder={`Feature Info ${index + 1}`}
                value={feature.info}
                onChange={(e) => handleFeatureChange(index, 'info', e.target.value)}
              />
              <span className="manage-product-separator">:</span>
              <input
                type="text"
                placeholder="Feature Details"
                value={feature.details}
                onChange={(e) => handleFeatureChange(index, 'details', e.target.value)}
              />
              {features.length > 1 && (
                <button type="button" className="manage-product-remove-btn" onClick={() => removeFeature(index)}>✕</button>
              )}
            </div>
          ))}
          {features.length < 10 && (
            <button type="button" className="manage-product-add-btn" onClick={addFeature}>+ Add Feature</button>
          )}
        </div>

        <button type="submit" className="manage-product-submit-btn">🚀 Submit Service</button>
      </form>
    </div>
  );
};

export default ManageProducts;