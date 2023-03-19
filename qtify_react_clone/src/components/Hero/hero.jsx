import React from "react";
import "../Hero/hero.css";
import headphones from "../Hero/vibrating-headphone.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="text-container">
          <p>100 Thousand Songs, ad-free</p>
          <p>Over thousands podcast episodes</p>
        </div>
        <div className="image-container">
          <img src={headphones} alt="head" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
