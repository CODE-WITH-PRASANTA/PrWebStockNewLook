import React, { useState } from "react";
import "./PreviewTeamMember.css";

interface TeamMember {
  id: number;
  profilePicture: string;
  name: string;
  designation: string;
  salary: string;
  experience: string;
  published: boolean;
  monthStatus: Record<string, boolean>;
}

const PreviewTeamMember: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<string>("November");

  // ✅ Demo data for preview
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      id: 1,
      profilePicture: "https://via.placeholder.com/150",
      name: "John Doe",
      designation: "Frontend Developer",
      salary: "$4000/month",
      experience: "3 years",
      published: true,
      monthStatus: { November: true, October: false, September: true },
    },
    {
      id: 2,
      profilePicture: "https://via.placeholder.com/150",
      name: "Jane Smith",
      designation: "UI/UX Designer",
      salary: "$3800/month",
      experience: "2 years",
      published: false,
      monthStatus: { November: false, October: true, September: true },
    },
    {
      id: 3,
      profilePicture: "https://via.placeholder.com/150",
      name: "Michael Lee",
      designation: "Backend Engineer",
      salary: "$5000/month",
      experience: "4 years",
      published: true,
      monthStatus: { November: true, October: true, September: false },
    },
  ]);

  const handleEdit = (id: number) => alert(`Editing member ID: ${id}`);
  const handleDelete = (id: number) =>
    setTeamMembers((prev) => prev.filter((m) => m.id !== id));
  const handleTogglePublish = (id: number) =>
    setTeamMembers((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, published: !m.published } : m
      )
    );

  return (
    <div className="preview-container">
      <div className="preview-header">
        <h2>Team Members Preview ({selectedMonth})</h2>
        <select
          className="month-selector"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="November">November</option>
          <option value="October">October</option>
          <option value="September">September</option>
        </select>
      </div>

      <div className="team-grid">
        {teamMembers.length > 0 ? (
          teamMembers.map((member) => {
            const isPaid = member.monthStatus[selectedMonth];
            return (
              <div
                key={member.id}
                className={`team-card ${
                  member.published ? "published" : "unpublished"
                }`}
              >
                <div className="team-photo">
                  <img src={member.profilePicture} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="role">{member.designation}</p>
                  <p className="salary">{member.salary}</p>
                  <p className="experience">Experience: {member.experience}</p>
                </div>
                <div className="team-status">
                  <span className={isPaid ? "paid" : "unpaid"}>
                    {isPaid ? "Paid" : "Unpaid"} in {selectedMonth}
                  </span>
                </div>
                <div className="team-actions">
                  <button className="edit" onClick={() => handleEdit(member.id)}>
                    Edit
                  </button>
                  <button
                    className="delete"
                    onClick={() => handleDelete(member.id)}
                  >
                    Delete
                  </button>
                  <button
                    className={`publish ${
                      member.published ? "active" : "inactive"
                    }`}
                    onClick={() => handleTogglePublish(member.id)}
                  >
                    {member.published ? "Published" : "Unpublished"}
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="no-data">No team members available.</p>
        )}
      </div>
    </div>
  );
};

export default PreviewTeamMember;
