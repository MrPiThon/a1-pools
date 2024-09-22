import { Link } from 'react-router-dom';
import '../stylesheets/components/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><a className="transition logo" href="/">A1</a></li>
                <li className="navbar-item"><a className="transition" href="/about-us">About Us</a></li>
                <li className="navbar-item"><a className="transition" href="/contact-us">Contact Us</a></li>
                <li className="navbar-item"><a className="transition" href="/our-customers">Our Customers</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;