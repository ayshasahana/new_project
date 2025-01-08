import React from "react";
import "./Dashboard.css";

const Body = ({ title, description, imageUrl }) => {
  return (
    <div className="body-section">
      <div className="row">
        <div className="content">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="body">
          <img src={imageUrl} alt="homeImg" className="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Body;