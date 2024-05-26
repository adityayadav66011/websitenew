import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [showProgramDropdown, setShowProgramDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = (setter) => () => {
    setter(true);
  };

  const handleMouseLeave = (setter) => () => {
    setter(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="social-bar">
        <a href="https://www.facebook.com" target="_blank" className="social-icon">
          <img src="/images/facebook.png" alt="Facebook" />
        </a>
        <a href="mailto:someone@example.com" className="social-icon">
          <img src="/images/gmail.png" alt="Gmail" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" className="social-icon">
          <img src="/images/linkedin.png" alt="LinkedIn" />
        </a>
      </div>

      <div className="container">
        <div className="logo-brand">
          <NavLink to="/">
            <img src="/images/3.png" alt="LearnLeap Logo" className="logo-image" />
          </NavLink>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={isMenuOpen ? "open" : ""}>
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
                      Diploma for Foundational Stage
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/certificatefoundational">
                      Certificate for Foundational Stage
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/certificateteaching">
                      Certificate for Teaching Skills
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/certificateenglish">
                      Certificate In Communicative English (Educator)
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/certificateleadership">
                      Certificate In Education Leadership 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/certificateenglish">
                      Certificate In Communicative English (School Leaders)
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
