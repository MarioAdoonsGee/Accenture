import React from 'react';
import './CaseStudies.css';

const CaseStudies = () => {
  return (
    <section className="case-studies">
      <div className="heading-tag">
        <div className="rectangle"></div>
        <h2 className="heading-text">Case studies</h2>
      </div>
      <div className="cards">
        <div className="card">
          <img src="https://placeholder.pics/svg/399x399" alt="The Olympian" className="card-image" />
          <div className="card-content">
            <div className="rectangle"></div>
            <h3>The Olympian</h3>
            <p>The only athlete in the world to do her Olympic routine in 2020.</p>
          </div>
        </div>
        <div className="card">
          <img src="https://placeholder.pics/svg/399x399" alt="The Savings Jar" className="card-image" />
          <div className="card-content">
            <div className="rectangle"></div>
            <h3>The Savings Jar</h3>
            <p>Grow your savings treasure and grow your dragon.</p>
          </div>
        </div>
        <div className="card">
          <img src="https://placeholder.pics/svg/399x399" alt="Skhokho seMali" className="card-image" />
          <div className="card-content">
            <div className="rectangle"></div>
            <h3>Skhokho seMali</h3>
            <p>Helping South Africans become #CashCleva with Skhokho and TymeBank.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

