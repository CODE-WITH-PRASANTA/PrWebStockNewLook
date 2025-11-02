import React, { useState } from "react";
import "./PostTeamMemberPreview.css";

interface TeamMember {
  id: number;
  profilePicture: string;
  name: string;
  designation: string;
  experience: string;
  instagram: string;
  facebook: string;
  twitter: string;
  whatsapp: string;
  phone: string;
  email: string;
}

const PostTeamMemberPreview: React.FC = () => {
  const [members] = useState<TeamMember[]>([
    {
      id: 1,
      profilePicture: "https://via.placeholder.com/150x150.png?text=John",
      name: "John Doe",
      designation: "Senior Developer",
      experience: "5 years",
      instagram: "https://instagram.com/johndoe",
      facebook: "https://facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      whatsapp: "+911234567890",
      phone: "9876543210",
      email: "john@example.com",
    },
    {
      id: 2,
      profilePicture: "https://via.placeholder.com/150x150.png?text=Sarah",
      name: "Sarah Williams",
      designation: "UI/UX Designer",
      experience: "3 years",
      instagram: "https://instagram.com/sarahw",
      facebook: "https://facebook.com/sarahw",
      twitter: "https://twitter.com/sarahw",
      whatsapp: "+919876543210",
      phone: "8765432109",
      email: "sarah@example.com",
    },
    {
      id: 3,
      profilePicture: "https://via.placeholder.com/150x150.png?text=David",
      name: "David Miller",
      designation: "Project Manager",
      experience: "7 years",
      instagram: "https://instagram.com/davidm",
      facebook: "https://facebook.com/davidm",
      twitter: "https://twitter.com/davidm",
      whatsapp: "+918888888888",
      phone: "9999999999",
      email: "david@example.com",
    },
  ]);

  return (
    <div className="PostTeamMemberPreview-container">
      <h2 className="PostTeamMemberPreview-title">Team Members Preview</h2>
      <div className="PostTeamMemberPreview-grid">
        {members.map((member) => (
          <div key={member.id} className="PostTeamMemberPreview-card">
            <img
              src={member.profilePicture}
              alt={member.name}
              className="PostTeamMemberPreview-img"
            />
            <h3 className="PostTeamMemberPreview-name">{member.name}</h3>
            <p className="PostTeamMemberPreview-role">{member.designation}</p>
            <p className="PostTeamMemberPreview-exp">
              Experience: {member.experience}
            </p>

            <div className="PostTeamMemberPreview-contact">
              <p>📞 {member.phone}</p>
              <p>📧 {member.email}</p>
            </div>

            <div className="PostTeamMemberPreview-socials">
              <a href={member.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href={member.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
              <a href={member.twitter} target="_blank" rel="noreferrer">
                Twitter
              </a>
              <a href={member.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostTeamMemberPreview;
