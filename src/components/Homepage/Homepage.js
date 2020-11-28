/**
 * Homepage.js : Component Homepage
 */
import React, { useEffect } from "react";
import TopNavigationBar from "../../assets/Navigation/TopNavigationBar";
import SideNavigationBar from "../../assets/Navigation/SideNavigationBar"
import Presentation from "../../assets/Presentation/Presentation";
import Formation from "../../assets/Formation/Formation";
import Technologie from "../../assets/Technologie/Technologie";
import Portfolio from "../../assets/Portfolio/Portfolio";
import scrollTo from '../../lib/scrollTo'
import "./style.scss";


function Homepage(props) {

  useEffect(()=>{
    scrollTo("propos")
  })
  
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
      <SideNavigationBar/>
      <Presentation/>
      <Formation/>
      <Technologie/>
      <Portfolio/>
    </div>
  );
}
export default Homepage;
