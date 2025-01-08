import React from "react";
import './Individualproductscreen.css';
import individual from '../assets/img/individualproductscreen.png';
import Header from "../components/Header"; //header
import Footer from "../components/Footer"; //footer
import Dashboard from "../components/Dashboard";
import plusicon from '../assets/img/product_img/plusicon.png';
import iproducts from "../assets/img/imagefile/imagefile/i product.png"


const PerformanceTrampoline = () => {
  let title = (<>Performance<br/> Trampoline</>)
  let description = (<>GEM Trampoline Parks are indoor facilities with trampolines, foam pits, and various activities.<br/> Popular for their fun and appeal to all ages, they offer engaging exercise, birthday parties,<br/> and group events for all skill levels.
    <br/>
     innovation and excitement.
</>)

  return (
    <div>
    <Header />
    <Dashboard  title={title} imageUrl={iproducts} description={description}/>
    
    <div className="performance-trampoline-container">
    <img src={plusicon} alt="plusicon"  className="plusicon-img"/>
        
      <div className="image-section">
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
