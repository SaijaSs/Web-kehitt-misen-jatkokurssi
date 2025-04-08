
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'
import logo from '../assets/images/Logo.png';
import menuIcon from '../assets/images/Menu.png';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <header>
            <Link to="/" className="logo-title-container">
                <img src={logo} alt="Lumouksen Lukijat Logo" className="logo" />
                <h1>Lumouksen Lukijat</h1>
            </Link>

            {/*Navigaatiovalikko*/}
            <div className="nav-menu">
                {/* Linkit eri sivuille */}
                <Link to="/suosituimmat">Suosituimmat</Link>
                <Link to="/uusimmat">Uusimmat</Link>
                <Link to="/kaikki">Kaikki</Link>


                {/* Hampurilaisvalikko */}
                <a className="hamburger-menu" onClick={toggleMenu}>
                    <img src={menuIcon} alt="Valikko" />
                </a>
            </div>
            {/* Hampurilaisvalikon avautuva sisältö */}
            {menuOpen && (
                <div className="dropdown-menu">
                    <Link to="/Suosituimmat" onClick={toggleMenu}>Suosituimmat</Link>
                    <Link to="/uusimmat" onClick={toggleMenu}>Uusimmat</Link>
                    <Link to="/kaikki" onClick={toggleMenu}>Kaikki</Link>
                    <Link to="/Aloitakeskustelu" onClick={toggleMenu}>Aloita keskustelu</Link>
                    <Link to="/Meista" onClick={toggleMenu}>Meistä</Link>
                </div>
            )}

        </header>
    );
};


export default Header;