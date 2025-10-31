import React from "react";
import "./BlogCards.css";
import { ArrowUpRight, CalendarDays } from "lucide-react";

import blogImg1 from "../../assets/blog-img-1.webp";
import blogImg2 from "../../assets/blog-img-2.webp";
import blogImg3 from "../../assets/blog-img-3.webp";

import blogAvatar1 from "../../assets/blog-avatar-1.webp";

/* ================== BLOG CARDS DATA ================== */
const blogs = [
  {
    id: 1,
    image: blogImg1,
    avatar: blogAvatar1,
    author: "ADMIN",
    date: "MARCH 1, 2023",
    title: "The 5 Ways To Improve Your Credibility Working From Home",
    desc: "As a small–business owner, it’s important to find high–quality information and educational resources you can trust to…",
  },
  {
    id: 2,
    image: blogImg2,
    avatar: blogAvatar1,
    author: "ADMIN",
    date: "MARCH 1, 2023",
    title: "Fintech Startup Will Finance The Women–Owned Businesses",
    desc: "As a small–business owner, it’s important to find high–quality information and educational resources you can trust to…",
  },
  {
    id: 3,
    image: blogImg3,
    avatar: blogAvatar1,
    author: "ADMIN",
    date: "MARCH 1, 2023",
    title: "4 Ways Businesses Can Conduct Productive Time Management",
    desc: "As a small–business owner, it’s important to find high–quality information and educational resources you can trust to…",
  },
];

/* ================== NEWS GRID DATA ================== */
const newsData = [
  {
    id: 1,
    title: "Why Remote Work Culture Is Here To Stay",
    date: "MARCH 10, 2023",
    desc: "Remote work has transformed modern business operations, providing flexibility and productivity benefits...",
  },
  {
    id: 2,
    title: "Top 10 Startup Trends To Watch In 2025",
    date: "MARCH 15, 2023",
    desc: "Entrepreneurs are embracing AI, green technology, and lean strategies to stay ahead in 2025’s competitive market...",
  },
  {
    id: 3,
    title: "How Digital Marketing Is Evolving Rapidly",
    date: "MARCH 20, 2023",
    desc: "From influencer collaborations to immersive campaigns, marketing strategies continue to evolve for online engagement...",
  },
];

const BlogCards = () => {
  return (
    <div className="blogcards-wrapper">

      {/* ================= TOP BLOG CARDS SECTION ================= */}
      <section className="blogcards-section">
        <div className="blogcards-container">
          {blogs.map((blog, index) => (
            <div
              className={`blogcards-card ${
                index === 1 ? "blogcards-featured" : ""
              }`}
              key={blog.id}
            >
              <div className="blogcards-image">
                <img src={blog.image} alt={blog.title} />
              </div>

              <div className="blogcards-content">
                <div className="blogcards-meta">
                  <img
                    src={blog.avatar}
                    alt="avatar"
                    className="blogcards-avatar"
                  />
                  <span className="blogcards-author">{blog.author}</span>
                  <span className="blogcards-dot">•</span>
                  <span className="blogcards-date">
                    <CalendarDays size={14} /> {blog.date}
                  </span>
                </div>

                <h3 className="blogcards-title">{blog.title}</h3>
                <div className="blogcards-line"></div>
                <p className="blogcards-desc">{blog.desc}</p>

                <button className="blogcards-btn">
                  Read More <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BOTTOM NEWS GRID SECTION ================= */}
      <section className="news-grid">
        {newsData.map((item) => (
          <div className="news-card" key={item.id}>
            <div className="news-info">
              <img src={blogAvatar1} alt="Author" className="news-avatar" />
              <span className="news-author">Admin</span>
              <span className="news-dot">•</span>
              <span className="news-date">
                <CalendarDays size={14} /> {item.date}
              </span>
            </div>

            <h3 className="news-heading">{item.title}</h3>
            <span className="news-line"></span>
            <p className="news-text">{item.desc}</p>

            <button className="news-btn">Read More</button>
          </div>
        ))}
      </section>

    </div>
  );
};

export default BlogCards;
