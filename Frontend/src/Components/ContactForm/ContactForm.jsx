import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div>
        <div className="Contact-Form-wrapper">
      <div className="Contact-Form-container">
        {/* Contact Form Section */}
        <div className="Contact-Form-box">
          <h2 className="Contact-Form-heading">Stay Connected with Us</h2>
          <form className="Contact-Form-element">
            <div className="Contact-Form-row">
              <input type="text" placeholder="Name *" required />
              <input type="email" placeholder="Email *" required />
            </div>
            <div className="Contact-Form-row">
              <input type="tel" placeholder="Phone *" required />
              <input type="text" placeholder="Website *" required />
            </div>
            <div className="Contact-Form-row">
              <input type="text" placeholder="Country *" required />
              <select required>
                <option value="">--Select Request Type--</option>
                <option value="general">General Inquiry</option>
                <option value="support">Support</option>
                <option value="partnership">Partnership</option>
              </select>
            </div>
            <textarea placeholder="How can we help you?"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Google Map Section */}
        <div className="Contact-Form-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.530859818957!2d85.82856411533105!3d20.297783986399222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909099114ab05%3A0x2e6657e6600b4d8b!2sAIONINNO%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1638182431311!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            title="Company Location"
          ></iframe>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ContactForm