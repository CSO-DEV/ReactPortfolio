/**
 * Homepage.js : Component Homepage
 */
import React, { useState, useEffect } from "react";
import Navigation from "../../assets/Navigation/Navigation";
import Presentation from "../../assets/Presentation/Presentation";
import Formation from "../../assets/Formation/Formation";
import Technologie from "../../assets/Technologie/Technologie";
import Portfolio from "../../assets/Portfolio/Portfolio";
import Contact from "../../assets/Contact/Contact";
import config from "../../configData/config.json";
import "./style.scss";

function Homepage(props) {

  /**
   * 
   */
  const homepage=()=>{
    let widthWindow = window.innerWidth;
    let heigthWindow = window.innerHeight;
    return (
    <div id="depart" className="tousLiens imageFond" style={{"height":heigthWindow,"width":widthWindow}}>
      <img src={config.img + "webDev.jpg"} style={{"width" : widthWindow}}/>
    </div>)
  }
  /**
   * Affichage de Propos au démarrage
   */
  const sequence=()=>{
    setTimeout(function(){
    document.getElementById("depart").style.display = "none"; 
    document.getElementById("propos").style.display = "flex";
    document.getElementById("propos").style.minHeight = window.innerHeight + "px";
    }
    , 10000);
    
  }
  return (
    <div className="homepage" id="homepage">
      <Navigation />
      {homepage()}
      {sequence()}
      <Presentation />
      <Formation />
      <Technologie />
      <Portfolio />
      <Contact />
    </div>
  );
}
export default Homepage;
