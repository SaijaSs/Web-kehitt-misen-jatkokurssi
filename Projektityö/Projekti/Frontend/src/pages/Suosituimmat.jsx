import React from 'react'
import Header from '../Components/Header';
import Uusikeskustelu from '../Components/Uusikeskustelu';
import Footer from '../Components/Footer';
import Suositut from '../Components/Suositkeskustelu';


const Suosituimmat = () => {


  return (
    <>
      <div className="main-content">

        <div>
          <Header />
        </div>
        <div>
          <Suositut />
        </div>
      <div><Uusikeskustelu /></div>

      <div><Footer /></div>
      
      

      </div>
    </>
  )
}

export default Suosituimmat;