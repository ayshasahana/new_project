import React from "react";
import About from './pages/About';
import Homepage from './pages/Homepage';
import Products from './pages/Products';
import Individualproductscreen from './pages/Individualproductscreen';
import { HashRouter as Router,Route,Routes } from "react-router-dom";
import { Navbar } from "react-bootstrap";



function App() {
  return (
    <div>

    <Router>
      <Navbar>
  <Routes>
    <Route  path='/' element={<Homepage/>}/>
    <Route  path='/about' element={<About />}/>
    <Route  path='/products' element={<Products />}/>
    <Route  path='/iproducts' element={<Individualproductscreen/>}/>
     

   </Routes>      
      </Navbar>
    </Router>
      
      
     




    </div>
  );
}

export default App;
