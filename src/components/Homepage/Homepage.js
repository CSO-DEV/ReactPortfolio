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
   * @method startDisplay : Affichage au démarrage de la page * Start page display
   * @var sectionList : Tableau sections BDD * DB sections array                     
   */
  const startDisplay=()=>{
    setTimeout(function(){
      document.getElementById("depart").style.display = "none";     
      document.getElementById("propos").style.display = "flex";
      let sectionList=Object.keys(data);
      sectionList.forEach((element,index)=>{
        if (data[element].lienSection!="contact"){
          document.getElementById(data[element].lienSection).style.display = "flex";
        }
        
      });
      }
      , 10000);
    /*setTimeout(function(){      
      document.getElementsByClassName("listeNavigation")[0].style.opacity = "1";   
      document.getElementsByClassName("boutonNavigation")[0].style.opacity = "1"; 
      }
      , 15000);*/
    }  
 
 /**
  * @method imageHomepage : Affichage de l'image de fond * Background image display
  */
  const imageHomepage=()=>{
    return (
      <div id="depart" className="tousLiens imageFond all" style={{"height":"100vh","width":"100vw", "overflow":"hidden"}}>
        <img src={config.img + "webDev.jpg"} style={{"height": "100%", "width":"100%"}} alt="image Geek :)"/>
      </div>)    
  }

  /**
   * @render Construction du DOM * DOM build
   */
  return (
    <div className="homepage" id="homepage">
      <Navigation1 />
      {imageHomepage()}
      {startDisplay()}
      <Presentation/>
      <Formation/>
      <Technologie/>
      <Portfolio/>
    </div>
  );
}
export default Homepage;
