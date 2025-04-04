// src/components/Carousel.js
import React from 'react';
import './carousel.css'; // Tuo Carousel-komponentin omat tyylit

function Carousel() {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="card">
            <img src="/keskustelu1.jpg" className="card-img-top" alt="Keskustelu 1" />
            <div className="card-body">
              <h5 className="card-title">Keskustelu 1</h5>
              <p className="card-text">Kuvaus keskustelusta 1...</p>
              <a href="#" className="btn custom-btn">Avaa keskustelu</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card">
            <img src="/keskustelu2.jpg" className="card-img-top" alt="Keskustelu 2" />
            <div className="card-body">
              <h5 className="card-title">Keskustelu 2</h5>
              <p className="card-text">Kuvaus keskustelusta 2...</p>
              <a href="#" className="btn custom-btn">Avaa keskustelu</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card">
            <img src="/keskustelu3.jpg" className="card-img-top" alt="Keskustelu 3" />
            <div className="card-body">
              <h5 className="card-title">Keskustelu 3</h5>
              <p className="card-text">Kuvaus keskustelusta 3...</p>
              <a href="#" className="btn custom-btn">Avaa keskustelu</a>
            </div>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Edellinen</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Seuraava</span>
      </button>
    </div>
  );
}

export default Carousel;
