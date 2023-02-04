import React from "react";
import Heading from "../../common/Heading";
import "./hero.css";
const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <Heading
            title="Search Your Next Home"
            subtitle="FInd new & featured property located  in your local city"
          />
          <form action="" className="flex">
            <div className="box">
              <span>City/Street</span>
              <input type="text" placeholder="Location" />
            </div>
            <div className="box">
              <span>Property type</span>
              <input type="text" placeholder="Property type" />
            </div>
            <div className="box">
              <span>Price Range</span>
              <input type="text" placeholder="Price Range" />
            </div>
            <div className="box">
              <h4>Advance Filter</h4>
            </div>
            <button className="btn">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Hero;
