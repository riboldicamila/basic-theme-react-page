import React, { useState } from "react";
import logo from "../logo.png";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="navbar-tab">
      <div className="navbar-logo">
        <a href="#home">
          <img src={logo} alt="Logo" className="logo-image" />
        </a>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </button>

      <ul className={`navbar-items ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#technologies">Skill Set</a>
        </li>
        <li>
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
