import React from 'react';
import './WebWork.css';

// Assets
import WebWorkRightIm from '../../assets/web-work.webp';
import WebDesignCompany from '../../Components/WebDesignCompany/WebDesignCompany';
import ProcessWebsite from '../../Components/ProcessWebsite/ProcessWebsite';
import ResponsiveDesign from '../../Components/ResponsiveDesign/ResponsiveDesign';
import DevlopmentProcess from '../../Components/DevlopmentProcess/DevlopmentProcess';
import TechnologyLanguage from '../../Components/TechnologyLanguage/TechnologyLanguage';
import CommunicateForm from '../../Components/CommunicateForm/CommunicateForm';

const WebWork = () => {
  return (
    <>
    <section className="web-work-section">
      <div className="web-work-wrapper">
        <div className="web-work-content">
          <h2 className="web-work-heading">Website Design</h2>
          <p className="web-work-description">
            Looking for the best website design company in Bhubaneswar, Odisha?
            Look no further than PR WEBSTOCK . We are a leading
            web design company that offers top-notch website design services.
            Trust us to create a stunning website for your business.
          </p>
        </div>
        <div className="web-work-illustration">
          <img src={WebWorkRightIm} alt="Website Design Illustration" className="web-work-image" />
        </div>
      </div>
    </section>

    <WebDesignCompany />
    <ProcessWebsite />
    <ResponsiveDesign />
    <DevlopmentProcess />
    <TechnologyLanguage />
    <CommunicateForm />
   </>
  );
};

export default WebWork;
