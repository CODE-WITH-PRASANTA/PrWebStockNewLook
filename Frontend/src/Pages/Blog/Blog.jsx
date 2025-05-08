import React from 'react';
import './Blog.css';

// Assets
import RightSideBlog from '../../assets/blog-img.webp';
import AllBlogs from '../../Components/AllBlogs/AllBlogs';

const Blog = () => {
  return (
  <>
    <div className="blog-section">
      <div className="blog-content animate-slide-in-left">
        <h1 className="blog-title">Blogs</h1>
        <p className="blog-description">
          The information posted on a blog is shown in backward sequential order with
          the goal that the latest posts are shown first. A weblog is a platform where
          people share their perspectives and engage in discourse over a particular subject.
        </p>
      </div>
      <div className="blog-image-container animate-slide-in-right">
        <img className="blog-image" src={RightSideBlog} alt="Blog Illustration" />
      </div>
    </div>

    <AllBlogs />
  </>
  );
};

export default Blog;