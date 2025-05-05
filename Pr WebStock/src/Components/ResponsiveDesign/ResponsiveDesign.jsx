import React from 'react';
import './ResponsiveDesign.css';

// Assets
import ResponsiveDesignImg from '../../assets/Responsive-design.webp';

const ResponsiveDesign = () => {
  return (
    <section className="responsive-section">
      <div className="responsive-container">
        <div className="responsive-left">
          <img
            src={ResponsiveDesignImg}
            alt="Responsive Design Illustration"
            className="responsive-image"
          />
        </div>
        <div className="responsive-right">
          <h2 className="responsive-title">
            Responsive <span className="highlight">Website Design</span>
          </h2>
          <div className="responsive-line"></div>
          <p className="responsive-text">
            We have designed our <strong>website design company in Bhubaneswar</strong> in order to attract new clients and to get more prospects in the future. It is not always possible to start with creating a superb website without first having a viable foundation. But once you build an ideal website it is worth the investment, and you can expect to see the return on your investment in high-quality traffic, sales, and search engine ranking. Look no further than Aioninno Technologies Pvt. Ltd. We pride ourselves on delivering the best website design services that will exceed your expectations. Contact us today to create a stunning website for your business!
          </p>
          <ul className="responsive-list">
            <li>Cost Effectiveness</li>
            <li>Flexibility</li>
            <li>Improve User Experience</li>
            <li>Search Engine Optimization Gains</li>
            <li>Ease of Management</li>
            <li>Unique Design</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveDesign;
