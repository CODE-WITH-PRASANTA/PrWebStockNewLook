import React from 'react'
import './Specializedsection.css'
import specializedicon1 from '../../assets/specialized1.webp';
import specializedicon2 from '../../assets/specialized2.webp';
import specializedicon3 from '../../assets/specialized3.webp';
import specializedicon4 from '../../assets/specialized4.webp';

const Specializedsection = () => {
    const services = [
      {
        icon: specializedicon1,
        title: 'Web Devlopment',
        description: 'Skilled Web Development Specialist with expertise in MERN stack (MongoDB, Express.js, React.js, Node.js).Building dynamic, high-performance web applications that are user-friendly and scalable. Main focus is on delivering efficient, modern solutions tailored to meet your business goals and drive success.',
        color: '#ff4757'
      },
      {
        icon: specializedicon2,
        title: 'Search Engine Optimization',
        description: 'Experienced Search Engine Optimization (SEO) Specialist focused on boosting online visibility and driving organic traffic.Useing advanced strategies, keyword analysis, and data-driven techniques to optimize websites for top search rankings. Main goal is to enhance your online presence, increase engagement, and achieve sustainable growth.',
        color: '#20c997'
      },
      {
        icon: specializedicon3,
        title: 'App Devlopment',
        description: 'App Development Specialist with expertise in React Native, creating high-quality, cross-platform mobile applications. Develop seamless, responsive, and feature-rich apps tailored to your needs. Main focus is on delivering user-friendly experiences with efficient code, ensuring your app stands out and drives user engagement.',
        color: '#f7a821'
      },
      {
        icon: specializedicon4,
        title: 'Advertising',
        description: ' Advertising and Digital Marketing Specialist dedicated to elevating your brand’s presence. With targeted strategies, innovative campaigns, and data-driven insights, help maximize reach and engagement. Main focus is on creating impactful, results-oriented solutions that boost visibility, drive traffic, and achieve your business goals.',
        color: '#e254ef'
      }
    ];
  
    return (
      <div className="specialized-section">
        <h2 className="specialized-title">We're Specialized in</h2>
        <p className="specialized-mission">Our mission is to design the best websites around</p>
        <div className="specialized-container">
          {services.map((service, index) => (
            <div className="specialized-card" key={index} style={{ borderTop: `4px solid ${service.color}`, borderRight: `4px solid ${service.color}` }}>
              <img src={service.icon} alt={service.title} className="specialized-icon" />
              <h3 style={{ color: service.color }}>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Specializedsection;
  