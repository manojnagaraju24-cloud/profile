import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm Manoj</h1>
        <p className="hero-subtitle">Full Stack Developer | React Enthusiast | Web Designer</p>
        <p className="hero-description">
          I create beautiful and functional web applications with modern technologies
        </p>
        <button className="cta-button">Download CV</button>
      </div>
      <div className="hero-shape"></div>
    </section>
  );
}
