import React from 'react';
import '../stylesheets/components/Hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <img src="/public/assets/user.svg" alt="Hero Image"/>
            <h1>A1 Pools</h1>
            <p>Your local pool company</p>
            <a href="/about-us#contact-form">Get a quote!</a>
        </div>
    );
}

export default Hero;