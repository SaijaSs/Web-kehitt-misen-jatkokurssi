import React, { useState } from 'react';

const KommenttiLomake = ({ id, setKommentit }) => {
    const [uusiKommentti, setUusiKommentti] = useState('');

    const lisaaKommentti = async (e) => {
        e.preventDefault();
        if (!uusiKommentti.trim()) return;

        try {
            const res = await fetch(`projekti-backend-ezg5g3cwengphuby.centralus-01.azurewebsites.net/threads/${id}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content: uusiKommentti }),  // Kenttä nimeltä 'content'
            });

            if (res.ok) {
                const uusi = await res.json();
                setKommentit((prev) => [...prev, uusi]);  // Lisää uusi kommentti alkuun
                setUusiKommentti('');
            }
        } catch (err) {
            console.error("Kommentin lisääminen epäonnistui:", err);
        }
    };

    return (
        <form onSubmit={lisaaKommentti} className="kommentti-lomake">
            <div className="kommentti-lomake-header">Kommentoi:</div>  {/* Otsikko lomakkeelle */}
            <textarea
                value={uusiKommentti}
                onChange={(e) => setUusiKommentti(e.target.value)}
                placeholder="Kirjoita kommentti..."
            ></textarea>
            <button type="submit">Lähetä</button>
        </form>
    );
};

export default KommenttiLomake;
