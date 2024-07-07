import React from 'react';
import './Hero.css';
import heroImage from '../assets/images/illustration-mockups.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Build The Community Your Fans Will Love</h1>
        <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
        <button className="btn1">Get Started For Free</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Hero Image" />
      </div>
    </section>
  );
};

export default Hero;
