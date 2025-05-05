import React from 'react';
import './ProvidingService.css';
import LeftSideImg from '../../assets/Service.webp';

const ProvidingService = () => {
  return (
    <section className="providing-service">
      <div className="providing-service-container">
        <div className="providing-service-image">
          <img src={LeftSideImg} alt="IT Services" />
        </div>

        <div className="providing-service-content">
          <h4 className="providing-service-subheading">OUR SERVICES</h4>
          <h2 className="providing-service-heading">
            Providing Your Business with a Quality IT Service<br />
            is Our Passion.
          </h2>
          <p className="providing-service-description">
            With cutting-edge technology and vast experience, we are capable of delivering
            comprehensive solutions for our clients.
          </p>

          <div className="providing-service-grid">
            <div className="providing-service-column">
              <h3>Web Designing</h3>
              <ul>
                <li>+ Static Design</li>
                <li>+ Dynamic Design</li>
                <li>+ E-Commerce Design</li>
                <li>+ Portal Design</li>
              </ul>
            </div>

            <div className="providing-service-column">
              <h3>Mobile Development</h3>
              <ul>
                <li>+ Android App Development</li>
                <li>+ iOS App Development</li>
                <li>+ Hybrid App Development</li>
              </ul>
            </div>

            <div className="providing-service-column">
              <h3>Digital Marketing</h3>
              <ul>
                <li>+ SEO</li>
                <li>+ Social Media</li>
                <li>+ Bulk SMS</li>
                <li>+ Bulk WhatsApp</li>
              </ul>
            </div>

            <div className="providing-service-column">
              <h3>Web Development</h3>
              <ul>
                <li>+ MERN STACK Development</li>
                <li>+ React & Node </li>
                <li>+ Python Development</li>
              </ul>
            </div>
          </div>

          <button className="providing-service-button">VIEW MORE SERVICES</button>
        </div>
      </div>
    </section>
  );
};

export default ProvidingService;
