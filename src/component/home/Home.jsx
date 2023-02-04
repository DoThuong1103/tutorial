import React from "react";
import Featured from "./featured/Featured";
import Hero from "./Hero/Hero";
import Recent from "./recent/Recent";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Featured />
      <Recent />
    </div>
  );
};

export default Home;
