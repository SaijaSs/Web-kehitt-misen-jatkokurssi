import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Uusikeskustelu.css'

const Uusikeskustelu = () => {
    return (
        <div className="about-section">
            {/* Tieto-osuuden otsikko */}
            <h3>Aloita uusi keskustelu tästä! ♥</h3>

            {/*Tieto-osuuden teksti*/}
            <p><strong>Muista noudattaa keskustelupalstan sääntöjä!</strong></p>

            <p> Mukavia keskusteluhetkiä kirjallisuuden maailmassa. </p>

            {/*Painike, joka vie Lukupiirit-osioon*/}

            <Link to="/Aloitakeskustelu">
                <button className="btn">Uusi keskustelu</button>
            </Link>
        </div>


    )
}

export default Uusikeskustelu;