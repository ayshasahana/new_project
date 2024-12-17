import React from "react";
import "../components/Footer.css";
import logo from "../assets/img/logo.svg";
import facebook from "../assets/img/Footer_img/facebookicon.svg";
import linkedin from "../assets/img/Footer_img/linkedinicon.svg";
import instagram from "../assets/img/Footer_img/instagramicon.svg";
import whatsapp from "../assets/img/Footer_img/whatsappicon.svg";
import youtube from "../assets/img/Footer_img/youtubeicon.svg";
import phone from "../assets/img/Footer_img/phone.svg";
import email from "../assets/img/Footer_img/email.svg";

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
      <div className="footer-content">
        <img
          src={logo}
          alt="Global Entertainment Manufacturer"
          className="logo"
        />
        <div className="columns-container">
          <div className="description-column">
            <p className="description">
              Indoor Playground Manufacturer, Soft Play Manufacturer, Trampoline
              Park Manufacturer, Indoor Playground Supplier, Soft Play Supplier,
              Trampoline Manufacturer, Trampoline Supplier, Climbing Wall
              Manufacturer, Climbing Wall Supplier, Challenge Game Manufacturer,
              Challenge Game Supplier, Trampoline Park Supplier, Assault Course
              Supplier, Assault Course Manufacturer, Ninja Course Manufacturer,
              Ninja Course Supplier, Soft Play Installation, Family
              Entertainment Centers Manufacturer, Indoor Playground Production,
              Soft Play Production, Trampoline Park Production, Indoor
              Playground Equipment, Indoor Playground Supplier, Family
              Entertainment Centers Manufacturer
            </p>
          </div>

          {/* Second Column */}
          <div className="column">
            <h3>Useful Links</h3>
            <ul>
              {usefulLinks.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </div>

          {/* Third Column */}
          <div className="column">
            <h3>Products</h3>
            <ul>
              {products.map((product, index) => (
                <li key={index}>{product}</li>
              ))}
            </ul>
          </div>

          {/* Fourth Column */}
          <div className="column contact-info">
            <h3>Contact Information</h3>
            <p className="address">
              Address: Sahab, Street No. 60, Amman, Jordan.
            </p>
            <div className="contact-item">
              <span>+962791008716</span>
              <img src={phone} alt="Phone" className="icon" />
            </div>
            <div className="contact-item">
              <a href="mailto:info@gem-jo.com">info@gem-jo.com</a>
              <img src={email} alt="Email" className="icon" />
            </div>
            <div className="social-icons">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={icon.imgSrc} alt={icon.alt} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

