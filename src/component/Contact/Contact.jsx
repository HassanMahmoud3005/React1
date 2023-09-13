import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';


class Contact extends Component {
    render() {
        return <>
        <Navbar/>
<br /><br /><br />
<div className="container contact">
<h1 className='fw-bold pt-5 contactName text-center'>CONATCT SECTION</h1>

<div className='m-auto totalLine' >
            <div className='line ' style={{backgroundColor:"#2C3E50"}}></div>
            <i className="fa-solid fa-star fs-5" style={{color:"#2C3E50"}}></i>
            <div className='line ' style={{backgroundColor:"#2C3E50"}}></div>
        </div>


        <br /><br /><br />
        <input type="text" className="form-control w-50 m-auto my-5" placeholder='userName' style={{borderColor:"transparent" , borderBottomColor:"#878787"}}/>
        <input type="text" className="form-control w-50 m-auto my-5" placeholder='userAge' style={{borderColor:"transparent" , borderBottomColor:"#878787"}}/>
        <input type="text" className="form-control w-50 m-auto my-5" placeholder='userEmail' style={{borderColor:"transparent" , borderBottomColor:"#878787"}}/>
        <input type="text" className="form-control w-50 m-auto my-5" placeholder='userPassword' style={{borderColor:"transparent" , borderBottomColor:"#878787"}}/>
        <button style={{backgroundColor:"#1ABC9C" , marginLeft:"25%"}} className='btn text-white  d-block'>Send Message</button>
        <br /><br /><br />
        </div>



<Footer/>
        </>
    }
}

export default Contact;
