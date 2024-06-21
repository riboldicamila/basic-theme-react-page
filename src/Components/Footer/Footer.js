import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import './Footer.css'; // Create this file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-hello">
          <p>Say <span className="hello">Hello</span></p>
          <p className="email">your-email@example.com</p>
        </div>
        <hr />
        <div className="footer-bottom">
          <div className="footer-quote">
            <p>"The best way to predict the future is to invent it." - Alan Kay</p>
          </div>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#technologies">Technologies</a>
            <a href="#about">About Me</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer-bottom-extra">
          <p className="footer-copyright">© 2024 Your Name</p>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="footer-linkedin-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
