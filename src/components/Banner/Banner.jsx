import React from "react";
import "./Banner.css";
import hood3 from "../../assets/Images/hood3.png";
const Banner = () => {
  return (
    <>
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
            {/* <br />
          <span>w</span>
          <span>e</span>
          <span>b</span>

          <span> </span>
          <span>d</span>
          <span>e</span>
          <span>v</span>
          <span>e</span>
          <span>l</span>
          <span>o</span>
          <span>p</span>
          <span>e</span>
          <span>r</span> */}
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
        {/* <div
          className="banner-img"
          style={{
            backgroundImage: `url(${hood1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundFit: "fit",
            backgroundRepeat: "no-repeat",
            width: "400px",
          }}
        ></div> */}
      </div>
    </>
  );
};

export default Banner;
