/**
 * SideNavigationBar.js : Component SideNavigationBar
 */
import React, { useEffect, useState} from 'react';
import Contact from "../Contact/Contact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import spinnerId from '../../lib/spinner'

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
     * @useEffect : Animation du bouton
     */
    useEffect(()=>{
        spinnerId("side",10000)
    });

    return (
        <div 
        id="sideNavigationBar"
        style={{
            position:"relative"       
        }}>
            <div
            id="slideContact"
            style={{
                position:"fixed",
                top:size + 40,
                zIndex:"2",
                display: "flex",
                transition:"left 2s ease",
                left:open,
            }}>
                <Contact
                backgroundColor={backgroundColor}/>
                <div
                id="tab"
                style={{
                    backgroundColor: backgroundColor,
                    width:"30px",
                    height:"30px",
                    left:"210px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",   
                    borderRadius:"0 50% 50% 0",
                }}>
                    <button
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
                    }}
                    style={{
                        width: "20px",
                        height: "20px",
                        padding: "0",
                        lineHeight: "0",
                        backgroundColor: "transparent",
                        border: "none",
                        color:"white",
                        outline: "0",
                    }}>
                        <FontAwesomeIcon
                        id="side"
                        icon={faSmile}
                        style={{
                        width:"20px",
                        height:"20px",                        
                        }}/>
                    </button>             
                </div>
            </div>            
        </div>
    );
}

export default SideNavigationBar;