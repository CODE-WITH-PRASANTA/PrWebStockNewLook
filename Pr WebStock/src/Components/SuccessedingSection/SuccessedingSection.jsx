import React from 'react';
import './SuccessedingSection.css';
import SuccessedImgRight from '../../assets/SuccesedImg.webp';

const SuccessedingSection = () => {
  return (
    <section className="Success-Section-Wrapper">
      <div className="Success-Section-Container">
        <div className="Success-Section-Left">
          <h2 className="Success-Section-Title">
            We Can Help You <span>Succeed</span>
          </h2>
          <div className="Success-Section-Bar">
            <span className="Success-Section-Bar-Item Red"></span>
            <span className="Success-Section-Bar-Item Yellow"></span>
            <span className="Success-Section-Bar-Item Green"></span>
            <span className="Success-Section-Bar-Item Blue"></span>
          </div>
          <p className="Success-Section-Description">
            PR WEBSTOCK is the leading Software Company in Bhubaneswar to attain the consumer who desires to enhance their internet site at the best fees so that they can deal with their enterprise online. Keeping all these elements in the idea we commenced to supply the internet site as per their necessities at a very less expensive price. We accept this as true in “Together We Grow” due to the fact developing collectively brings smiles. PR WEBSTOCK is the main software enterprise in Bhubaneswar, India. We supply software development, website design, digital marketing services in Bhubaneswar (Odisha).
          </p>
          <div className="Success-Section-List">
            <div>
              <p>Discussion</p>
              <p>Sketch</p>
              <p>Approval</p>
              <p>Design</p>
            </div>
            <div>
              <p>Web Design</p>
              <p>Testing</p>
              <p>Hosting</p>
              <p>Optimization</p>
            </div>
          </div>
        </div>
        <div className="Success-Section-Right">
          <img src={SuccessedImgRight} alt="Success Illustration" />
        </div>
      </div>
    </section>
  );
};

export default SuccessedingSection;
