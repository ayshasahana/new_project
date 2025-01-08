import React from 'react';
import './Cardlist.css';
import bee_theme from "../assets/img/ProjectPage_img/ProjectPage_img/bee_theme.png";
import ocean_theme from "../assets/img/ProjectPage_img/ProjectPage_img/ocean_theme.png";
import candy_theme from "../assets/img/ProjectPage_img/ProjectPage_img/candy_theme.png";
import sport_theme from "../assets/img/ProjectPage_img/ProjectPage_img/sport_theme.png";
const Cardlist = () => {
  return (
    <section className="caldlist-section">
    {/* Column 1 */}
    <div className="column">
      <div className="caldlist-card">
        <img src={bee_theme} alt="GEM Bee Theme 2023" className="caldlist-image" />
        <p className="caldlist-name">GEM Bee Theme 2023</p>
      </div>
      <div className="caldlist-card">
        <img src={bee_theme} alt="GEM Snow Theme 2023" className="procaldlistject-image" />
        <p className="caldlist-name">GEM  Snow Theme 2023</p>
      </div>
      <div className="caldlist-card">
        <img src={bee_theme} alt="GEM Neon Theme 2023" className="caldlist-image" />
        <p className="caldlist-name">GEM  Neon Theme 2023</p>
      </div>
    </div>

    {/* Column 2 */}
    <div className="column">
      <div className="caldlist-card">
        <img src={ocean_theme} alt="GEM Ocean Theme 2023" className="caldlist-image" />
        <p className="caldlist-name">GEM Ocean Theme 2023</p>
      </div>
      <div className="caldlist-card">
        <img src={ocean_theme} alt="GEM Pirate Ship 2023" className="caldlist-image" />
        <p className="caldlist-name">GEM Pirate Ship 2023</p>
      </div>
      <div className="caldlist-card">
        <img src={candy_theme} alt="GEM Candy Theme 2023" className="caldlist-image" />
        <p className="caldlist-name">GEM Candy Theme 2023</p>
      </div>
    </div>

    {/* Column 3 */}
    <div className="column">
      <div className="caldlist-card">
        <img src={sport_theme} alt="GEM Sport Theme 2023" className="caldlist-image" />
        <p className="caldlist-name">GEM Sport Theme 2023</p>
      </div>
      <div className="caldlist-card">
        <img src={sport_theme} alt="GEM Amusement Park 2023" className="caldlist-image" />
        <p className="caldlist-name">GEM Amusement Park 2023</p>
      </div>
      <div className="caldlist-card">
        <img src={candy_theme} alt="GEM Jungle Theme 2023" className="caldlist-image" />
        <p className="caldlist-name">GEM Jungle Theme 2023</p>
      </div>
    </div>

    {/* Column 4 */}
    <div className="column">
      <div className="caldlist-card">
        <img src={candy_theme} alt="GEM Planet Theme" className="caldlist-image" />
        <p className="caldlist-name">GEM Planet Theme</p>
      </div>
      <div className="caldlist-card">
        <img src={candy_theme} alt="GEM Space Theme" className="caldlist-image" />
        <p className="caldlist-name">GEM Space Theme</p>
      </div>
    </div>
    </section>
  )
}

export default Cardlist