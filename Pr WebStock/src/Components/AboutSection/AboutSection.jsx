import { useNavigate } from 'react-router-dom';
import './AboutSection.css'
import React from 'react';
import aboutusimg from '../../assets/about.webp'


const AboutSection = () => {
    const navigate = useNavigate();

    // Function to navigate to the Contact Us page
    const handleContactClick = () => {
        navigate('/contact');
    };

    
  return (
          <>
{/* About us page */}
<div className="about-section">
<div className="about-container">
            <h2 className="about-title">About Us</h2>
            <p className="about-mission">Our mission is Design the best websites around</p>
            <div className="about-content">
                <div className="about-text">
                    <h3>We're In The Devlopment Industry With In 2 Years Of Experience</h3>
                        <p>At PR-WEBSTOCK, we specialize in crafting user-friendly, visually appealing, and high-performing Websites & Apps tailored to your business needs. Combining technical excellence in web development with strategic digital marketing insights, we deliver complete solutions that help your brand stand out online.
                         Whether you're looking for a simple website or a fully customized web application, PR-WEBSTOCK ensures your digital presence is seamless, responsive, and optimized for success. We are committed to delivering quality, functionality, and results — empowering businesses to grow in the digital age.
                        Partner with PR-WEBSTOCK for dependable service, innovative design, and measurable performance. Let's build something impactful together.</p>
                    <div className="skills-section">
                        <h4>Professional Skills Work</h4>
                        <div className="skills">
                            {['Web Designing', 'App Designing', '! ADS & SEO', '3D Designing'].map((skill, index) => (
                                <div className="box" key={index}>
                                    <div className="bar">
                                        <canvas className="circle"></canvas>
                                        <span>{[95, 70, 95, 98][index]}%</span>
                                    </div>
                                    <p>{skill}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="about-image">
                    <img src={aboutusimg} alt="Profile" />
                    <div className="fl-about-img-content">
                        <h4>Prasanta Kumar Khuntia</h4>
                        <p>Co-Founder & Mern Stack Developer</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
  )
}

export default AboutSection