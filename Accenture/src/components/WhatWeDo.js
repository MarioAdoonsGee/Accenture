import React from 'react';
import './WhatWeDo.css';

const WhatWeDo = () => {
  return (
    <section className="what-we-do">
      <div className="heading-tag">
        <div className="rectangle"></div>
        <h2 className="heading-text">What we do</h2>
      </div>
      <p className="main-description">
        We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces
      </p>
      <div className="services">
        <div className="service">
          <img src="https://placeholder.pics/svg/64x64" alt="Web Dev Icon" />
          <h3>Web development</h3>
          <p>
            We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.
          </p>
        </div>
        <div className="service">
          <img src="https://placeholder.pics/svg/64x64" alt="UX Icon" />
          <h3>User experience & design</h3>
          <p>
            Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.
          </p>
        </div>
        <div className="service">
          <img src="https://placeholder.pics/svg/64x64" alt="App Dev Icon" />
          <h3>Mobile app development</h3>
          <p>
            Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.
          </p>
        </div>
        <div className="service">
          <img src="https://placeholder.pics/svg/64x64" alt="Blockchain Icon" />
          <h3>Blockchain solutions</h3>
          <p>
            We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

