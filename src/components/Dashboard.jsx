import React from 'react'
import homeImg from "../assets/img/dashboard_img/homeImg.png"
import "./Dashboard.css"

const Body = () => {
  return (
    <div className="body-section">
      <div className='row'>
      <div className="content">
    <h1>Unlock Limitless</h1>
    <h1>Entertainment</h1>
    <h1>With GEM</h1>
    <p>Your gateway to the ultimate entertainment experience!Explore
      <br/>
      our cutting-edge productsand immerse yourself in a world of
      <br/>
       innovation and excitement.
    </p>
</div>
<div className="body">
<img src={homeImg} alt="homeImg" className="image" />
</div>
      </div>
 
</div>

  )
}

export default Body