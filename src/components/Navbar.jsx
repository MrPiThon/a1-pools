import { Link } from 'react-router-dom';
import '../stylesheets/components/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><Link className="transition logo" to="/">A1</Link></li>
                <li className="navbar-item"><a className="transition" href="/about-us#about-us-top">About Us</a></li>
                <li className="navbar-item"><a className="transition" href="/about-us#contact-form">Contact Us</a></li>
                <li className="navbar-item"><Link className="transition" to="/our-customers">Our Customers</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;