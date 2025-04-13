import React from 'react';
import '../styles/Keskustelu.css'; // Varmista että tyylit tulevat mukaan

const KommenttiLista = ({ kommentit }) => {
    return (
        <div className="kommentit">
            <h3>Kommentit:</h3>
            {kommentit.length === 0 ? (
                <p>Ei vielä kommentteja.</p>
            ) : (
                <div className="kommentti-lista">
                    {kommentit.reverse().map((k) => (  // slice() estää alkuperäisen listan muuttamisen
                        <div className="kommentti" key={k.id}>
                            <div className="kommentti-header">
                                {/* Tähän voi myöhemmin lisätä esim. k.timestamp */}
                                <span className="kommentti-aikaleima">Kommentti</span>
                            </div>
                            <div className="kommentti-sisalto">
                                {k.content}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default KommenttiLista;
