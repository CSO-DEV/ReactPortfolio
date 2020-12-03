/**
 * SideNavigationBar.js : Component SideNavigationBar
 */
import React, { useState} from 'react';
import Contact from "../Contact/Contact"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

function SideNavigationBar(props) {

    /**
     * @props
     */
    let backgroundColor=props.backgroundColor;
    let size=props.height;

    /**
     * @useState : contrôle du render * render control
     */
    let [open, setOpen] = useState("-200px");

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
                width: "fit-content"
            }}>
                <Contact
                backgroundColor={backgroundColor}/>
                <div
                id="tab"
                style={{
                    backgroundColor: backgroundColor,
                    width:"30px",
                    height:"30px",
                    left:"200px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",   
                    borderRadius:"0 50% 50% 0"              
                }}>
                    <button
                    onClick={()=>{
                        if (open==="-200px"){setOpen("0px")};
                        if (open==="0px"){setOpen("-200px")};
                    }}
                    style={{
                        width: "20px",
                        height: "20px",
                        padding: "0",
                        lineHeight: "0",
                        backgroundColor: "transparent",
                        border: "none",
                        color:"white"
                    }}>
                        <FontAwesomeIcon
                        id="Side"
                        icon={faCog}
                        style={{
                        width:"20px",
                        height:"auto",
                        
                        }}/>
                    </button>             
                </div>
            </div>            
        </div>
    );
}

export default SideNavigationBar;