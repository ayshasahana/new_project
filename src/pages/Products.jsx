// Product.jsx
import React from "react";
import "./Products.css";
import a from "../assets/img/ProductsImages/product1.1.svg";
import b from "../assets/img/ProductsImages/product1.2.svg";
import c from "../assets/img/ProductsImages/product2.1.svg";
import d from "../assets/img/ProductsImages/product2.2.svg";
import e from "../assets/img/ProductsImages/product2.3.svg";

import Header from "../components/Header"; //header
import Footer from "../components/Footer"; //footer
import Dashboard from "../components/Dashboard";
import CardSlider from "../components/CardSlider";

// import Carousel from 'react-bootstrap/Carousel';

const Product = () => {
  return (
    <div>
      <Header />
      <Dashboard />

      <CardSlider />

      {/* <div className="playground-container">
<a href="#" className="view-all-link">View all</a>
      <h1 className="playground-title">Trampoline</h1>
      <div className="playground-cards">
        <div className="playground-card">
          <img src={e} alt="Trampoline"className="playground-image"
           />
          <h2 className="card-title">Performance Trampoline</h2>
          <p className="card-description">
          GEM Trampoline parks are indoor recreational facilities that feature multiple interconn
          </p>
          <a href="#" className="card-link">Read More</a>
        </div>

        <div className="playground-card">
          <img
            src={b}
            alt="Basket Ball"
            className="playground-image"
          />
          <h2 className="card-title">Basket Ball</h2>
          <p className="card-description">
          GEM Trampoline parks are indoor recreational facilities that feature multiple intercon
          </p>
          <a href="#" className="card-link">Read More</a>
        </div>

        <div className="playground-card">
          <img
            src={a}
            alt="Climbing Wall"
            className="playground-image"
          />
          <h2 className="card-title">Climbing Wall</h2>
          <p className="card-description">
          GEM Trampoline parks are indoor recreational facilities that feature multiple interconn
          </p>
          <a href="#" className="card-link">Read More</a>
        </div>
      </div>
      </div> */}

      {/* .................................................................................................... */}
      {/* <div className="playground-container">
    <a href="#" className="view-all-link">View all</a>
      <h1 className="playground-title">Playground</h1>
      <div className="playground-cards">
        <div className="playground-card">
          <img src={c} alt="Toddler"className="playground-image"
           />
          <h2 className="card-title">Toddler</h2>
          <p className="card-description">
            GEM Trampoline Parks Are Indoor Recreational Facilities That Feature
            Multiple Intercon</p>
          <a href="#" className="card-link">Read More</a>
        </div>

        <div className="playground-card">
          <img
            src={d}
            alt="Soft Play"
            className="playground-image"
          />
          <h2 className="card-title">Soft Play</h2>
          <p className="card-description">
            GEM Trampoline Parks Are Indoor Recreational Facilities That Feature
            Multiple Intercon...
          </p>
          <a href="#" className="card-link">Read More</a>
        </div>

        <div className="playground-card">
          <img
            src={e}
            alt="Trampoline"
            className="playground-image"
          />
          <h2 className="card-title">Trampoline</h2>
          <p className="card-description">
            GEM Trampoline Parks Are Indoor Recreational Facilities That Feature
            Multiple Intercon...
          </p>
          <a href="#" className="card-link">Read More</a>
        </div>
      </div>
    </div> */}

      {/* ............................................................. */}

      {/* <div className="playground-container">
    <a href="#" className="view-all-link">View all</a>
      <h1 className="playground-title">Interactive game</h1>
      <div className="playground-cards">
        <div className="playground-card">
          <img src={e} alt="mario jump"className="playground-image"
           />
          <h2 className="card-title">mario jump</h2>
          <p className="card-description">
          GEM Trampoline parks are indoor recreational facilities that feature multiple interconn
          </p>
          <a href="#" className="card-link">Read More</a>
        </div>

        <div className="playground-card">
          <img
            src={b}
            alt="jump and touch"
            className="playground-image"
          />
          <h2 className="card-title">jump and touch</h2>
          <p className="card-description">
          GEM Trampoline parks are indoor recreational facilities that feature multiple interconn.
          </p>
          <a href="#" className="card-link">Read More</a>
        </div>

        <div className="playground-card">
          <img
            src={a}
            alt="challenger trampoline"
            className="playground-image"
          />
          <h2 className="card-title">challenger trampoline</h2>
          <p className="card-description">
          GEM Trampoline parks are indoor recreational facilities that feature multiple interconn...
          </p>
          <a href="#" className="card-link">Read More</a>
        </div>
      </div>
      <button className="button">Get Quotation</button>
    </div> */}

      <Footer />
    </div>
  );
};

export default Product;
