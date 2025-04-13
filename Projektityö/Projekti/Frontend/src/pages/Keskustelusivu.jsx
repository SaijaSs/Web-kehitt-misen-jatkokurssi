import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Keskustelu from '../Components/Keskustelu';



const Keskustelusivu = () => {


    return (
        <>
            <div className="main-content">

                <div>
                    <Header />
                </div>
                <div><Keskustelu /></div>


                <div><Footer /></div>



            </div>
        </>
    )
}

export default Keskustelusivu;