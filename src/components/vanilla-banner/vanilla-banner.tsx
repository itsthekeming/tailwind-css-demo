import React from "react";
import "./vanilla-banner.css";

export default function VanillaBanner() {
  return (
    <div className="banner">
      <img className="background-image" src="https://images.dickssportinggoods.com/marketing/DSG_HomR_MarWk3_Hero_Fitness0407101659.jpg?herow=1600px" />
      <div className="banner-box">
        <h1 className="banner-header">Commit To Fit</h1>
        <h2 className="banner-subtext">Check out the latest equipment and gear to achieve all your goals.</h2>
        <div className="banner-links">
          <a className="banner-link" href="#">
            Fitness
          </a>
          <a className="banner-link" href="#">
            Cardio
          </a>
          <a className="banner-link" href="#">
            Strength
          </a>
        </div>
      </div>
    </div>
  );
}
