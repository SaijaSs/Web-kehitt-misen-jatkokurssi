import React from 'react'
import Header from '../Components/Header';
import Keskustelupalsta from '../Components/Keskustelupalsta';
import Footer from '../Components/Footer';



const Keskustelu = () => {


  return (
    <>
      <div className="main-content">

        <div>
          <Header />
        </div>
        <div>
          <Keskustelupalsta />
        </div>
      <div><Footer /></div>
      
      

      </div>
    </>
  )
}

export default Keskustelu;