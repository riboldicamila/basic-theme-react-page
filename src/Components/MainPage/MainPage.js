import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function MainPage() {
  return (
    <>
      <Navbar />

      <div className="home"></div>

      <div className="technologies"></div>

      <div className="about-me"></div>

      <div className="projects"></div>

      <Footer />
    </>
  );
}

export default MainPage;
