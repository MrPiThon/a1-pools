import { useEffect } from 'react';
import '../stylesheets/components/Navbar.css';

const Navbar = () => {
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth < 600) return;

            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
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
                <li className="navbar-item"><a className="transition logo" href="/"></a></li>
                <li className="navbar-item"><a className="transition" href="/contact-us"></a></li>
                <li className="navbar-item"><a className="transition" href="/our-customers"></a></li>
            </ul>
        </nav>
    );
};

export default Navbar;