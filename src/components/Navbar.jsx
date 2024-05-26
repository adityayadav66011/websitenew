import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [showProgramDropdown, setShowProgramDropdown] = useState(false);

  const handleMouseEnter = (setter) => () => {
    setter(true);
  };

  const handleMouseLeave = (setter) => () => {
    setter(false);
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
            <img src="/images/3.png" alt="LearnLeap Logo" className="logo-image" />
          </NavLink>
        </div>

        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">About Us</NavLink>
            </li>
            <li
              onMouseEnter={handleMouseEnter(setShowProgramDropdown)}
              onMouseLeave={handleMouseLeave(setShowProgramDropdown)}
            >
              <NavLink to="#" activeClassName="active">Program</NavLink>
              {showProgramDropdown && (
                <ul className="dropdown vertical">
                  <li>
                    <NavLink to="/diplomaprogram">
                      Diploma Program for Foundational Stage
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/certificatefoundational">
                      Certificate Program for Foundational Stage
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/certificateteaching">
                      Certificate Program for Teaching Skills
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/certificateenglish">
                      Certificate Program In Communicative English (Educator)
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/certificateleadership">
                      Certificate Program In Education Leadership 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/certificateenglish">
                      Certificate Program In Communicative English (School Leaders)
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink to="/contactus" activeClassName="active">Contact Us</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
