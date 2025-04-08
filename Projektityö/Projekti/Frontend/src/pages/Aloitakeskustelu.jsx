import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Aloita from '../Components/Aloita';



const Aloitakeskustelu = () => {


  return (
    <>
      <div className="main-content">

        <div>
          <Header />
        </div>
        
        <div><Aloita /></div>
      

      <div><Footer /></div>
      
      

      </div>
    </>
  )
}

export default Aloitakeskustelu;