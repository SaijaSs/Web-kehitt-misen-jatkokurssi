import React from 'react';
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
    return (

        <div className="keskustelupalsta">

            <h2><img src={Icon} alt="Kuvake" className="section-icon" />Kaikki keskustelut</h2>


            <div className="keskustelu-container">
                {keskustelut.map((k) => (
                    <Link to={`/keskustelu/${k.id}`} className="keskustelu-item" key={k.id}>
                        <span>{k.otsikko}</span>
                        <img src={ArrowIcon} alt="Avaa" />
                    </Link>
                ))}
            </div>




        </div>
    )

}

export default Kaikkikeskustelut;