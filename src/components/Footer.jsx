import React from 'react';
import './Footer.css';
import footerLogo from '../assets/images/footer-logo.svg';
import locationIcon from '../assets/images/icon-location.svg';
import phoneIcon from '../assets/images/icon-phone.svg';
import emailIcon from '../assets/images/icon-email.svg';

const Footer = () => (
  <footer>
    <div className="footer-content">
      <div className="footer-brand">
        <img src={footerLogo} alt="Huddle Logo" />
        <ul>
          <li><img src={locationIcon} alt="Location" /> <p>No. 123 Huddle Way Lane, Huddle.</p></li>
          <li><img src={phoneIcon} alt="Phone" /> <p>+1-543-123-4567</p></li>
          <li><img src={emailIcon} alt="Email" /> <p>huddle@gmail.com</p></li>
        </ul>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="footer-column">
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-column">
          <ul className="social-links">
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-info">
      <p>&copy; Copyright 2024 Huddle. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
