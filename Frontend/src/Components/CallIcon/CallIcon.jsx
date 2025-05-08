// src/Components/CallIcon/CallIcon.jsx
import React from 'react';
import './CallIcon.css';
import { FiPhoneCall } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const CallIcon = () => {
  return (
    <div className="fab-container">
      <a href="tel:6372545244" className="fab-button call" title="Call Now">
        <FiPhoneCall size={20} />
      </a>
      <a
        href="https://wa.me/6372545244"
        target="_blank"
        rel="noopener noreferrer"
        className="fab-button whatsapp"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={20} />
      </a>
    </div>
  );
};

export default CallIcon;
