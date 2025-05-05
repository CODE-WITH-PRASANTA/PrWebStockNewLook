import React from 'react';
import './About.css';

// Assets
import AboutRightImg from '../../assets/About-Head-img.webp';
import BgImg from '../../assets/About-Us-Bg-Img.webp';
import LeadingSoftwareCompany from '../../Components/LeadingSoftwareCompany/LeadingSoftwareCompany';
import SoftWareCompanyAbout from '../../Components/SoftWareCompanyAbout/SoftWareCompanyAbout';
import SuccessedingSection from '../../Components/SuccessedingSection/SuccessedingSection';
import ServiceSystem from '../../Components/ServiceSystem/ServiceSystem';
import TechnologyLanguage from '../../Components/TechnologyLanguage/TechnologyLanguage';

const About = () => {
  return (
  <>
    <section
      className="Main-About-Sec-Wrapper"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <div className="Main-About-Sec-Overlay">
        <div className="Main-About-Sec-Container">
          <div className="Main-About-Sec-Content">
            <div className="Main-About-Sec-Left">
              <h2 className="Main-About-Sec-Title">About Us</h2>
              <p className="Main-About-Sec-Description">
                We at <strong>'PR WEBSTOCK'</strong> promise to deliver customized and cost-effective Website Design Services. 
                Our expert team ensures efficiency, quality, and speed for any type of project.
                With a strong lineup of skilled Web Designers, we are equipped to meet your business needs.
              </p>
            </div>
            <div className="Main-About-Sec-Right">
              <img
                src={AboutRightImg}
                alt="About Section Visual"
                className="Main-About-Sec-Image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <LeadingSoftwareCompany />
    <SoftWareCompanyAbout />
    <SuccessedingSection />
    <ServiceSystem />
    <TechnologyLanguage />
  </>
  );
};

export default About;
