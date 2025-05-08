import React from 'react';
import './WebDesignCompany.css';

const WebDesignCompany = () => {
  return (
    <section className="webdesign-company-section">
      <div className="webdesign-company-container">
        {/* Left Content */}
        <div className="webdesign-company-content">
          <h2>
            Searching for a <span className="webdesign-company-highlight">Website Design Company</span><br />in Bhubaneswar, Odisha?
          </h2>
          <p>
          PR WEBSTOCK , based in Bhubaneswar, is a leading website design company in Bhubaneswar that specializes in creating visually stunning and user-friendly websites that not only captivate your audience but also drive results. In this blog post, we will explore the top reasons why partnering with Aioninno Technologies can take your online presence to new heights and help you establish a strong brand identity in the digital world.
          </p>
          <p>
          PR WEBSTOCK : A Leading Website Design Company in Bhubaneswar In this digital era, having a well-designed website is crucial for any business looking to establish a strong online presence. If you're searching for a reputable and reliable website design company in Bhubaneswar, Odisha, look no further than PR WEBSTOCK . With a stellar reputation and a track record of delivering exceptional web design services, Aioninno Technologies is the go-to choice for businesses seeking quality at an affordable cost.
          </p>

          <ul className="webdesign-company-feature-list">
            <li>Mobile-Friendly Websites</li>
            <li>User-Friendly Interfaces</li>
            <li>SEO Optimized Designs</li>
          </ul>

          <p>
          Your website acts as a virtual storefront, representing your brand and showcasing your products or services to potential customers. It is often the first point of contact for users searching for information about your business. Therefore, it is essential to invest in professional web design to create a positive and lasting impression
          </p>
          <p>
          A well-designed website goes beyond just aesthetics. It plays a pivotal role in attracting and engaging visitors, driving conversions, and establishing credibility. When users visit your website, they should be greeted with a visually appealing layout, easy navigation, and a seamless user experience. This not only enhances the overall user satisfaction but also encourages them to stay longer and explore more. Furthermore, a professionally designed website communicates your brand's values, professionalism, and attention to detail. It helps build trust and credibility among potential customers, making them more likely to choose your business
          </p>
        </div>

        {/* Right Enquiry Form */}
        <div className="webdesign-company-form">
          <div className="webdesign-company-form-box">
            <h3>Enquire Now</h3>
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone Number" required />
              <input type="text" placeholder="Select Services" required />
              <textarea placeholder="Message" rows="4" required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDesignCompany;
