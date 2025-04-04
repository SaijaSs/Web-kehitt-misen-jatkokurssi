// src/App.js
import React from 'react';
import 'App.css';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import AboutSection from './Components/Uusikeskustelu';

function App() {
  return (
    <div>
      <h1>Lumouksen lukijat</h1>
      <Navbar />
      <Carousel />
      <AboutSection />
    </div>
  );
}

export default App;
