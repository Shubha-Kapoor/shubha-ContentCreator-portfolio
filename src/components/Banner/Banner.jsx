// src/components/Banner/Banner.jsx
import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <header className="banner-container">
      <div className="banner-overlay">
        <div className="banner-content">
          <h1 className="banner-title">
            Shine With Shubha <span className="sparkle">✨</span>
          </h1>
          <p className="banner-subtitle">✦ CREATING • LEARNING & EXPLORING ✦</p>
          
          <div className="banner-badges">
            <span className="badge">LIFESTYLE</span>
            <span className="badge">SELF-IMPROVEMENT</span>
            <span className="badge">TECH</span>
            <span className="badge">COLLEGE</span>
            <span className="badge">DANCE</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;