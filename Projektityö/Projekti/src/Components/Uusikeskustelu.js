// src/components/AboutSection.js
import React from 'react';
import './Uusikeskustelu.css'; // Tuo uusikeskustelun omat tyylit


function AboutSection() {
  return (
    <div className="about-section">
      <h3>Aloita uusi keskustelu tästä</h3>
      <p>Etsitkö taikuutta, seikkailua ja ystävien kanssa jaettuja unohtumattomia lukuelämyskysi? Liity Lumouksen Lukijoiden Lukupiiriin ja sukella fantasiaajernen kiehtovaan maailmaan!</p>
      <button className="btn">Lukupiirit</button>
    </div>
  );
}

export default AboutSection;
