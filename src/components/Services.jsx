import React from 'react';
import "../stylesheets/components/Services.css";

const Services = () => {
    return (
        <div className="services">
            <h2>Our Services</h2>
            <div className="service-items">
                <div className="service-item">
                    <h3>Pool Cleaning</h3>
                    <p>We offer comprehensive pool cleaning services to keep your pool sparkling clean.</p>
                </div>
                <div className="service-item">
                    <h3>Maintenance</h3>
                    <p>Regular maintenance to ensure your pool is always in top condition.</p>
                </div>
                <div className="service-item">
                    <h3>Repairs</h3>
                    <p>Expert repair services for any pool-related issues.</p>
                </div>
            </div>
        </div>
    );
}

export default Services;