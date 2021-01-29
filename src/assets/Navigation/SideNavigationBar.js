/**
 * SideNavigationBar.js : Component SideNavigationBar
 */
import React, { useEffect, useState} from 'react';
import "./style.scss";
import Contact from "../Contact/Contact";
import spinnerId from '../../lib/spinner'
import config from "../../configData/config.json";

function SideNavigationBar(props) {

    /**
     * @props
     */
    let backgroundColor=props.backgroundColor;
    let size=props.height;

    /**
     * @useState : contrôle du render * render control
     */
    let [open, setOpen] = useState("-210px");
    let [memMap, setMemMap] = useState();

    /**
     * @useEffect : Animation du bouton en spinner * spinner button animation
     */
    useEffect(()=>{
        spinnerId("side",8000)
    });

    return (
        <div 
        className="sideNavigationBarContainer"
        id="sideNavigationBar"
        >
            <div
            className="sideNavigationBarContact"
            id="slideContact"
            style={{
                top:size + 40,
                left:open,
            }}>
                <div
                className="sideNavigationBarTab"
                id="tab"
                style={{
                    backgroundColor: backgroundColor,
                    left:"210px",
                }}>
                    <button
                    className="sideNavigationBarButton"
                    onMouseOver={()=>{
                        document.getElementById("tab").style.backgroundColor="#cc3300"
                    }}
                    onFocus={()=>{
                        document.getElementById("tab").style.backgroundColor="#cc3300";
                    }}
                    onMouseLeave={()=>{
                        document.getElementById("tab").style.backgroundColor=backgroundColor;
                    }}
                    onBlur={()=>{
                        document.getElementById("tab").style.backgroundColor=backgroundColor;
                    }}
                    onClick={()=>{
                        if (open==="-210px"){
                            setMemMap(document.getElementById('map').innerText)
                            setOpen("0px")
                            document.getElementById('map').innerText=">Contact";
                            };
                        if (open==="0px"){
                            document.getElementById('map').innerText= memMap;
                            setOpen("-210px")
                            };
                    }}>
                        <img
                        className="sideNavigationBarImg"
                        id="side"
                        src={config.img + "csodev.png"}
                        alt="csodev"/>
                    </button>             
                </div>
                <Contact
                backgroundColor={backgroundColor}/>
            </div>            
        </div>
    );
}

export default SideNavigationBar;