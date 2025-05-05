import React from 'react';
import shape1 from '../../assets/shape-3.svg';
import shape2 from '../../assets/shape-4.svg';
import shape3 from '../../assets/shape-13.svg';
import './Requirement.css';

const Requirement = () => {
  return (
    <div className="requirement-container">
      <section className="header-section">
        <h5>LET'S WORK TOGETHER</h5>
        <h1>We Love to Listen to Your Requirements</h1>
        <button className="estimate-button" onClick={() => window.open('https://wa.me/7205995722', '_blank')}>Estimate Project</button>
        <p>Or call us now</p>
        <a href="tel:+917205995722" className="phone-number">+91 7205-995722</a>
      </section>
      <hr />
      <section className="newsletter-section">
        <h2>Get New Insights Weekly</h2>
        <p>Contact us today to kick-start your project and experience the power of transformative digital solutions.</p>
        <div className="newsletter-input">
          <input type="email" placeholder="Email Your Address" />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </section>
      <img src={shape1} alt="shape1" className="shape shape1" />
      <img src={shape2} alt="shape2" className="shape shape2" />
      <img src={shape3} alt="shape3" className="shape shape3" />
    </div>
  );
}

export default Requirement;
