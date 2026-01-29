import React from 'react';
import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with 3+ years of experience in building web applications.
              I love working with React, JavaScript, and modern web technologies.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or enjoying outdoor activities.
            </p>
            <div className="about-info">
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">manoj@example.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">India</span>
              </div>
              <div className="info-item">
                <span className="info-label">Experience:</span>
                <span className="info-value">3+ Years</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">Your Photo</div>
          </div>
        </div>
      </div>
    </section>
  );
}
