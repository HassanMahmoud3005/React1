import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';


const getImg =()=>{
    let img = document.querySelectorAll(".layer")
    let big = document.getElementById("big")
   
    img.forEach(imgs =>{
        imgs.addEventListener("click" , ()=>{
            let getSrc = imgs.getAttribute("src");
            big.style.backgroundImage = `url(${getSrc})`;
            big.classList.remove("d-none")

        })
    })
}




class Gallery extends Component {






    render() {
        return <>
        <Navbar/>
        <br /><br /><br /> <br /><br />
<h1 className='fw-bold gellary text-center'>PORTFOLIO COMPONENT</h1>
<div className='m-auto totalLine' >
            <div className='line' style={{backgroundColor:"#2C3E50"}}></div>
            <i className="fa-solid fa-star fs-5" style={{color:"#2C3E50"}}></i>
            <div className='line' style={{backgroundColor:"#2C3E50"}}></div>
        </div>
        <br /><br />
        <div className="container">
            <div id="big" className='d-none'>

            </div>
            <div className="row g-4">
                <div className="col-md-4">
                    <div className="item position-relative">
                    <img src={require("../../images/poert1.png")} alt="img" className='w-100 image rounded'  />
                   <div className="layer" onClick={()=>{getImg()}} src={require("../../images/poert1.png")}><span style={{position:"absolute" , top:"50%" , left:"50%",translate:"-50% -50%"}} className='position-relative d-flex justify-content-center align-item-center'><i className="fa-solid fa-plus display-1 text-white"></i></span></div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="item position-relative">
                    <img src={require("../../images/port2.png")} alt="img" className='w-100 image rounded'  />
<div className="layer" onClick={()=>{getImg()}} src={require("../../images/port2.png")}><span style={{position:"absolute" , top:"50%" , left:"50%",translate:"-50% -50%"}} className='position-relative d-flex justify-content-center align-item-center'><i className="fa-solid fa-plus display-1 text-white"></i></span></div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="item position-relative">
                    <img src={require("../../images/port3.png")} alt="img" className='w-100 image rounded'  />
<div className="layer" onClick={()=>{getImg()}} src={require("../../images/port3.png")}><span style={{position:"absolute" , top:"50%" , left:"50%",translate:"-50% -50%"}} className='position-relative d-flex justify-content-center align-item-center'><i className="fa-solid fa-plus display-1 text-white"></i></span></div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="item position-relative">
                    <img src={require("../../images/poert1.png")} alt="img" className='w-100 image rounded'  />
<div className="layer" onClick={()=>{getImg()}} src={require("../../images/poert1.png")}><span style={{position:"absolute" , top:"50%" , left:"50%",translate:"-50% -50%"}} className='position-relative d-flex justify-content-center align-item-center'><i className="fa-solid fa-plus display-1 text-white"></i></span></div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="item position-relative">
                    <img src={require("../../images/port2.png")} alt="img" className='w-100 image rounded'  />
<div className="layer" onClick={()=>{getImg()}} src={require("../../images/port2.png")}><span style={{position:"absolute" , top:"50%" , left:"50%",translate:"-50% -50%"}} className='position-relative d-flex justify-content-center align-item-center'><i className="fa-solid fa-plus display-1 text-white"></i></span></div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="item position-relative">
                                            <img src={require("../../images/port3.png")} alt="img" className='w-100 image rounded'  />
<div className="layer" onClick={()=>{getImg()}} src={require("../../images/port3.png")}><span style={{position:"absolute" , top:"50%" , left:"50%",translate:"-50% -50%"}} className='position-relative d-flex justify-content-center align-item-center'><i className="fa-solid fa-plus display-1 text-white"></i></span></div>
                    </div>
                </div>
            </div>
        </div>
        <br /><br /><br />
        <Footer/>
        </>
    }
}

export default Gallery;
