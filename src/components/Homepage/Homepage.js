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
   * Chargement de l'image de fond Homepage
   */
  const imageHomepage=()=>{
       return (
    <div id="depart" className="tousLiens imageFond" style={{"height":"100vh","width":"100vw", "overflow":"hidden"}}>
      <img src={config.img + "webDev.jpg"} style={{"height": "100%", "width":"100%"}} alt="Code attitude"/>
    </div>)
    
  }
  /**
   * Séquence de démarrage
   */
  const sequence=()=>{
    setTimeout(function(){
    document.getElementById("depart").style.display = "none"; 
    document.getElementById("propos").style.display = "flex";
    }
    , 10000);
    setTimeout(function(){
      document.getElementsByClassName("listeNavigation")[0].style.opacity = "1"; 
      document.getElementsByClassName("boutonNavigation")[0].style.opacity = "1"; 
      }
      , 15000);
  }
  return (
    <div className="homepage" id="homepage">
      <Navigation />
      {imageHomepage()}
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
