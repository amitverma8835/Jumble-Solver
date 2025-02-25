import React from 'react';
import { FaInstagram, FaGithubSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import './Footer.css';

function Footer() {
  return (
    <footer>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
        <FaGithubSquare />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookSquare />
      </a>
    </footer>
  );
}

export default Footer;
