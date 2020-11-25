import React from 'react';
import "./style1.scss";
import data from "../../configData/dataPortfolio.json";
import config from "../../configData/config.json";



function Navigation1(props) {
  /**
   * @var shortData : Données extraites BDD * DB extracted data
   */
  let shortData = data.propos.contenuSection[0];

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
   * @method topNavigationBar 
   */
  const topNavigationBar=()=>{
      return(
          <div className="nav">
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
                        }}>{shortData.nomPropos}</h1>
                    <h1 
                    style={{
                        margin:"0",
                        fontSize:"23px",
                        fontWeight:"bolder",
                        textTransform: "uppercase",
                        }}>{shortData.titrePropos}</h1>
                    </div>
                </div>
              </div>
              <input type="checkbox" id="nav-check"/>
              <div className="nav-btn">
                  <label for="nav-check">
                    <img src={config.img + "burger.png"} className="burger"/>
                  </label>
              </div>
              <div className="nav-links">
                  <label 
                  for="nav-check" 
                  id="propos" 
                  className="navItems">A propos..</label>
                  <label 
                  for="nav-check" 
                  id="formations" 
                  className="navItems">Mes formations</label>    
                  <label 
                  for="nav-check" 
                  id="technologies" 
                  className="navItems">Mes technologies</label>
                  <label 
                  for="nav-check" 
                  id="portfolio"
                  className="navItems">Mon portfolio</label>            

              </div>

          </div>
      )
       
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