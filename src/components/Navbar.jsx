import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-nested-dropdown";
import 'react-nested-dropdown/dist/styles.css';
import "./Navbar.css";

const programItems = [
  {
    label: 'Educators',
    items: [
      {
        label: 'Diploma Program for Foundational Stage',
        onSelect: () => window.location.href = '/diplomaprogram',
      },
      {
        label: 'Certificate Program for Foundational Stage',
        onSelect: () => window.location.href = '/certificatefoundational',
      },
      {
        label: 'Certificate Program for Teaching Skills',
        onSelect: () => window.location.href = '/certificateteaching',
      },
      {
        label: 'Certificate Program In Communicative English',
        onSelect: () => window.location.href = '/certificateenglish',
      },
    ],
  },
  {
    label: 'School Leaders',
    items: [
      {
        label: 'Certificate Program In Education Leadership',
        onSelect: () => window.location.href = '/certificateleadership',
      },
      {
        label: 'Certificate Program In Communicative English',
        onSelect: () => window.location.href = '/certificateenglish',
      },
    ],
  },
];

export const Navbar = () => {
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
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <Dropdown items={programItems} containerWidth="300px" className="react-nested-dropdown__menu--root">
                {({ isOpen, onClick }) => (
                  <span onClick={onClick}>
                    Program {isOpen ? '▲' : '▼'}
                  </span>
                )}
              </Dropdown>
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
