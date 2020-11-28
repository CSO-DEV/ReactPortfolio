/**
 * Homepage.js : Component Homepage
 */
import React from "react";
import TopNavigationBar from "../../assets/Navigation/TopNavigationBar1";
import Presentation from "../../assets/Presentation/Presentation";
import Formation from "../../assets/Formation/Formation";
import Technologie from "../../assets/Technologie/Technologie";
import Portfolio from "../../assets/Portfolio/Portfolio";
import "./style.scss";


function Homepage(props) {

  /**
   * @render Construction du DOM * DOM build
   */
  return (
    <div className="homepage" id="homepage">
      <TopNavigationBar
      height={80}
      backgroundColor="#4472c4"
      color="#f0f8ff"
      underLine= "#cc3300"/>
      <Presentation/>
      <Formation/>
      <Technologie/>
      <Portfolio/>
    </div>
  );
}
export default Homepage;
