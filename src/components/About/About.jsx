import React from "react";
import "./About.css";

import ProgressBar from "@ramonak/react-progress-bar";

const About = () => {
  return (
    <div>
      <div className="about-container">
        <h1 className="header">
          {" "}
          <span>A</span>
          <span>b</span>
          <span>o</span>
          <span>u</span>
          <span>t</span>
          <span> </span>
          <span>M</span>
          <span>e</span>
        </h1>{" "}
        <div className="about-content">
          <div className="about-me">
            <div className="text">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perferendis ad dicta facere quo, laborum corporis. Aut enim
                consequatur amet dolore?
              </p>
            </div>
            <div className="progress-bar">
              <ProgressBar completed={60} />
            </div>
          </div>
          <div className="skills"></div>
          <div className="work-timeline"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
