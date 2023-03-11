import { useState } from 'react';
import css from'./Navbar.module.css';


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

        return(
        <nav className={css.navbar}>
            <button className={css.menutoggle} onClick={toggleMenu}>
                <span className={css.hamburger}></span>
            </button>
            <ul className={`menu ${isOpen ? 'open' : ''}`}>
                <li><a href="">Inicio</a></li>
                <li><a href="">Acerca de nosotros</a></li>
                <li><a href="">Contacto</a></li>
            </ul>
        </nav>

    );
}

export default Navbar;