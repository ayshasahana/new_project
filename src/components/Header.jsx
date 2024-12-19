import React from 'react'
import './Header.css'
import GemLogo from "../assets/img/HeaderImages/gemlogo.png"
import call from "../assets/img/HeaderImages/call.png"
import Letter from "../assets/img/HeaderImages/Letter.svg"
import flagLogo1 from "../assets/img/HeaderImages/flagLogo1.png"
import flagLogo2 from "../assets/img/HeaderImages/flagLogo2.png"
import flagLogo3 from "../assets/img/HeaderImages/flagLogo3.png"
import flagLogo4 from "../assets/img/HeaderImages/flagLogo4.png"
import flagLogo5 from "../assets/img/HeaderImages/flagLogo5.png"
import flagLogo6 from "../assets/img/HeaderImages/flagLogo6.png"
import flagLogo7 from "../assets/img/HeaderImages/flagLogo7.png"
import flagLogo8 from "../assets/img/HeaderImages/flagLogo8.png"
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
      <div className="header-logo1">
  <img src={GemLogo} alt="Logo" className="logo" />
  </div>
  <div className="header-logo2">
  <img src={call} alt="call Logo" className="logo" />
  <span className="call-number">+962791008716</span>
  <img src={Letter} alt="Letter Logo" className="logo" />
  <span className="email">info@gem-jo.com</span>
  </div>
  <div className="header-logo3">
  <img src={flagLogo1} alt="Flag 1 Logo" className="logo_1" />
  <img src={flagLogo2} alt="Flag 2 Logo" className="logo_1" />
  <img src={flagLogo3} alt="Flag 3 Logo" className="logo_1" />
  <img src={flagLogo4} alt="Flag 4 Logo" className="logo_1" />
  <img src={flagLogo5} alt="Flag 5 Logo" className="logo_1" />
  <img src={flagLogo6} alt="Flag 6 Logo" className="logo_1" />
  <img src={flagLogo7} alt="Flag 7 Logo" className="logo_1" />
  <img src={flagLogo8} alt="Flag 8 Logo" className="logo_1" />
</div>

      </div>
      <nav className="header-nav">
        <Link to="/" className="nav-item">Home Page</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/products" className="nav-item">Products</Link>
        <Link to="/iproducts" className="nav-item"> I prodrts</Link>
        <a href="/projects" className="nav-item">Projects</a>
        <a href="/e-catalogue" className="nav-item">E-Catalogue</a>
        <a href="/service" className="nav-item">Service</a>
        <a href="/contact" className="nav-item">Contact</a>
      </nav>
    </header>
  )
}

export default Header