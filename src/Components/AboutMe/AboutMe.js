import React from "react";
import "./AboutMe.css";
import tech from "./languages-photo.jpg";

function AboutMe() {
  return (
    <div className="about-me-tab">
      <div className="side-card">
        <div className="text">
          <div className="title">My journey</div>
          Holding a diploma from the School of Photography, known for its
          excellence in visual arts education. This 4-year program provided a
          deep dive into both technical and creative aspects of photography. I
          honed my skills through workshops, dedicating over 60 hours to
          mastering portrait and landscape photography. Additionally, I gained a
          solid understanding of post-production techniques, including Photoshop
          and Lightroom, through a 38-hour course. From a creative perspective,
          I explored storytelling in photography, learning how to turn ideas
          into compelling visual narratives. For client work, I completed a
          program focused on branding and visual marketing, which improved my
          ability to craft impactful images and connect with audiences.
        </div>

        <img src={tech} alt="Relevant description" className="image" />
      </div>
    </div>
  );
}

export default AboutMe;
