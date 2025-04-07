import React from 'react';
import '../styles/Header.css'
import logo from '../assets/images/Logo.png';  
import menuIcon from '../assets/images/Menu.png';


const Header = () => {
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

                {/*Hampurilaisvalikko ja ikoni */}
                <a href="#" className="hamburger-menu">
                <img src={menuIcon} alt="Valikko" />
                </a>

            </div>
        </header>
    );
};


export default Header;