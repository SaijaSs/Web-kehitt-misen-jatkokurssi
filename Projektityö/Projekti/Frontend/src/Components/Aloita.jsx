import React, { useState } from 'react';
import { createThread, addCommentToThread } from '../api/api'; // Tuodaan API-funktiot
import '../styles/Aloita.css';

const Aloita = () => {
    // Lomakkeen kenttien arvot
    const [aihe, setAihe] = useState('');
    const [kommentti, setKomentti] = useState('');
    const [tarkastettu, setTarkastettu] = useState(false);
    const [loading, setLoading] = useState(false); // Ladataan tilaa
    const [error, setError] = useState(null); // Virhetilan hallinta

    // Lomakkeen lähetys
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Tarkistetaan, että kaikki kentät on täytetty
        if (aihe && kommentti && tarkastettu) {
            setLoading(true); // Asetetaan loading-tila päälle

            try {
                // Lähetetään uusi keskustelu
                const newThread = await createThread(aihe, kommentti);
                console.log('Keskustelu luotu', newThread);

                // Lisätään ensimmäinen kommentti keskusteluun
                const newComment = await addCommentToThread(newThread.id, kommentti);
                console.log('Kommentti lisätty', newComment);

                // Tyhjennetään lomake kentät
                setAihe('');
                setKomentti('');
                setTarkastettu(false);

            } catch (error) {
                console.error('Virhe keskustelua lisättäessä:', error);
                setError('Tapahtui virhe keskustelua luotaessa. Yritä uudelleen.');
            } finally {
                setLoading(false); // Poistetaan loading-tila
            }
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
                    <button type="submit" className="btn" disabled={loading}>
                        {loading ? 'Ladataan...' : 'Aloita'}
                    </button>
                </form>

                {error && <p className="error-message">{error}</p>} {/* Virheilmoitus */}

            </div>

            {/* Toinen laatikko vierekkäin */}
            <div className="info-box">
                <h3>Muista noudattaa keskustelupalstan sääntöjä! ♥</h3>
                <p>Mukavia keskusteluhetkiä kirjallisuuden maailmassa.</p>
            </div>
        </div>
    );
};

export default Aloita;
