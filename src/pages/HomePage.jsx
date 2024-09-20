import React from 'react';

import Hero from '../components/Hero';
import CustomerPhotos from "../components/CustomerPhotos.jsx";
import CustomerReviews from "../components/CustomerReviews.jsx";

import '../stylesheets/pages/HomePage.css';
import Services from "../components/Services.jsx";

const HomePage = () => {
    return (
        <div className="container">
            <Hero/>

            <Services />

            <h1>Featured Pools</h1>
            <CustomerPhotos numPhotos={3} />
            <a className="quick-link" href="/our-customers">View all pools</a>

            <h1>Featured Reviews</h1>
            <CustomerReviews numReviews={3} />
        </div>
    );
};

export default HomePage;