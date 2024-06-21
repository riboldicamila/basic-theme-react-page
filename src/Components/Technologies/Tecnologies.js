import React from "react";
import git from "./git.png";
import html from "./html.png";
import scrum from "./scrum.png";
import css from "./CSS-Logo.png";
import js from "./JavaScript.png";
import react from "./react+.png";
import python from "./python.png";

import "./Tecnologies.css";

function Technologies() {
  return (
    <div className="tecnologies-tab">
      <div className="title">Skills set: What Can I Do</div>
      <div className="subtitle">
        I Work With: A Comprehensive Toolkit Encompassing React, HTML, CSS,
        JavaScript, SQL, and Python.
      </div>
      <div className="images">
        <img src={scrum} alt="Background" className="icon-image" />
        <img src={git} alt="Background" className="icon-image" />
        <img src={css} alt="Background" className="icon-image" />
        <img src={html} alt="Background" className="icon-image" />
        <img src={js} alt="Background" className="icon-image" />
        <img src={react} alt="Background" className="icon-image" />

      </div>
    </div>
  );
}

export default Technologies;
