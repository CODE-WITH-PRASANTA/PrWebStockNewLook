import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BlogDetails.css";
import { FaUser, FaCalendarAlt, FaSearch, FaArrowRight, FaTags } from "react-icons/fa";
import BlogDetailsTop from "../BlogDetailsTop/BlogDetailsTop";
import { API_URL } from "../../Api"; 

const BlogDetails = ({ blogId }) => {
  const [blog, setBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [tags, setTags] = useState([]);

  // Fetch single blog by ID
  const fetchBlog = async () => {
    try {
      const res = await axios.get(`${API_URL}/blogs/get-blogs`);
      const allBlogs = res.data.blogs;
      const currentBlog = allBlogs.find(b => b._id === blogId) || allBlogs[0]; // fallback first blog
      setBlog(currentBlog);

      // Collect all unique tags
      const allTags = new Set();
      allBlogs.forEach(b => b.tags.forEach(t => allTags.add(t)));
      setTags(Array.from(allTags));
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch latest 4 blogs
  const fetchRecentBlogs = async () => {
    try {
      const res = await axios.get(`${API_URL}/blogs/get-latest-blogs`);
      setRecentBlogs(res.data.blogs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlog();
    fetchRecentBlogs();
  }, [blogId]);

  if (!blog) return <p>Loading...</p>;

  return (
    <>
      <BlogDetailsTop />
      <div className="Blog-Details-container">
        <div className="Blog-Details-content-wrapper">

          {/* Left Side: Blog Post */}
          <div className="Blog-Details-left">
            <div className="Blog-Details-post">
              <img src={blog.imageUrl} alt="Blog Cover" className="Blog-Details-image" />
              <div className="Blog-Details-meta">
                <span className="author-meta"><FaUser /> By {blog.author}</span>
                <span className="date-meta"><FaCalendarAlt /> {new Date(blog.createdAt).toLocaleDateString()}</span>
              </div>

              <h2 className="Blog-Details-title">{blog.title}</h2>
              <p className="Blog-Details-description">{blog.description}</p>
              {blog.quotes && <blockquote className="Blog-Details-quote">"{blog.quotes}"</blockquote>}
              <div dangerouslySetInnerHTML={{ __html: blog.content }} className="Blog-Details-html" />

              <div className="Blog-Details-tags">
                <strong><FaTags /> Tags:</strong>
                {blog.tags.map(tag => (
                  <span key={tag} className="Blog-Details-tag">#{tag}</span>
                ))}
              </div>

              {/* Comment Section */}
              <div className="Blog-Details-comments">
                <h3>Comments</h3>
                <p>No comments yet.</p>
              </div>
              <div className="Blog-Details-comment-form">
                <h3>Leave a Comment</h3>
                <p>Your email address will not be published. Required fields are marked *</p>
                <form>
                  <div className="Blog-Details-form-row two-cols">
                    <input type="text" placeholder="Your name" />
                    <input type="email" placeholder="Email address" />
                  </div>
                  <div className="Blog-Details-form-row">
                    <textarea placeholder="Type your message"></textarea>
                  </div>
                  <button type="submit" className="Blog-Details-btn">Post Comment</button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Side: Sidebar */}
          <div className="Blog-Details-right">

            {/* Search Widget */}
            <div className="Blog-Details-widget search">
              <h3><FaSearch /> Search</h3>
              <div className="Blog-Details-search-box">
                <input type="text" placeholder="Type to search..." />
                <button type="submit"><FaSearch /></button>
              </div>
            </div>

            {/* Services Widget */}
            <div className="Blog-Details-widget services">
              <h3>Services</h3>
              <div className="Blog-Details-services-list">
                {[
                  "Digital Marketing",
                  "Web Development",
                  "UI/UX Design",
                  "Business Strategy",
                  "Email Marketing",
                  "SEO Marketing"
                ].map(service => (
                  <div className="Blog-Details-service-item" key={service}>
                    {service} <FaArrowRight />
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="Blog-Details-widget recent-posts">
              <h3>Recent Posts</h3>
              <div className="Blog-Details-recent-list">
                {recentBlogs.map(blog => (
                  <div key={blog._id} className="Blog-Details-recent-item">
                    <img src={blog.imageUrl} alt="Recent Post" />
                    <div className="Blog-Details-recent-text">
                      <span className="title">{blog.title}</span>
                      <span className="date">{new Date(blog.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags Widget */}
            <div className="Blog-Details-widget tags">
              <h3><FaTags /> Tags</h3>
              <div className="Blog-Details-tag-list">
                {tags.map(tag => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
