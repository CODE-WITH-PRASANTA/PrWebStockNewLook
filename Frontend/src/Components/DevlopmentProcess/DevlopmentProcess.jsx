import React from 'react';
import './DevlopmentProcess.css';

// Assets
import DevlomentProcessRightImg from '../../assets/devlopment-process.webp';

const DevlopmentProcess = () => {
  return (
    <section className="dev-section">
      <div className="dev-container">
        <div className="dev-left">
          <h2 className="dev-title">
            Our <span className="highlight">Developement</span> Process
          </h2>
          <div className="dev-line"></div>
          <p className="dev-text">
            Our team has confidence in keeping all quality guidelines of the course of Website Design and Development for making a fruitful site for you, which expands your scope to clients/purchasers and assists you with accomplishing expanded incomes alongside building Online Reputation too. To accomplish this objective, we have a Business Analysts and Website Design company in Bhubaneswar and Development Experts who comprehend your business ideas and necessities and afterward we designer your site over different Technologies and Innovative Designs.
          </p>
          <p className="dev-text">
            We, then, at that point, incorporate it with your business work processes and frameworks. For us, Website Design and Development is an Art, and we are honored with exceptionally inventive and gifted Technology Expertise in our Team. Our Website Design and Development quotes are extremely serious and best in the market, comprehensive of free Website Maintenance and Support for each customer.
          </p>
        </div>

        <div className="dev-right">
          <img
            src={DevlomentProcessRightImg}
            alt="Development Process Illustration"
            className="dev-image"
          />
        </div>
      </div>
    </section>
  );
};

export default DevlopmentProcess;
