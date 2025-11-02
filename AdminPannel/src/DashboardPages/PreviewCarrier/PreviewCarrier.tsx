import React from "react";
import "./PreviewCarrier.css";
import { MapPin, Briefcase, Users, Trash2, Edit } from "lucide-react";

interface JobData {
  id: number;
  designation: string;
  experience: string;
  salary: string;
  location: string;
  type: string;
  vacancies: string;
  skills: string;
  email: string;
  whatsapp: string;
  published: boolean;
}

const PreviewCarrier: React.FC = () => {
  // ✅ Demo data for now
  const demoJobs: JobData[] = [
    {
      id: 1,
      designation: "Frontend Developer",
      experience: "2-3 Years",
      salary: "₹40,000 - ₹60,000",
      location: "Bangalore",
      type: "Full-time",
      vacancies: "3",
      skills: "React, TypeScript, CSS",
      email: "hr@company.com",
      whatsapp: "+91 9876543210",
      published: true,
    },
    {
      id: 2,
      designation: "Backend Engineer",
      experience: "3+ Years",
      salary: "₹50,000 - ₹70,000",
      location: "Mumbai",
      type: "Full-time",
      vacancies: "2",
      skills: "Node.js, MongoDB, Express",
      email: "jobs@company.com",
      whatsapp: "+91 9098765432",
      published: false,
    },
    {
      id: 3,
      designation: "UI/UX Designer",
      experience: "1-2 Years",
      salary: "₹30,000 - ₹45,000",
      location: "Remote",
      type: "Internship",
      vacancies: "1",
      skills: "Figma, Adobe XD, Wireframing",
      email: "design@company.com",
      whatsapp: "+91 9988776655",
      published: true,
    },
  ];

  return (
    <div className="previewcarrier-container">
      <h2 className="previewcarrier-title">Preview Job Openings</h2>
      <p className="previewcarrier-subtitle">
        These are demo job listings. Later this will dynamically fetch from{" "}
        <strong>PostCarrier.tsx</strong>.
      </p>

      <div className="previewcarrier-grid">
        {demoJobs.map((job) => (
          <div
            key={job.id}
            className={`previewcarrier-card ${
              job.published ? "published" : "unpublished"
            }`}
          >
            <div className="previewcarrier-card-header">
              <h3>{job.designation}</h3>
              <span
                className={`status-tag ${
                  job.published ? "status-published" : "status-unpublished"
                }`}
              >
                {job.published ? "Published" : "Unpublished"}
              </span>
            </div>

            <p className="previewcarrier-type">{job.type}</p>

            <div className="previewcarrier-info">
              <p>
                <Briefcase size={16} /> <strong>Experience:</strong>{" "}
                {job.experience}
              </p>
              <p>
                <Users size={16} /> <strong>Vacancies:</strong> {job.vacancies}
              </p>
              <p>
                <MapPin size={16} /> <strong>Location:</strong> {job.location}
              </p>
            </div>

            <div className="previewcarrier-skills">
              <strong>Skills:</strong> {job.skills}
            </div>

            <div className="previewcarrier-contact">
              <p>
                <strong>Email:</strong> {job.email}
              </p>
              <p>
                <strong>WhatsApp:</strong> {job.whatsapp}
              </p>
              <p>
                <strong>Salary:</strong> {job.salary}
              </p>
            </div>

            <div className="previewcarrier-actions">
              <button className="btn-edit">
                <Edit size={14} /> Edit
              </button>
              <button className="btn-delete">
                <Trash2 size={14} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviewCarrier;
