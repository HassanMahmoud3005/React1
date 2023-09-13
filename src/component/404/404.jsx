import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

class Eror extends Component {
    render() {
        return <>
        <div className='d-flex justify-content-between  align-item-center' style={{minHeight:"70vh"}}></div>
        <Navbar/>
      
        

        <Footer/>
        </>
    }
}

export default Eror;
