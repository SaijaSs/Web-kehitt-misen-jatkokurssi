import React from 'react'
import Header from '../Components/Header';
import Uusikeskustelu from '../Components/Uusikeskustelu';
import Footer from '../Components/Footer';
import Kaikkikeskustelut from '../Components/Kaikkikeskustelut';


const Kaikki = () => {


  return (
    <>
      <div className="main-content">

        <div>
          <Header />
        </div>
        <div><Kaikkikeskustelut/></div>
        
      <div><Uusikeskustelu /></div>

      <div><Footer /></div>
      
      

      </div>
    </>
  )
}

export default Kaikki;