import React from 'react';
import './OurServices.css';

// Assets
import MarketingImg from '../../assets/our-service-img-3.webp';
import Devlopment from '../../assets/our-service-img-5.webp';
import WebDesign from '../../assets/our-service-img-1.webp';
import SeoOptimization from '../../assets/our-service-img-4.webp';
import Ecommerce from '../../assets/our-service-img-2.webp';
import Branding from '../../assets/our-service-img-6.webp';

const services = [
  {
    title: 'Web Development',
    desc: 'We build modern, responsive, and high-performing websites using the latest technologies like React, Node.js, and MongoDB. Whether it’s a business website, personal blog, or web app, we create scalable and secure solutions tailored to your needs with optimized UI/UX to engage users effectively.',
    img: Devlopment,
  },
  {
    title: 'App Development',
    desc: 'We create robust, cross-platform mobile applications for both Android and iOS. From concept to deployment, our team delivers custom apps that are intuitive, fast, and aligned with your business goals. Technologies include React Native and Flutter to ensure maximum performance and user engagement.',
    img: WebDesign,
  },
  {
    title: 'E-Commerce Solutions',
    desc: 'Launch your online store with our secure and scalable e-commerce development services. We integrate payment gateways, order management, and mobile-friendly UI, allowing you to sell products 24/7. We also provide SEO-ready product listings and customer dashboard features.',
    img: Ecommerce,
  },
  {
    title: 'Branding & Identity',
    desc: 'From logo design to brand strategy, we help you build a powerful brand identity that resonates with your target audience. Our creative team focuses on visuals, color schemes, and messaging to ensure your business stands out in a competitive market and leaves a lasting impression.',
    img: Branding,
  },
  {
    title: 'SEO Optimization',
    desc: 'Our SEO experts use the latest algorithms and tools to improve your website’s visibility on search engines. We focus on on-page optimization, keyword research, content strategy, and backlinks to drive traffic and increase your organic ranking sustainably.',
    img: SeoOptimization,
  },
  {
    title: 'Digital Marketing',
    desc: 'We offer comprehensive digital marketing services including social media marketing, Google Ads, content marketing, and email campaigns. Our goal is to drive targeted traffic, generate quality leads, and help you achieve measurable business growth with data-driven decisions.',
    img: MarketingImg,
  }
];

const whatsappNumber = '6372545244';

const OurServices = () => {
  return (
    <div className="our-services-container">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <img src={service.img} alt={service.title} className="our-service-image" />
          <div className="our-service-content">
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <a
              href={`https://wa.me/91${whatsappNumber}?text=I am interested in your ${service.title} service.`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              I’m Interested
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurServices;
