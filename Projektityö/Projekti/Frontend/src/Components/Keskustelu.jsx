import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import KommenttiLista from './KommenttiLista';
import KommenttiLomake from './KommenttiLomake';
import Icon from '../assets/images/Ball.png';
import '../styles/Keskustelu.css';

const Keskustelu = () => {
    const { id } = useParams(); // Haetaan id URL-parametrista
    console.log("Keskustelun ID:", id);  // Lisää tämä rivi

    const [keskustelu, setKeskustelu] = useState(null);
    const [kommentit, setKommentit] = useState([]);

    useEffect(() => {
        const haeKeskustelu = async () => {
            try {
                const res = await fetch(`projekti-backend-ezg5g3cwengphuby.centralus-01.azurewebsites.net/threads/${id}`);
                const data = await res.json();
                console.log("Keskustelu data:", data); // Lisää tämä rivi
                if (!data || !data.thread) {
                    console.error("Keskustelua ei löytynyt.");
                    return;
                }
                setKeskustelu(data);
            } catch (err) {
                console.error("Keskustelua ei voitu hakea:", err);
            }
        };

        const haeKommentit = async () => {
            try {
                const res2 = await fetch(`projekti-backend-ezg5g3cwengphuby.centralus-01.azurewebsites.net/threads/${id}/comments`);
                const data2 = await res2.json();
                console.log("Kommentit data:", data2); // Lisää tämä rivi
                setKommentit(data2);
            } catch (err) {
                console.error("Kommentteja ei voitu hakea:", err);
            }
        };

        haeKeskustelu();
        haeKommentit();
    }, [id]);

    if (!keskustelu) return <p>Ladataan keskustelua...</p>;

    return (
        <div className="keskustelu-sivu">
              <h2 className="otsikko"> <img src={Icon} alt="Kuvake" className="section-icon" />{keskustelu.thread.title}</h2>

            {/* Kommentit */}
            <KommenttiLista kommentit={kommentit} />

            {/* Kommentin lisäys */}
            <KommenttiLomake id={id} setKommentit={setKommentit} />
        </div>
    );
};

export default Keskustelu;
