import React, { Component } from 'react';
import {Link} from 'react-router-dom'

const linkColor = ()=>{

    
        let links = document.querySelectorAll(".nav-link")
    links.forEach(elmemens=>{
    elmemens.addEventListener("click" , (e)=>{
        elmemens.style.backgroundColor= "#1abc9cbd";
        elmemens.style.borderRadius = "5px";    
    })
    })
    
    
    }



class Navbar extends Component {


    


    




    
        

    render() {

    
         
        
        
        return <>
        
        <nav className="navbar navbar-expand-sm fixed-top" id='navbar'>
              <div className="container">
                <Link className="navbar-brand fs-2  fw-bold text-white" to='/home'>START FRAMEWORK</Link>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        
                        <li className="nav-item">
                            <Link className="nav-link fw-bold text-white linko" onClick={()=>{linkColor()}} to='/about'>ABOUT</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold text-white linko" onClick={()=>{linkColor()}} to='/portfolio'>PORTFOLIO</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold text-white linko" onClick={()=>{linkColor()}} to='/contact'>CONTACT</Link>
                        </li>
                    </ul>
                </div>
          </div>
        </nav>
        </>
    }
}

export default Navbar;
