import React, { useState } from 'react'


export const ContactForm = () => {
    const [type, settype] = useState(1)
    const [category, setcategory] = useState(1)
    const [turnover, setturnover] = useState(1)
    const [size, setsize] = useState(1)


    return (
        <div className="contactform  col-10 col-sm-8 col-md-9 mx-auto mt-5 p-0 m-0">
            <div className="contactform-top p-5 d-flex align-items-center">
                <h2 className="h4 ml-sm-5">Contact Form</h2>

            </div>

            <div className="contactform-content col-12">
                <div className="col-12 col-sm-11 mx-auto ">
                    <h4 className="h4 c-blue pt-5 fw-700 ml-lg-5 ml-xl-5">1. Company Information</h4>

                    <div className="row ">
                        <div className="d-flex flex-column col-12 col-md-6 col-lg-5 col-xl-5  mt-2 ml-xl-5 ml-lg-5">
                            <label className="contactform-content-label c-grey ">Company, product or project name</label>
                            <input className="contactform-content-input p4 c-black ml-4 mt-2" type="text" id="formTitle" />
                        </div>

                        <div className="d-flex flex-column col-12  col-md-6 col-lg-5 col-xl-5 mt-2 ml-xl-5 ml-lg-5">
                            <label className="contactform-content-label c-grey">Location of the company</label>
                            <input className="contactform-content-input p4 c-black mt-2  ml-4" type="text" />
                        </div>

                        <div className="d-flex flex-column col-12  col-md-6 col-lg-5 col-xl-5 mt-0 mt-md-2 ml-xl-5 ml-lg-5">
                            <label className="contactform-content-label c-grey">Year founded</label>
                            <input className="contactform-content-input p4 c-black  mt-3 ml-4" type="text" placeholder="dd/mm/yyyy" />
                            <p className="p4 c-grey ml-4 mt-3">If your company is not founded yet, please, leave this field blank</p>

                        </div>

                        <div className="d-flex flex-column col-12 col-md-6 col-lg-5 col-xl-5 mt-0 mt-md-2 ml-xl-5 ml-lg-5">
                            <label className="contactform-content-label c-grey">Web platforms</label>
                            <input className="contactform-content-input p3 c-black  mt-1 ml-4" type="text" placeholder="LinkedIn" />
                            <input className="contactform-content-input p3 c-black ml-4 mt-4" type="text" placeholder="Website" />

                        </div>

                        <div className="d-flex flex-column col-12  col-md-6 col-lg-5 col-xl-5 mt-0 mt-md-2 ml-xl-5 ml-lg-5">
                            <label className="contactform-content-label c-grey">Business type (Please, check one of the options below)</label>
                            <div className="m-0 p-0 ml-3">
                                <label class="sq-radio d-flex align-items-center c-grey p4">Start up
                        <input type="radio" checked={type === 1 ? true : false} onChange={() => settype(1)} />
                                    <span class="checkmark"></span>
                                </label>

                                <label class="sq-radio d-flex align-items-center c-grey p4 ">Existing business
                        <input type="radio" checked={type === 2 ? true : false} onChange={() => settype(2)} />
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>

                        <div className="d-flex flex-column col-12  col-md-6 col-lg-5 col-xl-5 mt-0 mt-md-2 ml-xl-5 ml-lg-5">
                            <label className="contactform-content-label c-grey">Business category (Please, check one of the options below)</label>
                            <div className="m-0 p-0 ml-3">
                                <label class="sq-radio d-flex align-items-center c-grey p4">B2B (Business to business)
                        <input type="radio" checked={category === 1 ? true : false} onChange={() => setcategory(1)} />
                                    <span class="checkmark"></span>
                                </label>

                                <label class="sq-radio d-flex align-items-center c-grey p4 ">B2C (Business to client)
                        <input type="radio" checked={category === 2 ? true : false} onChange={() => setcategory(2)} />
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>


                        <div className="d-flex flex-column col-12  col-md-6 col-lg-5 col-xl-5  mt-2 ml-xl-5 ml-lg-5">
                            <label className="contactform-content-label c-grey">Which sector is your business in?</label>
                            <input className="contactform-content-input p4 c-black mt-2  ml-4" type="text" placeholder="Example: Information & Technology" />
                        </div>

                        <div className="d-flex flex-column col-12  col-md-6 col-lg-5 col-xl-5  mt-2 ml-xl-5 ml-lg-5">
                            <label className="contactform-content-label c-grey">Where is the market of the business?</label>
                            <input className="contactform-content-input p4 c-black mt-2 ml-4" type="text" />
                        </div>

                        <div className="d-flex flex-column col-12  col-md-6 col-lg-5 col-xl-5 mt-2 ml-xl-5 ml-lg-5">
                            <label className="contactform-content-label c-grey">Business size (Please, check one of the options below)</label>
                            <div className="contactform-content-size d-flex m-0 p-0 ml-3">
                                <div>
                                    <label class="sq-radio d-flex align-items-center c-grey p4">Micro (up to 3 workers)
                        <input type="radio" checked={size === 1 ? true : false} onChange={() => setsize(1)} />
                                        <span class="checkmark"></span>
                                    </label>

                                    <label class="sq-radio d-flex align-items-center c-grey p4 mt-sm-2 mt-md-2 mt-lg-2 mt-xl-2">Small (up to 10 workers)
                        <input type="radio" checked={size === 2 ? true : false} onChange={() => setsize(2)} />
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <div className=" ml-sm-5">
                                    <label class="sq-radio d-flex align-items-center c-grey p4 ">Medium (up to 50 workers)
                        <input type="radio" checked={size === 3 ? true : false} onChange={() => setsize(3)} />
                                        <span class="checkmark"></span>
                                    </label>

                                    <label class="sq-radio d-flex align-items-center c-grey p4 mt-sm-2 mt-md-2 mt-lg-2 mt-xl-2">Large (up to +150 workers)
                        <input type="radio" checked={size === 4 ? true : false} onChange={() => setsize(4)} />
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>

                        </div>

                        <div className=" col-12 col-md-6 col-lg-5 col-xl-5 ml-xl-5 ml-lg-5 mt-5">
                            <label className="contactform-content-label c-grey m-0">Turnover</label>
                            <div className="d-flex flex-column">
                                <div className="d-flex flex-row m-0 p-0 ml-3 mt-2">
                                    <label class="sq-radio d-flex align-items-center c-grey p4">Yes
                        <input type="radio" checked={turnover === 1 ? true : false} onChange={() => setturnover(1)} />
                                        <span class="checkmark"></span>
                                    </label>

                                    <label class="sq-radio d-flex align-items-center c-grey p4 ml-5">No
                        <input type="radio" checked={turnover === 2 ? true : false} onChange={() => setturnover(2)} />
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <div className="d-flex align-items-center mt-2">
                                    <label class="sq-radio d-flex align-items-center c-grey p4 ">$</label>
                                    <input className="contactform-content-input c-black p4" type="text" />
                                </div>
                            </div>
                        </div>

                        <h4 className="h4 c-blue pt-5 fw-700 col-12 m-0 ml-lg-5 ml-xl-5">2. Your Business</h4>

                        <div className="d-flex flex-column col-12  col-md-6 col-lg-5 col-xl-5 ml-xl-5 ml-lg-5">
                            <label className="contactform-content-label c-grey">Describe your business, project or product</label>
                            <textarea placeholder="In few sentences, explain your business..." id="message" name="message" rows="8" className="forminvestor-content-textarea p4 col-11 mt-2 c-black ml-3 p-2" />
                        </div>

                        <div className="d-flex flex-column col-12  col-md-6 col-lg-5 col-xl-5 ml-xl-5 ml-lg-5">
                            <label className="contactform-content-label c-grey">Describe the goals you have</label>
                            <textarea placeholder="In few sentences, explain your goals that you expect to achieve..." id="message" name="message" rows="8" className="forminvestor-content-textarea p4 col-11 mt-2 c-black ml-3 p-2" />
                        </div>



                        <div className=" col-12 col-md-6 col-lg-5 col-xl-5 ml-xl-5 ml-lg-5 mt-5">
                            <label className="contactform-content-label c-grey m-0">How much capital do you need</label>

                            <div className="d-flex align-items-center mt-2">
                                <label class="sq-radio d-flex align-items-center c-grey p4">$</label>
                                <input className="contactform-content-input c-black p4" type="text" />
                            </div>
                        </div>

                        <h4 className="h4 c-blue pt-5 fw-700 col-12 m-0 ml-lg-5 ml-xl-5">3. Contact Information</h4>

                        <div className="d-flex flex-column col-12  col-md-6 col-lg-5 col-xl-5  mt-2 ml-xl-5 ml-lg-5">
                            <label className="contactform-content-label c-grey ">Full Name</label>
                            <input className="contactform-content-input p4 c-black ml-4 mt-2" type="text" id="formTitle" />
                        </div>

                        <div className="d-flex flex-column col-12  col-md-6 col-lg-5 col-xl-5  mt-2 ml-xl-5 ml-lg-5">
                            <label className="contactform-content-label c-grey ">Telephone</label>
                            <input className="contactform-content-input p4 c-black ml-4 mt-2" type="text" id="formTitle" />
                        </div>

                        <div className="d-flex flex-column col-12  col-md-6 col-lg-5 col-xl-5  mt-2 ml-xl-5 ml-lg-5">
                            <label className="contactform-content-label c-grey ">Email</label>
                            <input className="contactform-content-input p4 c-black ml-4 mt-2" type="text" id="formTitle" />
                        </div>

                        <div className="d-flex flex-column col-12  col-md-6 col-lg-5 col-xl-5 ml-xl-5 ml-lg-5">
                            <label className="contactform-content-label c-grey">Message</label>
                            <textarea  id="message" name="message" rows="8" className="forminvestor-content-textarea p4 col-12 mt-2 c-black ml-3 p-3" />
                        </div>
                    </div>


                    <div className="d-flex align-items-center justify-content-center col-12 py-5 mt-5">
                        <button className="contactform-content-btn">SEND</button>
                    </div>
                </div>

            </div>


            <div className="contactform-bottom">

            </div>
        </div>
    )
}
