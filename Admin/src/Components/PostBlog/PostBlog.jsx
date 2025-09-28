import React, { useState } from "react";
import "./PostBlog.css";
import { Editor } from "@tinymce/tinymce-react";
import { API_URL } from "../../Api"; 

const PostBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    quotes: "",
    author: "",
    category: "",
    newCategory: "",
    content: "",
    tags: [],
    email: "",
    image: null,
  });

  const [tagInput, setTagInput] = useState("");
  const [categories, setCategories] = useState([
    "Technology",
    "Education",
    "Health",
    "Business",
  ]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleAddCategory = () => {
    if (formData.newCategory.trim()) {
      setCategories([...categories, formData.newCategory.trim()]);
      setFormData((prev) => ({
        ...prev,
        category: formData.newCategory.trim(),
        newCategory: "",
      }));
    }
  };

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!formData.tags.includes(tagInput.trim())) {
        setFormData((prev) => ({
          ...prev,
          tags: [...prev.tags, tagInput.trim()],
        }));
      }
      setTagInput("");
    }
  };

  const handleRemoveTag = (index) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("quotes", formData.quotes);
      data.append("author", formData.author);
      data.append("email", formData.email);
      data.append("category", formData.category);
      data.append("content", formData.content);
      data.append("tags", formData.tags.join(",")); // backend expects comma separated
      if (formData.image) {
        data.append("image", formData.image);
      }

      const res = await fetch(`${API_URL}/blogs/create`, {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (result.success) {
        setMessage("✅ Blog created successfully!");
        setFormData({
          title: "",
          description: "",
          quotes: "",
          author: "",
          category: "",
          newCategory: "",
          content: "",
          tags: [],
          email: "",
          image: null,
        });
      } else {
        setMessage(`❌ Failed: ${result.message}`);
      }
    } catch (error) {
      setMessage(`⚠️ Error: ${error.message}`);
    }

    setLoading(false);
  };

  return (
    <div className="Post-Blog-Container">
      <h2 className="Post-Blog-Title">Create a New Blog Post</h2>

      {message && <p className="Post-Blog-Message">{message}</p>}

      <form className="Post-Blog-Form" onSubmit={handleSubmit}>
        {/* Blog Title */}
        <div className="Post-Blog-Section">
          <label className="Post-Blog-Label">Blog Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="Post-Blog-Input"
            required
          />
        </div>

        {/* Blog Description */}
        <div className="Post-Blog-Section">
          <label className="Post-Blog-Label">Blog Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="Post-Blog-Input"
            required
          />
        </div>

        {/* Quotes */}
        <div className="Post-Blog-Section">
          <label className="Post-Blog-Label">Quotes</label>
          <input
            type="text"
            name="quotes"
            value={formData.quotes}
            onChange={handleChange}
            className="Post-Blog-Input"
          />
        </div>

        {/* Author & Email */}
        <div className="Post-Blog-Section Post-Blog-Two-Column">
          <div className="Post-Blog-Column">
            <label className="Post-Blog-Label">Author Name</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="Post-Blog-Input"
              required
            />
          </div>
          <div className="Post-Blog-Column">
            <label className="Post-Blog-Label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="Post-Blog-Input"
              required
            />
          </div>
        </div>

        {/* Category */}
        <div className="Post-Blog-Section Post-Blog-Two-Column">
          <div className="Post-Blog-Column">
            <label className="Post-Blog-Label">Choose Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="Post-Blog-Select"
              required
            >
              <option value="">Select</option>
              {categories.map((cat, i) => (
                <option key={i} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="Post-Blog-Column">
            <label className="Post-Blog-Label">Add New Category</label>
            <input
              type="text"
              name="newCategory"
              value={formData.newCategory}
              onChange={handleChange}
              className="Post-Blog-Input"
            />
            <button
              type="button"
              onClick={handleAddCategory}
              className="Post-Blog-Button"
            >
              Add
            </button>
          </div>
        </div>

        {/* Blog Content */}
        <div className="Post-Blog-Section">
          <label className="Post-Blog-Label">Blog Content</label>
          <Editor
            apiKey="p5ob9ls7zt44cj3jn7ojq3tam1vzegkshlkvsf4x5et303rx"
            value={formData.content}
            onEditorChange={(newContent) =>
              setFormData((prev) => ({ ...prev, content: newContent }))
            }
            init={{
              height: 300,
              menubar: false,
              plugins:
                "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
              toolbar:
                "undo redo | blocks fontfamily fontsize | bold italic underline | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
        </div>

        {/* Tags */}
        <div className="Post-Blog-Section">
          <label className="Post-Blog-Label">Tags</label>
          <div className="Post-Blog-Tag-Wrapper">
            {formData.tags.map((tag, i) => (
              <span key={i} className="Post-Blog-Tag">
                {tag}
                <button
                  type="button"
                  onClick={() => handleRemoveTag(i)}
                  className="Post-Blog-Tag-Remove"
                >
                  &times;
                </button>
              </span>
            ))}
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleTagKeyDown}
              className="Post-Blog-Input Post-Blog-Tags-Input"
              placeholder="Type and press Enter"
            />
          </div>
        </div>

        {/* Upload Image */}
        <div className="Post-Blog-Section">
          <label className="Post-Blog-Label">Upload Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="Post-Blog-Input"
          />
        </div>

        {/* Submit */}
        <div className="Post-Blog-Section">
          <button
            type="submit"
            className="Post-Blog-Button Post-Blog-Submit"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Blog"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostBlog;
