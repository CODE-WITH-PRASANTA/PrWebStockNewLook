import React from 'react';
import './WhatWeAre.css';
import RightSideImg from '../../assets/what-we-are.webp';

const WhatWeAre = () => {
  return (
    <section className="what-we-are-section">
      <div className="what-we-are-container">
        <div className="what-we-are-content">
          <h5 className="what-we-are-subheading">WHAT WE ARE</h5>
          <h2 className="what-we-are-title">
            What We <span className="what-we-are-highlight">Are ?</span>
          </h2>
          <div className="what-we-are-underline">
            <span className="underline-blue" />
            <span className="underline-pink" />
            <span className="underline-yellow" />
          </div>
          <p className="what-we-are-description">
            PR WEBSTOCK is a software company focused on delivering business value by developing innovative technologies and rapidly implementing them across a range of small to large organizations. Our organizational culture, from administration to employees, has been a driving force for our consistent growth since inception.
          </p>
          <ul className="what-we-are-services">
            <li>Website Design</li>
            <li>Software Development</li>
            <li>Mobile App Development</li>
            <li>Digital Marketing</li>
          </ul>
        </div>
        <div className="what-we-are-image-wrapper">
          <img src={RightSideImg} alt="What We Are" className="what-we-are-image" />
        </div>
      </div>
    </section>
  );
};

export default WhatWeAre;
