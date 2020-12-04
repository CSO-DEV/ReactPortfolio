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
        <section className="starterSection">
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
                            console.log("alerte")
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
        </section>
    );
}

export default Starter;