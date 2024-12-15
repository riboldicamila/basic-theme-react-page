import React from "react";

import pj1 from "./portfolio-project.png";
import pj2 from "./swissMedia-html.png";

import "./Projects.css";

function Projects() {
  return (
    <>
      <div className="projects-card">
        <div className="up-title">Projects</div>
        <div className="title">What I have worked on</div>
        <div className="subtitle">
          Here are some of my recent work. <br />
          <span style={{ color: "#00D6E8" }}>Wedding Photography:</span> In this
          project, I captured moments for a couple’s wedding, focusing on
          natural light and candid shots. The final product was a blend of posed
          portraits and spontaneous moments, all edited in Lightroom to create a
          timeless feel. The images were delivered through an online gallery for
          easy sharing.
          <br />
          <span style={{ color: "#00D6E8" }}>Product Photography:</span> For
          this project, I worked with a local brand, creating high-quality
          product images to showcase their new collection. Using a combination
          of studio lighting and styling techniques, I captured each product in
          a way that highlighted its details. The images were used on their
          website and social media platforms.
          <br />
          <span style={{ color: "#00D6E8" }}>Portrait Sessions:</span> Over the
          years, I've done numerous portrait sessions for clients, ranging from
          headshots to personal branding photos. Each session is tailored to the
          client’s needs, with a focus on creating a comfortable atmosphere to
          capture authentic expressions. The final edited images are delivered
          digitally, with options for prints.
        </div>

        <button type="button" class="btn btn-primary btn-sm btn-block">
          Let's connect
        </button>
      </div>
      <div className="projects-img">
        <img src={pj1} alt="Project 1" className="project-image" />
        <img src={pj2} alt="Project 2" className="project-image" />
      </div>
    </>
  );
}

export default Projects;
