import React from 'react'
import WeAboutT from '../img/WeAboutT.png'

export const WeAbout = () => {
    return (
        <div className="weabout d-flex justify-content-center align-items-center" id='we-are-different'>
            <div className="d-flex flex-column justify-content-center align-items-center text-center col-10 col-lg-6 mx-auto" >
                <img className=" col-12 col-lg-9 pt-sm-3 pt-md-3" src={WeAboutT} alt="about-point-ventures" />

                <h2 className="c-white h2 mt-5 pt-5">We are different</h2>

                <p className="p1 mt-5">We provide you and your projects with financial assistance at an early stage - before their potential becomes apparent to everyone. We actively work on them, add value to them and encourage their growth.<br /><br />

                Our clients are company executives and board directors, ambitious entrepreneurs and private funds - all of whom are looking to create new values.<br /><br />

                Build the future with innovation!
                </p>


                <div id='about'>
                    <h2 className="c-white h2 mt-5 pt-5" >About Us</h2>

                    <p className="p1 mt-5">We bring StartUp experience, investment know-how and a business strategy that gives companies and individuals a better chance to grow in the domestic and foreign markets.<br /><br />
                We team up with you to expand our business and move to the next level together.

                </p>
                </div>
            </div>
        </div>
    )
}
