import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Keskustelupalsta.css'
import Icon from '../assets/images/Parchment.png';
import ArrowIcon from '../assets/images/ArrowIcon.png';

const Uusimkeskustelu = () => {
    const [keskustelut, setKeskustelut] = useState([]);
  
    // Hae uusimmat keskustelut API:sta (vain 5 uusinta)
    useEffect(() => {
      fetch('http://localhost:3000/threads')
        .then((response) => response.json())
        .then((data) => setKeskustelut(data.slice(0, 5))) // Näytetään vain 5 uusinta
        .catch((error) => console.error('Virhe haettaessa keskusteluja:', error));
    }, []);
  
    return (
      <div className="keskustelupalsta">
        <h2>
          <img src={Icon} alt="Kuvake" className="section-icon" />Uusimmat keskustelut
        </h2>
  
        <div className="keskustelu-container">
          {keskustelut.map((k) => (
            <div key={k.id} className="keskustelu-item">
              <span>{k.title}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Uusimkeskustelu;