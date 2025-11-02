import React, { useState } from "react";
import "./OurProjects.css";
import CardBg from "../../assets/Business-Growth-Bg.webp";

const OurProjects = () => {
  // ✅ Dummy project data
  const [projects] = useState([
    {
      id: 1,
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      name: "PR Webstock CRM",
      desc: "A complete CRM system for managing clients, invoices, and reports with a responsive dashboard.",
      link: "https://prwebstock.com",
    },
    {
      id: 2,
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      name: "Azam Hitech Pvt. Ltd.",
      desc: "An advanced web solution for fintech and IT-based services with real-time project management.",
      link: "https://azamhitech.com",
    },
    {
      id: 3,
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg",
      name: "Softzix Task Manager",
      desc: "A task tracking system that helps developers and admins manage workflow and project updates.",
      link: "https://softzix.com",
    },
    {
      id: 4,
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      name: "DesignHub Portfolio",
      desc: "A creative portfolio platform for designers to showcase their work with custom UI and analytics.",
      link: "https://designhub.io",
    },
  ]);

  return (
    <div className="our-projects-section">
      <h4 className="our-projects-subtitle">EXPLORE OUR PROJECTS</h4>
      <h2 className="our-projects-main-title">
        Innovative Business{" "}
        <span className="our-projects-highlight">
          Growth Solution Projects Completed By Us
        </span>
      </h2>
      <div className="our-projects-divider">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="our-projects-card-container">
        {projects.map((item) => (
          <div key={item.id} className="our-projects-card">
            <div
              className="our-projects-card-top"
              style={{ backgroundImage: `url(${CardBg})` }}
            >
              <div className="our-projects-icon-heart">🌐</div>
              <div className="our-projects-logo-circle">
                <img src={item.logo} alt={item.name} />
              </div>
            </div>
            <div className="our-projects-card-body">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="our-projects-btn"
              >
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
