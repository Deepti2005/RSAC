// src/Header.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import logo from '../media/tng.png'; // Ensure you have a logo image in the media folder

const Header = () => {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo-container">
          <img src={logo} alt="ISRO Logo" className="logo" />
        </div>
        <div className="d-flex align-items-center">
          <div className="icon-container mx-3 text-center">
            <img src="path/to/logo1.png" alt="Logo 1" className="icon" />
            <p className="icon-text">I-Grasp</p>
          </div>
          <div className="icon-container mx-3 text-center">
            <img src="path/to/logo2.png" alt="Logo 2" className="icon" />
            <p className="icon-text">ISRO STEM</p>
          </div>
          {/* Add more logos as needed */}
        </div>
      </div>
    </header>
  );
};

export default Header;
