import React from 'react'

export const PortfolioItem = ({ img, desc }) => {
    return (
        <div className="portfolio-item col-12 col-md-6 col-lg-6  m-0 my-4 my-lg-0 p-0 p-lg-5  d-flex justify-content-center align-items-center position-relative ">
            <img src={img} className="col-12 text-center" alt="Information Technology" />
            <h1 className="c-white h3 fw-700 col-10 col-md-5 col-lg-4 position-absolute text-center m-0 p-0">{desc}</h1>
        </div>
    )
}
