import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css'; 
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-links">
        <a href="https://github.com/Neorex80/Typion-.git" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="social-icon" />
        </a>
        <a href="www.linkedin.com/in/devrex" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="social-icon" />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter className="social-icon" />
        </a>
      </div>
      <p className="footer-text">© {new Date().getFullYear()} DEVREX. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
