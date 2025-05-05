import React from 'react'
import './OurProjects.css'

// Background img of each Card
import CardBg from '../../assets/Business-Growth-Bg.webp'

// Logo images (replace these with actual paths)
import LeadTrackerLogo from '../../assets/Lead Logo.png'
import HotelERPLogo from '../../assets/Lead Logo.png'
import HostelManagementLogo from '../../assets/Lead Logo.png'
import LibraryERPLogo from '../../assets/Lead Logo.png'

const productData = [
  {
    title: 'Lead Tracker CRM',
    description: 'Discover Aioninno Technologies Pvt. Ltd, your go-to Lead Tracker CRM in India. Streamline your sales....',
    logo: LeadTrackerLogo,
    link: 'https://www.example.com/lead-tracker-crm',
  },
  {
    title: 'Hotel Management',
    description: 'Aioninno Technologies Pvt. Ltd., the leading provider of innovative hotel management solutions in India....',
    logo: HotelERPLogo,
    link: 'https://www.example.com/hotel-management',
  },
  {
    title: 'Hostel Management',
    description: 'Transform your hostel experience with Aioninno Technologies Pvt. Ltd! We specialize in innovative hostel management...',
    logo: HostelManagementLogo,
    link: 'https://www.example.com/hostel-management',
  },
  {
    title: 'Library management ERP',
    description: 'Organize, track, and manage library resources for seamless access and lending...',
    logo: LibraryERPLogo,
    link: 'https://www.example.com/library-management-erp',
  },
]

const OurProjects = () => {
  return (
    <div className="our-projects-section">
      <h4 className="our-projects-subtitle">EXPLORE OUR PRODUCTS</h4>
      <h2 className="our-projects-main-title">
        Innovative Business <span className="our-projects-highlight">Growth Solution Products</span>
      </h2>
      <div className="our-projects-divider">
        <span></span><span></span><span></span>
      </div>

      <div className="our-projects-card-container">
        {productData.map((item, index) => (
          <div key={index} className="our-projects-card">
            <div className="our-projects-card-top" style={{ backgroundImage: `url(${CardBg})` }}>
              <div className="our-projects-icon-heart">🌐</div>
              <div className="our-projects-logo-circle">
                <img src={item.logo} alt={item.title} />
              </div>
            </div>
            <div className="our-projects-card-body">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="our-projects-btn">
                Visit Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurProjects
