// CardSlider.jsx

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardSlider.css"; // Custom styles
import { useState } from "react";

import a from "../assets/img/ProductsImages/product1.1.svg";
import b from "../assets/img/ProductsImages/product1.2.svg";
import c from "../assets/img/ProductsImages/product2.1.svg";
import d from "../assets/img/ProductsImages/product2.2.svg";
import e from "../assets/img/ProductsImages/product2.3.svg";

const CardSlider = () => {
  const cards = [
    {
      id: 1,
      image: a,
      title: "Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      image: b,
      title: "Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      image: c,
      title: "Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 4,
      image: d,
      title: "Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 5,
      image: e,
      title: "Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

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
  // State to manage Read More toggle
  const [expandedCards, setExpandedCards] = useState({});

  const toggleReadMore = (id) => {
    setExpandedCards((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <section className="card-slider">
      <h2 className="title">Title</h2>
      <Slider {...settings}>
        {cards.map((card) => {
          const isExpanded = expandedCards[card.id];
          const shortText = card.description.substring(0, 80); // Show only first 80 chars
          return (
            <div key={card.id} className="card">
              <div className="card-image">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="card-content">
                <h3>{card.title}</h3>
                <p>
                  {isExpanded ? card.description : `${shortText}...`}
                  <span
                    className="read-more"
                    onClick={() => toggleReadMore(card.id)}
                  >
                    {isExpanded ? " Hide" : " Read More"}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default CardSlider;
