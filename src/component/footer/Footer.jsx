import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Footer extends Component {
    render() {
        return <>
        
        
        <div className="container-fluid footer">
            <div className="container py-3">
                <br />
            <div className="row text-center">
                <div className="col-md-4">
                    <div className="item mt-5">
                    <h3>LOCATION</h3>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                    </div>
                    
                </div>
                <div className="col-md-4">
                    <div className="item mt-5">
                    <h3>AROUND THE WEB</h3>
                    <div className='icon text-center'>
<span><Link><i className="fa-brands fa-facebook text-white fs-6"></i></Link></span>
<span><Link><i className="fa-brands fa-twitter text-white fs-6"></i></Link></span>
<span><Link><i className="fa-brands fa-linkedin-in text-white fs-6"></i></Link></span>
<span><Link><i className="fa-solid fa-globe text-white fs-6"></i></Link></span>
                    </div>
                    </div>
                   
                    
                </div>
                <div className="col-md-4">
                    <div className="item mt-5">
                    <h3>ABOUT FREELANCER</h3>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                    
                </div>
            </div>
            <br />
            </div>

        </div>
        <div className='end'>Copyright © Your Website 2021</div>





        </>
    }
}

export default Footer;
