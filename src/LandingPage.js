// src/LandingPage.js
import React from 'react';
import './LandingPage.css';
import Card from './Card';

const cardsData = [
  {
    title: 'Artwork 1',
    description: 'Description for artwork 1',
    imageUrl: 'https://via.placeholder.com/300x200'
  },
  {
    title: 'Artwork 2',
    description: 'Description for artwork 2',
    imageUrl: 'https://via.placeholder.com/300x200'
  },
  {
    title: 'Artwork 3',
    description: 'Description for artwork 3',
    imageUrl: 'https://via.placeholder.com/300x200'
  }
];

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
      <section className="cards-section">
        <h2>Featured Artworks</h2>
        <div className="cards-container">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
