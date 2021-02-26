import React from 'react'
import logo from "../img/Logo.png"
import {Link } from 'react-router-dom';

export const Footer =  ({ choose }) => {
    return (
        <div className="footer col-12">
            <img src={logo} alt="point venture logo" href='#home'/>
            <div className="col-12 col-sm-10 col-md-7 col-lg-4 mt-4 mt-md-5  d-flex justify-content-between">
                <div onClick={choose} className="homeNav p4"><Link to='/'>Home</Link></div>
                <div onClick={choose} className="aboutNav p4"><Link to='/'>About Us</Link></div>
                <div onClick={choose} className="offerNav p4"><Link to='/'>What We Offer</Link></div>
                <div onClick={choose} className="portfolioNav p4"><Link to='/'>Portfolio</Link></div>
                <div onClick={choose} className="contactNav p4"><Link to='/'>Contact</Link></div>
            </div>
        </div>
    )
}
