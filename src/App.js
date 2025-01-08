import React from "react";
import About from './pages/About';
import Homepage from './pages/Homepage';
import Products from './pages/Products';
import Trampoline from "./pages/Trampoline";
import Service from "./pages/Services"
import Form from "./pages/Form"
import Individualproductscreen from './pages/Individualproductscreen';
import Projects from './pages/Projects';
import GetQuotations from "./pages/Getquotations";
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
    <Route  path='/trampoline' element={<Trampoline />}/>
    <Route  path='/service' element={<Service/>}/>
    <Route  path='/iproducts' element={<Individualproductscreen/>}/>
    <Route  path='/projects' element={<Projects />}/>
    <Route  path='/form' element={<Form/>}/>
    <Route  path='/getquotations' element={<GetQuotations/>}/>

     

   </Routes>      
      </Navbar>
    </Router>
      
      
     




    </div>
  );
}

export default App;
