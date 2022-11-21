import React from "react";
import jedi3 from "../../assets/Images/jedi3.jpg";
import "./Projects.css";
const Projects = () => {
  return (
    <div>
      <div className="project-container">
        <h1 className="header">
          {" "}
          <span>M</span>
          <span>y</span>
          <span> </span>
          <span>P</span>
          <span>r</span>
          <span>o</span>
          <span>j</span>
          <span>e</span>
          <span>c</span>
          <span>t</span>
          <span>s</span>
        </h1>{" "}
        <div className="project-container-card">
          <div className="card">
            <div className="image" style={{ backgroundImage: `url(${jedi3})` }}>
              <span></span>
              <div className="span-content">
                {" "}
                <h1> StarWars PJ</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Beatae, consequatur?
                </p>
                <button>view project</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="image" style={{ backgroundImage: `url(${jedi3})` }}>
              <span></span>
              <div className="span-content">
                {" "}
                <h1> StarWars PJ</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Beatae, consequatur?
                </p>
                <button>view project</button>
              </div>
            </div>
          </div>{" "}
          <div className="card">
            <div className="image" style={{ backgroundImage: `url(${jedi3})` }}>
              <span></span>
              <div className="span-content">
                {" "}
                <h1> StarWars PJ</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Beatae, consequatur?
                </p>
                <button>view project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
