import React from 'react';
import './DownFooter.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const DownFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <p className="company-name">© 2024 PR-WEBSTOCK. All Rights Reserved.</p>
          <p className="company-info">
            <a href="#" className="footer-link">Privacy Policy</a> |
            <a href="#" className="footer-link">Terms & Conditions</a>
          </p>
        </div>

        <div className="footer-social">
          <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        </div>

        <div className="footer-bottom">
          <p className="footer-contact">
            Need help? Email us at <a href="mailto:prwebstock.com@gmail.com" className="footer-link">prwebstock.com@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default DownFooter;
