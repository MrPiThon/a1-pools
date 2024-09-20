import React from 'react';
import reviews from '/src/data/customer-reviews.json';
import '../stylesheets/components/CustomerReviews.css';

const CustomerReviews = ({ numReviews }) => {
    const sortedReviews = reviews.sort((a, b) => b.rating - a.rating);
    const displayReviews = numReviews ? sortedReviews.slice(0, numReviews) : sortedReviews;

    const renderStars = (rating) => {
        return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    };

    return (
        <div className="review-container">
            {displayReviews.map((review, index) => (
                <div key={index} className="review-item">
                    <h3>{review.customer_name}</h3>
                    <p>{review.review_text}</p>
                    <p className="review-stars">{renderStars(review.rating)}</p>
                    <p>Date: {new Date(review.created_at).toLocaleDateString()}</p>
                </div>
            ))}
        </div>
    );
}

export default CustomerReviews;