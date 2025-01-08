// Product.jsx
import React from "react";
import Header from "../components/Header"; //header
import Footer from "../components/Footer"; //footer
import Dashboard from "../components/Dashboard";
import CardSlider from "../components/CardSlider";
import products from "../assets/img/imagefile/imagefile/product_img.png"



const Product = () => {
  let title = (<>Explore The GEM<br/> Product Universe</>)
  let description = (<>Your gateway to the ultimate entertainment experience!Explore<br/>our cutting-edge productsand immerse yourself in a world of
    <br/>
     innovation and excitement.
</>)

  return (
    <div>
      <Header />
      <Dashboard  title={title} imageUrl={products} description={description}/>
      <CardSlider />
      <Footer />
    </div>
  );
};

export default Product;
