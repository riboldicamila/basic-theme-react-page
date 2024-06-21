import React from "react";

function Navbar() {
  return (
    <div>
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
