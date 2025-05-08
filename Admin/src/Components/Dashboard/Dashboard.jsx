import React from 'react';
import './Dashboard.css';
import {
  FileText,
  Briefcase,
  CheckCircle,
  Package,
  Star,
  Trash2
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Posted Blogs', value: 12, icon: <FileText size={28} />, color: '#4e73df' },
    { label: 'Jobs Posted', value: 7, icon: <Briefcase size={28} />, color: '#1cc88a' },
    { label: 'Projects Done', value: 18, icon: <CheckCircle size={28} />, color: '#36b9cc' },
    { label: 'Products Available', value: 24, icon: <Package size={28} />, color: '#f6c23e' },
  ];

  const customerReviews = [
    {
      name: 'Amit Sharma',
      designation: 'Software Engineer',
      rating: 4.5,
      comment: 'Excellent service and timely delivery!'
    },
    {
      name: 'Priya Sinha',
      designation: 'Marketing Lead',
      rating: 5,
      comment: 'Very professional and responsive team.'
    }
  ];

  return (
    <div className="Dashboard-Section-Container">
      <h2 className="Dashboard-Section-Title">Admin Dashboard</h2>

      <div className="Dashboard-Section-Grid">
        {stats.map((item, index) => (
          <div key={index} className="Dashboard-Section-Card" style={{ borderLeft: `5px solid ${item.color}` }}>
            <div className="Dashboard-Section-Icon" style={{ color: item.color }}>
              {item.icon}
            </div>
            <div className="Dashboard-Section-Info">
              <h3>{item.label}</h3>
              <p>{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="Dashboard-Section-Reviews">
        <h3 className="Dashboard-Section-ReviewTitle">Manage Customer Ratings & Reviews</h3>
        {customerReviews.map((review, index) => (
          <div className="Dashboard-Section-ReviewCard" key={index}>
            <div className="Dashboard-Section-ReviewHeader">
              <div>
                <h4>{review.name}</h4>
                <p>{review.designation}</p>
              </div>
              <div className="Dashboard-Section-Rating">
                <Star size={20} fill="#f1c40f" stroke="#f1c40f" />
                <span>{review.rating}</span>
              </div>
            </div>
            <p className="Dashboard-Section-ReviewComment">"{review.comment}"</p>
            <button className="Dashboard-Section-DeleteBtn">
              <Trash2 size={16} /> Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
