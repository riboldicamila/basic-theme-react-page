import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-tab">
      <div className="home-text">
        My name is Camila. <br /> I like to create solutions for clients. Web
        developmentis is not just about building websites;{" "}
        <span style={{ color: "#00D6E8" }}>
          {" "}
          it’s about creating experiences.{" "}
        </span>{" "}
        There’s always something new to learn, something to improve, and
        something to innovate.
      </div>
      <button type="button" class="btn btn-primary btn-lg btn-block">
        Let's connect
      </button>
    </div>
  );
}

export default Home;
