import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Header = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Webpage</h1> {/* Your website title/logo */}
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/features" className="navbar-link">Features</Link>
        <Link to="/partners" className="navbar-link">Partners</Link> {/* Assuming Partners page exists */}
        <Link to="/about-us" className="navbar-link">About Us</Link>
        <Link to="/contact" className="navbar-link">Contact</Link>
        <Link to="/pricing" className="navbar-link">Pricing</Link>
      </div>
      
    </nav>
  );
};

export default Header;
