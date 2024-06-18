// src/CategoryPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './CategoryPage.css'; // Import your category page CSS here
import Card from './Card';

// Example exhibitions data
const exhibitionsData = [
  {
    title: 'Exhibition 1',
    description: 'Description for exhibition 1',
    imageUrl: 'https://via.placeholder.com/300x200',
    category: 'Nature'
  },
  {
    title: 'Exhibition 2',
    description: 'Description for exhibition 2',
    imageUrl: 'https://via.placeholder.com/300x200',
    category: 'Dance'
  },
  {
    title: 'Exhibition 3',
    description: 'Description for exhibition 3',
    imageUrl: 'https://via.placeholder.com/300x200',
    category: 'Hero Pictures'
  },
  {
    title: 'Exhibition 4',
    description: 'Description for exhibition 4',
    imageUrl: 'https://via.placeholder.com/300x200',
    category: 'Freedom Fighters'
  }
];

const CategoryPage = () => {
  const { categoryName } = useParams();

  // Filter exhibitionsData based on categoryName
  const filteredExhibitions = exhibitionsData.filter(exhibition => exhibition.category === categoryName);

  return (
    <div className="category-page">
      <h2>{categoryName} Artworks</h2>
      <div className="category-cards-container">
        {filteredExhibitions.map((exhibition, index) => (
          <Card
            key={index}
            title={exhibition.title}
            description={exhibition.description}
            imageUrl={exhibition.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
