import React from 'react'
import './Header.css'
import  { useState } from 'react';
import GemLogo from "../assets/img/HeaderImages/gemlogo.png"
import gemlogo from "../assets/img/HeaderImages/gem-jo-icon.png";
import call from "../assets/img/HeaderImages/call.png"
import Letter from "../assets/img/HeaderImages/Letter.png"
import flagLogo1 from "../assets/img/HeaderImages/flagLogo1.png"
import flagLogo2 from "../assets/img/HeaderImages/flagLogo2.png"
import flagLogo3 from "../assets/img/HeaderImages/flagLogo3.png"
import flagLogo4 from "../assets/img/HeaderImages/flagLogo4.png"
import flagLogo5 from "../assets/img/HeaderImages/flagLogo5.png"
import flagLogo6 from "../assets/img/HeaderImages/flagLogo6.png"
import flagLogo7 from "../assets/img/HeaderImages/flagLogo7.png"
import flagLogo8 from "../assets/img/HeaderImages/flagLogo8.png"
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const flags = [
    flagLogo1,
    flagLogo2,
    flagLogo3,
    flagLogo4,
    flagLogo5,
    flagLogo6,
    flagLogo7,
    flagLogo8,
  ];

  const [selectedFlag, setSelectedFlag] = useState(flagLogo1);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleFlagClick = (flag) => {
    setSelectedFlag(flag);
    setDropdownOpen(false); // Close dropdown after selection
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      <div className="header-top">
        {/* Logo */}
        <div className="header-logo1">
          <img src={GemLogo} alt="Company Logo" className="logo" />
          <img src={gemlogo} alt="Company Logo" className="gemlogo" />

        </div>
        <div className='mobile-logo'>
        <img src={call} alt="Call Icon" className="call-logo" />
        <img src={Letter} alt="Email Icon" className="email-logo" />
        </div>
        {/* Contact Info */}
        <div className="header-logo2">
          <div className="contact-logo">
          <img src={call} alt="Call Icon" className="logo" />
          <span className="call-number">+962791008716</span>
          </div>
          {/* <div className="contact-logo"><img src={Letter} alt="Email Icon" className="logo" />
          <span className="email">info@gem-jo.com</span></div>
        </div> */}
       
         <div className="contact-logo">
              <img src={Letter} alt="Email Icon" className="logo" />
              <a href="mailto:info@gem-jo.com" className='email-link'>info@gem-jo.com</a>
            </div>
      </div>
        {/* Flag Logos */}
        <div className="header-logo3">
          {/* Mobile View Dropdown */}
          <div className="flag-dropdown-mobile">
            <div className="flag-dropdown" onClick={toggleDropdown}>
              <img src={selectedFlag} alt="Selected Flag" className="selected-flag" />
              <span className={`dropdown-arrow ${dropdownOpen? "open" : ""}`}>▼</span>
            </div>
            {dropdownOpen && (
              <div className="dropdown-menu">
                {flags
                  .filter((flag) => flag !== selectedFlag) // Exclude the selected flag
                  .map((flag, index) => (
                    <img
                      key={index}
                      src={flag}
                      alt={`Flag ${index + 1}`}
                      className="dropdown-flag"
                      onClick={() => handleFlagClick(flag)}/>
                  ))}
              </div>
            )}
          </div>

          {/* Desktop View */}
          <div className="flag-list-desktop">
            {flags.map((flag, index) => (
              <img key={index} src={flag} alt={`Flag ${index + 1}`} className="logo_1" />
            ))}
          </div>
        </div>
        <div className='mobile-menu'>
        {/* Hamburger Menu for Mobile */}
        <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle Navigation">
          ☰
        </button>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" style={({ isActive }) => ({borderBottom: isActive ? "2px solid yellow" : "none",})}className="nav-item">Home Page</NavLink>
        <NavLink to="/About" style={({ isActive }) => ({borderBottom: isActive ? "2px solid yellow" : "none",})}className="nav-item">About</NavLink>
        <NavLink to="/Products" style={({ isActive }) => ({borderBottom: isActive ? "2px solid yellow" : "none",})}className="nav-item">Products</NavLink>
        <NavLink to="/Trampoline" style={({ isActive }) => ({borderBottom: isActive ? "2px solid yellow" : "none",})}className="nav-item">E-catelogue</NavLink>
        <NavLink to="/Projects" style={({ isActive }) => ({borderBottom: isActive ? "2px solid yellow" : "none",})}className="nav-item">Projects</NavLink>
        <NavLink to="/Service" style={({ isActive }) => ({borderBottom: isActive ? "2px solid yellow" : "none",})}className="nav-item">Services</NavLink>
        <NavLink to="/form" style={({ isActive }) => ({borderBottom: isActive ? "2px solid yellow" : "none",})}className="nav-item">Contacts</NavLink>
      </nav>
    </header>
  );
};

export default Header;
