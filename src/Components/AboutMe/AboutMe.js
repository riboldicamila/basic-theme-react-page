import React from "react";
import "./AboutMe.css";
import tech from "./languages-photo.jpg";

function AboutMe() {
  return (
    <div className="about-me-tab">
      <div className="side-card">
        <div className="text">
          <div className="title">My journey</div>
          Holding a degree from UBA University, ranked 2nd in the QS Latin
          America University Rankings 2024 and 71st worldwide. This Bachelor in
          Information Systems program spans 5 ½ years and offers a comprehensive
          journey that merges business management with technological innovation.
          I improved my React skills through courses by Meta and Coderhouse,
          dedicating over 60 hours to mastering React Js. Additionally, I gained
          a solid understanding of web development fundamentals, including HTML,
          CSS, and SASS, through a 38-hour course. From a design perspective, I
          grasped the fundamentals through a program at the University of
          Michigan, understanding UX Design from concept to prototype. Backend
          related, I completed a Coding Bootcamp emphasizing Object-Oriented
          Programming fundamentals based on Test Driven Development principles,
          which greatly improved my problem-solving skills and code quality and
          later on I complemented that with a Python certification from Udemy."
        </div>
        <img src={tech} alt="Relevant description" className="image" />
      </div>
    </div>
  );
}

export default AboutMe;
