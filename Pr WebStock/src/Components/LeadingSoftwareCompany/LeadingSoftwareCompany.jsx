import React from 'react';
import './LeadingSoftwareCompany.css';


// Assets
import LeadingSoftwareleftImg from '../../assets/Leading-Software-Company.webp';

const LeadingSoftwareCompany = () => {
  return (
    <section className="leading-software-wrapper">
      <div className="leading-software-container">
        <div className="leading-software-left">
          <img src={LeadingSoftwareleftImg} alt="Leading Software" />
        </div>
        <div className="leading-software-right">
          <h2 className="leading-software-title">
            Leading Software Company– <span>PR WEBSTOCK</span>
          </h2>
          <div className="underline-lead-bar">
            <span className="lead-bar blue"></span>
            <span className="lead-bar green"></span>
            <span className="lead-bar pink"></span>
            <span className="lead-bar red"></span>
          </div>
          <p className="leading-software-description">
            PR-WEBSTOCK is a Leading Software company in Bhubaneswar, India. <br />
            We Provide Software development, <strong>Website design</strong>, SEO, Mobile apps offerings in Bhubaneswar ( Odisha ).<br />
            We Offer quality software program development, mobile software development, Mobile apps services, stipulated time given,
            exploring new strategy, web solutions, software program companies, software program development, internet development,
            consulting services, development services, website design, web applications, software development, website design. <br />
            We are the best software company in Bhubaneswar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadingSoftwareCompany;
