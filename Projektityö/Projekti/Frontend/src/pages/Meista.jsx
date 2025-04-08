import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Tietoa from '../Components/Tietoa';



const Meista = () => {


  return (
    <>
      <div className="main-content">

        <div>
          <Header />
        </div>
        <div>
          <Tietoa />
        </div>

      <div><Footer /></div>
      
      

      </div>
    </>
  )
}

export default Meista;