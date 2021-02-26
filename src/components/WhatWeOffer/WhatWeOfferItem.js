import React from 'react';
export const WhatWeOfferItem = (props) => {
    return (
        <div className="whatWeOffer-item col-12 col-sm-8 col-lg-2 mt-3 mt-md-0 mx-4">
            <div className="whatWeOffer-item-top">
                <div className="whatWeOffer-item-top-icon d-flex justify-content-center align-items-center">
                    <img
                        className="col-4 col-lg-6 col-xl-4"
                        src={props.icon}
                        alt={props.alt}
                    />
                </div>
                <div className="mt-3">
                    <p className="p1 fw-700 text-center">{props.title}</p>
                </div>
                <p className="p2 mt-5 text-justify">{props.description}</p>
            </div>

        </div>
    )
}
