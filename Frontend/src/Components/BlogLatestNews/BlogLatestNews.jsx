import React from "react";
import "./BlogLatestNews.css";

import blog1 from "../../assets/blog-1.webp";
import blog2 from "../../assets/blog-2.webp";
import blog3 from "../../assets/blog-3.webp";
import subscribeBg from "../../assets/bg-footer.webp"



const BlogLatestNews = () => {
  return (
    <section className="blog-latest-news">
      <div className="blog-latest-news-container">
        <h2 className="blog-latest-news-title">Our Latest News</h2>
        <p className="blog-latest-news-subtitle">
          Stay updated with the latest trends, insights, and tips from our experts.  
          Explore the most recent stories from our blog.
        </p>

        {/* ====== News Grid ====== */}
        <div className="blog-latest-news-grid">
          <div className="blog-latest-news-card">
            <img src={blog1} alt="Business Growth" />
            <div className="blog-latest-news-card-content">
              <h3>How to Boost Your Business Growth in 2025</h3>
              <p>
                Learn proven strategies that will help your business grow faster and
                stay ahead in today’s competitive market.
              </p>
              <button>Read More</button>
            </div>
          </div>

          <div className="blog-latest-news-card">
            <img src={blog2} alt="Digital Marketing" />
            <div className="blog-latest-news-card-content">
              <h3>Top Digital Marketing Trends to Watch</h3>
              <p>
                Discover the emerging marketing trends that will shape the future of
                online brand engagement.
              </p>
              <button>Read More</button>
            </div>
          </div>

          <div className="blog-latest-news-card">
            <img src={blog3} alt="Entrepreneur Mindset" />
            <div className="blog-latest-news-card-content">
              <h3>Mindset Secrets of Successful Entrepreneurs</h3>
              <p>
                Get inspired by the habits and mindset techniques that top entrepreneurs
                use to achieve lasting success.
              </p>
              <button>Read More</button>
            </div>
          </div>
        </div>

      {/* ====== Subscribe Section ====== */}
      <div
        className="blog-latest-news-subscribe"
        style={{
          backgroundImage: `url(${subscribeBg})`,
        }}
      >
        <div className="subscribe-overlay">
          <div className="subscribe-content">
            <h2>Subscribe to Our Newsletter</h2>
            <p>
              Receive the latest technology & business news in your inbox.
              <br />
              Select the newsletters you’d like to receive.
            </p>

            <form className="subscribe-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Sign up</button>
            </form>
          </div>
        </div>
      </div>

      </div>
    </section>
  );
};

export default BlogLatestNews;
