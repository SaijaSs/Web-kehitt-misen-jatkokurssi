import React from 'react';
import '../styles/Tietoa.css';
import Kuva from '../assets/images/kuva1.png';
import Icon from '../assets/images/Wizard.png';
const Tietoa = () => {
    return (
        <div className="tietoa-container">

            <h2><img src={Icon} alt="Kuvake" className="section-icon" />Meistä - tervetuloa Lumouksen Lukijat -sivustolle!</h2>
            {/* Yläreunan kuva */}
            <div className="header-image">
                <img src={Kuva} alt="Kuva" className="header-img" />
            </div>

            {/* Teksti-osio */}
            <div className="text-section">
                <p>
                    Lumouksen Lukijat -sivustolla voit osallistua keskusteluun liittyen fantasiakirjallisuuteen. </p>
                <p>
                    Voit aloittaa uusia keskusteluja ja kommentoida keskusteluihin. </p>
                <p>
                    Tarkoituksena on jakaa ajatuksia fantasiakirjallisuuteen liittyen aiheesta kuin aiheesta.
                </p>
                <p>Mukavia keskusteluhetkiä! ♥</p>
            </div>

<div className="text-section">
    <h3>Keskustelupalstan säännöt</h3>
    <p><strong>1. Kunnioita muita käyttäjiä</strong> <br></br>
    - Käyttäydy kohteliaasti ja kunnioittavasti kaikissa keskusteluissa. Henkilökohtaiset hyökkäykset, vihapuhe, häirintä ja syrjintä eivät ole sallittuja.</p>

    <p><strong>2. Älä julkaise spoiler-tekijöitä ilman varoitusta</strong> <br></br>
Jos keskustelussa paljastetaan tärkeää tietoa, kuten juonipaljastuksia, varmista, että varoitat asiasta ennen kuin jaat. Käytä tarvittaessa spoiler-tekstejä tai varoituksia. </p>
</div>

        </div>
    );
};

export default Tietoa;
