import React from "react";
import Heading from "../../common/Heading";
import { team } from "../../data/Data";
import "./team.css";
const Team = () => {
  return (
    <div>
      <section className="team background">
        <div className="container">
          <Heading
            title="Our Featured Agents"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
          <div className="content grid3 mtop">
            {team.map((val, index) => (
              <div className="box" key={index}>
                <button className="btn3">{val.list}listings</button>
                <div className="details">
                  <div className="img">
                    <img src={val.cover} alt="" />
                    <i class="fa-sharp fa-solid fa-circle-check"></i>
                  </div>
                  <i className="fa fa-location-dot"></i>
                  <label htmlFor="">{val.address}</label>
                  <h4>{val.name}</h4>
                  <ul>
                    {val.icon.map((icon, index) => (
                      <li key={index}>{icon}</li>
                    ))}
                  </ul>
                  <div className="button flex">
                    <button>
                      <i className="fa fa-envelope"></i>Message
                    </button>
                    <button className="btn4">
                      <i className="fa fa-phone-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
