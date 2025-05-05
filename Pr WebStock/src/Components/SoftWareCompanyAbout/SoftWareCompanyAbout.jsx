import React from 'react';
import './SoftWareCompanyAbout.css';

// Assets
import SoftwareCompanyRightSide from '../../assets/software-company.webp';

const SoftWareCompanyAbout = () => {
  return (
    <section className="SoftwareCompany-About-Wrapper">
      <div className="SoftwareCompany-About-Container">
        <div className="SoftwareCompany-About-Left">
          <h2 className="SoftwareCompany-About-Title">
            As Being An <span>Software Company</span>
          </h2>
          <div className="SoftwareCompany-About-UnderlineBar">
            <span className="SoftwareCompany-About-Bar Blue"></span>
            <span className="SoftwareCompany-About-Bar Black"></span>
            <span className="SoftwareCompany-About-Bar Yellow"></span>
            <span className="SoftwareCompany-About-Bar Pink"></span>
          </div>
          <div className="SoftwareCompany-About-Content">
            <div className="SoftwareCompany-About-Column">
              <p>
                A software program whose major merchandise is a range of sorts of software, software program application technology, distribution, and software program software product development. They make up the software program company. AIONINNO Technologies Pvt Ltd is the main Software company in Bhubaneswar, India. We provide Software development, Website designing, Digital Marketing Services in Bhubaneswar ( Odisha ).
              </p>
            </div>
            <div className="SoftwareCompany-About-Column">
              <p>
                All the different web pages will be designed in line with the shape that was once accredited by way of the client. The website will be wholly examined for responsiveness, performance, and browser compatibility. Hosting the internet site on a tightly closed cloud and putting in an SSL certificate that offers the impenetrable lock to the website. The website will be optimized by way of compressing the images, minifying CSS and js to make the website load faster.
              </p>
            </div>
          </div>
        </div>
        <div className="SoftwareCompany-About-Right">
          <img src={SoftwareCompanyRightSide} alt="Software Company" />
        </div>
      </div>
    </section>
  );
};

export default SoftWareCompanyAbout;
