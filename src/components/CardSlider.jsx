import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardSlider.css"; // Custom styles
import  basketball from "../assets/img/ProductsImages/basketball.svg";
import  climping from "../assets/img/ProductsImages/climping.svg"
import  softplay from "../assets/img/ProductsImages/softplay.svg";
import  toddler from "../assets/img/ProductsImages/toddler.svg";
import  trapoline from "../assets/img/ProductsImages/trapoline.svg";




const PlaygroundSlider = () => {
  const settings = { 
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const Trampoline = [
    {
      title: "Performance Trampoline",
      description:
        "GEM Trampoline Parks Are Indoor Recreational Facilities That Feature Multiple Interconnected...",
      fullDescription:
        "GEM Trampoline Parks Are Indoor Recreational Facilities That Feature Multiple Interconnected Trampolines, Providing Fun and Excitement for All Ages.",
      img: trapoline,
    },
    {
      title: "Basket Ball",
      description:
        "GEM Trampoline Parks Are Indoor Recreational Facilities That Feature Multiple Interconnected...",
      fullDescription:
        "GEM Trampoline Parks Are Indoor Recreational Facilities That Feature Multiple Interconnected Trampolines, Providing Fun and Excitement for All Ages.",
      img: basketball,
    },
    {
      title: "Climbing Wall",
      description:
        "GEM Trampoline Parks Are Indoor Recreational Facilities That Feature Multiple Interconnected...",
      fullDescription:
        "GEM Trampoline Parks Are Indoor Recreational Facilities That Feature Multiple Interconnected Trampolines, Providing Fun and Excitement for All Ages.",
      img: climping,
    },
  ];


  const Playground = [
    {
      title: "Performance Trampoline",
      description:
        "GEM Trampoline Parks Are Indoor Recreational Facilities That Feature Multiple Interconnected...",
      fullDescription:
        "GEM Trampoline Parks Are Indoor Recreational Facilities That Feature Multiple Interconnected Trampolines, Providing Fun and Excitement for All Ages.",
      img: toddler,
    },
    {
      title: "Basket Ball",
      description:
        "GEM Trampoline Parks Are Indoor Recreational Facilities That Feature Multiple Interconnected...",
      fullDescription:
        "GEM Trampoline Parks Are Indoor Recreational Facilities That Feature Multiple Interconnected Trampolines, Providing Fun and Excitement for All Ages.",
      img: softplay,
    },
    {
      title: "Climbing Wall",
      description:
        "GEM Trampoline Parks Are Indoor Recreational Facilities That Feature Multiple Interconnected...",
      fullDescription:
        "GEM Trampoline Parks Are Indoor Recreational Facilities That Feature Multiple Interconnected Trampolines, Providing Fun and Excitement for All Ages.",
      img: trapoline,
    },
  ];

  const Interactive
   = [
    {
      title: "Performance Trampoline",
      description:
        "GEM Trampoline Parks Are Indoor Recreational Facilities That Feature Multiple Interconnected...",
      fullDescription:
        "GEM Trampoline Parks Are Indoor Recreational Facilities That Feature Multiple Interconnected Trampolines, Providing Fun and Excitement for All Ages.",
      img: trapoline,
    },
    {
      title: "Basket Ball",
      description:
        "GEM Trampoline Parks Are Indoor Recreational Facilities That Feature Multiple Interconnected...",
      fullDescription:
        "GEM Trampoline Parks Are Indoor Recreational Facilities That Feature Multiple Interconnected Trampolines, Providing Fun and Excitement for All Ages.",
      img: basketball,
    },
    {
      title: "Climbing Wall",
      description:
        "GEM Trampoline Parks Are Indoor Recreational Facilities That Feature Multiple Interconnected...",
      fullDescription:
        "GEM Trampoline Parks Are Indoor Recreational Facilities That Feature Multiple Interconnected Trampolines, Providing Fun and Excitement for All Ages.",
      img: climping,
    },
  ];




  
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };



  return (
 <div className="slider">
  <div>
  <a href="#" className="view-all-link">View all</a>
    <h2>Trampoline</h2>
    <Slider {...settings}>
      {Trampoline.map((card, index) => (
      <div key={index} style={{ padding: "10px" }}>
      <div >
        <img className="card-image "
          src={card.img}
          alt={card.title}
           />
        <div className="card-text">
          <h3>{card.title}</h3>
          <p >
            {expandedCard === index
              ? card.fullDescription
              : card.description}
          </p>
                <button className="read-more-button"
                  onClick={() => toggleReadMore(index)}>
                  {expandedCard === index ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>



    <div className="slide-new">
    <a href="#" className="view-all-link">View all</a>
    <h2>Playground</h2>
    <Slider {...settings}>
      {Playground.map((card, index) => (
      <div key={index} style={{ padding: "10px" }}>
      <div >
        <img className="card-image "
          src={card.img}
          alt={card.title}
           />
        <div className="card-text">
          <h3>{card.title}</h3>
          <p >
            {expandedCard === index
              ? card.fullDescription
              : card.description}
          </p>
                <button className="read-more-button"
                  onClick={() => toggleReadMore(index)}>
                  {expandedCard === index ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>



    <div className="slider-new1">
    <a href="#" className="view-all-link">View all</a>
    <h2>Interactive game</h2>
    <Slider {...settings}>
      {Interactive.map((card, index) => (
      <div key={index} style={{ padding: "10px" }}>
      <div >
        <img className="card-image "
          src={card.img}
          alt={card.title}
           />
        <div className="card-text">
          <h3>{card.title}</h3>
          <p >
            {expandedCard === index
              ? card.fullDescription
              : card.description}
          </p>
                <button className="read-more-button"
                  onClick={() => toggleReadMore(index)}>
                  {expandedCard === index ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
</div>

  );
};

export default PlaygroundSlider;






