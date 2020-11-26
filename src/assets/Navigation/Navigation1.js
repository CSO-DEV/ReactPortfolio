import React from 'react';
import "./style1.scss";
import data from "../../configData/dataPortfolio.json";
import config from "../../configData/config.json";
import scrollToId from "../../lib/scrollTo"


function Navigation1(props) {
  /**
   * @var shortData : Données extraites BDD * DB extracted data
   * @var sectionList : Liste des clés de la BDD * DB keys list
   */
  let shortData = data.propos.contenuSection[0];
  let sectionList= Object.keys(data)

  /**
   * @method startNavigation 
   */
    const startNavigation=()=>{
       
    }

  /**
   * @method fixedNavigationBar 
   */
  const fixedNavigationBar=()=>{
    
    }  
    
  /**
   * @method topNavigationBar Affiche une barre de navigation fixe en haut de la page * Top fixed navigation bar display
   * @function navTitle afiche le titre * title display
   * @function navItemsList Affiche la liste des items * items list display
   */
  const topNavigationBar=()=>{
      return(
          <div className="nav">
              {navTitle()}
              <input type="checkbox" id="nav-check"/>
              <div className="nav-btn">
                  <label htmlFor="nav-check">
                    <img src={config.img + "burger.png"} className="burger" alt="Menu"/>
                  </label>
              </div>
              <div className="nav-links">
                {navItemsList()}   
              </div>
          </div>
      )

      /**
       * @function navTitle Afiche le titre * title display
       */
      function navTitle(){
        return(
            <div className="topNavigationBarTitle"
            style={{
                display:"flex",
            }}>
              <div className="topNavigationBarImg"
              style={{
                  margin:"5px",
                  width: "77px",
              }}>
                  <img 
                  src={config.img + shortData.photoPropos} alt={"Photo profil " + shortData.nomPropos}
                  style={{
                      borderRadius:"50%",
                      width: "100%",
                  }}/>
              </div>
              <div className="topNavigationBarText"
              style={{
                  margin:"5px",
                  position: "relative",
                  width: "400px",
                  display: "flex",
                  alignItems: "center",
              }}>
                  <div className="topNavigationBarH1"
                  style={{
                    
                  }}>
                      <h1 
                  style={{
                      margin:"0",
                      fontSize:"17px",
                      color:"white",
                      }}>{shortData.nomPropos}</h1>
                  <h1 
                  style={{
                      margin:"0",
                      fontSize:"23px",
                      fontWeight:"bolder",
                      textTransform: "uppercase",
                      color:"white",
                      }}>{shortData.titrePropos}</h1>
                  </div>
              </div>
            </div>
        )
      }

      /**
       * @function navItemsList Affiche la liste des items * items list display
       */
      function navItemsList(){
        return sectionList.map((element,index)=>{
            if(index<sectionList.length-1){
                return(
                    <label 
                    htmlFor="nav-check" 
                    id={"nav" + data[element].lienSection} 
                    key={element + index}
                    onClick={(e)=>scrollToId(e.target.id.split("nav")[1])}
                    className="navItems">{data[element].nomSection}</label>
                )
            };
            return(<div key={element + index}></div>)        
        })
      }

    }  
    return (
        <div>
            <div className="startNavigation">
            {startNavigation()}
            </div>
            <div className="fixedNavigationBar">
            {fixedNavigationBar()}
            </div>
            <div className="topNavigationBar">
            {topNavigationBar()}
            </div>
        </div>
    );
}

export default Navigation1;