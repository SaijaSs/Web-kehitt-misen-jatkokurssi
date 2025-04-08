import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Keskustelu.css';
import Icon from '../assets/images/Ball.png';

const Keskustelupalsta = () => {
    // Tämän voi myöhemmin muuttaa API-kutsuun ja dynaamiseksi dataksi
    const keskustelu = {
        otsikko: "Keskustelun nimi",
        aloitusAika: "2025-04-08 10:00",
        kayttaja: "Käyttäjä123",
        kommentit: [
            {
                id: 1,
                kayttaja: "Kommentoija1",
                paivamaara: "2025-04-08 10:15",
                kommentti: "Tämä on ensimmäinen kommentti keskustelussa."
            },
            {
                id: 2,
                kayttaja: "Kommentoija2",
                paivamaara: "2025-04-08 10:30",
                kommentti: "Tämä on toinen kommentti, kiinnostavaa keskustelua!"
            }
        ]
    };

    const [viesti, setViesti] = useState('');
    const [nimimerkki, setNimimerkki] = useState('');

    const handleSend = () => {
        alert('Viesti lähetetty: ' + viesti);
        setViesti('');
        setNimimerkki('');
    };

    return (
        <div className="keskustelupalsta">
            {/* Keskustelun otsikko ja tiedot */}
            <h2><img src={Icon} alt="Kuvake" className="section-icon" />{keskustelu.otsikko}</h2>
            <p><strong>Aloitettu:</strong> {keskustelu.aloitusAika}</p>
            <p><strong>Käyttäjä:</strong> {keskustelu.kayttaja}</p>

            {/* Kommentit */}
            <div className="kommentit">
                {keskustelu.kommentit.map((kommentti) => (
                    <div key={kommentti.id} className="kommentti">
                        <div className="kommentti-header">
                            <span className="kommentti-kayttaja">{kommentti.kayttaja}</span>
                            <span className="kommentti-paivamaara">{kommentti.paivamaara}</span>
                        </div>
                        <p>{kommentti.kommentti}</p>
                    </div>
                ))}
            </div>

            {/* Kommentoinnin kenttä */}
            <div className="kommentointi">
                <h3>Lisää kommentti:</h3>
                <input 
                    type="text" 
                    value={nimimerkki} 
                    onChange={(e) => setNimimerkki(e.target.value)} 
                    placeholder="Nimimerkkisi" 
                    className="nimimerkki-input"
                />
                <textarea
                    value={viesti}
                    onChange={(e) => setViesti(e.target.value)}
                    placeholder="Kirjoita kommenttisi"
                    className="kommentti-input"
                ></textarea>
                <button onClick={handleSend} className="btn">Lähetä</button>
            </div>
        </div>
    );
};

export default Keskustelupalsta;
