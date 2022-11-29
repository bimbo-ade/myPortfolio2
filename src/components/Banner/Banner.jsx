import React from "react";
import "./Banner.css";
import { motion } from "framer-motion";

import ParticlesPage from "../config/ParticlesPage";
import hood3 from "../../assets/Images/hood3.png";
const Banner = () => {
  return (
    <>
      <ParticlesPage />
      <motion.div
        className="banner-wrapper"
        initial={{ opacity: 0, y: "100" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="banner-content">
          <h1>
            <span> H</span>
            <span>i</span>
            <span>,</span>
            <br />
            <span>I</span>
            <span>'</span>
            <span>m</span>
            <span> </span>
            <span>A</span>
            <span>b</span>
            <span>i</span>
            <span>m</span>
            <span>b</span>
            <span>o</span>
            <span>l</span>
            <span>a</span>
          </h1>
          <p hidden>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime,
            quisquam quam quia perspiciatis explicabo soluta sequi eos.
            Architecto, aut sequi.
          </p>
          <div className="btn">
            <motion.button
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {" "}
              <span></span>My Projects
            </motion.button>
            <motion.button
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <span></span> Contact me
            </motion.button>
          </div>
        </div>
        <motion.div className="banner-img">
          <img src={hood3} alt="" width={810} />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Banner;
