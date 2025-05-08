import React, { useState } from 'react';
import './PostBlog.css';
import { Editor } from '@tinymce/tinymce-react';
import { API_URL } from '../../Api'; // adjust path as needed


const PostBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    author: '',
    category: '',
    newCategory: '',
    tags: [],
    date: '',
    image: null,
    postType: '',
    highlight: false,
  });

  const [tagInput, setTagInput] = useState('');

  const [categories, setCategories] = useState([
    'Technology',
    'Education',
    'Health',
    'Business'
  ]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("content", formData.content);
    formDataToSend.append("author", formData.author);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("tags", JSON.stringify(formData.tags));
    formDataToSend.append("image", formData.image);
    formDataToSend.append("postType", formData.postType);
    formDataToSend.append("highlight", formData.highlight);
  
    try {
      const response = await fetch(`${API_URL}/blogs/post-blog`, {
        method: "POST",
        body: formDataToSend,
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log("Blog posted successfully:", data);
      } else {
        console.error("Error posting blog:", data);
      }
    } catch (error) {
      console.error("Error posting blog:", error);
    }
  };
  

  const handleAddCategory = () => {
    if (formData.newCategory.trim()) {
      setCategories([...categories, formData.newCategory.trim()]);
      setFormData((prevData) => ({
        ...prevData,
        newCategory: '',
        category: formData.newCategory.trim()
      }));
    }
  };

  const handleTagKeyDown = (e) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      if (!formData.tags.includes(tagInput.trim())) {
        setFormData({
          ...formData,
          tags: [...formData.tags, tagInput.trim()],
        });
      }
      setTagInput('');
    }
  };

  const handleRemoveTag = (indexToRemove) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((_, i) => i !== indexToRemove),
    });
  };



  return (
    <div className="Post-Blog-Container">
      <h2 className="Post-Blog-Title">Create a New Blog Post</h2>
      <form className="Post-Blog-Form" onSubmit={handleSubmit}>
        {/* Blog Title Section */}
        <div className="Post-Blog-Section Post-Blog-Title-Section">
          <label className="Post-Blog-Label" htmlFor="title">Blog Title</label>
          <input 
            type="text" 
            name="title" 
            id="title" 
            value={formData.title} 
            onChange={handleChange} 
            className="Post-Blog-Input Post-Blog-Title-Input" 
            required 
          />
        </div>

        {/* Short Description Section */}
        <div className="Post-Blog-Section Post-Blog-Description-Section">
          <label className="Post-Blog-Label" htmlFor="description">Short Description</label>
          <input 
            type="text" 
            name="description" 
            id="description" 
            value={formData.description} 
            onChange={handleChange} 
            className="Post-Blog-Input Post-Blog-Description-Input" 
            required 
          />
        </div>
{/* Blog Content Section */}
<div className="Post-Blog-Section Post-Blog-Content-Section">
  <label className="Post-Blog-Label" htmlFor="content">Blog Content</label>
  <Editor
    apiKey='p5ob9ls7zt44cj3jn7ojq3tam1vzegkshlkvsf4x5et303rx'
    value={formData.content}
    onEditorChange={(newContent) =>
      setFormData((prevData) => ({ ...prevData, content: newContent }))
    }
    init={{
      height: 300,
      menubar: false,
      plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
      toolbar:
        'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
    }}
  />
</div>


        {/* Author and Category Section */}
        <div className="Post-Blog-Section Post-Blog-Author-Category-Section Post-Blog-Two-Column">
          <div className="Post-Blog-Column">
            <label className="Post-Blog-Label" htmlFor="author">Author Name</label>
            <input 
              type="text" 
              name="author" 
              id="author" 
              value={formData.author} 
              onChange={handleChange} 
              className="Post-Blog-Input Post-Blog-Author-Input" 
              required 
            />
          </div>
          <div className="Post-Blog-Column">
            <label className="Post-Blog-Label" htmlFor="category">Choose Category</label>
            <select 
              name="category" 
              id="category" 
              value={formData.category} 
              onChange={handleChange} 
              className="Post-Blog-Select Post-Blog-Category-Select" 
              required
            >
              <option value="">Select</option>
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Add New Category Section */}
        <div className="Post-Blog-Section Post-Blog-New-Category-Section Post-Blog-Two-Column">
          <div className="Post-Blog-Column">
            <label className="Post-Blog-Label" htmlFor="newCategory">Add New Category</label>
            <input 
              type="text" 
              name="newCategory" 
              id="newCategory" 
              value={formData.newCategory} 
              onChange={handleChange} 
              className="Post-Blog-Input Post-Blog-New-Category-Input" 
            />
          </div>
          <button 
            type="button" 
            onClick={handleAddCategory} 
            className="Post-Blog-Button Post-Blog-Add-Category-Button"
          >
            Add
          </button>
        </div>

        <div className="Post-Blog-Column">
  <label className="Post-Blog-Label" htmlFor="tags">Tags</label>
  <div className="Post-Blog-Tag-Input-Wrapper">
    {formData.tags.map((tag, index) => (
      <span key={index} className="Post-Blog-Tag">
        {tag}
        <button
          type="button"
          onClick={() => handleRemoveTag(index)}
          className="Post-Blog-Tag-Remove"
        >
          &times;
        </button>
      </span>
    ))}
    <input
      type="text"
      id="tags"
      value={tagInput}
      onChange={(e) => setTagInput(e.target.value)}
      onKeyDown={handleTagKeyDown}
      className="Post-Blog-Input Post-Blog-Tags-Input"
      placeholder="Type and press Enter"
    />
  </div>
</div>


        {/* Image and Post Type Section */}
        <div className="Post-Blog-Section Post-Blog-Image-Type-Section Post-Blog-Two-Column">
          <div className="Post-Blog-Column">
            <label className="Post-Blog-Label" htmlFor="image">Upload Image</label>
            <input 
              type="file" 
              name="image" 
              id="image" 
              accept="image/*" 
              onChange={handleChange} 
              className="Post-Blog-Input Post-Blog-Image-Input" 
              required 
            />
          </div>
          <div className="Post-Blog-Column">
            <label className="Post-Blog-Label" htmlFor="postType">Post Type</label>
            <select 
              name="postType" 
              id="postType" 
              value={formData.postType} 
              onChange={handleChange} 
              className="Post-Blog-Select Post-Blog-Type-Select" 
              required
            >
              <option value="">Select</option>
              <option value="Latest">Latest Blog</option>
              <option value="Normal">Normal</option>
            </select>
          </div>
        </div>

        {/* Submit Button Section */}
        <div className="Post-Blog-Section Post-Blog-Submit-Section">
          <button type="submit" className="Post-Blog-Button Post-Blog-Submit-Button">
            Post Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostBlog;