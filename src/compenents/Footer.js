import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

import "./Footer.css"

function Footer() {
  return (
    <footer>
      <ul >
        <a href="https://github.com/"><FontAwesomeIcon icon={faGithub} /></a>
       <a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://www.instagram.com/?hl=fr"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
      </ul>
      <p>© {new Date().getFullYear()} Lobna Kaci</p>
    </footer>
  );
}

export default Footer;

