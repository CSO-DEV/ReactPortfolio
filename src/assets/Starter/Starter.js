import React, {useEffect, useState} from 'react';
import "./style.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import data from "../../configData/dataPortfolio.json";
import config from "../../configData/config.json";

function Starter(props) {
    /**
     * @var shortData : Données extraites BDD * DB extracted data
     * @var sectionList : Liste des clés de la BDD * DB keys list
     */
    const shortData = data.propos.contenuSection[0];


    let [fontSize, setFontSize] = useState(window.innerWidth*0.2);
    window.addEventListener("resize",()=>{
        setFontSize(window.innerWidth*0.2) ;
    });

    return (
        <section className="starterSection"
        id="starterSection">
            <div className="starterContainer"
            style={{
                height:window.innerHeight-110,
            }}>
                <div className="starterImgText"
                id="starterImgText"
                style={{
                    fontSize:fontSize,
                }}>
                <div className="starterDivImg">
                    <img className="starterImg"
                    id="starterImg"
                    src={config.img + shortData.photoPropos} 
                    alt={"Photo profil " + shortData.nomPropos}
                    />
                    <img className="starterRotateImg"
                    id="starterRotateImg"
                    src={config.img + "sass.png"} 
                    alt={"logo"}
                    />
           
                </div>
                <div className="starterText">
                <div className="starterDivText1">
                    <div className="starterCacheText1"></div>
                    <h1 className="starterText1">
                        {shortData.nomPropos}
                    </h1>
                </div>        
                    <div className="starterDivText2">
                    <div className="starterCacheText2"></div>
                        <h1 className="starterText2">
                            {shortData.titrePropos}
                        </h1>
                    </div>
                </div>
                </div>
             
                <div className="starterButtonContainer">
                    <div className="starterButton">
                        <button
                        style={{
                            fontSize:fontSize/10,
                        }}
                        onClick={()=>{
                            /*document.getElementById('starterHide').style.display="block";
                            document.getElementById('starterHide').animate([
                                // keyframes
                                { top: '700px' }, 
                                { top: '0px' }
                              ], { 
                                // timing options
                                duration: 1000,
                                //iterations: Infinity
                              fill:"forwards"
                              });
                              setTimeout(function(){
                                document.getElementById("portfolio").style.display="flex";
                                document.getElementById("starterHide").style.display="none";
                                document.getElementById("starterSection").style.display="none";

                              },999);    */
                           
                        }}>
                            <span className="text">CLIQUEZ ICI !!</span>
                            <span className="line -right"></span>
                            <span className="line -top"></span>
                            <span className="line -left"></span>
                            <span className="line -bottom"></span>
                         </button>
                    </div>
                </div>

            </div>
            <div className="starterHide"
            id="starterHide"
            style={{
                width :window.innerWidth-1,
                height :window.innerHeight-90,
            }}>
                <div className="starterBand"
                style={{
                    width :window.innerWidth-1,
                    height:90,
                }}>

                </div>
            </div>
        </section>
    );
}

export default Starter;