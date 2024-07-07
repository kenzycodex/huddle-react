import React from 'react';
import Hero from './Hero'; 
import './Header.css';
import logo from '../assets/images/logo.svg';


const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Huddle Logo" />
        </div>
        <div className="cta">
          <button className="btn btn-primary"> <span>Try It Free</span> </button>
        </div>
      </header>
      <Hero />
    </div>
  );
};

export default Header;
