import React, { useState } from 'react';
import '../Carrier/Carrier.css';
import CarrierBackground from '../../assets/CarrierBackground.webp';
import Swal from 'sweetalert2';

const Carrier = () => {
  // ✅ Dummy Job Data
  const [jobs] = useState([
    {
      _id: 1,
      jobPosition: "Frontend Developer",
      experienceFrom: 1,
      experienceTo: 3,
      salaryFrom: 15000,
      salaryTo: 30000,
      jobType: "Developer",
      vacancy: 2,
      location: "Bhubaneswar, Odisha",
      skillsRequired: "React.js, JavaScript (ES6+), HTML5, CSS3, REST API, Git",
      whatsappNumber: "917205995722",
    },
    {
      _id: 2,
      jobPosition: "Backend Developer",
      experienceFrom: 2,
      experienceTo: 4,
      salaryFrom: 20000,
      salaryTo: 40000,
      jobType: "Developer",
      vacancy: 1,
      location: "Remote / Hybrid",
      skillsRequired: "Node.js, Express.js, MongoDB, JWT Authentication, REST API Design",
      whatsappNumber: "917205995722",
    },
    {
      _id: 3,
      jobPosition: "Digital Marketing Executive",
      experienceFrom: 0,
      experienceTo: 2,
      salaryFrom: 10000,
      salaryTo: 20000,
      jobType: "Marketing",
      vacancy: 3,
      location: "Cuttack, Odisha",
      skillsRequired: "SEO, Google Ads, Social Media Marketing, Content Writing, Canva",
      whatsappNumber: "917205995722",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    qualification: '',
    resume: null,
  });

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your application has been submitted successfully!",
      showConfirmButton: false,
      timer: 1500
    });

    setShowForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      qualification: '',
      resume: null,
    });
  };

  return (
    <>
      {/* --- Header Section --- */}
      <div className="carrier-contact-wrapper">
        <div className="carrier-contact-container">
          <div className="carrier-contact-left">
            <h2>Career Opportunities</h2>
            <p>
              Explore exciting opportunities with us!  
              Join a growing team that values creativity, innovation, and technical excellence.
            </p>
          </div>
          <div className="carrier-contact-right carrier-animate-float">
            <img src={CarrierBackground} alt="Career Illustration" />
          </div>
        </div>
      </div>

      {/* --- Job Cards --- */}
      {jobs.map((job) => (
        <div key={job._id} className="Carrier-card">
          <div className="Carrier-card-header">
            <h3>
              {job.jobPosition} – 
              <span>(Experience Desired: {job.experienceFrom}–{job.experienceTo}+ years)</span>
            </h3>
          </div>

          <div className="Carrier-card-body">
            <table className="Carrier-table">
              <tbody>
                <tr>
                  <th>Salary Range</th>
                  <td>
                    ₹{job.salaryFrom} – ₹{job.salaryTo}/month
                    <br />
                    <small>
                      + {job.jobType === 'Sales'
                        ? 'Incentives on Sales Per Lead Count'
                        : 'Performance Bonuses'}
                    </small>
                  </td>
                  <th>Location</th>
                  <td>{job.location}</td>
                </tr>
                <tr>
                  <th>Job Type</th>
                  <td>{job.jobType}</td>
                  <th>Vacancy</th>
                  <td>{job.vacancy} No's</td>
                </tr>
                <tr>
                  <th>Skills Required</th>
                  <td colSpan="3">{job.skillsRequired}</td>
                </tr>
              </tbody>
            </table>

            <div className="Carrier-actions">
              <a
                href={`https://wa.me/${job.whatsappNumber}?text=${encodeURIComponent(
                  `Hi, I am interested in this role: ${job.jobPosition}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="Carrier-btn whatsapp"
              >
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
              <div className="Carrier-spacer" />
              <button
                onClick={() => handleApplyClick(job)}
                className="Carrier-btn apply"
              >
                <i className="fas fa-paper-plane"></i> Apply Now
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* --- Apply Form Modal --- */}
      {showForm && (
        <div className="Carrier-modal-overlay">
          <div className="Carrier-modal">
            <h3>Apply for {selectedJob?.jobPosition}</h3>
            <form onSubmit={handleSubmit} className="Carrier-form-grid">
              <div className="Carrier-form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  required
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="Carrier-form-row">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Phone Number"
                  required
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Enter Location"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="Carrier-form-row single">
                <input
                  type="text"
                  name="qualification"
                  placeholder="Enter Qualification"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="Carrier-form-row single">
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="Carrier-modal-actions">
                <button type="submit" className="Carrier-btn submit">
                  Submit
                </button>
                <button
                  type="button"
                  className="Carrier-btn cancel"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Carrier;
