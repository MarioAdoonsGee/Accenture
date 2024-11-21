import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero">
      <img
        src="https://placeholder.pics/svg/1440x600"
        alt="Hero Background"
        className="hero-image"
      />
      <div className="hero-content">
        <h1 className="hero-title">Live with Confidence</h1>
        <p className="hero-description">
          José Mourinho brings confidence to pan-African Sanlam campaign.
        </p>
        <button className="hero-button">View project</button>
      </div>
    </div>
  );
};

export default HeroSection;

