import React, { useState } from 'react'
import IT from '../img/PortfolioInformationTechnology.png';
import StartUp from '../img/PortfolioStartUp.png';
import Agriculture from '../img/PortfolioAgriculture.png';
import SmallBussiness from '../img/PortfolioSmallBussiness.png';

import { PortfolioItem } from "./PortfolioItem"
import { Link } from 'react-router-dom';


export const PortfolioContact = () => {

    const [data, setData] = useState([
        {
            img: IT,
            desc: " Information Technology (IT)"
        },
        {
            img: StartUp,
            desc: "Start Up"
        },
        {
            img: Agriculture,
            desc: "Agriculture"
        },
        {
            img: SmallBussiness,
            desc: "Small Bussiness"
        },
    ])
    return (
        <div className="portfolio d-flex flex-column justify-content-center align-items-center mx-auto" id='portfolio'>

            <div className="portfolio-container col-11 col-md-12 col-lg-10 col-xl-9  mx-auto row mt-5">
                {data.map(item => {
                    return (
                        <PortfolioItem img={item.img} desc={item.desc} />)
                })}
            </div>

            <div className="mt-5 text-center col-11">
                <h2 className="h3">Work with us</h2>
                <div className="portfolio-container-line mx-auto my-3"></div>
                <p className="p2 mt-4">Do you have a project we can assist you with?<br />
                Fill out the form and we will get in touch with you.</p>

                <div className="d-flex row justify-content-around mt-5 col-11 col-sm-9 col-md-8  col-lg-7 col-xl-6 mx-auto ">
                    <Link to='/contact-form' className="portfolio-container-btn1 col-12 col-md-4 border-0 my-2 p3 c-white d-flex align-items-center justify-content-center">Request Form</Link>
                    <Link to='/investor-form' className="portfolio-container-btn2 bg-transparent col-12 col-md-4 my-2 p3 c-white  d-flex align-items-center justify-content-center">Apply as Investor/Partner</Link>
                </div >
                <div className="contact col-11 col-sm-9 col-md-8  col-lg-7 col-xl-6 mx-auto d-flex justify-content-center aling-items-center flex-column ">
                    <h3 className="h3 text-center">Contact Us</h3>
                    <p className="p3 text-center">Our team is happy to answer your questions.</p>
                    <div className="mt-5 col-12 row mx-auto">
                        <div className="col-12 col-md-6 d-flex justify-content-center p-0 m-0 pr-0 pr-md-3 my-2 my-md-0">
                            <input placeholder="Full name*" type="text" className="contact-input p2 col-12" />
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center p-0 m-0 pl-0 pl-md-3 my-2 my-md-0 ">
                            <input placeholder="E-mail*" type="text" className="contact-input p2 col-12" />
                        </div>
                        <textarea placeholder="Type your message..." id="message" name="message" rows="10" className="contact-input p2 col-12 mt-4" />
                        <div className=" col-12 d-flex justify-content-center mt-5">
                            <button className="contact-btn p1">SEND</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
