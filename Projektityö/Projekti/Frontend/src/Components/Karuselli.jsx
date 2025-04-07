import React from 'react';
import '../styles/Karuselli.css'
import Icon from '../assets/images/Jewel.png';


const Karuselli = () => {
    return (

        <div className="book-section">

            <h2><img src={Icon} alt="Kuvake" className="section-icon" />Suosituimmat keskustelut</h2>

            {/* Kirjakortit (kolme näkyy kerralla ja muut tulevat esiin karusellissa)*/}
            <div className="book-carousel">

                <div className="book-card">

                    <h3>Aaveluhty</h3>

                    <button className="btn">Lue lisää</button>
                </div>


                <div className="book-card">

                    <h3>Varjokivi</h3>

                    <button className="btn">Lue lisää</button>
                </div>


                <div className="book-card">

                    <h3>Varjokivi</h3>

                    <button className="btn">Lue lisää</button>
                </div>


                <div className="book-card">

                    <h3>Varjokivi</h3>

                    <button className="btn">Lue lisää</button>
                </div>


                <div className="book-card">

                    <h3>Varjokivi</h3>

                    <button className="btn">Lue lisää</button>
                </div>
            </div>
        </div>
    )

}

export default Karuselli;