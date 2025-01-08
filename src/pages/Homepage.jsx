import React from 'react'
import './Homepage.css';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard'
import Footer from '../components/Footer';
import playground from '../assets/img/product_img/playground.png';
import trampoline from '../assets/img/product_img/trampoline.png';
import interactiveGame from '../assets/img/product_img/interactiveGame.png';
import plusicon from '../assets/img/product_img/plusicon.png';

import image1 from "../assets/img/project_img/project_img/image1.png";
import image2 from "../assets/img/project_img/project_img/image2.png";
import image3 from "../assets/img/project_img/project_img/image3.png";
import image4 from "../assets/img/project_img/project_img/image4.png";
import bgframe from "../assets/img/project_img/project_img/bgframe.png";

import OnSiteIcon from "../assets/img/services_img/services_img/onsite.png";
import QualityControlIcon from "../assets/img/services_img/services_img/quality.png";
import SupportIcon from "../assets/img/services_img/services_img/maintanance.png";
import InHouseIcon from "../assets/img/services_img/services_img/inHouse.png";
import BespokeIcon from "../assets/img/services_img/services_img/bespoke.png";
import AllDetailsIcon from "../assets/img/services_img/services_img/allDetails.png";
import GroupLayer from "../assets/img/services_img/services_img/group.png";
import homeImage from "../assets/img/imagefile/imagefile/homeImg.png";





const Homepage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/getquotations'); // Navigate to the GetQuotation page
  };
  let title = (<>Unlock Limitless<br/> Entertainment <br/>With GEM</>)
  let description = (<>Your gateway to the ultimate entertainment experience!Explore<br/>our cutting-edge productsand immerse yourself in a world of
    <br/>
     innovation and excitement.
</>)
  return (
    <div className='HomePage'>
        <Header/>
        <Dashboard title={title} imageUrl={homeImage} description={description} />
         <section className="product-section">
      <div>
      <h1>Products</h1>
      <img
      src={plusicon}
      alt="plusicon"
      className="Producticon"
      onClick={handleClick}
      style={{ cursor: 'pointer' }} // Optional: Add pointer cursor for better UX
    />
        </div>
      <div className="product-container">
        <div className="product">
          <img src={trampoline} alt="Trampoline" className="product-image" />
          <p>Trampoline</p>
        </div>
        <div className="product">
          <img src={playground} alt="Playground" className="product-image" />
          <p>Playground</p>
        </div>
        <div className="product">
          <img src={interactiveGame} alt="Interactive Game" className="product-image" />
          <p>Interactive Game</p>
        </div>
      </div>
    </section>

    
    <section className="Projects-section">
      <img src={bgframe} alt="bgframe" className="Projects-bgframe" />
        <div className="grid-container">


        <div className="image-container">
          <img src={image1} alt="Project 1" className="Projects-image" />

          
          <img src={image2} alt="Project 2" className="Projects-image" />

          <img src={image3} alt="Project 3" className="Projects-image" />

        
          <img src={image4} alt="Project 4" className="Projects-image" />
          </div>


      </div>
      <div className="Projects-header">
        <h1>Projects</h1>
        <p className="intro-text">
          Thinking About A New Entertainment Venue Project? You Are In The Right
          Place!
        </p>
        <p className="details-text">
          GEM Projects Are Custom Made For Each Customer From Zero To One
          Hundred, And Can Be Designed For A Variety Of Settings, Such As
          Shopping Malls, Airports, Restaurants, And Family Entertainment
          Centers.
        </p>
        <p className="details-text">
          When Developing A New Project, Safety Is Our Top Priority. Our Play
          Centre Equipment Features Soft Padding, Rounded Edges, And Non-Toxic
          Materials, And Meets Industry Safety Standards. We Test And Certify
          Our Equipment To Ensure It's Up To The Highest Safety Standards, So
          You Can Have Peace Of Mind Knowing That Your Guests Will Be Safe
          While Playing.
        </p>
        <a href="#" className="see-more">
          See More
        </a>
      </div>
      
    </section>

    <div className="services-container">
      <h1 className="services-title">Services</h1>
      <div className="services-grid">
        {/* Left Column */}
        <div className="services-column">
          <div className="service-card">
            <img src={OnSiteIcon} alt="On-Site Installation" className="service-icon" />
            <div>
              <h3 className="service-title">On-Site Installation</h3>
              <p className="service-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>

          <div className="service-card">
            <img src={QualityControlIcon} alt="Quality Control" className="service-icon" />
            <div>
              <h3 className="service-title">Quality Control</h3>
              <p className="service-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>

          <div className="service-card">
            <img src={SupportIcon} alt="Support & Maintenance" className="service-icon" />
            <div>
              <h3 className="service-title">Support & Maintenance</h3>
              <p className="service-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </div>

        {/* Center Section */}
        <div className="center-image">
          <img src={GroupLayer} alt="Group Layer" className="group layer" />
        </div>

        {/* Right Column */}
        <div className="services-column">
          <div className="service-card">
            <img src={InHouseIcon} alt="In-House Production" className="service-icon" />
            <div>
              <h3 className="service-title">In-House Production</h3>
              <p className="service-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>

          <div className="service-card">
            <img src={BespokeIcon} alt="Bespoke Design" className="service-icon" />
            <div>
              <h3 className="service-title">Bespoke Design</h3>
              <p className="service-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>

          <div className="service-card">
            <img src={AllDetailsIcon} alt="All Details" className="service-icon" />
            <div>
              <h3 className="service-title">All Details</h3>
              <p className="service-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <Footer/>

    </div>
  )
}

export default Homepage