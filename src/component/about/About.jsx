import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';


class About extends Component {
    render() {
        return <>
        <Navbar/>


<br /><br /><br />

        <div className="container-fluid about text-center">
    

    <div className='py-5'>
        <h1 className='text-white fw-bold'>ABOUT COMPONENT</h1>
        <div className='m-auto totalLine ' >
            <div className='line'></div>
            <i className="fa-solid fa-star text-white fs-5"></i>
            <div className='line'></div>
        </div>
<div className="container">
<div className='d-flex justify-content-between align-item-center text-start'>
    <p className='mx-2 text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
    <p className='mx-2 text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
    </div>   
    </div>  

    </div>
    
    
    </div> 
<Footer/>
        </>
    }
}

export default About;
