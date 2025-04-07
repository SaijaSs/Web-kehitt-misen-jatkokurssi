
import React, { useState } from 'react';
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
            <div className="logo-title-container">
                <img src={logo} alt="Lumouksen Lukijat Logo" className="logo" />
                <h1>Lumouksen Lukijat</h1>
            </div>

            {/*Navigaatiovalikko*/}
            <div className="nav-menu">
                {/* Linkit eri sivuille */}
                <a href="#">Suosituimmat</a>
                <a href="#">Uusimmat</a>
                <a href="#">Kaikki</a>


                {/* Hampurilaisvalikko */}
                <a href="#" className="hamburger-menu" onClick={toggleMenu}>
                    <img src={menuIcon} alt="Valikko" />
                </a>
            </div>
            {/* Hampurilaisvalikon avautuva sisältö */}
            {menuOpen && (
                <div className="dropdown-menu">
                    <a href="#">Suosituimmat</a>
                    <a href="#">Uusimmat</a>
                    <a href="#">Kaikki</a>
                    <a href="#">Aloita keskustelu</a>
                    <a href="#">Meistä</a>
                </div>
            )}

        </header>
    );
};


export default Header;