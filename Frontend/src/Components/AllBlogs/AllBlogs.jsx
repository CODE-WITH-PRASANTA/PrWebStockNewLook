import React, { useState, useEffect } from 'react';
import './AllBlogs.css';
import { Link } from "react-router-dom";

// Assets
import ProfilePic from '../../assets/profile-pic.webp';

// React Icons
import { FaRegCommentDots } from 'react-icons/fa';

// Import the API_URL
import { API_URL } from '../../Api';

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${API_URL}/blogs/get-blogs`);
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchBlogs();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="AllBlog-Container">
      {blogs.map((blog) => (
        <div className="AllBlog-Card" key={blog._id}>
          <div className="AllBlog-ImageWrapper">
            <img src={blog.imageUrl} alt="blog" className="AllBlog-Image" />
            <span className="AllBlog-DateBadge">{new Date(blog.date).toLocaleDateString()}</span>
          </div>
          <div className="AllBlog-Content">
            <div className="AllBlog-Author">
              <img src={ProfilePic} alt="profile" className="AllBlog-ProfilePic" />
              <span className="AllBlog-AuthorName">By {blog.author}</span>
            </div>
            <Link to={`/blogs/${blog._id}`} className="AllBlog-Link">
              <h3 className="AllBlog-Title">{blog.title}</h3>
            </Link>

            <div className="AllBlog-Footer">
              <div className="AllBlog-Comments">
                <FaRegCommentDots className="AllBlog-CommentIcon" />
                <span>2 Comments</span>
              </div>
              <div className="AllBlog-More">More</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllBlogs;