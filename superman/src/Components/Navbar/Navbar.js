import { useState } from 'react';
import './Navbar.css';


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <button className="menu-toggle" onClick={toggleMenu}>
                <span className="hamburger"></span>
            </button>
            <ul className={`menu ${isOpen ? 'open' : ''}`}>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Acerca de nosotros</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;