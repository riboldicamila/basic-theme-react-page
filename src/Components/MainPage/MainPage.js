import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import "./MainPage.css";
import Home from "../Home/Home";
import Technologies from "../Technologies/Tecnologies";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";

function MainPage() {
  return (
    <div className="main-page">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="technologies">
        <Technologies />
      </div>
      <div id="about-me">
        <AboutMe />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact-me">Contact me</div>

      <Footer />
    </div>
  );
}

export default MainPage;
