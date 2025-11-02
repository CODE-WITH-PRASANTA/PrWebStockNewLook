import React from "react";
import "./PreviewBlog.css";

interface Blog {
  id: number;
  title: string;
  desc: string;
  author: string;
  category: string;
  tags: string[];
  image: string;
  published: boolean;
  date: string;
}

const PreviewBlog: React.FC = () => {
  // ✅ Demo Data (replace later with fetched data)
  const demoBlogs: Blog[] = [
    {
      id: 1,
      title: "The Future of AI in Web Development",
      desc: "Artificial Intelligence is transforming how websites are designed and optimized. Learn how to leverage AI tools in your projects.",
      author: "Alex Morgan",
      category: "Technology",
      tags: ["AI", "Web Dev", "Innovation"],
      image: "https://via.placeholder.com/400x250.png?text=AI+in+Web+Dev",
      published: true,
      date: "Oct 28, 2025",
    },
    {
      id: 2,
      title: "Top 5 Design Trends for 2025",
      desc: "A deep dive into upcoming UI/UX design patterns that are shaping digital experiences worldwide.",
      author: "Sophia Lee",
      category: "Design",
      tags: ["UI/UX", "Trends", "Creative"],
      image: "https://via.placeholder.com/400x250.png?text=Design+Trends+2025",
      published: false,
      date: "Oct 15, 2025",
    },
    {
      id: 3,
      title: "Mastering SEO for Business Growth",
      desc: "Learn how to grow your business by implementing effective SEO strategies tailored for modern search engines.",
      author: "Michael Chen",
      category: "Marketing",
      tags: ["SEO", "Growth", "Business"],
      image: "https://via.placeholder.com/400x250.png?text=SEO+Marketing",
      published: true,
      date: "Sep 30, 2025",
    },
  ];

  return (
    <div className="previewBlog-container">
      <h2 className="previewBlog-heading">📖 Preview Blogs</h2>
      <p className="previewBlog-subtitle">
        Review all your published and draft blogs at a glance.
      </p>

      <div className="previewBlog-grid">
        {demoBlogs.map((blog) => (
          <div
            key={blog.id}
            className={`previewBlog-card ${blog.published ? "published" : "draft"}`}
          >
            <img src={blog.image} alt={blog.title} className="previewBlog-img" />
            <div className="previewBlog-content">
              <div className="previewBlog-status">
                <span className={`status-badge ${blog.published ? "active" : "inactive"}`}>
                  {blog.published ? "Published" : "Draft"}
                </span>
                <span className="previewBlog-date">{blog.date}</span>
              </div>
              <h3 className="previewBlog-title">{blog.title}</h3>
              <p className="previewBlog-desc">{blog.desc}</p>
              <div className="previewBlog-meta">
                <span>✍️ {blog.author}</span>
                <span>📂 {blog.category}</span>
              </div>
              <div className="previewBlog-tags">
                {blog.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="previewBlog-actions">
                <button className="action-btn view">View</button>
                <button className="action-btn edit">Edit</button>
                <button className="action-btn delete">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviewBlog;
