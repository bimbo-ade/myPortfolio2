import React from "react";

import { motion } from "framer-motion";
import jedi3 from "../../assets/Images/jedi3.jpg";
import "./Projects.css";
const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "100" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="project-container"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {" "}
        <div className="underlay">Projects</div>
        <motion.h1
          className="header"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {" "}
          <span>P</span>
          <span>r</span>
          <span>o</span>
          <span>j</span>
          <span>e</span>
          <span>c</span>
          <span>t</span>
          <span>s</span>
        </motion.h1>{" "}
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
                <div className="btn-cont">
                  <button>Live</button>
                  <button>Github</button>
                </div>
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
                <div className="btn-cont">
                  <button>Live</button>
                  <button>Github</button>
                </div>
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
                <div className="btn-cont">
                  <button>Live</button>
                  <button>Github</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
