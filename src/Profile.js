// src/Profile.js
import React from 'react';
import './Profile.css';

const Profile = ({ user }) => {
  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      {user ? (
        <div className="profile-details">
          <p><strong>Email:</strong> {user.email}</p>
          {/* Add more user details as needed */}
        </div>
      ) : (
        <p>No user information available.</p>
      )}
    </div>
  );
};

export default Profile;
