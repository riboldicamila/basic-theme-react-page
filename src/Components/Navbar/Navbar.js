import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-tab">
      <div className="navbar-logo">
        <a href="#home">
          Home
          {/* <img src={Logo} alt="Logo" className="logo-image" /> */}
        </a>
      </div>
      <ul className="navbar-items">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#technologies">Technologies</a>
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
