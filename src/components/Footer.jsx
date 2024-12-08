import React from "react";
import "./Footer.css";
import logo from "../assets/logo.svg"; 
import facebook from "../assets/facebookicon.svg"; 
import linkedin from "../assets/linkedinicon.svg"; 
import instagram from "../assets/instagramicon.svg"; 
import whatsapp from "../assets/whatsappicon.svg"; 
import youtube from "../assets/youtubeicon.svg"; 
import phone from "../assets/phone.svg";
import email from "../assets/email.svg";
 




const Footer = () => {
  const usefulLinks = [
    "Home Page",
    "About Us",
    "Products",
    "Projects",
    "E-Catalogue",
    "Service",
    "Contact Us",
  ];

  const products = ["Trampoline", "Playground", "Interactive Game"];

  const socialIcons = [
    { imgSrc: facebook, alt: "Facebook", link: "#" },
    { imgSrc: linkedin, alt: "LinkedIn", link: "#" },
    { imgSrc: instagram, alt: "Instagram", link: "#" },
    { imgSrc: whatsapp, alt: "WhatsApp", link: "#" },
    { imgSrc: youtube, alt: "YouTube", link: "#" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="">
        <img src={logo} alt="Logo" className="footer-logo" />

        </div>
        <div className="footer-section-new">
        <div className="footer-section logo-section">
          <p>
          Indoor Playground Manufacturer, Soft Play Manufacturer, Trampoline Park Manufacturer, Indoor Playground Supplier, Soft Play Supplier,Trampoline Manufacturer, Trampoline Supplier, Climbing Wall Manufacturer, Climbing Wall Supplier, Challenge Game Manufacturer, Challenge Game Supplier, Trampoline Park Supplier, Assault Course Supplier, Assault Course Manufacturer, Ninja Course Manufacturer, Ninja Course Supplier, Soft Play Installation, Family Entertainment Centers Manufacturer, Indoor Playground Production, Soft Play Production, Trampoline Park Production, Indoor Playground Equipment, Indoor Playground Supplier, Family Entertainment Centers Manufacturer
          </p>
        </div>
       <div className="footer-section-new-2">
        {/* Useful Links */}
        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul>
            {usefulLinks.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div className="footer-section">
          <h3>Products</h3>
          <ul>
            {products.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
            <div className="footer-section-new-1">
          <h3>Contact Information</h3>
          <p>Address: Sahab, Street No. 60, Amman, Jordan.</p>
          <p>  +962791008716
            <img src={phone} alt="Phone Icon" 
             style={{ width: "20px", height: "20px", marginRight: "0px", verticalAlign: "middle" }} />
         </p>
         <p>
         <a href="mailto:info@gem-jo.com">info@gem-jo.com</a>
         <img src={email} alt="Email Icon" 
          style={{ width: "20px", height: "20px", marginRight: "8px", verticalAlign: "middle" }} />
 
</p>
          <div className="social-icons">
            {socialIcons.map((icon, index) => (
              <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer">
                <img src={icon.imgSrc} alt={icon.alt} className="social-icon" />
              </a>
            ))}
          </div>
        </div>
        </div>
        </div>
        </div>
        {/* Logo and Description */}
       
      </div>
    </footer>
  );
};

export default Footer;
