import React from 'react';
import '../styles/styles.css';


const Rating = ({ rate, count }) => {
  const filledStars = Math.floor(rate); // Number of filled stars
  const hasHalfStar = rate - filledStars >= 0.5; // Check if there's a half star
  const remainingStars = 5 - filledStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

  const renderStars = () => {
    const stars = [];
    // Filled stars
    for (let i = 0; i < filledStars; i++) {
      stars.push(<span key={i} className="star filled">&#9733;</span>);
    }
    // Half star if applicable
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">&#9733;</span>);
    }
    // Remaining empty stars
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star">&#9733;</span>);
    }
    return stars;
  };

  return (
    <div className="rating">
      {renderStars()}
      <span className="count">({count})</span>
    </div>
  );
};

export default Rating;
