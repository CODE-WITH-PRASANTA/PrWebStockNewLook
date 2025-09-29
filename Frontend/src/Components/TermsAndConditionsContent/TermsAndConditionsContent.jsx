import React from "react";
import "./TermsAndConditionsContent.css";

const TermsAndConditionsContent = () => {
  return (
    <div className="terms-page">
      <div className="terms-header">
        <h2>Terms, Conditions & Privacy Policy</h2>
        <p>Effective Date: September 20, 2024</p>
      </div>

      <div className="terms-container">
        {/* Introduction */}
        <section className="terms-intro">
          <p>
            Welcome to <strong>PR-WEBSTOCK</strong>! By using our website (<a href="https://prwebstock.com">https://prwebstock.com</a>) and/or software services, you agree to comply with these Terms and Conditions and our Privacy Policy. The terms <strong>"we", "us", "our"</strong> refer to PR-WEBSTOCK, a software development company. The terms <strong>"you", "your", "user", "visitor"</strong> refer to anyone accessing our services.
          </p>
        </section>

        {/* Website and Software Usage */}
        <section className="terms-usage">
          <h3>1. Website and Software Usage</h3>
          <p>
            You agree to use our website, applications, and software in accordance with all applicable laws and these Terms. You may not misuse, copy, reverse engineer, or disrupt our services in any way.
          </p>
        </section>

        {/* Account & Security */}
        <section className="terms-account">
          <h3>2. Account & Security</h3>
          <p>
            If you create an account with us, you are responsible for maintaining the confidentiality of your login credentials. You agree to notify us immediately of any unauthorized use of your account. We are not liable for any loss or damage resulting from your failure to comply with these obligations.
          </p>
        </section>

        {/* Privacy Policy */}
        <section className="terms-privacy">
          <h3>3. Privacy Policy</h3>
          <p>
            We value your privacy. We collect, use, and store personal information only to provide, maintain, and improve our services. Personal data may include your name, email, contact information, usage data, and payment information. We do not sell your data to third parties.
          </p>
          <p>
            By using our services, you consent to the collection and use of your information as described here. You may request deletion of your data by contacting us at <strong>prwebstock.com@gmail.com</strong>.
          </p>
        </section>

        {/* Intellectual Property */}
        <section className="terms-copyright">
          <h3>4. Intellectual Property</h3>
          <p>
            All content, design, logos, software code, graphics, and documentation are owned by or licensed to PR-WEBSTOCK. Unauthorized use, reproduction, or distribution of our intellectual property is strictly prohibited.
          </p>
        </section>

        {/* User Responsibility */}
        <section className="terms-responsibility">
          <h3>5. User Responsibility</h3>
          <p>
            You are responsible for using our software safely and lawfully. PR-WEBSTOCK is not liable for any direct, indirect, or consequential loss arising from your use of our services.
          </p>
        </section>

        {/* Payments & Transactions */}
        <section className="terms-transactions">
          <h3>6. Payments & Transactions</h3>
          <p>
            All transactions processed through our platform must comply with applicable banking and financial regulations. PR-WEBSTOCK is not liable for failed or unauthorized transactions due to user error or external issues.
          </p>
        </section>

        {/* External Links */}
        <section className="terms-links">
          <h3>7. External Links</h3>
          <p>
            Our website or software may contain links to third-party websites for convenience. We are not responsible for the content, privacy practices, or security of these external websites.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section className="terms-liability">
          <h3>8. Limitation of Liability</h3>
          <p>
            PR-WEBSTOCK is not responsible for any indirect, incidental, or consequential damages arising from the use of our website, software, or services, to the fullest extent permitted by law.
          </p>
        </section>

        {/* Governing Law */}
        <section className="terms-dispute">
          <h3>9. Governing Law</h3>
          <p>
            These Terms and Privacy Policy are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in India.
          </p>
        </section>

        {/* Changes */}
        <section className="terms-changes">
          <h3>10. Changes to Terms</h3>
          <p>
            We may update these Terms and Privacy Policy from time to time. Users are encouraged to review this page periodically for changes. Continued use of our services constitutes acceptance of updated terms.
          </p>
        </section>

        {/* Contact */}
        <section className="terms-contact">
          <h3>11. Contact Us</h3>
          <p>
            For questions about these Terms or our Privacy Policy, contact us at <strong>prwebstock.com@gmail.com</strong>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditionsContent;
