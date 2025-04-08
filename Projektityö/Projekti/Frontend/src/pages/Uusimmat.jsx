import React from 'react'
import Header from '../Components/Header';
import Uusikeskustelu from '../Components/Uusikeskustelu';
import Footer from '../Components/Footer';
import Uudet from '../Components/Uusimkeskustelu';


const Uusimmat = () => {


    return (
        <>
            <div className="main-content">

                <div>
                    <Header />
                </div>

                <div><Uudet/></div>


                <div><Uusikeskustelu /></div>

                <div><Footer /></div>



            </div>
        </>
    )
}

export default Uusimmat;