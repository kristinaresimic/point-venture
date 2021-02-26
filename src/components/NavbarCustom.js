import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logo from '../img/Logo.png';
import burger from '../img/burger.png';
import close from '../img/close.png';

export const NavbarCustom = ({ choose }) => {
  const [bgColor, setBgColor] = useState("transparent")
 
  document.addEventListener("scroll", () => {

    setBgColor(window.scrollY < 100 ? "transparent" : "#1D1C1B")
  });

  return (
    <Navbar style={{ backgroundColor: bgColor }} className="navbar col-12   pt-3 position-fixed" expand="lg">
      <Navbar.Brand className="navbar-brand " href="#home">
        <img className="navbar-logo" src={Logo} alt="Point Ventures logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" >
        <img className="navbar-burger" src={burger} alt="Point Ventures burger menu" />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link onClick={choose} className="homeNav p2 c-white fw-500 mx-3" >Home</Nav.Link>
          {/*        <Nav.Link className="p2 c-white fw-500 mx-3" href="#we-are-different">We are different</Nav.Link> */}
          <Nav.Link onClick={choose} className="aboutNav p2 c-white fw-500 mx-3">About Us</Nav.Link>
          <Nav.Link onClick={choose} className="offerNav p2 c-white fw-500 mx-3" >What We Offer</Nav.Link>
          <Nav.Link onClick={choose} className="portfolioNav p2 c-white fw-500 mx-3" >Portfolio</Nav.Link>
          <Nav.Link onClick={choose} className="contactNav p2 c-white fw-500 mx-3">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavbarCustom