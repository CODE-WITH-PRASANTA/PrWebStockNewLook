import React from 'react';
import './WhyChoose.css';

// Icons
import CoustmerFriendly from '../../assets/coustmer-friendly.webp';
import CompetitorAnalysis from '../../assets/compitatior analysis.webp';
import FlexibleCodeing from '../../assets/flexible-codeing.webp';
import ReportingAnalysis from '../../assets/reporting-analysis.webp';

const WhyChoose = () => {
  return (
    <div className="whychoose-container">
        <div className="full-whychoose-container">
      <div className="whychoose-content-left">
        <h4 className="whychoose-heading-small">WHY CHOOSE US?</h4>
        <h2 className="whychoose-heading-large">
          Why Choose <span className="whychoose-highlight">PR WEBSTOCK?</span>
        </h2>
        <hr className="whychoose-underline" />
        <p className="whychoose-paragraph">
          PR WEBSTOCK is the best software company in Bhubaneswar for those looking to enhance their website design at the best price, allowing them to take their business online effectively.
        </p>
        <p className="whychoose-paragraph">
          We pride ourselves on delivering quality products that make a difference. With experience across industries, we tailor every project to client needs and strive to deliver results we’re proud of.
        </p>
        <p className="whychoose-paragraph">
          We believe in “Together We Grow” because growth brings smiles. PR WEBSTOCK offers software development, web design, and digital marketing services in Bhubaneswar, India.
        </p>
      </div>

      <div className="whychoose-content-right">
        <div className="whychoose-feature-box">
          <img src={CoustmerFriendly} alt="Customer Friendly" className="whychoose-icon" />
          <p className="whychoose-feature-text">Customer Friendly</p>
        </div>
        <div className="whychoose-feature-box">
          <img src={CompetitorAnalysis} alt="Competitor Analysis" className="whychoose-icon" />
          <p className="whychoose-feature-text">Competitor Analysis</p>
        </div>
        <div className="whychoose-feature-box">
          <img src={FlexibleCodeing} alt="Flexible Coding" className="whychoose-icon" />
          <p className="whychoose-feature-text">Flexible Coding</p>
        </div>
        <div className="whychoose-feature-box">
          <img src={ReportingAnalysis} alt="Reporting & Analysis" className="whychoose-icon" />
          <p className="whychoose-feature-text">Reporting & Analysis</p>
        </div>
      </div>

      </div>
    </div>
  );
};

export default WhyChoose;
