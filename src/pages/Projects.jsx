import React from 'react';
import './Projects.css'; // Importing the CSS file
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import Cardlist from '../components/Cardlist';
import Footer from '../components/Footer';
// import Addbutton from "../assets/project_img/images/Addbutton.svg";
import img1 from "../assets/img/ProjectPage_img/ProjectPage_img/img1.png";
import img2 from "../assets/img/ProjectPage_img/ProjectPage_img/img2.png";
import img3 from "../assets/img/ProjectPage_img/ProjectPage_img/img3.png";
import img4 from "../assets/img/ProjectPage_img/ProjectPage_img/img4.png";
import img5 from "../assets/img/ProjectPage_img/ProjectPage_img/img5.png";
import img6 from "../assets/img/ProjectPage_img/ProjectPage_img/img6.png";
import img7 from "../assets/img/ProjectPage_img/ProjectPage_img/img7.png";
// import img8 from "../assets/project_img/images/img8.svg";
import project from "../assets/img/imagefile/imagefile/project_img.png"


const Projects = () => {
  let description = (<>Your gateway to the ultimate entertainment experience!Explore<br/>our cutting-edge productsand immerse yourself in a world of
    <br/>
     innovation and excitement.
</>)
  return (
  <div className='Projects'>
    <Header/>
    <Dashboard title={"Projects"} imageUrl={project} description={description}/>
    <Cardlist/>
        <section className="project-page1">
      <h2 className="project-title1">GEM Bee Theme 2023</h2>
      <div className="project-images1">
        <img src={img1} alt="Project 1" className="project-image1" />
        <img src={img2} alt="Project 1" className="project-image1" />
        <img src={img3} alt="Project 1" className="project-image1" />
        <img src={img4} alt="Project 1" className="project-image1" />
        <img src={img5} alt="Project 1" className="project-image1" />
        <img src={img6} alt="Project 1" className="project-image1" />
      </div>
     </section>
    

     <section className="Ocean-theme">
      <div>
      <h1>GEM Ocean Theme 2023</h1>
        </div>
      <div className="Ocean-theme-container">
        <div className="Ocean-theme-images">
        <img src={img2} alt="Ocean-theme game" className="Ocean-theme-image" />
        </div>
        <div className="Ocean-theme-images">
        <img src={img3} alt="Ocean-theme game" className="Ocean-theme-image" />
        </div>
        <div className="Ocean-theme-images">
        <img src={img4} alt="Ocean-theme game" className="Ocean-theme-image" />
        </div>
        <div className="Ocean-theme-images">
        <img src={img7} alt="Ocean-theme game" className="Ocean-theme-image" />
        </div>
      </div>
    </section>
     
      
    <section className="Playground">
      <div>
      <h1>Playground</h1>
        </div>
      <div className="Playground-container">
        <div className="Playground-images">
        <img src={img5} alt="playground game" className="playground-image" />
        </div>
        <div className="Playground-images">
        <img src={img1} alt="playground game" className="playground-image" />
        </div>
        <div className="Playground-images">
        <img src={img7} alt="playground game" className="playground-image" />
        </div>
        <div className="Playground-images">
        <img src={img2} alt="playground game" className="playground-image" />
        </div>
      </div>
    </section>
    

    <section className="playground1">
      <h2 className="playground1-title">Playground</h2>
      <div className="playground1-images">
        <img src={img1} alt="playground game" className="playground1-image" />
        <img src={img7} alt="playground game" className="playground1-image" />
        <img src={img2} alt="playground game" className="playground1-image" />
        <img src={img4} alt="playground game" className="playground1-image" />
        <img src={img5} alt="playground game" className="playground1-image" />
        <img src={img3} alt="playground game" className="playground1-image" />
      </div>
     </section>


     <section className="Playground2">
      <div>
      <h1>Playground</h1>
        </div>
      <div className="Playground2-container">
        <div className="Playground2-images">
        <img src={img5} alt="playground2 game" className="playground2-image" />
        </div>
        <div className="Playground2-images">
        <img src={img1} alt="playground2 game" className="playground2-image" />
        </div>
        <div className="Playground2-images">
        <img src={img7} alt="playground2 game" className="playground2-image" />
        </div>
        <div className="Playground2-images">
        <img src={img2} alt="playground2 game" className="playground2-image" />
        </div>
      </div>
    </section>

    <Footer/>

     </div>
  );
}
export default Projects;

