// src/components/Navbar.js
import React from 'react';
import './navbar.css'; // Tuo navbarin omat tyylit

function Navbar() {
  return (
    <header>
      <div className="logo-title-container">
        <img src="/kuvat/Logo.png" alt="Lumouksen Lukijat Logo" className="logo" />
        <h1>Lumouksen Lukijat</h1>
      </div>
      <div className="nav-menu">
        <a href="#">Suosituimmat</a>
        <a href="#">Uusimmat</a>
        <a href="#">Kaikki keskustelut</a>
        <a href="#" className="hamburger-menu">
          <img src="/kuvat/Menu.png" alt="Valikko" />
        </a>
      </div>
    </header>
  );
}

export default Navbar;
