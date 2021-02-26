import React, { useState } from 'react'


export const FormInverstor = () => {
    const [state, setstate] = useState(1)
    const [networks, setnetworks] = useState(1)
    const [prefer, setprefer] = useState(1)

    return (
        <div className="forminvestor  col-10 col-sm-8 col-md-9 mx-auto mt-5 p-0 m-0">
            <div className="forminvestor-top p-5 d-flex align-items-center">
                <h2 className="h4 ml-sm-5">Form for partners / investor</h2>

            </div>

            <div className="forminvestor-content  col-12">
                <div className="col-12 col-sm-11 mx-auto ">
                    <h4 className="h4 c-blue pt-5 fw-700">1. Company Information</h4>

                    <div className="row ">
                        <div className="d-flex flex-column col-12  col-md-6 col-lg-5 col-xl-5  mt-2 ml-xl-5 ml-lg-5">
                            <label className="forminvestor-content-label c-grey ">Title</label>
                            <input className="forminvestor-content-input p4 c-black ml-4 mt-2" type="text" id="formTitle" />
                        </div>

                        <div className="d-flex flex-column col-12  col-md-6 col-lg-5 col-xl-5 mt-2 ml-xl-5 ml-lg-5">
                            <label className="forminvestor-content-label c-grey">Full name</label>
                            <input className="forminvestor-content-input p4 c-black mt-2  ml-4" type="text" />
                        </div>

                        <div className="d-flex flex-column col-12  col-md-6 col-lg-5 col-xl-5 mt-2  ml-xl-5 ml-lg-5">
                            <label className="forminvestor-content-label c-grey">Current city</label>
                            <input className="forminvestor-content-input p4 c-black  mt-2 ml-4" type="text" />
                        </div>

                        <div className="d-flex flex-column col-12  col-md-6 col-lg-5 col-xl-5 mt-2  ml-xl-5 ml-lg-5">
                            <label className="forminvestor-content-label c-grey">Current company</label>
                            <input className="forminvestor-content-input p4 c-black mt-2 ml-4" type="text" />
                        </div>

                        <div className="d-flex flex-column col-12  col-md-6 col-lg-5 col-xl-5  mt-2 ml-xl-5 ml-lg-5">
                            <label className="forminvestor-content-label c-grey">Contact number</label>
                            <input className="forminvestor-content-input p4 c-black mt-2  ml-4" type="text" />
                        </div>

                        <div className="d-flex flex-column col-12 col-md-6 col-lg-5 col-xl-5 mt-2 ml-xl-5 ml-lg-5">
                            <label className="forminvestor-content-label c-grey">Email</label>
                            <input className="forminvestor-content-input p4 c-black mt-2  ml-4" type="text" />
                        </div>

                        <div className="d-flex flex-column col-12 col-md-6 col-lg-5 col-xl-5 mt-2 ml-xl-5 ml-lg-5">
                            <label className="forminvestor-content-label c-grey">Web platforms</label>
                            <input className="forminvestor-content-input p3 c-black mt-4 ml-4" type="text" placeholder="LinkedIn" />
                            <input className="forminvestor-content-input p3 c-black mt-3 ml-4 mt-4" type="text" placeholder="Website" />

                        </div>

                        <div className="d-flex flex-column col-12  col-md-6 col-lg-5 col-xl-5 mt-2 ml-xl-5 ml-lg-5">
                            <label className="forminvestor-content-label c-grey">Areas of interest</label>
                            <div className="m-0 p-0 ml-3">
                                <label class="sq-radio d-flex align-items-center c-grey p4">Investing
                        <input type="radio" checked={state === 1 ? true : false} onChange={() => setstate(1)} />
                                    <span class="checkmark"></span>
                                </label>

                                <label class="sq-radio d-flex align-items-center c-grey p4 ">Networking
                        <input type="radio" checked={state === 2 ? true : false} onChange={() => setstate(2)} />
                                    <span class="checkmark"></span>
                                </label>

                                <label class="sq-radio d-flex align-items-center c-grey p4 ">Business development
                        <input type="radio" checked={state === 3 ? true : false} onChange={() => setstate(3)} />
                                    <span class="checkmark"></span>
                                </label>

                                <label class="sq-radio d-flex align-items-center c-grey p4 ">Business market possibility
                        <input type="radio" checked={state === 4 ? true : false} onChange={() => setstate(4)} />
                                    <span class="checkmark"></span>
                                </label>

                                <div className="d-flex align-items-center">
                                    <label class="sq-radio d-flex align-items-center c-grey p4 ">Others
                        <input type="radio" checked={state === 5 ? true : false} onChange={() => setstate(5)} />
                                        <span class="checkmark"></span>
                                    </label>
                                    <input className="forminvestor-content-input c-black p4 mb-1 ml-3" type="text" />
                                </div>

                            </div>

                        </div>
                        <div className=" col-12 col-md-6 col-lg-5 col-xl-5 ml-xl-5 ml-lg-5 mt-5 mt-sm-5 mt-md-0">
                            <label className="forminvestor-content-label c-grey m-0">Are you a part of any investing networks?</label>
                            <div className="d-flex flex-row m-0 p-0 ml-3 mt-2">
                                <label class="sq-radio d-flex align-items-center c-grey p4">Yes
                        <input type="radio" checked={networks === 1 ? true : false} onChange={() => setnetworks(1)} />
                                    <span class="checkmark"></span>
                                </label>

                                <label class="sq-radio d-flex align-items-center c-grey p4 ml-5">No
                        <input type="radio" checked={networks === 2 ? true : false} onChange={() => setnetworks(2)} />
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>

                        <div className=" col-12 col-md-6 col-lg-5 col-xl-5 ml-xl-5 ml-lg-5">
                            <label className="forminvestor-content-label c-grey ">Do you have experience in investing?</label>
                            <div className="d-flex flex-row m-0 p-0 ml-3 mt-2">
                                <label class="sq-radio d-flex align-items-center c-grey p4">Yes
                        <input type="radio" checked={networks === 1 ? true : false} onChange={() => setnetworks(1)} />
                                    <span class="checkmark"></span>
                                </label>

                                <label class="sq-radio d-flex align-items-center c-grey p4 ml-5">No
                        <input type="radio" checked={networks === 2 ? true : false} onChange={() => setnetworks(2)} />
                                    <span class="checkmark"></span>
                                </label>

                            </div>
                            <textarea placeholder="Please, elaborate..." id="message" name="message" rows="8" className="forminvestor-content-textarea p4 col-12 mt-4 c-black ml-3 p-2" />
                        </div>
                        <div className="d-flex flex-column col-12 col-md-6 col-lg-5 col-xl-5 ml-xl-5 ml-lg-5 mt-5 mt-sm-5 mt-md-0" >
                            <label className="forminvestor-content-labelcustom c-grey">What do you prefer?</label>
                            <div className="m-0 p-0 ml-3">
                                <label class="sq-radio d-flex align-items-center c-grey p4">Information Technology
                        <input type="radio" checked={prefer === 1 ? true : false} onChange={() => setprefer(1)} />
                                    <span class="checkmark"></span>
                                </label>

                                <label class="sq-radio d-flex align-items-center c-grey p4 ">Real estate
                        <input type="radio" checked={prefer === 2 ? true : false} onChange={() => setprefer(2)} />
                                    <span class="checkmark"></span>
                                </label>

                                <label class="sq-radio d-flex align-items-center c-grey p4 ">Production
                        <input type="radio" checked={prefer === 3 ? true : false} onChange={() => setprefer(3)} />
                                    <span class="checkmark"></span>
                                </label>

                                <label class="sq-radio d-flex align-items-center c-grey p4 ">Existing business
                        <input type="radio" checked={prefer === 4 ? true : false} onChange={() => setprefer(4)} />
                                    <span class="checkmark"></span>
                                </label>

                                <label class="sq-radio d-flex align-items-center c-grey p4 ">Start up
                        <input type="radio" checked={prefer === 5 ? true : false} onChange={() => setprefer(5)} />
                                    <span class="checkmark"></span>
                                </label>

                            </div>

                        </div>

                    </div>

                    <div className="d-flex align-items-center justify-content-center col-12 py-5 mt-5">
                        <button className="forminvestor-content-btn">SEND</button>
                    </div>
                </div>

            </div>


            <div className="forminvestor-bottom">

            </div>
        </div>
    )
}
