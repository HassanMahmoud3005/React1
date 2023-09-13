import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import imgo from"../../images/avataaars.svg"
import Footer from '../footer/Footer';





class Home extends Component {






    render() {



        return<>
        <Navbar/>
        <br /><br /><br />
<div className="container-fluid home text-center">
    

    <div className='py-5'>
        <img src={imgo} alt="img" className=' homeImg'/>
        <h1 className='text-white'>START FRAMEWORK</h1>

        <div className='m-auto totalLine ' >
            <div className='line'></div>
            <i className="fa-solid fa-star text-white fs-5"></i>
            <div className='line'></div>
        </div>

        <p className='text-white py-3'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
    
    
    </div> 

    <Footer/>     
        </>






    }
}

export default Home;
