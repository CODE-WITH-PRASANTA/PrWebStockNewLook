import React, { useState } from 'react';
import './CreateJob.css';
import { API_URL } from '../../Api'; 

const CreateJob = () => {
  const [job, setJob] = useState({
    jobPosition: '',
    experienceFrom: '',
    experienceTo: '',
    salaryFrom: '',
    salaryTo: '',
    location: '',
    jobType: '',
    vacancy: '',
    dateOfPublish: '',
    skillsRequired: '',
    whatsappNumber: '',
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/jobs/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(job),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Job created successfully:', data);
        alert('Job created successfully!');
      } else {
        console.error('Error creating job:', data);
        alert('Error creating job: ' + data.message);
      }
    } catch (error) {
      console.error('Error creating job:', error);
      alert('Error creating job: ' + error.message);
    }
  };
  return (
    <div className="job-form-wrapper">
      <h2 className="job-form-title">Create New Job Posting</h2>
      <form className="job-form" onSubmit={handleSubmit}>

        <div className="job-form-row">
          <div className="job-form-group">
            <label className="job-form-label">Job Position</label>
            <input type="text" name="jobPosition" className="job-form-input" placeholder="Enter job position" value={job.jobPosition} onChange={handleChange} />
          </div>
        </div>

        <div className="job-form-row">
          <div className="job-form-group">
            <label className="job-form-label">Experience From (Years)</label>
            <input type="number" min="0" name="experienceFrom" className="job-form-input" placeholder="0" value={job.experienceFrom} onChange={handleChange} />
          </div>
          <div className="job-form-group">
            <label className="job-form-label">Experience To (Years)</label>
            <input type="number" min="0" name="experienceTo" className="job-form-input" placeholder="5" value={job.experienceTo} onChange={handleChange} />
          </div>
        </div>

        <div className="job-form-row">
          <div className="job-form-group">
            <label className="job-form-label">Salary Range From (₹)</label>
            <input type="number" min="0" name="salaryFrom" className="job-form-input" placeholder="20000" value={job.salaryFrom} onChange={handleChange} />
          </div>
          <div className="job-form-group">
            <label className="job-form-label">Salary Range To (₹)</label>
            <input type="number" min="0" name="salaryTo" className="job-form-input" placeholder="50000" value={job.salaryTo} onChange={handleChange} />
          </div>
        </div>

        <div className="job-form-row">
          <div className="job-form-group">
            <label className="job-form-label">Location</label>
            <input type="text" name="location" className="job-form-input" placeholder="Job location" value={job.location} onChange={handleChange} />
          </div>
          <div className="job-form-group">
            <label className="job-form-label">Job Type</label>
            <select name="jobType" className="job-form-input" value={job.jobType} onChange={handleChange}>
              <option value="">Select Job Type</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
        </div>

        <div className="job-form-row">
          <div className="job-form-group">
            <label className="job-form-label">Vacancy</label>
            <input type="number" min="1" name="vacancy" className="job-form-input" placeholder="Number of vacancies" value={job.vacancy} onChange={handleChange} />
          </div>
          <div className="job-form-group">
            <label className="job-form-label">Date of Publish</label>
            <input type="date" name="dateOfPublish" className="job-form-input" value={job.dateOfPublish} onChange={handleChange} />
          </div>
        </div>

        <div className="job-form-row">
          <div className="job-form-group">
            <label className="job-form-label">Skills Required</label>
            <input type="text" name="skillsRequired" className="job-form-input" placeholder="e.g. React, Node.js, MongoDB" value={job.skillsRequired} onChange={handleChange} />
          </div>
        </div>

        <div className="job-form-row">
          <div className="job-form-group">
            <label className="job-form-label">WhatsApp Number</label>
            <input type="tel" maxLength="10" name="whatsappNumber" className="job-form-input" placeholder="Enter 10-digit number" value={job.whatsappNumber} onChange={handleChange} />
          </div>
        </div>

        <button type="submit" className="job-form-submit">Post Job</button>
      </form>
    </div>
  );
};

export default CreateJob;