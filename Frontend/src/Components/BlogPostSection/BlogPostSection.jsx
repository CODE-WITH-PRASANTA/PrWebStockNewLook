import React, { useState } from "react";
import "./BlogPostSection.css";
import { Search } from "lucide-react";

import post1 from "../../assets/post1.webp";
import post2 from "../../assets/post2.webp";
import post3 from "../../assets/post3.webp";
import blogMain from "../../assets/blogmain.webp";
import adBanner from "../../assets/adbanner.webp";

const BlogPostSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["BUSINESS", "DEVELOPMENT", "SOFTWARE"];
  const tags = ["ACCESSORIES", "CLOTHING", "DECOR", "HOODIES", "MUSIC", "TSHIRTS"];
  const popularPosts = [
    {
      img: post1,
      title: "The 5 Ways To Improve Your Credibility Working From Home",
    },
    {
      img: post2,
      title: "The 20 Smart Finance-Focused Resources For Small Businesses",
    },
    {
      img: post3,
      title: "4 Ways Businesses Can Conduct Productive Time Management",
    },
  ];

  return (
    <section className="blogpost-section">
      {/* LEFT CONTENT */}
      <div className="blogpost-left">
        <p className="blogpost-paragraph">
          As a small–business owner, it’s important to find high–quality
          information and educational resources you can trust to help you
          overcome common obstacles and achieve success.
        </p>

        <p className="blogpost-paragraph">
          With the large number of online resources out there, it’s hard to know
          where to begin searching for the best ones for your needs.
        </p>

        <h2 className="blogpost-heading">Bench Blog</h2>
        <p className="blogpost-paragraph">
          One of the most helpful blogs I have seen is Bench Blog, posted by
          Bench, a bookkeeping service for small businesses.
        </p>

        <h2 className="blogpost-heading">CFO.University</h2>
        <p className="blogpost-paragraph">
          One of my favorite sources of corporate–finance–specific content is
          CFO.University.
        </p>

        <div className="blogpost-image-box">
          <img src={blogMain} alt="Finance workspace" />
          <p className="blogpost-caption">
            The company provides lending services to the UK consumer market.
          </p>
        </div>

        <h2 className="blogpost-heading">Harvard Business Review</h2>
        <p className="blogpost-paragraph">
          Harvard Business Review is full of ideas and strategies.
        </p>

        {/* QUOTE SECTION */}
        <blockquote className="blogpost-quote">
          <p>
            Small–business owners should digest the content from the website of
            the National Federation of Independent Business Owners.
          </p>
        </blockquote>

        <h2 className="blogpost-heading">Online Communities</h2>
        <p className="blogpost-paragraph">
          I have found subscribing to several sources, skimming the headlines,
          and looking for information on the specific challenges I’m facing to
          be an effective strategy.
        </p>

        {/* COMMENTS SECTION */}
        <div className="blogpost-comments">
          <h3 className="blogpost-comments-title">3 Comments</h3>

          <div className="blogpost-comment">
            <img src={post1} alt="admin" className="blogpost-comment-avatar" />
            <div className="blogpost-comment-body">
              <div className="blogpost-comment-header">
                <span className="blogpost-comment-author">admin</span>
                <span className="blogpost-comment-date">02/03/2023</span>
                <span className="blogpost-comment-reply">↩ Reply</span>
              </div>
              <p className="blogpost-comment-text">
                Good marketing practices have a direct financial impact on a
                business.
              </p>
            </div>
          </div>

          <div className="blogpost-comment">
            <img src={post2} alt="admin" className="blogpost-comment-avatar" />
            <div className="blogpost-comment-body">
              <div className="blogpost-comment-header">
                <span className="blogpost-comment-author">admin</span>
                <span className="blogpost-comment-date">02/03/2023</span>
                <span className="blogpost-comment-reply">↩ Reply</span>
              </div>
              <p className="blogpost-comment-text">
                It has great, timely content to help small–business owners
                navigate change.
              </p>
            </div>
          </div>

          <div className="blogpost-comment nested">
            <img src={post3} alt="admin" className="blogpost-comment-avatar" />
            <div className="blogpost-comment-body">
              <div className="blogpost-comment-header">
                <span className="blogpost-comment-author">admin</span>
                <span className="blogpost-comment-date">02/03/2023</span>
                <span className="blogpost-comment-reply">↩ Reply</span>
              </div>
              <p className="blogpost-comment-text">
                Small–business owners should digest the content from NFIB.
              </p>
            </div>
          </div>

          {/* REPLY FORM */}
          <div className="blogpost-reply">
            <h3 className="blogpost-reply-title">Leave a Reply</h3>
            <p className="blogpost-reply-note">
              Your email address will not be published. Required fields are
              marked *
            </p>

            <div className="blogpost-reply-inputs">
              <input type="text" placeholder="Jane Doe" />
              <input type="email" placeholder="name@email.com" />
            </div>
            <textarea placeholder="Enter comment here..."></textarea>
            <button className="blogpost-reply-btn">Post Comment</button>
          </div>
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <aside className="blogpost-right">
        <div className="blogpost-search">
          <Search className="blogpost-search-icon" size={18} />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="blogpost-categories">
          <h3 className="blogpost-subtitle">Categories</h3>
          <ul className="blogpost-category-list">
            {categories.map((cat, i) => (
              <li key={i} className="blogpost-category-item">
                • {cat}
              </li>
            ))}
          </ul>
        </div>

        <div className="blogpost-popular">
          <h3 className="blogpost-subtitle">Popular Posts</h3>
          {popularPosts.map((post, i) => (
            <div className="blogpost-popular-item" key={i}>
              <img src={post.img} alt={post.title} />
              <p>{post.title}</p>
            </div>
          ))}
        </div>

        <div className="blogpost-tags">
          <h3 className="blogpost-subtitle">Tags</h3>
          <div className="blogpost-tag-list">
            {tags.map((tag, i) => (
              <span key={i} className="blogpost-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="blogpost-banner">
          <img src={adBanner} alt="Ad banner" />
        </div>
      </aside>
    </section>
  );
};

export default BlogPostSection;
