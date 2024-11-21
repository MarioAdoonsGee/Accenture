import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="heading-tag">
          <div className="rectangle"></div>
          <h2 className="heading-text">Contact us</h2>
        </div>
        <h3 className="main-heading">Have a project in mind? <br /> Let's make it happen</h3>
        <address className="contact-info">
          22 Street Name, Suburb, 8000, <br />
          Cape Town, South Africa <br />
          +27 21 431 0001 <br />
          <a href="mailto:enquirie@website.co.za">enquirie@website.co.za</a>
        </address>
        <div className="footer-links">
          <div>Terms of service<br />Privacy policy<br />Impressum</div>
          <div>Facebook<br />Instagram<br />Twitter</div>
          <div>Github<br />Linkedin<br />Teams</div>
          <div>Youtube<br />Behance<br />Dribbble</div>
          <div>Explore open jobs<br /><br />©2000—2023 Company Name</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

