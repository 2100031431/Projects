// src/LandingPage.js
import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Art Gallery</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <h2>Welcome to Our Art Gallery</h2>
        <p>Explore the finest art from around the world</p>
      </section>
    </div>
  );
};

export default LandingPage;
