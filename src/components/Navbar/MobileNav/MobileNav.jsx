import React from "react";
import "./MobileNav.css";
const MobileNav = (isOpen, toggleMenu) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img src="./assets/images/logo.svg" alt="" className="logo" />
          <ul>
            <li>
              <a className="menu-item"></a>
            </li>{" "}
            <li>
              <a className="menu-item">skills</a>
            </li>
            <li>
              <a className="menu-item">work experience</a>
            </li>
            <li>
              <a className="menu-item">contact me</a>
            </li>

            <button className="contact-btn" onClick={()=>{}}>Hire me </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
