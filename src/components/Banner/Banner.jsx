import React from "react";
import "./Banner.css";

import ParticlesPage from "../config/ParticlesPage";
import hood3 from "../../assets/Images/hood3.png";
const Banner = () => {
  return (
    <>
      <ParticlesPage />
      <div className="banner-wrapper">
        <div className="banner-content">
          <h1>
            <span>H</span>
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
          <div className="btn">
            <button>
              {" "}
              <span></span>My Projects
            </button>
            <button>
              <span></span> Contact me
            </button>
          </div>
        </div>
        <div className="banner-img">
          <img src={hood3} alt="" width={810} />
        </div>
      </div>
    </>
  );
};

export default Banner;
