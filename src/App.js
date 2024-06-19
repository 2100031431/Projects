// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import LandingPage from './LandingPage';
import Footer from './Footer';
import Profile from './Profile';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    // Implement your authentication logic here
    setIsAuthenticated(true);
    setUser({ email }); // Simplified for demonstration; replace with actual user data
  };

  const handleRegister = (email, password) => {
    // Implement your registration logic here
    setIsAuthenticated(true);
    setUser({ email }); // Simplified for demonstration; replace with actual user data
  };

  return (
    <Router>
      <div className="wrapper">
        <div className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage isAuthenticated={isAuthenticated} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register onRegister={handleRegister} />} />
            <Route
              path="/profile"
              element={isAuthenticated ? <Profile user={user} /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
