import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav"


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper" id="#">
        <div className="nav-content">
          <img src="./assets/images/logo.svg" alt="" className="logo" />
          <ul>
            <li>
              <a className="menu-item" href="#">Home</a>
            </li>
            <li>
              <a href="#skills" className="menu-item">
                Skills
              </a>
            </li>
            <li>
              <a href="#work"className="menu-item">Work Experience</a>
            </li>
            <li>
              <a href="#contact" className="menu-item">Contact me</a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Hire me
            </button>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            {/* Use an SVG icon representing a menu */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            {openMenu ? "close" : "menu"}
            {/* End of SVG icon */}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
