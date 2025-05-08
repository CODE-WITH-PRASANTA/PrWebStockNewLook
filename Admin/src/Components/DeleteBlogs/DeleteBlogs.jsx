import React from 'react';
import './DeleteBlogs.css';
import { FaTrash } from 'react-icons/fa';

const blogs = [
  {
    id: 1,
    pic: 'https://via.placeholder.com/100',
    title: 'Understanding React Lifecycle',
    author: 'John Doe',
    date: '2024-12-10',
  },
  {
    id: 2,
    pic: 'https://via.placeholder.com/100',
    title: 'Node.js Backend Tips',
    author: 'Jane Smith',
    date: '2025-01-15',
  },
  {
    id: 3,
    pic: 'https://via.placeholder.com/100',
    title: 'Styling in Tailwind CSS',
    author: 'Alex Johnson',
    date: '2025-02-02',
  },
];

const DeleteBlogs = () => {
  return (
    <div className="Delete-Blog-Container">
      <h2 className="Delete-Blog-Heading">Delete Blog Posts</h2>
      <div className="Delete-Blog-TableWrapper">
        <table className="Delete-Blog-Table">
          <thead className="Delete-Blog-TableHead">
            <tr>
              <th>Serial No.</th>
              <th>Blog Pic</th>
              <th>Blog Title</th>
              <th>Author</th>
              <th>Posted Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="Delete-Blog-TableBody">
            {blogs.map((blog, index) => (
              <tr key={blog.id} className="Delete-Blog-Row">
                <td>{index + 1}</td>
                <td>
                  <img src={blog.pic} alt="Blog" className="Delete-Blog-Image" />
                </td>
                <td>{blog.title}</td>
                <td>{blog.author}</td>
                <td>{blog.date}</td>
                <td>
                  <button className="Delete-Blog-Button" title="Delete">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeleteBlogs;
