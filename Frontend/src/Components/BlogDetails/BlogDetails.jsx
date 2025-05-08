import React, { useState, useEffect } from 'react';
import './BlogDetails.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaUser, FaCalendarAlt, FaSearch, FaArrowRight, FaTags } from 'react-icons/fa';
import { API_URL } from '../../Api';  // Import the API_URL
import BlogDetailsTop from '../BlogDetailsTop/BlogDetailsTop';

const BlogDetails = () => {
  const [blog, setBlog] = useState({});
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [tags, setTags] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${API_URL}/blogs/get-blog/${id}`);  // Use API_URL constant
        setBlog(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchRecentBlogs = async () => {
      try {
        const response = await axios.get(`${API_URL}/blogs/get-blogs`);  // Use API_URL constant
        setRecentBlogs(response.data.slice(0, 2));
      } catch (error) {
        console.error(error);
      }
    };

    const fetchTags = async () => {
      try {
        const response = await axios.get(`${API_URL}/blogs/get-blogs`);  // Use API_URL constant
        const allTags = response.data.map(blog => blog.tags).flat();
        setTags([...new Set(allTags)]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlog();
    fetchRecentBlogs();
    fetchTags();
  }, [id]);

  return (
    <>
    <BlogDetailsTop />
    <div className="Blog-Details-container">
      <div className="Blog-Details-content-wrapper">
        <div className="Blog-Details-left">
          <div className="Blog-Details-post">
            <img src={blog.imageUrl} alt="Blog Cover" className="Blog-Details-image" />
            <div className="Blog-Details-meta">
                <span className="author-meta"><FaUser /> By {blog.author}</span>
                <span className="date-meta"><FaCalendarAlt /> {new Date(blog.date).toLocaleDateString()}</span>
                </div>

            <h2 className="Blog-Details-title">{blog.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: blog.content }} className="Blog-Details-html" />
            <div className="Blog-Details-tags">
              <strong><FaTags /> Tags:</strong>
              {blog.tags && blog.tags.map(tag => (
                <span key={tag} className="Blog-Details-tag">#{tag}</span>
              ))}
            </div>

            <div className="Blog-Details-comments">
              <h3>Comments</h3>
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

        <div className="Blog-Details-right">
          <div className="Blog-Details-widget search">
            <h3><FaSearch /> Search</h3>
            <div className="Blog-Details-search-box">
              <input type="text" placeholder="Type to search..." />
              <button type="submit"><FaSearch /></button>
            </div>
          </div>

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

          <div className="Blog-Details-widget recent-posts">
            <h3>Recent Posts</h3>
            <div className="Blog-Details-recent-list">
              {recentBlogs.map(blog => (
                <div key={blog._id} className="Blog-Details-recent-item">
                  <img src={blog.imageUrl} alt="Recent Post" />
                  <div className="Blog-Details-recent-text">
                    <span className="title">{blog.title}</span>
                    <span className="date">{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

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