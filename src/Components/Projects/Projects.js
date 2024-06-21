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
          SwissMedia: In this project, you'll find a website created with HTML
          and CSS, featuring experiments with Sass, Flexbox, and general
          frontend concepts. To develop this site, I started with wireframes and
          thoughtfully designed the layout of each tab and page. The final
          product is deployed and available at GitHub Pages.
          <br />
          My portfolio: In this project, you'll find a portfolio website created
          with React and Material UI, showcasing experiments with various
          frontend technologies and concepts. Is deployed and available on
          Vercel.
          <br />
          Corporate Projects: In my career, I've worked on corporate projects
          both with CMS and build from scratch applications.
        </div>
        <button type="button" class="btn btn-primary btn-lg btn-block">
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
