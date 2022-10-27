import React from "react";

import MenuData from "../../Data";
const Services = () => {
  return (
    <>
      <div className="service-cont">
        <h1 className="services">Our Services</h1>
        <div className="cont">
          {MenuData.map((items, index) => {
            return (
              <div className=" services-card" key={index}>
                <div className="img">
                  <img src={items.img} alt="food" />
                </div>

                <div>
                  <h4 className="title">{items.title}</h4>

                  <p className="desc">{items.desc}</p>

                  <button className="btn">view</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
