import React, { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false); 

  return (
    <nav className="navbar">
      <div className="logo">Ikremh Altoubat</div>

  
      <div className="hamburger" onClick={() => setOpen(!open)}>
        &#9776;
      </div>

      
      <div className={`nav-links ${open ? "active" : ""}`}>
        <Link onClick={() => setOpen(false)} activeClass="active" to="home" spy={true} smooth={true} offset={-60} duration={500}>
          Home
        </Link>
        <Link onClick={() => setOpen(false)} activeClass="active" to="section2" spy={true} smooth={true} offset={-60} duration={500}>
          Services
        </Link>
         <Link onClick={() => setOpen(false)} activeClass="active" to="section3" spy={true} smooth={true} offset={-60} duration={500}>
          skills
        </Link>
        <Link onClick={() => setOpen(false)} activeClass="active" to="section" spy={true} smooth={true} offset={-60} duration={500}>
          Education
        </Link>
        <Link onClick={() => setOpen(false)} activeClass="active" to="section4" spy={true} smooth={true} offset={-60} duration={500}>
          Experience
        </Link>
        <Link onClick={() => setOpen(false)} activeClass="active" to="section5" spy={true} smooth={true} offset={-60} duration={500}>
          Projects
        </Link>
        <Link onClick={() => setOpen(false)} activeClass="active" to="section6" spy={true} smooth={true} offset={-60} duration={500}>
          Testimonials
        </Link>
        <Link onClick={() => setOpen(false)} activeClass="active" to="section7" spy={true} smooth={true} offset={-60} duration={500}>
          Contact Us
        </Link>
      </div>
    </nav>
  );
}


