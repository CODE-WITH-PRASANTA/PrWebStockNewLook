import React, { useState, useEffect } from "react";
import "./AllBlogs.css";
import { Link } from "react-router-dom";
import { API_URL } from "../../Api"; // Example: http://localhost:5000/api

// Assets
import ProfilePic from "../../assets/profile-pic.webp";

// React Icons
import { FaRegCommentDots } from "react-icons/fa";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch blogs from backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${API_URL}/blogs/get-blogs`);
        const data = await res.json();
        if (data.success) {
          setBlogs(data.blogs);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="AllBlog-Loading">Loading blogs...</div>;
  }

  return (
    <div className="AllBlog-Container">
      {blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        blogs.map((blog) => (
          <div className="AllBlog-Card" key={blog._id}>
            <div className="AllBlog-ImageWrapper">
              <img
                src={blog.imageUrl || "https://via.placeholder.com/300"}
                alt="blog"
                className="AllBlog-Image"
              />
              <span className="AllBlog-DateBadge">
                {new Date(blog.createdAt).toLocaleDateString()}
              </span>
            </div>
            <div className="AllBlog-Content">
              <div className="AllBlog-Author">
                <img
                  src={ProfilePic}
                  alt="profile"
                  className="AllBlog-ProfilePic"
                />
                <span className="AllBlog-AuthorName">By {blog.author}</span>
              </div>
              <Link to={`/blogs/${blog._id}`} className="AllBlog-Link">
                <h3 className="AllBlog-Title">{blog.title}</h3>
              </Link>
              <p className="AllBlog-Description">{blog.description}</p>

              <div className="AllBlog-Footer">
                <div className="AllBlog-Comments">
                  <FaRegCommentDots className="AllBlog-CommentIcon" />
                  <span>0 Comments</span>
                </div>
                <div className="AllBlog-Category">
                  {blog.category || "Uncategorized"}
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AllBlogs;
