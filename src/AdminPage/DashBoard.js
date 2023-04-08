import React from 'react';
import './dashboard.css';
import image from './1.png' ;
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="logo-container">
        <img src={image} alt="Logo" />
      </div>
      <div className="options-container">
        <a href="null">Create Exam</a>
        <a href="null">View Requests</a>
        <a href="null">Edit Profile</a>
        <a href="null">Logout</a>
      </div>
    </div>
  );
};

export default Dashboard;

