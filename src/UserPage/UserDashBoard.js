import React from 'react';
import './dashboard.css';
import image from './1.png' ;
const UserDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="logo-container">
        <img src={image} alt="Logo" />
      </div>
      <div className="options-container">
        <a href="null">Start Exam</a>
        <a href="null">View History</a>
        <a href="null">Edit Profile</a>
        <a href="null">Logout</a>
      </div>
    </div>
  );
};

export default UserDashboard;

