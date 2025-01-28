import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-tab">
      <div className="home-text">
        My name is John Doe. <br /> I love capturing moments for my clients.
        Photography isn’t just about taking pictures;
        <span style={{ color: "#00D6E8" }}> it’s about telling stories. </span>
        There’s always a new perspective to explore, a detail to highlight, and
        a story to bring to life.
      </div>
      <button type="button" class="btn btn-primary btn-sm btn-block">
        Let's connect
      </button>
    </div>
  );
}

export default Home;
