import React from "react";
import "./About.css";

import { motion } from "framer-motion";
import ProgressBar from "@ramonak/react-progress-bar";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "100" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="about-container">
        <div className="underlay">About</div>
        <motion.h1
          className="header"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {" "}
          <span>A</span>
          <span>b</span>
          <span>o</span>
          <span>u</span>
          <span>t</span>
        </motion.h1>{" "}
        <div className="about-content">
          <div className="about-me">
            <div className="text-header">
              <h3>Who is Abimbola?</h3>
            </div>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              at. Facere eveniet ratione, laudantium deserunt modi placeat
              sapiente Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Tempore, at. Facere eveniet ratione, laudantium deserunt modi
              placeat sapiente repellat ex perspiciatis vitae eligendi. Mollitia
              tempora iste neque, dolores sint alias?repellat ex perspiciatis
              vitae eligendi. Mollitia tempora iste neque, dolores sint alias?
            </p>
          </div>
          <div className="about-me">
            <div className="text">
              <div className="text-header">
                <h3>My Skiils</h3>
              </div>
            </div>
            <div className="cont">
              <div className="progress-bar">
                <h3>Reactjs</h3>
                <ProgressBar
                  completed={80}
                  className="pb"
                  baseBgColor="var(--white)"
                  borderRadius="0"
                  height="8px"
                  bgColor="var(--gray)"
                  labelSize="9px"
                />
              </div>
              <div className="progress-bar">
                <h3>HTML & CSS</h3>
                <ProgressBar
                  completed={100}
                  className="pb"
                  baseBgColor="var(--white)"
                  borderRadius="0"
                  height="8px"
                  bgColor="var(--gray)"
                  labelSize="9px"
                />
              </div>
              <div className="progress-bar">
                <h3>Tailwind, Bootsrap, SASS</h3>
                <ProgressBar
                  completed={70}
                  className="pb"
                  baseBgColor="var(--white)"
                  borderRadius="0"
                  height="8px"
                  bgColor="var(--gray)"
                  labelSize="9px"
                />
              </div>
              <div className="progress-bar">
                <h3>Next Js</h3>
                <ProgressBar
                  completed={50}
                  className="pb"
                  baseBgColor="var(--white)"
                  borderRadius="0"
                  height="8px"
                  bgColor="var(--gray)"
                  labelSize="9px"
                />
              </div>
              <div className="progress-bar">
                <h3>Typescript</h3>
                <ProgressBar
                  completed={20}
                  className="pb"
                  baseBgColor="var(--white)"
                  borderRadius="0"
                  height="8px"
                  bgColor="var(--gray)"
                  labelSize="9px"
                />
              </div>
            </div>
          </div>
          <div className="about-me">
            <div className="text-header">
              <h3>Experience</h3>
            </div>

            <div className="experience">
              <h6>Frontend Developer</h6>
              <h6>Citiserve Limited,Nigeria</h6>
              <h6>2021-2022</h6>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
