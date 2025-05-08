import React from 'react';
import './TechnologyLanguage.css';

// Assets
import androidlogo from '../../assets/android-logo.webp';
import htmlLogo from '../../assets/html-logo.webp';
import csslogo from '../../assets/css-logo.webp';
import jslogo from '../../assets/js-logo.webp';
import mernstacklogo from '../../assets/mernstack-logo-png.webp';
import ioslogo from '../../assets/ios-logo.webp';
import bootstaraplogo from '../../assets/bootstarap-logo.webp';
import codeigniterlogo from '../../assets/code-igniter-logo.webp';

const technologies = [
  { logo: htmlLogo, title: 'HTML' },
  { logo: csslogo, title: 'CSS' },
  { logo: jslogo, title: 'JS' },
  { logo: mernstacklogo, title: 'MERN Stack' },
  { logo: bootstaraplogo, title: 'Bootstrap' },
  { logo: androidlogo, title: 'Android' },
  { logo: ioslogo, title: 'IOS' },
  { logo: codeigniterlogo, title: 'CodeIgniter' },
];

const TechnologyLanguage = () => {
  return (
    <section className="Technology-language-section">
      <div className="Technology-language-heading">
        <p className="Technology-language-subtitle">WEB TECHNOLOGIES</p>
        <h2 className="Technology-language-title">
          Our Advanced <span className="Technology-language-highlight">Web Technologies</span>
        </h2>
        <div className="Technology-language-underline">
          <span className="Technology-language-line red"></span>
          <span className="Technology-language-line cyan"></span>
          <span className="Technology-language-line yellow"></span>
        </div>
      </div>

      <div className="Technology-language-grid">
      {technologies.map((tech, index) => (
  <div
    className="Technology-language-card"
    key={index}
    style={{ animationDelay: `${index * 0.3}s` }}
  >
    <img src={tech.logo} alt={tech.title} className="Technology-language-logo" />
    <p className="Technology-language-techTitle">{tech.title}</p>
  </div>
))}

      </div>
    </section>
  );
};

export default TechnologyLanguage;
