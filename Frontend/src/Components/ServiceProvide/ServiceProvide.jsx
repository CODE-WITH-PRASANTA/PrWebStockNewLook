import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ import navigate
import './ServiceProvide.css';

import iconWebsite from '../../assets/WebDesign-Logo.webp';
import iconDevelopment from '../../assets/WebsiteDevlopment-Logo.webp';
import iconMobileApp from '../../assets/Mobile-App-Logo.webp';
import iconMarketing from '../../assets/Digital-Marketing-Logo.webp';
import iconSeo from '../../assets/Seo-Logo.webp';
import iconSocial from '../../assets/Search-engine-logo.webp';

const services = [
  {
    icon: iconWebsite,
    title: 'Website Design',
    description: 'Our specialized web developer understand your needs requirement delivers best results by using latest technologies.',
  },
  {
    icon: iconDevelopment,
    title: 'Website Development',
    description: 'We believe that a personal relationship with our clients is a necessary to developing their ideal apps.',
  },
  {
    icon: iconMobileApp,
    title: 'Mobile App Development',
    description: 'It is a procedure of conceiving, designing, documenting, testing, & malicious program fixing concerned in developing.',
  },
  {
    icon: iconMarketing,
    title: 'Digital Marketing',
    description: 'Digital marketing services is promotion of brand or services using digital platform units or the internet.',
  },
  {
    icon: iconSeo,
    title: 'Search Engine Optimization',
    description: 'SEO means Search Engine Optimization, and it’s the process used to optimize your website’s technical configuration, content relevance.',
  },
  {
    icon: iconSocial,
    title: 'Social Media Optimization',
    description: 'Social Media Optimization is the use of social media networks to manage and grow an organization’s message and online presence.',
  },
];

const ServiceProvide = () => {
  const navigate = useNavigate(); // ✅ initialize navigate

  const handleLearnMore = () => {
    navigate('/services'); // ✅ navigate to /service
  };

  return (
    <div className="service-provide-section">
      <div className="service-provide-header">
        <h5 className="service-provide-subtitle">WE PROVIDE</h5>
        <h2 className="service-provide-title">
          What We Provide <span className="service-provide-highlight">For You ?</span>
        </h2>
        <p className="service-provide-description">
          We have confidence in “Together We Grow” in light of the fact that developing together brings smiles.
          Pr WebStock is the main Software organization in Bhubaneswar, India. We give Software development,
          Website designing, Digital Marketing Services in Bhubaneswar (Odisha)
        </p>
      </div>

      <div className="Service-Provide-Grid">
        <div className="Service-Provide-All">
          {services.map((service, index) => (
            <div className="Service-Provide-Card" key={index}>
              <img src={service.icon} alt={service.title} className="Service-Provide-Icon" />
              <h3 className="Service-Provide-Title">{service.title}</h3>
              <p className="Service-Provide-Description">{service.description}</p>
              <button
                className="Service-Provide-Button"
                onClick={handleLearnMore}
              >
                LEARN MORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceProvide;
