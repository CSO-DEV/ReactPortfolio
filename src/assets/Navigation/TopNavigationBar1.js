import React,{useState} from 'react';
import data from "../../configData/dataPortfolio.json";
import config from "../../configData/config.json";
import scrollToId from "../../lib/scrollTo"

function TopNavigationBar1(props) {
    
    /**
     * @param globalHeight : Hauteur de la barre de navigation
     * @param textColor : Hauteur de la barre de navigation
     * @param backgroundColor : Hauteur de la barre de navigation
     */
    let globalHeight, textColor,backgroundColor;
    props.height ? globalHeight=props.size : globalHeight=50;
    props.color ? textColor=props.textColor : textColor="black";
    props.backgroundColor ? backgroundColor=props.backgroundColor : backgroundColor="ivory"
    /**
     * @var shortData : Données extraites BDD * DB extracted data
     * @var sectionList : Liste des clés de la BDD * DB keys list
     */
    const shortData = data.propos.contenuSection[0];
    const sectionList= Object.keys(data)

    /**
     * @useState : contrôle du render * render control
     */
    let [windowWidth, setWindowWidth] = useState(window.innerWidth);
    let [navCheck, setNavCheck] = useState(false);

    /**
     * @WindowSize : Affichage des styles suivant la largeur de la fenetre * Display styles according to the window width
     */
    let navFlexDirection;
    let burgerDisplay;
    let navUlFlexDirection,navUlHeight,navUlPosition,navUlTop,navUlWidth,navUlOverflow;
    let navLienWidth,navLienPaddingLeft;

    window.addEventListener('resize',(e)=>{
        setWindowWidth(window.innerWidth);
      });
    if(windowWidth<900){
        burgerDisplay="flex";
        navUlFlexDirection="column";
        navUlPosition="absolute";
        navUlTop=globalHeight;
        navUlWidth=window.innerWidth;
        navLienWidth=window.innerWidth;
        navLienPaddingLeft="50px";
        navUlHeight="0px";
        navUlOverflow="hidden";

    }else{
        burgerDisplay="none";
        navUlFlexDirection="row";
        navUlPosition="relative";
        navUlWidth="auto";
    };
   

    if (windowWidth<900 && !navCheck){
        navUlHeight="0px";
    }else{
        navUlHeight="auto"
    };
    
    const navList=()=>{
        return sectionList.map((element,index)=>{
            if(index<sectionList.length-1){
                return(                   
                    <li
                    key={element + index}
                    id={"li" + element + index}
                    onMouseOver={(e)=>{
                        document.getElementById(e.target.id).style.backgroundColor ="rgba(0, 0, 0, 0.1)";
                        document.getElementById(e.target.id).style.cursor = "pointer";
                    }}
                    onMouseLeave={(e)=>{
                        document.getElementById(e.target.id).style.backgroundColor ="transparent";
                        document.getElementById(e.target.id).style.cursor = "none";
                    }}
                    style={{
                        height:globalHeight/1.5,
                        lineHeight:globalHeight/25,
                        display:"flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft:"10px",
                        marginRight:"10px",
                    }}
                    >
                        <a
                        id={"navLien" + data[element].lienSection} 
                        href="#"
                        onClick={(e)=>{
                            scrollToId(e.target.id.split("navLien")[1]);
                            setNavCheck(!navCheck)}}
                        onMouseOver={(e)=>{
                            document.getElementById(e.target.id).style.textDecoration ="none";
                        }}
                        style={{
                            height:globalHeight/1.5,
                            color:textColor,
                            width:navLienWidth,
                            paddingLeft:navLienPaddingLeft,
                        }}>{data[element].nomSection}</a>
                    </li>               
                )
            }
            
        })
    }

    return (
        <div>
            <nav
             style={{
                 height:globalHeight,
                 backgroundColor:backgroundColor,
                 fontWeight:"bolder",
                 display:"flex",
                 flexDirection:"row",
                 justifyContent:"flex-end",
                 position:"relative",
            }}>
                <div
                id="burger"
                style={{
                width: globalHeight,
                height:globalHeight,
                display:burgerDisplay,//
                justifyContent: "center",
                alignItems: "center", 
                                   
                }}>
                    <a
                    id="imgLien"
                    href="#"
                    onClick={()=>setNavCheck(!navCheck)}
                    onMouseOver={(e)=>{
                        document.getElementById(e.target.id).style.cursor="pointer"}}
                    onMouseLeave={(e)=>{
                        document.getElementById(e.target.id).style.cursor="none"}}                        
                    style={{
                        textAlign:"center",
                        width: "80%",
                        borderRadius:"50%",
                    }}>
                        <img 
                        id="imgBurger"
                        src={config.img + "burger.png"} 
                        className="burger"
                        style={{
                            width: "100%", 
                            borderRadius:"50%",                           
                        }}
                        alt="Menu burger"/>
                    </a>
                </div>
                <ul
                id="navUl"
                style={{
                    textDecoration:"none",
                    listStyleType :"none",
                    display:"flex", 
                    flexDirection:navUlFlexDirection,
                    height:navUlHeight,
                    overflow:navUlOverflow,
                    alignItems: "center",
                    padding:"0",
                    margin:"0",
                    position:navUlPosition,
                    top:navUlTop,
                    width:navUlWidth,
                    backgroundColor:backgroundColor,                                  
                }}>
                {navList()}</ul>
            </nav>            
        </div>
    );
}

export default TopNavigationBar1;