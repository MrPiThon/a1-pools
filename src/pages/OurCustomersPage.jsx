import React from 'react';
import '../stylesheets/pages/OurCustomersPage.css';
import CustomerPhotos from '../components/CustomerPhotos';

const OurCustomersPage = () => {
    return (
        <div className="customer-content">
            <h1>Our Customers</h1>
            <CustomerPhotos/>
        </div>
    );
}

export default OurCustomersPage;