import React from 'react';
import '../stylesheets/components/Footer.css';

const Footer = () => {
    return (
        <footer className="transition">
            <div className="quick-links transition">
                <a href="/"></a>
                <a href="/contact-us"></a>
                <a href="/our-customers"></a>
            </div>
            <p>&copy; 2024 <a href="https://coursey.codes">Coursey Codes</a>. All rights reserved.</p>
        </footer>
    );
};

export default Footer;