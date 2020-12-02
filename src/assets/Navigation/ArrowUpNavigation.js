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
    Object.keys(data).forEach((element,index)=>{
        if(index<Object.keys(data).length-1){
            let min=document.getElementById(data[element].lienSection).offsetTop
            let height=document.getElementById(data[element].lienSection).offsetHeight
            console.log(min+height)
            if(window.scrollY>=min && window.scrollY<min+height){
                let idSection="navCenterLienUnderline" & data[element].lienSection
                console.log(idSection)
                //document.getElementById(idSection).style.width ="90%";
                //document.getElementById(idSection).style.backgroundColor =underLine;
            }
        }
        
    })
   
  })
 

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