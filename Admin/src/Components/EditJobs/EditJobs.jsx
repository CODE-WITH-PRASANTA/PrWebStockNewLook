import React, { useState } from 'react';
import './EditJobs.css';
import { FaTrashAlt } from 'react-icons/fa';

const EditJobs = () => {
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Frontend Developer', date: '2025-04-20' },
    { id: 2, title: 'Backend Engineer', date: '2025-04-18' },
    { id: 3, title: 'UI/UX Designer', date: '2025-04-15' },
  ]);

  const handleDelete = (id) => {
    const updatedJobs = jobs.filter((job) => job.id !== id);
    setJobs(updatedJobs);
  };

  return (
    <div className="Edit-Jobs-Container">
      <h2 className="Edit-Jobs-Title">Edit Job Listings</h2>
      <div className="Edit-Jobs-TableWrapper">
        <table className="Edit-Jobs-Table">
          <thead className="Edit-Jobs-TableHead">
            <tr>
              <th className="Edit-Jobs-TableHeader">Sl No.</th>
              <th className="Edit-Jobs-TableHeader">Job Title</th>
              <th className="Edit-Jobs-TableHeader">Posted Date</th>
              <th className="Edit-Jobs-TableHeader">Action</th>
            </tr>
          </thead>
          <tbody className="Edit-Jobs-TableBody">
            {jobs.map((job, index) => (
              <tr key={job.id} className="Edit-Jobs-TableRow">
                <td className="Edit-Jobs-TableCell">{index + 1}</td>
                <td className="Edit-Jobs-TableCell">{job.title}</td>
                <td className="Edit-Jobs-TableCell">{job.date}</td>
                <td className="Edit-Jobs-TableCell">
                  <button
                    className="Edit-Jobs-DeleteBtn"
                    onClick={() => handleDelete(job.id)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
            {jobs.length === 0 && (
              <tr className="Edit-Jobs-NoDataRow">
                <td colSpan="4" className="Edit-Jobs-NoDataText">
                  No jobs available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditJobs;
