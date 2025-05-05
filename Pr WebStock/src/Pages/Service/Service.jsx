import React from 'react';
import './Service.css';

// Assets
import ServiceRightSideImg from '../../assets/Service-Section.webp';
import OurServices from '../../Components/OurServices/OurServices';
import CommunicateForm from '../../Components/CommunicateForm/CommunicateForm';



const Service = () => {
  return (
    <>
    <section className="service-section">
      <div className="service-container">
        <div className="service-content">
          <h2 className="fade-in">Our Development Services</h2>
          <p className="fade-in delay-1">
            Are you searching for a Website & App Development Company in Bhubaneswar?
            We are one of the top-rated IT companies offering:
          </p>

          <div className="service-list-container fade-in delay-2">
            <ul className="service-list">
              <li><span>🌐</span> Web Development</li>
              <li><span>📱</span> App Development</li>
            </ul>
            <ul className="service-list">
              <li><span>📈</span> Digital Marketing</li>
              <li><span>🔍</span> SEO Optimization</li>
            </ul>
          </div>
        </div>

        <div className="service-image fade-in delay-3">
          <img src={ServiceRightSideImg} alt="Website Development Illustration" />
        </div>
      </div>
    </section>

    <OurServices />
    <CommunicateForm />
    </>
  );
};

export default Service;
