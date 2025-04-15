import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Keskustelupalsta.css'
import Icon from '../assets/images/Unicorn.png';
import ArrowIcon from '../assets/images/ArrowIcon.png';

const keskustelut = [
    { id: 1, otsikko: "Kirjavinkkejä syksyyn" },
    { id: 2, otsikko: "Mielipiteitä uudesta fantasia-sarjasta?" },
    { id: 3, otsikko: "Suosikkikirjasi lapsuudesta" },
];


const Kaikkikeskustelut = () => {
    const [keskustelut, setKeskustelut] = useState([]);
  
    // Hae kaikki keskustelut API:sta
    useEffect(() => {
      fetch('projekti-backend-ezg5g3cwengphuby.centralus-01.azurewebsites.net/threads')
        .then((response) => response.json())
        .then((data) => setKeskustelut(data))
        .catch((error) => console.error('Virhe haettaessa keskusteluja:', error));
    }, []);
  
    // Järjestetään keskustelut aikajärjestykseen (uusimmat ensimmäisenä)
    const sortedKeskustelut = keskustelut.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  
    return (
      <div className="keskustelupalsta">
        <h2>
          <img src={Icon} alt="Kuvake" className="section-icon" />Kaikki keskustelut
        </h2>
  
        <div className="keskustelu-container">
          {sortedKeskustelut.map((k) => (
            <Link to={`/keskustelu/${k.id}`} className="keskustelu-item" key={k.id}>
              <span>{k.title}</span>
              <img src={ArrowIcon} alt="Avaa" />
            </Link>
          ))}
        </div>
      </div>
    );
  };

export default Kaikkikeskustelut;