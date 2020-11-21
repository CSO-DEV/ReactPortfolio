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
import data from "../../configData/dataPortfolio.json";
import scrollTo from "../../lib/scrollTo"
import "./style.scss";
import { Next } from "react-bootstrap/esm/PageItem";

function Homepage(props) {
  /**
   * @var listSectionPosition Tableau d'objets section/position initiale
   */
  let listSectionPosition=[];

  /**
   * @function startDisplay Affichage au démarrage de la page
   */
  const startDisplay=()=>{
    setTimeout(function(){
      document.getElementById("depart").style.display = "none";     
      document.getElementById("propos").style.display = "flex";
      let listSection=Object.keys(data);
      listSection.forEach(element=>{
        document.getElementById(data[element].lienSection).style.display = "flex";
        listSectionPosition.push(
          {
            section:element, 
            top: document.getElementById(data[element].lienSection).offsetTop,
            height:document.getElementById(data[element].lienSection).offsetHeight
          })
      });
      }
      , 10000);
    setTimeout(function(){      
      document.getElementsByClassName("listeNavigation")[0].style.opacity = "1";   
      document.getElementsByClassName("boutonNavigation")[0].style.opacity = "1"; 
      }
      , 15000);
    }
    
  /**
   *@method scrollDown Ecoute le scroll de la page et gère le scroll automatique vers le bas
   
  window.addEventListener('scroll',()=>{
    let activePosition=window.scrollY;
    listSectionPosition.forEach(element=>{
      let [min,max]=[element.top,element.top+element.height]
      if (activePosition>=min && activePosition<max){
        document.getElementById('nav'+ element.section).style.textDecoration="underline"
      }
    })

  })*/

 
 /**
  * @function imageHomepage Gestion de l'affichage de l'image de fond
  */
  const imageHomepage=()=>{
    return (
      <div id="depart" className="tousLiens imageFond" style={{"height":"100vh","width":"100vw", "overflow":"hidden"}}>
        <img src={config.img + "webDev.jpg"} style={{"height": "100%", "width":"100%"}} alt="image Geek :)"/>
      </div>)    
  }

  /**
   * @render Construction du DOM
   */
  return (
    <div className="homepage" id="homepage">
      <Navigation />
      {imageHomepage()}
      {startDisplay()}
      <Presentation/>
      <Formation/>
      <Technologie/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}
export default Homepage;
