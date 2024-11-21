import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://placeholder.pics/svg/100x31" alt="Brand Logo" />
        <span>BRAND</span>
      </div>
      <ul className="navbar-menu">
        <li>Services</li>
        <li>Industries</li>
        <li>Cases</li>
        <li>Contact</li>
      </ul>
      <button className="navbar-button">Let’s Talk</button>
    </nav>
  );
};

export default Navbar;

