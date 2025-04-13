import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Karuselli.css'
import Icon from '../assets/images/Jewel.png';


const Karuselli = () => {
    const [suosituimmat, setSuosituimmat] = useState([]);
  
    // Hae suosituimmat keskustelut API:sta
    useEffect(() => {
      fetch('http://localhost:3000/threads/popular')  // Hae suosituimmat keskustelut
        .then(response => response.json())
        .then(data => setSuosituimmat(data))
        .catch(error => console.error('Virhe haettaessa suosituimpia keskusteluja:', error));
    }, []);
  
    return (
      <div className="book-section">
        <h2><img src={Icon} alt="Kuvake" className="section-icon" />Suosituimmat keskustelut</h2>
  
        {/* Kirjakortit (kolme näkyy kerralla ja muut tulevat esiin karusellissa)*/}
        <div className="book-carousel">
          {suosituimmat.map((keskustelu) => (
            <div className="book-card" key={keskustelu.id}>
              <h3>{keskustelu.title}</h3>  {/* Dynaaminen otsikko suosituista keskusteluista */}
              <Link to={`/keskustelu/${keskustelu.id}`} className="btn">Lue lisää</Link>

            </div>
          ))}
        </div>
      </div>
    );
  };

export default Karuselli;