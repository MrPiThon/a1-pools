import React from 'react';
import '../stylesheets/pages/OurCustomersPage.css';
import CustomerPhotos from '../components/CustomerPhotos';

const OurCustomersPage = () => {
    return (
        <div className="container">
            <div className="customer-content">
                <h1>Our Customers</h1>
                <CustomerPhotos/>
            </div>
        </div>
    );
}

export default OurCustomersPage;