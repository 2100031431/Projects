// src/Profile.js
import React from 'react';
import './Profile.css';

const Profile = ({ user }) => {
  if (!user) {
    return <div>No user data available</div>;
  }

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <p>Email: {user.email}</p>
      {/* Display more user information here */}
    </div>
  );
};

export default Profile;
