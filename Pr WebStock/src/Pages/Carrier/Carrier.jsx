import React from 'react';
import '../Carrier/Carrier.css';
import CarrierBackground from '../../assets/CarrierBackground.webp';

const Carrier = () => {
  return (
    <>
      <div className="carrier-contact-wrapper">
        <div className="carrier-contact-container">
          <div className="carrier-contact-left">
            <h2>Carrier</h2>
            <p>
              We help companies to focus on core business by taking over complete responsibility.
              We provide both black-box and white-box testing on demand.
            </p>
          </div>
          <div className="carrier-contact-right carrier-animate-float">
            <img src={CarrierBackground} alt="Contact Illustration" />
          </div>
        </div>
      </div>

      <div className="Carrier-card">
  <div className="Carrier-card-header">
    <h3>
      Business Development Executive – 
      <span>(Experience Desired: 1–3+ years)</span>
    </h3>
  </div>

  <div className="Carrier-card-body">
    <table className="Carrier-table">
      <tbody>
        <tr>
          <th>Salary Range</th>
          <td>₹10,000 – ₹15,000/month<br/><small>+ Incentives on Sales Per Lead Count</small></td>
          <th>Location</th>
          <td>Bhubaneswar / Mumbai</td>
        </tr>
        <tr>
          <th>Job Type</th>
          <td>Full Time</td>
          <th>Vacancy</th>
          <td>4 No's</td>
        </tr>
        <tr>
          <th>Skills Required</th>
          <td colSpan="3">
            Strong communication, Client relationship management, Market research, Sales & business development
          </td>
        </tr>
      </tbody>
    </table>

    <div className="Carrier-actions">
      <a href="https://wa.me/" className="Carrier-btn whatsapp">
        <i className="fab fa-whatsapp"></i> Whatsapp
      </a>
      <div className="Carrier-spacer" />
      <a href="#" className="Carrier-btn apply">
        <i className="fas fa-paper-plane"></i> Apply Now
      </a>
    </div>
  </div>
</div>

<div className="Carrier-card">
  <div className="Carrier-card-header">
    <h3>
      Frontend Developer – 
      <span>(Experience Desired: 1–2 years)</span>
    </h3>
  </div>

  <div className="Carrier-card-body">
    <table className="Carrier-table">
      <tbody>
        <tr>
          <th>Salary Range</th>
          <td>₹12,000 – ₹18,000/month<br/><small>+ Bonuses</small></td>
          <th>Location</th>
          <td>Remote / Bangalore</td>
        </tr>
        <tr>
          <th>Job Type</th>
          <td>Full Time</td>
          <th>Vacancy</th>
          <td>3 No's</td>
        </tr>
        <tr>
          <th>Skills Required</th>
          <td colSpan="3">
            Proficient in HTML, CSS, JavaScript, React.js, RESTful APIs, Responsive Design, Git & Version Control, Cross-browser debugging
          </td>
        </tr>
      </tbody>
    </table>

    <div className="Carrier-actions">
      <a href="https://wa.me/91XXXXXXXXXX" className="Carrier-btn whatsapp">
        <i className="fab fa-whatsapp"></i> Whatsapp
      </a>
      <div className="Carrier-spacer" />
      <a href="/apply" className="Carrier-btn apply">
        <i className="fas fa-paper-plane"></i> Apply Now
      </a>
    </div>
  </div>
</div>

               
    </>
  );
};

export default Carrier;
