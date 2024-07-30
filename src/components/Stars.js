// src/StarRating.js
import React from 'react';
import './Stars.css'; // Import the CSS file for styling

const StarRating = ({ rating }) => {
    const totalStars = 5; // Total number of stars

    return (
        <div className="star-rating">
            {[...Array(totalStars)].map((_, index) => {
                return (
                    <span key={index} className={index < rating ? 'star filled' : 'star'}>
                        ★
                    </span>
                );
            })}
        </div>
    );
};

export default StarRating;