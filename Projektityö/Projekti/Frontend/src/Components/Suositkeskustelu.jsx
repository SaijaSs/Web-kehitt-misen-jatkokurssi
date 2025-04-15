import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Keskustelupalsta.css'
import Icon from '../assets/images/Jewel.png';
import ArrowIcon from '../assets/images/ArrowIcon.png';

const Suositkeskustelu = () => {
    const [suositut, setSuositut] = useState([]);
  
    // Hae suosituimmat keskustelut API:sta
    useEffect(() => {
      fetch('https://projekti-backend-ezg5g3cwengphuby.centralus-01.azurewebsites.net/threads/popular')
        .then(response => response.json())
        .then(data => setSuositut(data))
        .catch(error => console.error('Virhe haettaessa suosituimpia keskusteluja:', error));
    }, []);
  
    return (
      <div className="keskustelupalsta">
        <h2><img src={Icon} alt="Kuvake" className="section-icon" />Suosituimmat keskustelut</h2>
  
        <div className="keskustelu-container">
          {suositut.map((k) => (
            <Link to={`/keskustelu/${k.id}`} className="keskustelu-item" key={k.id}>
              <span>{k.title}</span>
              <img src={ArrowIcon} alt="Avaa" />
            </Link>
          ))}
        </div>
      </div>
    );
  };
  

export default Suositkeskustelu;