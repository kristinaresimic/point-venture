import React from 'react'
import { Footer } from '../components/Footer'
import { LandingPage } from '../components/LandingPage'
import NavbarCustom from '../components/NavbarCustom'
import { PortfolioContact } from '../components/PortfolioContact'
import { WeAbout } from '../components/WeAbout'
import { WhatWeOffer } from '../components/WhatWeOffer/WhatWeOffer'
import $ from 'jquery'
import { VerticalLine } from '../components/VerticalLine'


export const Home = () => {
    const scroll = (page) => {
        $("html,body").animate(
            {
                scrollTop: $(`#${page}`).offset().top,
            },
            "slow"
        );
    }
    const choose = (e) => {
        switch (e.target.classList[0]) {
            case "homeNav":
                scroll("home")
                break;
            case "aboutNav":
                scroll("about")
                break;
            case "offerNav":
                scroll("offer")
                break;
            case "portfolioNav":
                scroll("portfolio")
                break;
            case "contactNav":
                scroll("portfolio")
                break;

            default:
            // code block
        }
    }
    return (
        <div className="home">
            <NavbarCustom choose={choose} />
            <div id="landing">
                <LandingPage />
            </div>
            <div id="about">
                <WeAbout />
            </div>
            <div id="offer">
                <WhatWeOffer />
            </div>
            <div id="portfolio">
                <PortfolioContact />
            </div>
            <div id="footer">
                <Footer />
            </div>
        </div>
    )
}
