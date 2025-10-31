import React from "react";
import "./BlogInfoHeader.css";
import { Calendar, User, Dot } from "lucide-react";
import authorImg from "../../assets/blog-avatar-1.webp"; // replace with your actual image

const BlogInfoHeader = () => {
  return (
    <section className="blog-info-header-section">
      <div className="blog-info-header-content">
        <h1 className="blog-info-header-title">
          The 5 Ways To Improve Your Credibility Working From Home
        </h1>

        <div className="blog-info-header-meta">
          <img
            src={authorImg}
            alt="Author"
            className="blog-info-header-author-img"
          />
          <span className="blog-info-header-author">
            <User size={16} /> ADMIN
          </span>
          <Dot className="blog-info-header-dot" />
          <span className="blog-info-header-date">
            <Calendar size={16} /> MARCH 1, 2023
          </span>
          <Dot className="blog-info-header-dot" />
          <span className="blog-info-header-category">BUSINESS</span>
        </div>
      </div>
    </section>
  );
};

export default BlogInfoHeader;
