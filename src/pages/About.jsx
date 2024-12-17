import React from 'react';
import '../pages/About.css';
// about 
import about from "../assets/img/AboutImages/about1.svg";
// aboutus
import abountus from "../assets/img/AboutImages/abountus.svg";
// vision
// import "../assets/css/Vision.css";
import visionicon from '../assets/img/AboutImages/visionIcon.svg';

import Header from "../components/Header"//header
import Footer from "../components/Footer"//footer


const About = () => {
  return (
    <div className='about'>
      <Header/>
    <div className="about-container">
      <div className="about-content">
        <h1 style={{paddingLeft:"10%"}}>Unveiling The   <br>
        </br><span className="highlight">GEM Experience</span></h1>
        <p style={{paddingLeft:"10%"}}>
          Your gateway to the ultimate entertainment experience! Explore<br/>
          our cutting-edge products and immerse yourself in a world of<br/>
          innovation and excitement.
        </p>
      </div>
      <div className="about-image">
        <div className="about-image1">
        <img src={about} alt="Child in a ball pit" />
      </div>
      </div>
    </div>



{/* code for aboutus */}



    <div className="aboutus-container">
    <div className="aboutus-content">
      {/* Left Section - Image */}
      <div className="aboutus-image">
    <img style={{width:"76%"}}
          src={abountus} // Replace with your image path
          alt="Team"
        />
      </div>

      {/* Right Section - Text Content */}
      <div className="aboutus-text">
      {/* < button className="aboutus-button">Get Quotation</button> */}

      <h1 className='aboutus-h1'>About Us</h1>
        <p className="aboutus-paragraph">
          Global Entertainment Manufacturer is a premier manufacturer and
          supplier in the location-based entertainment industry. Providing
          quality, safety, and innovative solutions to the trampoline park
          and indoor playground market, GEM has the skill to bring any soft
          play area to life – from design concepts to finished projects.
        </p>
        <p className="aboutus-paragraph">
          Our engineering, design, and art departments are second to none.
          They will create the right project to suit your needs, thrill, and
          excite your guests with the best entertainment experience. Whether
          it is an indoor playground or a trampoline park, we customize your
          project with colors and artwork that will make it a unique
          attraction.
        </p>
        <p className="aboutus-paragraph">
          With a focus on operational excellence and customer satisfaction,
          GEM is dedicated to providing high-quality and durable playgrounds
          that stand the test of time. All of our products are made with the
          finest materials and constructed with the utmost attention to
          detail, ensuring that they are safe and well-built.
        </p>
      </div>
    </div>
    
  </div>

{/* code for vision */}
<div className="vision-container">
      <div className="card">
        <div className="card-header">
          <img src={visionicon} alt="Icon" className="card-icon" />
          <h2>Our Mission</h2>
        </div>
        <p className="card-text">
          Safety And Trustworthiness Are The Ground For All That We Do. We Are Committed To Delivering High Quality
          Products And Services To Our Customers So They Keep Their Business Earning Year After Year With GEM.
        </p>
      </div>
      <div className="card">
        <div className="card-header">
          <img src={visionicon}  alt="Icon" className="card-icon" />
          <h2>Our Vision</h2>
        </div>
        <p className="card-text">
          We Want To Revolutionize The Soft Play Industry By Creating The Most Imaginative, Interactive And Safest
          Playground Environments In The World, And Be Your Company Of Choice When It Comes To A Full-Service
          Manufacturing And Design Facility.
        </p>
      </div>
    </div>

{/* code for services */}

<div className="service-container">

<div className="firstSection">
    {/* First Section */}
    <div className="service-header">
      <h2 >What We Serve</h2>
      <h1>We Help You To Find <br/> The Right Choice</h1>
      <p>
        Exploring immersive gaming experiences, or diving into cutting-edge
        virtual reality technology, we're here to guide you every step of the
        way. Trust GEM to help you find the right choice and elevate your
        entertainment journey to new heights.
      </p>
    </div>

    {/* Second Section */}
  <div style={{display:"flex",flexDirection:"column",width:"90%",gap:"2%",textAlign:"center"}}>
      <div style={{display:"flex",justifyContent:"space-between",gap:"2%"}}>
  
        <div className="service-box red">
          Quality, Safety And Innovative Solutions To The Trampoline Park And
          Indoor Playground
        </div>
        <div className="service-box blue">
          The Right Project To Suit Your Needs, Thrill And Excite Your Guests
          With The Best Entertainment Experience
        </div>
      </div>
      <div style={{width:"100%",display:"flex",justifyContent:"center"}} >
        <div className="service-box yellow">
        Operational Excellence And Customer Satisfaction
        </div>
      </div>
    </div>
</div>


<div>
  <button className="service-button">Get Quotation</button>
</div>

</div>



<Footer/>

  </div>
  );

};



export default About;
