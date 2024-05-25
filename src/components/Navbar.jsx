import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <header>
      <div className="social-bar">
        <a href="https://www.facebook.com" target="_blank" className="social-icon" rel="noreferrer">
          <img src="/images/facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.twitter.com" target="_blank" className="social-icon" rel="noreferrer">
          <img src="/images/twitter.png" alt="Twitter" />
        </a>
        <a href="mailto:someone@example.com" className="social-icon">
          <img src="/images/gmail.png" alt="Gmail" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" className="social-icon" rel="noreferrer">
          <img src="/images/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://www.youtube.com" target="_blank" className="social-icon" rel="noreferrer">
          <img src="/images/youtube.png" alt="YouTube" />
        </a>
      </div>

      <div className="container">
        <div className="logo-brand">
          <NavLink to="/">
            <img src="/images/3.png" alt="LearnLeap Logo" className="logo-image" />
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
            <li className="dropdown">
              <span>Program</span>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <span>Educators</span>
                  <ul className="nested-dropdown">
                    <li>
                      <NavLink to="/diplomaprogram">Diploma Program for Foundational Stage</NavLink>
                    </li>
                    <li>
                      <NavLink to="/certificatefoundational">Certificate Program for Foundational Stage</NavLink>
                    </li>
                    <li>
                      <NavLink to="/certificateteaching">Certificate Program for Teaching Skills</NavLink>
                    </li>
                    <li>
                      <NavLink to="/certificateenglish">Certificate Program In Communicative English</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-item">
                  <span>School Leaders</span>
                  <ul className="nested-dropdown">
                    <li>
                      <NavLink to="/certificateleadership">Certificate Program In Education Leadership</NavLink>
                    </li>
                    <li>
                      <NavLink to="/certificateenglish">Certificate Program In Communicative English</NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/contactus">Contact Us</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
