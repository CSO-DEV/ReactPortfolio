/**
 * Homepage.js : Component Homepage
 */
import React, { useEffect } from "react";
import Starter from "../../assets/Starter/Starter"
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
    scrollTo("propos");
    document.getElementById('ArrowUp').style.display="none";
  })

  /**
   * @var
   */
  let heightNavBar=70;
  let backgroundColor="#4472c4";
  /**
   * @render Construction du DOM * DOM build
   */
  return (
    <div className="homepage" id="homepage">   
      <Starter/>
      <div
      style={{
        display:"none",
      }}>
      <TopNavigationBar
      height={heightNavBar}
      backgroundColor={backgroundColor}
      color="#f0f8ff"
      underLine= "#cc3300"/>
      <SideNavigationBar
        height={heightNavBar}
        backgroundColor={backgroundColor}
        color= "#cc3300"/>
      <Presentation
      height={heightNavBar}/>
      <Formation
      height={heightNavBar+ 20}/>
      <Technologie
      height={heightNavBar+ 20}/>
      <Portfolio
      height={heightNavBar+ 20}/>
    </div>
    </div>
  );
}
export default Homepage;
