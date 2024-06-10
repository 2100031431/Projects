// src/LandingPage.js
import React, { useState } from 'react';
import './LandingPage.css';
import Card from './Card';
import Footer from './Footer';

const exhibitionsData = [
  {
    title: 'Exhibition 1',
    description: 'Description for exhibition 1',
    imageUrl: 'https://via.placeholder.com/300x200'
  },
  {
    title: 'Exhibition 2',
    description: 'Description for exhibition 2',
    imageUrl: 'https://via.placeholder.com/300x200'
  },
  {
    title: 'Exhibition 3',
    description: 'Description for exhibition 3',
    imageUrl: 'https://via.placeholder.com/300x200'
  },
  {
    title: 'Exhibition 4',
    description: 'Description for exhibition 4',
    imageUrl: 'https://via.placeholder.com/300x200'
  },
  {
    title: 'Exhibition 5',
    description: 'Description for exhibition 5',
    imageUrl: 'https://via.placeholder.com/300x200'
  }
];

const itemsPerPage = 3;

const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerPage, exhibitionsData.length - itemsPerPage)
    );
  };

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
          {exhibitionsData.slice(0, 3).map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </section>
      <section className="cards-section">
        <h2>Upcoming Exhibitions</h2>
        <div className="navigation">
          <button onClick={handlePrevClick} disabled={currentIndex === 0}>
            &lt; Prev
          </button>
          <button
            onClick={handleNextClick}
            disabled={currentIndex >= exhibitionsData.length - itemsPerPage}
          >
            Next &gt;
          </button>
        </div>
        <div className="cards-container">
          {exhibitionsData
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((exhibition, index) => (
              <Card
                key={index}
                title={exhibition.title}
                description={exhibition.description}
                imageUrl={exhibition.imageUrl}
              />
            ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
