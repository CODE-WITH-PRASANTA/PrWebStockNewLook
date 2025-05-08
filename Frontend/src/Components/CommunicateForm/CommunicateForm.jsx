import React from 'react';
import './CommunicateForm.css';
import {
  FaHome,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';

const CommunicateForm = () => {
  return (
    <div className="Communicate-Form-Container">
      <div className="Communicate-Form-FormWrapper">
        <h2 className="Communicate-Form-Title">Communicate with us</h2>
        <p className="Communicate-Form-Description">
          If you have any questions or doubts about the activities, programs or any other related matter of "Unique Records of Universe" and DPKHRC Trust, please write to us. We look forward to responding to your queries promptly and comprehensively.
        </p>
        <form className="Communicate-Form-Form">
          <div className="Communicate-Form-Row">
            <input type="text" placeholder="Your Name" className="Communicate-Form-Input" />
            <input type="email" placeholder="Email Address" className="Communicate-Form-Input" />
          </div>
          <div className="Communicate-Form-Row">
            <input type="text" placeholder="Phone Number" className="Communicate-Form-Input" />
            <input type="text" placeholder="Address" className="Communicate-Form-Input" />
          </div>
          <textarea placeholder="Write here message" className="Communicate-Form-Textarea"></textarea>
          <button type="submit" className="Communicate-Form-Button">Submit</button>
        </form>
      </div>

      <div className="Communicate-Form-InfoWrapper">
        <h2 className="Communicate-Form-Title">Contact with us</h2>
        <p className="Communicate-Form-Description">
          You can correspond with us at our office address. You can contact us directly on our mobile number or write to our email ID. Our association with you is our top priority.
        </p>
        <div className="Communicate-Form-Details">
  <div className="Communicate-Form-DetailItem">
    <FaHome className="Communicate-Form-Icon" />
    <span>At- Nexus Esplanade , Bhubaneswar Unit No. 32, 721</span>
  </div>
  <div className="Communicate-Form-DetailItem">
    <FaPhoneAlt className="Communicate-Form-Icon" />
    <span>+91 6372545244</span>
  </div>
  <div className="Communicate-Form-DetailItem">
    <FaEnvelope className="Communicate-Form-Icon" />
    <span>prwebstock.com@gmail.com</span>
  </div>
  <div className="Communicate-Form-DetailItem">
    <FaWhatsapp className="Communicate-Form-Icon" />
    <span>+91 7205995722 (WhatsApp)</span>
  </div>
  {/* <div className="Communicate-Form-DetailItem">
    <FaTelegramPlane className="Communicate-Form-Icon" />
    <span>@prasantak (Telegram)</span>
  </div> */}
</div>

      </div>
    </div>
  );
};

export default CommunicateForm;
