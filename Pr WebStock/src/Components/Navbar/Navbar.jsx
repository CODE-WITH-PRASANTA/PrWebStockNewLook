import React, { useState } from 'react';
import './Navbar.css';
import {
  FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram,
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes
} from 'react-icons/fa';
import logo from '../../assets/Company-Logo.webp';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="navbar-container">
      {/* Topbar */}
      <div className="navbar-topbar">
        <div className="Topbar-Container">
          <div className="navbar-topbar-left">
            <div className="navbar-contact-item"><FaPhoneAlt className="navbar-icon" /> <span>+91- 6372 545 244</span></div>
            <div className="navbar-contact-item"><FaEnvelope className="navbar-icon" /> <span>prwebstock.com@gmail.com</span></div>
            <div className="navbar-contact-item"><FaMapMarkerAlt className="navbar-icon" /> <span>Nexus Esplanade , Bhubaneswar
Unit No. 32, 721</span></div>
          </div>
          <div className="navbar-topbar-right">
            <div className="navbar-social-icon"><FaFacebookF /></div>
            <div className="navbar-social-icon"><FaTwitter /></div>
            <div className="navbar-social-icon"><FaYoutube /></div>
            <div className="navbar-social-icon"><FaLinkedinIn /></div>
            <div className="navbar-social-icon"><FaInstagram /></div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="navbar-main">
        <div className="Navbar-Main-container">
          <div className="navbar-main-left">
            <img src={logo} alt="Company Logo" className="navbar-logo" />
          </div>

          <ul className="navbar-main-links">
            <li className="navbar-link-item"><Link to="/">Home</Link></li>
            <li className="navbar-link-item"><Link to="/about">About Us</Link></li>
            <li className="navbar-link-item"><Link to="/services">Services</Link></li>
            <li className="navbar-link-item"><Link to="/product">Product</Link></li>
            <li className="navbar-link-item"><Link to="/web-plan">Web Work</Link></li>
            <li className="navbar-link-item"><Link to="/carrier">Career</Link></li>
            <li className="navbar-link-item"><Link to="/blog">Blog</Link></li>
            <li className="navbar-link-item"><Link to="/contact">Contact Us</Link></li>
          </ul>


          <div className="navbar-main-right">
            <button className="navbar-demo-btn">GET FREE DEMO</button>
          </div>

          <div className="navbar-mobile-toggle" onClick={() => setIsMobileMenuOpen(true)}>
            <FaBars />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <img src={logo} alt="Company Logo" className="mobile-logo" />
          <FaTimes className="close-icon" onClick={() => setIsMobileMenuOpen(false)} />
        </div>
        <ul className="mobile-menu-links">
              <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
              <li><Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link></li>
              <li><Link to="/product" onClick={() => setIsMobileMenuOpen(false)}>Product</Link></li>
              <li><Link to="/web-plan" onClick={() => setIsMobileMenuOpen(false)}>Web Work</Link></li>
              <li><Link to="/carrier" onClick={() => setIsMobileMenuOpen(false)}>Career</Link></li>
              <li><Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link></li>
              <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
            </ul>

        <button className="mobile-demo-btn">GET FREE DEMO</button>
      </div>
    </div>
  );
};

export default Navbar;
