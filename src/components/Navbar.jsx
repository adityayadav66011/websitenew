import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [showCoursesDropdown, setShowCoursesDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowCoursesDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowCoursesDropdown(false);
  };

  return (
    <header>
      <div className="social-bar">
        <a href="https://www.facebook.com" target="_blank" className="social-icon">
          <img src="/images/facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.twitter.com" target="_blank" className="social-icon">
          <img src="/images/twitter.png" alt="Twitter" />
        </a>
        <a href="mailto:someone@example.com" className="social-icon">
          <img src="/images/gmail.png" alt="Gmail" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" className="social-icon">
          <img src="/images/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://www.youtube.com" target="_blank" className="social-icon">
          <img src="/images/youtube.png" alt="YouTube" />
        </a>
      </div>

      <div className="container">
        <div className="logo-brand">
          <NavLink to="/">
            <img src="public/images/WPS Photos(1).png" alt="LearnLeap Logo" className="logo-image" />
          </NavLink>
        </div>

        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink to="#">Courses</NavLink>
              {showCoursesDropdown && (
                <ul className="dropdown vertical">
                  <li><NavLink to="/diplomaprogram">Diploma Program for Foundational Stage</NavLink></li>
                  <li><NavLink to="/certificatefoundational">Certificate Program for Foundational Stage</NavLink></li>
                  <li><NavLink to="/certificateteaching">Certificate Program for Teaching Skills</NavLink></li>
                  <li><NavLink to="/communicativeenglish">Certificate Program In Communicative English</NavLink></li>
                  <li><NavLink to="/leadership">Certificate Program In Education Leadership</NavLink></li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
