import React from 'react';
import '../stylesheets/components/Footer.css';

const Footer = () => {
    return (
        <footer className="transition">
            <div className="quick-links transition">
                <a href="/">Home</a>
                <a href="/contact-us">Contact Us</a>
                <a href="/our-customers">Our Customers</a>
            </div>
            <p>&copy; 2024 <a href="https://coursey.codes">Coursey Codes</a>. All rights reserved.</p>
        </footer>
    );
};

export default Footer;