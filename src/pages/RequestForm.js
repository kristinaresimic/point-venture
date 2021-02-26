import React from 'react';
import { Footer } from '../components/Footer';
import '../styles/styles.scss';
import FormArrow from '../img/FormArrow.png';
import LogoForm from '../img/LogoForm.png';
import { Link } from "react-router-dom";
import { ContactForm } from '../components/ContactForm';


export const RequestForm = () => {
    return (
        <div >
            <div className="requestform">
                <div className="pt-5">

                    <div className="d-flex justify-content-between align-items-center text-center m-auto col-10 col-sm-8 col-lg-10">
                        <div className="d-flex justify-content-center align-items-center text-center  ">
                            <img className="requestform-arrow mr-2" src={FormArrow} />
                            <Link to='/'><p className="p4 c-gold my-3">Go Back to Home Page</p></Link>
                        </div>
                        <Link to='/'> <img src={LogoForm} className="requestform-logo"/></Link>
                        <Link to='/' className="requestform-title"> <p className=" p4 my-3">Point Venture</p></Link>
                    </div>

                    <ContactForm/>
                </div>
            </div>

            <Footer />
        </div>
    )
}
