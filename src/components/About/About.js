import React from "react";
import aboutimage from "../../images/hero.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <div className="about-model">
        <img src={aboutimage} alt="about image" />
      </div>
      <div className="about-text">
        <h2>
          The Best <br />
          Da Nang's Real Estate Website
        </h2>
        <p>
          A website specializing in real estate in Da Nang with the use of the
          most modern web programming technologies applied, promising to create
          a different experience for users with novel functions.
        </p>
        <Link to="/Visualize" className="header-btn">
          Details
        </Link>
      </div>
    </div>
  );
}
export default About;
