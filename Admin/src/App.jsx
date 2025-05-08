import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SideBar from './Components/SideBar/SideBar';
import PostBlog from './Components/PostBlog/PostBlog';
import CreateJob from './Components/CreateJob/CreateJob';
import ManageProjects from './Components/ManageProjects/ManageProjects';
import ManageProducts from './Components/ManageProducts/ManageProducts';
import DeleteBlogs from './Components/DeleteBlogs/DeleteBlogs';
import Dashboard from './Components/Dashboard/Dashboard';
import EditJobs from './Components/EditJobs/EditJobs';
import EditService from './Components/EditService/EditService';

const App = () => {
  return (
    <Router>
      <SideBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/post-blog" element={<PostBlog />} />
          <Route path="/create-jobs" element={<CreateJob />} />
          <Route path="/manage-projects" element={<ManageProjects />} />
          <Route path="/manage-products" element={<ManageProducts />} />
          <Route path="/delete-blog" element={<DeleteBlogs />} />
          <Route path="/edit-jobs" element={<EditJobs />} />
          <Route path="/edit-service" element={<EditService />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
