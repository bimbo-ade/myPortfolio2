import React from "react";
import "./Banner.css";
import house from "../../assets/Images/house.jpg";
const Banner = () => {
  return (
    <>
      <div className="banner-cont">
        <div className="banner-img">
          <img src={house} alt="banner" />
          <div className="banner-overlay"></div>
          <div className="banner-content">
            <h1>Hi, Im Abimbola Adeyemi</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Expedita, omnis?
            </p>
            <button>
              <span></span> see more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
