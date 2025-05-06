import React from 'react';
import './AllBlogs.css';

// Assets
import Blog1 from '../../assets/blog-1.webp';
import Blog2 from '../../assets/blog-2.webp';
import Blog3 from '../../assets/blog-3.webp';
import ProfilePic from '../../assets/profile-pic.webp';

// React Icons
import { FaRegCommentDots } from 'react-icons/fa';

const AllBlogs = () => {
  const blogs = [
    {
      id: 1,
      image: Blog1,
      title: "Let’s understand the different types of data backups",
      author: "Kevin Martin",
      date: "20 MAY",
    },
    {
      id: 2,
      image: Blog2,
      title: "Let’s understand the different types of data backups",
      author: "Kevin Martin",
      date: "20 MAY",
    },
    {
      id: 3,
      image: Blog3,
      title: "Let’s understand the different types of data backups",
      author: "Kevin Martin",
      date: "20 MAY",
    },
  ];

  return (
    <div className="AllBlog-Container">
      {blogs.map((blog) => (
        <div className="AllBlog-Card" key={blog.id}>
          <div className="AllBlog-ImageWrapper">
            <img src={blog.image} alt="blog" className="AllBlog-Image" />
            <span className="AllBlog-DateBadge">{blog.date}</span>
          </div>
          <div className="AllBlog-Content">
            <div className="AllBlog-Author">
              <img src={ProfilePic} alt="profile" className="AllBlog-ProfilePic" />
              <span className="AllBlog-AuthorName">by {blog.author}</span>
            </div>
            <h3 className="AllBlog-Title">{blog.title}</h3>
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
