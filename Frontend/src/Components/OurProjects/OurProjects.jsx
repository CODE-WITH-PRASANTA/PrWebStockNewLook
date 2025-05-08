import React, { useEffect, useState } from 'react';
import './OurProjects.css';
import CardBg from '../../assets/Business-Growth-Bg.webp';
import { API_URL } from '../../Api'; // adjust path as needed

const OurProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/projects/all`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error('Error fetching projects:', err));
  }, []);


  return (
    <div className="our-projects-section">
      <h4 className="our-projects-subtitle">EXPLORE OUR PROJECTS</h4>
      <h2 className="our-projects-main-title">
        Innovative Business <span className="our-projects-highlight">Growth Solution Projects Completed By Us</span>
      </h2>
      <div className="our-projects-divider">
        <span></span><span></span><span></span>
      </div>

      <div className="our-projects-card-container">
        {projects.map((item, index) => (
          <div key={index} className="our-projects-card">
            <div className="our-projects-card-top" style={{ backgroundImage: `url(${CardBg})` }}>
              <div className="our-projects-icon-heart">🌐</div>
              <div className="our-projects-logo-circle">
                <img src={item.logo} alt={item.name} />
              </div>
            </div>
            <div className="our-projects-card-body">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="our-projects-btn">
                Visit Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProjects;
