/**
 * Homepage.js : Component Homepage
 */
import React from "react";
import Navigation1 from "../../assets/Navigation/Navigation1";
import Presentation from "../../assets/Presentation/Presentation";
import Formation from "../../assets/Formation/Formation";
import Technologie from "../../assets/Technologie/Technologie";
import Portfolio from "../../assets/Portfolio/Portfolio";
import config from "../../configData/config.json";
import data from "../../configData/dataPortfolio.json";
import "./style.scss";


function Homepage(props) {



  /**
   * @render Construction du DOM * DOM build
   */
  return (
    <div className="homepage" id="homepage">
      <Navigation1 />
      <Presentation/>
      <Formation/>
      <Technologie/>
      <Portfolio/>
    </div>
  );
}
export default Homepage;
