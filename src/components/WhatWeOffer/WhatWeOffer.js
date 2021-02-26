import React, { useState } from 'react';
import { WhatWeOfferItem } from './WhatWeOfferItem';
import LeveragedBuyouts from '../../img/LeveragedBuyouts.svg';
import BussinessDevelopment from '../../img/BussinessDevelopment.svg';
import GrowthEquity from '../../img/GrowthEquity.svg';
import VentureCapital from '../../img/VentureCapital.svg';


export const WhatWeOffer = () => {
    const [data, setData] = useState([
        {
            icon: LeveragedBuyouts,
            alt: "leveraged-buyouts",
            title: "Leveraged Buyouts",
            description: "LBOs are conducted for three main reasons. The first is the takeover of a private public enterprise; the second is the separation of a part of an existing enterprise by sale; and the third is the transfer of private ownership, as is the case with the change of ownership of small businesses. However, it is usually a requirement that the acquired company or entity, in each scenario, be profitable and growing.",

        },
        {
            icon: VentureCapital,
            alt: "venture-capital",
            title: "Venture Capital",
            description: "Venture capital is a form of private capital and a type of financing that investors provide to startups and small businesses that are believed to have long-term growth potential. Venture capital mainly comes from private investors, investment banks and any other financial institution.",
        },
        {
            icon: BussinessDevelopment,
            alt: "bussiness-development",
            title: "Bussiness Development",
            description: "Simply put, business development can be summarized as ideas, initiatives and activities that help make a business better. These include increasing revenue, growing in terms of business expansion, increasing profitability by building strategic partnerships and making strategic business decisions.",
        },
        {
            icon: GrowthEquity,
            alt: "growth-equity",
            title: "Growth Equity",
            description: "Growth capital (also called capital for expansion and capital growth) is a type of investment in private capital, usually minority investment, in relatively mature companies seeking capital to expand or restructure, enter new markets or finance significant acquisitions without changing business control.",
        },
    ])
    return (
        <div className="whatWeOffer d-flex flex-column justify-content-center align-items-center " id='what-we-offer'>

            <h2 className="c-white h2 mt-5">What We Offer</h2>
            <div className="whatWeOffer-container d-flex justify-content-center text-center col-10 col-sm-9 col-md-8 col-lg-12 col-xl-12 row mx-auto mt-5">
                {data.map(item => {
                    return (
                        <WhatWeOfferItem
                            icon={item.icon}
                            alt={item.alt}
                            description={item.description}
                            title={item.title}
                        />
                    )
                })}
            </div>
        </div>
    )
}
