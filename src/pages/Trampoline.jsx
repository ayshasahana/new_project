
import React from 'react';
import './Trampoline.css';
import img1 from "../assets/img/images/images/performance1.png";
import img2 from '../assets/img/images/images/perfomance2.png';
import img3 from '../assets/img/images/images/performance3.png';
import img4 from '../assets/img/images/images/performance4.png';
import img5 from '../assets/img/images/images/basket1.png';
import img6 from '../assets/img/images/images/basket2.png';
import img7 from '../assets/img/images/images/basket3.png';
import img8 from '../assets/img/images/images/basket4.png';
import img9 from '../assets/img/images/images/wall1.png';
import img10 from '../assets/img/images/images/wall2.png';
import img11 from '../assets/img/images/images/wall3.png';
import img12 from '../assets/img/images/images/wall4.png';
import img13 from '../assets/img/images/images/foam1.png'; 
import img14 from '../assets/img/images/images/foam2.png'; 
import img15 from '../assets/img/images/images/foam3.png'; 
import img16 from '../assets/img/images/images/foam4.png';
import img17 from '../assets/img/images/images/ninja1.png'; 
import img18 from '../assets/img/images/images/ninja2.png'; 
import img19 from '../assets/img/images/images/ninja3.png'; 
import img20 from '../assets/img/images/images/ninja4.png';
import img21 from '../assets/img/images/images/ball1.png'; 
import img22 from '../assets/img/images/images/ball2.png'; 
import img23 from '../assets/img/images/images/ball3.png'; 
import img24 from '../assets/img/images/images/ball4.png';
import img25 from '../assets/img/images/images/wipe.png';
import trampoline from "../assets/img/imagefile/imagefile/trampoline_img.png"


import Dashboard from '../components/Dashboard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cardlist from '../components/Cardlist';

const Tramp = () => {
  let description = (<>Your gateway to the ultimate entertainment experience!Explore<br/>our cutting-edge productsand immerse yourself in a world of
    <br/>
     innovation and excitement.
</>)
  return (
    <div>
      <Header />
      <Dashboard  title={"Trampoline"} imageUrl={trampoline} description={description}/>
      <Cardlist />
      <Main />
      {/* Include Footer component */}
      <Footer />
    </div>
  );
};

const desc1=" GEM Trampoline parks are indoor recreational facilities that feature multiple interconnected trampolines, along with other activities such as foam pits. Trampoline parks have gained popularity in recent years: they are fun, very profitable, and appeal to different age segments. They offer a fun and engaging way to exercise and burn off energy, and they can be a great option for birthday parties, group events, or just a fun day out with your guest’s friends or family. Trampoline parks usually offer arange of activities that cater to different skill levels and interests."
const desc2="Basketball trampoline, also known as slam dunk trampoline, is a variation of basketball that is played on a trampoline. In this game, players use the trampoline to perform high-flying dunks and other acrobatic moves that would be impossible on a regular basketball court. Our basketball trampoline includes a basketball backboard and rim, which are designed to withstand the force of players dunking the ball. For safety purposes, GEM basketball trampolines have padding around the frame and other areas to protect players from impact and safety nets or walls around the perimeter to prevent players or balls from bouncing out of the playing area."
const desc3="A adjustable climbing wall trampoline, is a combination of a climbing wall and a trampoline. This type of equipment allows users to climb up a wall while bouncing on a trampoline surface, adding an extra level of challenge and excitement to the climbing experience.GEM climbing wallS can come in various shapes and sizes, according to our customer’s needs, but it is made from a durable material like plywood, plastic, or fiberglass. The climbing wall can have various hand and footholds to help the user climb up to the top – all customizable. To ensure the safety of users, our climbing wall trampolines have padding around the frame and other areas to protect users from impact. They may also have safety nets or walls around the perimeter to prevent users from bouncing off the equipment."
const desc4="A foam pit trampoline is a type of trampoline that includes a foam pit at the end of the jumping surface. This allows users to safely jump, flip, and perform acrobatic maneuvers into a soft-landing area. The size of the foam pit can vary, but it is large enough to accommodate multiple users at once. The bouncing surface of a foam pit trampoline is made from a strong and durable material, such as polypropylene, that is attached to the frame using springs. The bouncing surface is designed to provide a high-quality bounce while also being gentle on users' joints."
const desc5="GEM ninja course trampolines include various obstacles and challenges like balance beams, rope swings, and hanging rings. They are popular between individuals who enjoy obstacle courses and other athletic challenges. The frame of a ninja playground equipment trampoline is made from durable and sturdy materials, such as steel or aluminum, to ensure it can withstand the impact and force of users jumping, bouncing, and completing the various obstacles. To ensure the safety of users, our ninja course trampolines regularly have padding around the frame and other areas to protect users from impact. They may also have safety nets or walls around the perimeter to prevent users from bouncing off the equipment or falling off the obstacles."
const desc6="Dodgeball trampoline is a variation of dodgeball that is played on trampolines. It combines the traditional game of dodgeball with the added challenge and excitement of bouncing on a trampoline. GEM Dodgeball trampolines are larger than standard trampolines, as they need to accommodate multiple players, also the springs are stronger as they need to provide a higher bounce to allow for the unique maneuvers required in the game. To ensure the safety of players, our dodgeball trampolines have padding around the frame and other areas to protect players from impact."
const desc7="GEM Trampoline parks are indoor recreational facilities that feature multiple interconnected trampolines, along with other activities such as foam pits, and  Trampoline parks have gained popularity in recent years: they are fun, very profitable and appeal to different age segments. They offer a fun and engaging way to exercise and burn off energy, and they can be a great option for birthday parties, group events, or just a fun day out with your guest’s friends or family. Trampoline parks usually offer a range of activities that cater to different skill levels and interests"

function Main() {
  return (
    <>
      <Left
        img1={img1}
        img2={img2}
        img3={img3}
        img4={img4}
        header={"Performance Trampoline"}
        description={desc1}
      />
      <Right
        img5={img5}
        img6={img6}
        img7={img7}
        img8={img8}
        header={"Basketball Trampoline"}
        description={desc2}
      />
      <Left1
        img9={img9}
        img10={img10}
        img11={img11}
        img12={img12}
        header={"Climbing Wall"}
        description={desc3}
      />

<Right1
        img13={img13}
        img14={img14}
        img15={img15}
        img16={img16}
        header={"Foam Pit/Balance"}
        description={desc4}

/>
<Left2
        img17={img17}
        img18={img18}
        img19={img19}
        img20={img20}
        header={"Ninja Course"}
        description={desc5}
      />
<Right2
        img21={img21}
        img22={img22}
        img23={img23}
        img24={img24}
        header={"Dodge Ball"}
        description={desc6}

/>
        <Left3
        img1={img1}
        img22={img22}
        img25={img25}
        img24={img24}
        header={"Wipe Out"}
        description={desc7}
      />
<Right3

img1={img1}
img22={img22}
img25={img25}
img24={img24}
header={"Mario Jump"}
description={desc7}
/> 

<Left4
        img1={img1}
        img22={img22}
        img25={img25}
        img24={img24}
        header={"Jump & Touch"}
        description={desc7}
      />

<Right4

img1={img1}
img22={img22}
img25={img25}
img24={img24}
header={"Challenger"}
description={desc7}
/> 
<Left5
        img1={img1}
        img22={img22}
        img25={img25}
        img24={img24}
        header={"Basket"}
        description={desc7}
      />

    </>
  );
}

function Left({ img1, img2, img3, img4, header, description }) {
  return (
    <div className="box first-box">
      <div className="left">
        <div className="image-row">
          <img src={img1} alt="Performance 1" className="image" />
          <img src={img2} alt="Performance 2" className="image" />
        </div>
        <div className="image-row">
          <img src={img3} alt="Performance 3" className="image" />
          <img src={img4} alt="Performance 4" className="image" />
        </div>
      </div>
      <div className="right">
        <h1>{header}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Right({ img5, img6, img7, img8, header, description }) {
  return (
    <div className="box second-box">
      <div className="right">
        <h1>{header}</h1>
        <p>{description}</p>
      </div>
      <div className="left">
        <div className="image-row">
          <img src={img5} alt="Basketball 1" className="image" />
          <img src={img6} alt="Basketball 2" className="image" />
        </div>
        <div className="image-row">
          <img src={img7} alt="Basketball 3" className="image" />
          <img src={img8} alt="Basketball 4" className="image" />
        </div>
      </div>
    </div>
  );
}

function Left1({ img9, img10, img11, img12, header, description }) {
  return (
    <div className="box first-box">
      <div className="left">
        <div className="image-row">
          <img src={img9} alt="Wall 1" className="image" />
          <img src={img10} alt="Wall 2" className="image" />
        </div>
        <div className="image-row">
          <img src={img11} alt="Wall 3" className="image" />
          <img src={img12} alt="Wall 4" className="image" />
        </div>
      </div>
      <div className="right">
        <h1>{header}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}


function Right1({ img13, img14, img15, img16, header, description }) {
  return (
    <div className="box second-box">
      <div className="right">
        <h1>{header}</h1>
        <p>{description}</p>
      </div>
      <div className="left">
        <div className="image-row">
          <img src={img13} alt="foam 1" className="image" />
          <img src={img14} alt="foam 2" className="image" />
        </div>
        <div className="image-row">
          <img src={img15} alt="foam 3" className="image" />
          <img src={img16} alt="foam 4" className="image" />
        </div>
      </div>
    </div>
  );
}

function Left2({ img17, img18, img19, img20, header, description }) {
  return (
    <div className="box first-box">
      <div className="left">
        <div className="image-row">
          <img src={img17} alt="Ninja 1" className="image" />
          <img src={img18} alt="Ninja 2" className="image" />
        </div>
        <div className="image-row">
          <img src={img19} alt="Wall 3" className="image" />
          <img src={img20} alt="Wall 4" className="image" />
        </div>
      </div>
      <div className="right">
        <h1>{header}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Right2({ img21, img22, img23, img24, header, description }) {
  return (
    <div className="box second-box">
      <div className="right">
        <h1>{header}</h1>
        <p>{description}</p>
      </div>
      <div className="left">
        <div className="image-row">
          <img src={img21} alt="ball 1" className="image" />
          <img src={img22} alt="ball 2" className="image" />
        </div>
        <div className="image-row">
          <img src={img23} alt="ball 3" className="image" />
          <img src={img24} alt="ball 4" className="image" />
        </div>
      </div>
    </div>
  );
}



function Left3({ img1, img22, img25, img24, header, description }) {
  return (
    <div className="box first-box">
      <div className="left">
        <div className="image-row">
          <img src={img1} alt="Ninja 1" className="image" />
          <img src={img22} alt="Ninja 2" className="image" />
        </div>
        <div className="image-row">
          <img src={img25} alt="Wall 3" className="image" />
          <img src={img24} alt="Wall 4" className="image" />
        </div>
      </div>
      <div className="right">
        <h1>{header}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}


function Right3({ img1, img22, img25, img24, header, description }) {
  return (
    <div className="box second-box">
      <div className="right">
        <h1>{header}</h1>
        <p>{description}</p>
      </div>
      <div className="left">
        <div className="image-row">
          <img src={img1} alt="ball 1" className="image" />
          <img src={img22} alt="ball 2" className="image" />
        </div>
        <div className="image-row">
          <img src={img25} alt="ball 3" className="image" />
          <img src={img24} alt="ball 4" className="image" />
        </div>
      </div>
    </div>
  );
}




function Left4({ img1, img22, img25, img24, header, description }) {
  return (
    <div className="box first-box">
      <div className="left">
        <div className="image-row">
          <img src={img1} alt="Ninja 1" className="image" />
          <img src={img22} alt="Ninja 2" className="image" />
        </div>
        <div className="image-row">
          <img src={img25} alt="Wall 3" className="image" />
          <img src={img24} alt="Wall 4" className="image" />
        </div>
      </div>
      <div className="right">
        <h1>{header}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Right4({ img1, img22, img25, img24, header, description }) {
  return (
    <div className="box second-box">
      <div className="right">
        <h1>{header}</h1>
        <p>{description}</p>
      </div>
      <div className="left">
        <div className="image-row">
          <img src={img1} alt="ball 1" className="image" />
          <img src={img22} alt="ball 2" className="image" />
        </div>
        <div className="image-row">
          <img src={img25} alt="ball 3" className="image" />
          <img src={img24} alt="ball 4" className="image" />
        </div>
      </div>
    </div>
  );
}

function Left5({ img1, img22, img25, img24, header, description }) {
  return (
    <div className="box first-box">
      <div className="left">
        <div className="image-row">
          <img src={img1} alt="Ninja 1" className="image" />
          <img src={img22} alt="Ninja 2" className="image" />
        </div>
        <div className="image-row">
          <img src={img25} alt="Wall 3" className="image" />
          <img src={img24} alt="Wall 4" className="image" />
        </div>
      </div>
      <div className="right">
        <h1>{header}</h1>
        <p>{description}</p>
        </div>


</div>



  );
}


export default Tramp;
