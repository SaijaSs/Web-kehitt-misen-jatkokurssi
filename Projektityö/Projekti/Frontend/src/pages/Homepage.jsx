import { useState } from 'react'
import Header from '../Components/Header';
import Uusikeskustelu from '../Components/Uusikeskustelu';
import Karuselli from '../Components/Karuselli';
import Footer from '../Components/Footer';


const Homepage = () => {


  return (
    <>
      <div className="main-content">

        <div>
          <Header />
        </div>
      
        <div><Karuselli /></div>
      <div><Uusikeskustelu /></div>

      <div><Footer /></div>
      
      

      </div>
    </>
  )
}

export default Homepage;