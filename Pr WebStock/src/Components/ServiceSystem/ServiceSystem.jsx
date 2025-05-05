import React from 'react';
import './ServiceSystem.css';
import { MdEmail } from 'react-icons/md';
import { FaUsers, FaChartBar } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';

const services = [
  {
    icon: <MdEmail className="Service-System-icon" />,
    title: 'Excellent Support',
    description: 'We deliver excellent support to your customers.'
  },
  {
    icon: <FaUsers className="Service-System-icon" />,
    title: 'Awesome Team',
    description: 'Privileged to work with the most awesome team imaginable as a part of our business.'
  },
  {
    icon: <FaChartBar className="Service-System-icon" />,
    title: 'Faster Performance',
    description: 'Team members do better work and we provide faster performance to your business.'
  },
  {
    icon: <FiPhoneCall className="Service-System-icon" />,
    title: '24/7 Hours Support',
    description: 'Our team can give you 24/7 support for a better experience.'
  }
];

const ServiceSystem = () => {
  return (
    <section className="Service-System-section">
      <div className="Service-System-wrapper">
        <h2 className="Service-System-heading">Our Services</h2>
        <p className="Service-System-subheading">Delivering powerful solutions to help your business grow</p>
        <div className="Service-System-container">
          {services.map((service, index) => (
            <div className="Service-System-card" key={index}>
              <div className="Service-System-icon-wrapper">{service.icon}</div>
              <h3 className="Service-System-title">{service.title}</h3>
              <p className="Service-System-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSystem;
