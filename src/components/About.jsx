import React from "react";
import aboutimage from "../images/about.png";

function About() {
  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
      <div className="about-text">
        <h1>GET MORE WITH US</h1>
        <p>
          Lorem ipsum dollar state as french contribution here becomes small
          emmursive and freeded
        </p>
        <button>READ HERE</button>
      </div>
    </div>
  );
}

export default About;
