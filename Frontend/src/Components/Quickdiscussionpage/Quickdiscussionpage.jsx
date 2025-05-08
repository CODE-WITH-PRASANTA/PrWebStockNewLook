import React from 'react';
import './Quickdiscussionpage.css';
import robortgif from '../../assets/robot-icon-animation.gif'; // make sure this path is correct


const Quickdiscussionpage = () => {
  return (
    <>
    <div className="quick-get-started-container">
    <div className="quick-discussion-container">
      <div className="quick-content">
        <h1>Let's have Quick Discussion</h1>
        <p>Tell us about your project & let us support your business growth.</p>
        <div className="quick-contact-info">
          <div className="phone">
            <i className="fas fa-phone-alt"></i>
            <span>+91 - 637 254 5244</span>
            <p>Call us anytime</p>
          </div>
          <div className="live-chat" onClick={() => window.open('https://wa.me/6372545244', '_blank')}>
            <i className="fas fa-comments"></i>
            <span >Live Chat</span>
            <p>To discuss your project</p>
          </div>
        </div>
      </div>
      <img src={robortgif} alt="Robot" className="robot-icon" />
    </div>
    </div>
    </>
  );
};

export default Quickdiscussionpage;
