import React from 'react';
import './Brands.css';

const Brands = () => {
  return (
    <section className="brands">
      <div className="heading-tag">
        <div className="rectangle"></div>
        <h2 className="heading-text">You’ll be in good company</h2>
      </div>
      <h3 className="main-heading">Trusted by leading brands</h3>
      <div className="brand-rows">
        <div className="brand-row">
          <img src="https://placeholder.pics/svg/256x120" alt="Visa" />
          <img src="https://placeholder.pics/svg/256x120" alt="TymeBank" />
          <img src="https://placeholder.pics/svg/256x120" alt="Distell" />
          <img src="https://placeholder.pics/svg/256x120" alt="Spotify" />
          <img src="https://placeholder.pics/svg/256x120" alt="Microsoft" />
        </div>
        <div className="brand-row">
          <img src="https://placeholder.pics/svg/256x120" alt="Engen" />
          <img src="https://placeholder.pics/svg/256x120" alt="Nike" />
          <img src="https://placeholder.pics/svg/256x120" alt="Wesgro" />
          <img src="https://placeholder.pics/svg/256x120" alt="MultiChoice" />
          <img src="https://placeholder.pics/svg/256x120" alt="Pick n Pay" />
        </div>
        <div className="brand-row">
          <img src="https://placeholder.pics/svg/256x120" alt="Liquid" />
          <img src="https://placeholder.pics/svg/256x120" alt="TFG" />
          <img src="https://placeholder.pics/svg/256x120" alt="Sanlam" />
          <img src="https://placeholder.pics/svg/256x120" alt="Santam" />
          <img src="https://placeholder.pics/svg/256x120" alt="BBC" />
        </div>
      </div>
    </section>
  );
};

export default Brands;

