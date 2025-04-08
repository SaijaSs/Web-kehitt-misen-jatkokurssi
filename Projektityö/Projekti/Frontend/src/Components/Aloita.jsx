import React, { useState } from 'react';
import '../styles/Aloita.css';

const Aloita = () => {
    // Lomakkeen kenttien arvot
    const [aihe, setAihe] = useState('');
    const [kommentti, setKomentti] = useState('');
    const [tarkastettu, setTarkastettu] = useState(false);

    // Lomakkeen lähetys
    const handleSubmit = (e) => {
        e.preventDefault();

        // Tarkistetaan, että kaikki kentät on täytetty
        if (aihe && kommentti && tarkastettu) {
            // Tässä voidaan lähettää tiedot tietokantaan
            console.log('Keskustelu luotu', { aihe, kommentti });

            // Voit lähettää tiedot API:lle käyttämällä fetchia tai Axiosia
            // Esimerkiksi:
            // fetch('YOUR_API_URL', {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify({ aihe, kommentti }),
            // })
            // .then(response => response.json())
            // .then(data => console.log('Data:', data))
            // .catch(error => console.error('Virhe:', error));
        } else {
            alert('Täytä kaikki kentät ja hyväksy tiedot ennen lähettämistä.');
        }
    };

    return (
        <div className="aloita-container">
            <div className="form-container">
                <h2>Aloita uusi keskustelu tästä</h2>

                <form onSubmit={handleSubmit} className="aloitus-lomake">
                    {/* Keskustelun aihe */}
                    <div className="lomake-kentta">
                        <label htmlFor="aihe">Keskustelun aihe:</label>
                        <input
                            type="text"
                            id="aihe"
                            name="aihe"
                            value={aihe}
                            onChange={(e) => setAihe(e.target.value)}
                            required
                        />
                    </div>


                    {/* Aloituskommentti */}
                    <div className="lomake-kentta">
                        <label htmlFor="kommentti">Aloituskommenttisi:</label>
                        <textarea
                            id="kommentti"
                            name="kommentti"
                            value={kommentti}
                            onChange={(e) => setKomentti(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    {/* Tarkastusruutu */}
                    <div className="lomake-kentta">
                        <label>
                            <input
                                type="checkbox"
                                checked={tarkastettu}
                                onChange={() => setTarkastettu(!tarkastettu)}
                            />
                            Olen tarkastanut tiedot oikeiksi
                        </label>
                    </div>

                    {/* Aloita keskustelu - Painike */}
                    <button type="submit" className="btn">Aloita</button>
                </form>
            </div>

            {/* Toinen laatikko vierekkäin */}
            <div className="info-box">
                <h3>Muista noudattaa keskustelupalstan sääntöjä! ♥</h3>
                <p>Mukavia keskusteluhetkiä kirjallisuuden maailmassa.</p>
            </div>
        </div >


    );
};

export default Aloita;
