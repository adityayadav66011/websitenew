import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        <div className="footer-column">
          <h2>Programs</h2>
          <ul>
            <li>Diploma for Foundation Stage</li>
            <li>Certificate for foundational Stage </li>
            <li>Certificate for teaching Skills.</li>
            <li>Certificate In Communicative English</li>
            <li>Certificate In Education Leadership </li>
          </ul>
        </div>
        <div className="footer-column">
          <h2>Contact Us</h2>
          <div className="contact-info">
            <p>Email: franchise@birlaopenminds.com</p>
            <p>Email: pds.training@birlaopenminds.com</p>
            <p>Phone: 7977153104</p>
            <p>Address: Piramal Tower, 9th Floor, 901, B Wing, Peninsula Corporate Park, Lower Parel (W), Mumbai - 400013</p>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/twitter.png" alt="Twitter" />
            </a>
            <a href="mailto:someone@example.com">
              <img src="/images/gmail.png" alt="Gmail" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/youtube.png" alt="YouTube" />
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h2>Our Location</h2>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345090033!2d144.95565151531804!3d-37.817334579751885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f2f1bd%3A0x5b0bfb6f5e5fd2d0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1613959682468!5m2!1sen!2sau"
            width="300"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="footer-bottom">
        <p>@saisatwik 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
