import React, { useState, useEffect } from "react";
import "./BlogDetails.css";
import { FaUser, FaCalendarAlt, FaSearch, FaArrowRight, FaTags } from "react-icons/fa";
import BlogDetailsTop from "../BlogDetailsTop/BlogDetailsTop";

const BlogDetails = () => {
  // Dummy blog data
  const dummyBlog = {
    _id: "1",
    title: "The Future of Web Development in 2025",
    author: "Prasant Kumar Khuntia",
    createdAt: "2025-10-20T12:00:00Z",
    imageUrl: "https://via.placeholder.com/800x400",
    description:
      "Web development is rapidly evolving with new technologies, frameworks, and tools emerging every day.",
    quotes: "The web is not just technology, it’s imagination turned into experience.",
    content: `
      <p>The future of web development looks bright, with innovations in AI-driven coding assistants, 
      advanced frameworks, and performance optimization tools. React and Node.js remain leading choices 
      for scalable applications.</p>
      <p>Developers now focus more on accessibility, speed, and seamless user experience across devices.</p>
    `,
    tags: ["WebDev", "React", "JavaScript", "Frontend"],
  };

  // Dummy recent blogs
  const dummyRecentBlogs = [
    {
      _id: "2",
      title: "Mastering React Hooks in 2025",
      createdAt: "2025-10-15T10:00:00Z",
      imageUrl: "https://via.placeholder.com/100x80",
    },
    {
      _id: "3",
      title: "Node.js API Optimization Tips",
      createdAt: "2025-10-10T09:00:00Z",
      imageUrl: "https://via.placeholder.com/100x80",
    },
    {
      _id: "4",
      title: "Top 10 VS Code Extensions for Developers",
      createdAt: "2025-09-25T08:00:00Z",
      imageUrl: "https://via.placeholder.com/100x80",
    },
    {
      _id: "5",
      title: "Why TypeScript is Taking Over JavaScript",
      createdAt: "2025-09-15T07:00:00Z",
      imageUrl: "https://via.placeholder.com/100x80",
    },
  ];

  // Dummy tags
  const dummyTags = ["React", "NodeJS", "WebDev", "UIUX", "Coding", "Frontend"];

  const [blog, setBlog] = useState(dummyBlog);
  const [recentBlogs, setRecentBlogs] = useState(dummyRecentBlogs);
  const [tags, setTags] = useState(dummyTags);

  useEffect(() => {
    // Normally fetch logic here, but now using dummy data
    setBlog(dummyBlog);
    setRecentBlogs(dummyRecentBlogs);
    setTags(dummyTags);
  }, []);

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
                <span className="date-meta">
                  <FaCalendarAlt /> {new Date(blog.createdAt).toLocaleDateString()}
                </span>
              </div>

              <h2 className="Blog-Details-title">{blog.title}</h2>
              <p className="Blog-Details-description">{blog.description}</p>
              {blog.quotes && <blockquote className="Blog-Details-quote">"{blog.quotes}"</blockquote>}
              <div
                dangerouslySetInnerHTML={{ __html: blog.content }}
                className="Blog-Details-html"
              />

              <div className="Blog-Details-tags">
                <strong><FaTags /> Tags:</strong>
                {blog.tags.map((tag) => (
                  <span key={tag} className="Blog-Details-tag">
                    #{tag}
                  </span>
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
                  <button type="submit" className="Blog-Details-btn">
                    Post Comment
                  </button>
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
                  "SEO Marketing",
                ].map((service) => (
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
                {recentBlogs.map((blog) => (
                  <div key={blog._id} className="Blog-Details-recent-item">
                    <img src={blog.imageUrl} alt="Recent Post" />
                    <div className="Blog-Details-recent-text">
                      <span className="title">{blog.title}</span>
                      <span className="date">
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags Widget */}
            <div className="Blog-Details-widget tags">
              <h3><FaTags /> Tags</h3>
              <div className="Blog-Details-tag-list">
                {tags.map((tag) => (
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
