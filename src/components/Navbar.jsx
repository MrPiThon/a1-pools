import { useEffect } from 'react';
import '../stylesheets/components/Navbar.css';

const Navbar = () => {
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) { // Adjust the scroll value as needed
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><a className="transition logo" href="/">A1</a></li>
                <li className="navbar-item"><a className="transition" href="/contact-us">Contact Us</a></li>
                <li className="navbar-item"><a className="transition" href="/our-customers">Our Customers</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;