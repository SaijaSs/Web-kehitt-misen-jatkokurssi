import React from 'react';
import '../styles/Footer.css'
import Kuva from '../assets/images/kuva.png';
import Logo from '../assets/images/Logo.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='kuva'>
                <img src={Kuva} alt="Kuva" className="kuva" />
            </div>

            <div>

                <h2><img src={Logo} alt="Logo" className="section-icon" />Lumouksen lukijat</h2>
                <p>Keskustelupalsta fantasiakirjallisuuden ystäville.</p>
            </div>

        </footer>)
}

export default Footer;