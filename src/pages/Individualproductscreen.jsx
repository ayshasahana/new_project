import React from "react";
import './Individualproductscreen.css';
import individual from '../assets/img/individualproductscreen.svg';
import Header from "../components/Header"; //header
import Footer from "../components/Footer"; //footer
import Dashboard from "../components/Dashboard";
import plusicon from '../assets/img/product_img/plusicon.svg';


const PerformanceTrampoline = () => {
  return (
    <div>
    <Header />
    <Dashboard />
    
    <div className="performance-trampoline-container">
      <div className="image-section">
      <div>
        <img src={plusicon} alt="plusicon" className="Producticon" />
        </div>
        <img
          src={individual}
          alt="Performance Trampoline"
          className="trampoline-image"
        />
      </div>
      <div className="text-section">
        <h2>Performance Trampoline</h2>
        <p>
          GEM Trampoline parks are indoor recreational facilities that feature
          multiple interconnected trampolines, along with other activities such
          as foam pits, and Trampoline parks have gained popularity in recent
          years: they are fun, very profitable and appeal to different age
          segments. They offer a fun and engaging way to exercise and burn off
          energy, and they can be a great option for birthday parties, group
          events, or just a fun day out with your guest's friends or family.
          Trampoline parks usually offer a range of activities that cater to
          different skill levels and interests.
        </p>
      </div>
     

    </div>
    <Footer />
    </div>
  );
};

export default PerformanceTrampoline;
