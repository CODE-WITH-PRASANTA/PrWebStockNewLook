import React from "react";
import "./PostTeamMemberPreview.css";

interface TeamMember {
  id: number;
  profilePicture: string;
  name: string;
  designation: string;
  experience: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
  whatsapp?: string;
  phone?: string;
  email?: string;
}

interface PreviewProps {
  member: TeamMember;
  onClose: () => void;
}

const PostTeamMemberPreview: React.FC<PreviewProps> = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <div className="preview-overlay">
      <div className="preview-card">
        {/* Close Button */}
        <button className="preview-close" onClick={onClose}>
          ✕
        </button>

        {/* Header Section */}
        <div className="preview-header">
          <img
            src={member.profilePicture || "https://via.placeholder.com/120"}
            alt={member.name}
            className="preview-avatar"
          />
          <div className="preview-info">
            <h2>{member.name}</h2>
            <p className="preview-designation">{member.designation}</p>
            <p className="preview-experience">{member.experience}</p>
          </div>
        </div>

        {/* Contact Details */}
        <div className="preview-contact">
          <h4>Contact Details</h4>
          <p>
            📞 <strong>Phone:</strong> {member.phone || "N/A"}
          </p>
          <p>
            📧 <strong>Email:</strong> {member.email || "N/A"}
          </p>
        </div>

        {/* Social Links */}
        <div className="preview-social">
          <h4>Social Links</h4>
          <div className="social-links">
            {member.instagram && (
              <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            )}
            {member.facebook && (
              <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            )}
            {member.twitter && (
              <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            )}
            {member.whatsapp && (
              <a
                href={`https://wa.me/${member.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostTeamMemberPreview;
 