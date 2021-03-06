/**
 * ArrowUpNavigation.js : Component ArrowUpNavigation
 */
import React from 'react';
import "./style.scss";
import scrollToId from "../../lib/scrollTo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'

function ArrowUpNavigation(props) {
    /**
     * @props
     */
    let color=props.color;
    let size=props.width;
    let windowSize=props.windowSize;

    window.addEventListener("scroll",(e)=>{
        if(window.scrollY>200){
            document.getElementById('ArrowUp').style.display="block";
        }else{
            document.getElementById('ArrowUp').style.display="none";
        }
    });

    return (
        <div>
        <FontAwesomeIcon
        className="arrowUpNavigation"
        id="ArrowUp"
        icon={faArrowAltCircleUp} 
        style={{            
            color:color,
            width:size,
            top:windowSize[1]-(5 + size),
            left:windowSize[0]-(21 + size),
        }}
        onMouseOver={()=>{
            document.getElementById("ArrowUp").style.cursor="pointer";
            document.getElementById("ArrowUp").style.width=size*1.1 + "px"
            }}
        onMouseLeave={()=>{
            document.getElementById("ArrowUp").style.cursor="none";
            document.getElementById("ArrowUp").style.width=size + "px"
            }}       
        onClick={()=>{
            scrollToId("propos")
            }}/> 
        </div>
    );
}

export default ArrowUpNavigation;