import React, { useEffect, useState } from 'react';
import './HomeHero.css';

import Hero01 from '../../assets/Hero-01.webp';
import Hero02 from '../../assets/Digital-marketing-01.webp';
import Hero03 from '../../assets/Heroo-web-01.webp';

const slides = [
  {
    heading: 'PR WEBSTOCK',
    title: 'COUSTOM WEBSITE DEVLOPMENT SERVICES',
    text: 'You can trust us without hesitation in the technology sector where we excel. Our exceptional team of mern stack and react.js specialist is here to provide you with top-notch services.',
    bgImage: Hero03,
  },
  {
    heading: 'PR WEBSTOCK',
    title: 'APPLICATION DEVELOPMENT',
    text: 'APPLICATION DEVELOPMENT PR WEBSTOCK provides quality assistance in the fields of Mobile App Development and Android App Development.',
    bgImage: Hero01,
  },
  {
    heading: 'PR WEBSTOCK',
    title: 'SOCIAL MEDIA & DIGITAL MARKETING',
    text: 'Boost your business presence through strategic social media campaigns tailored to your audience.',
    bgImage: Hero02,
  },
];

const HomeHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const { heading, title, text, bgImage } = slides[currentIndex];

  const handleCallClick = () => {
    window.location.href = 'tel:6372545244';
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hey, I need a website/Application');
    const phone = '7205995722';
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <div
      className="HomeHero-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="HomeHero-overlay" />
      <div className="HomeHero-content">
        <h5 className="HomeHero-heading">{heading}</h5>
        <h1 className="HomeHero-title">{title}</h1>
        <p className="HomeHero-text">{text}</p>
        <div className="HomeHero-buttons">
          <button className="HomeHero-button HomeHero-contact" onClick={handleCallClick}>
            CONTACT US
          </button>
          <button className="HomeHero-button HomeHero-demo" onClick={handleWhatsAppClick}>
            GET A FREE DEMO
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
