import React from 'react';
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
    let data=props.data;
    let underLine=props.underLine

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
        id="ArrowUp"
        icon={faArrowAltCircleUp} 
        style={{            
            color:color,
            width:size,
            height:"auto",
            position:"fixed",
            top:windowSize[1]-(5 + size),
            left:windowSize[0]-(21 + size),
            zIndex:"5",
            transition:"display 1s ease"
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