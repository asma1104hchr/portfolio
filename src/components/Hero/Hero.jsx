import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Frontend developer and UI/UX enthusiast</h2>
        <p>
          Combining design aesthetics with functional code for exceptional web
          solutions.
        </p>
      </div>
      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/images/React.png" alt="" />
          </div>
          <img src="./assets/images/hero.jpg" alt="" />
        </div>
        <div>
          <div className="tech-icon">
            <img src="./assets/images/Html 5.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/CSS3.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/JavaScript.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
