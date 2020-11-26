import React,{useState} from 'react';
//import "./style1.scss";
import data from "../../configData/dataPortfolio.json";
import config from "../../configData/config.json";
import scrollToId from "../../lib/scrollTo"


function TopNavigationBar(props) {
    
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
     * @var navBt.. : Variables de style de la class nav-btn * variables for nav-btn class style
     * @var navLinks.. : Variables de style de la class nav-links * variables for nav-links class style
     * @var navItems.. : Variables de style de la class nav-links * variables for navItems class style
     */
    let navBtnDisplay;
    let navLinksDisplay,navLinksPosition,navLinksWidth,navLinksTop,navLinksOverflowY,navLinksHeight;
    let navItemsDisplay,navItemsMarginLeft,navItemsMarginRight;

    /**
     * @WindowSize : Affichage des styles suivant la largeur de la fenetre * Display styles according to the window width
     */
    window.addEventListener('resize',(e)=>{
        setWindowWidth(window.innerWidth);
      });
    if(windowWidth<1300){
        navBtnDisplay="inline-block";
        navLinksDisplay="block";
        navLinksPosition="absolute";
        navLinksWidth="100%";
        navLinksTop="87px";
        navLinksOverflowY="hidden";
        navItemsDisplay="block";
        navItemsMarginLeft="90px";
        navItemsMarginRight="0px";
    }else{
        navBtnDisplay="none";
        navLinksDisplay="flex";
        navLinksPosition="relative";
        navLinksWidth="auto";
        navLinksTop="auto";
        navLinksOverflowY="auto";
        //navLinksHeight="auto",
        navItemsDisplay="inline-block";
        navItemsMarginLeft="0px";
        navItemsMarginRight="50px";
    };

    /**
 * @navLinksHeightFunction : Animation de la barre de navigation *Navigation bar animation
     */
    if (windowWidth<1300 && !navCheck){
        navLinksHeight="0px"
    }else{
        navLinksHeight="auto"
    }
      
    /**
    * @function navTitle Afiche le titre * title display
    */
    function navTitle(){
        return(
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
                    color:"white",
                    }}>{shortData.nomPropos}</h1>
                <h1 
                style={{
                    margin:"0",
                    fontSize:"23px",
                    fontWeight:"bolder",
                    textTransform: "uppercase",
                    color:"white",
                    }}>{shortData.titrePropos}</h1>
                </div>
            </div>
            </div>
        )
    };

    /**
    * @function navItemsList Affiche la liste des items * items list display
    */
    function navItemsList(){
        return sectionList.map((element,index)=>{
            if(index<sectionList.length-1){
                return(
                    <label 
                    className="navItems"
                    id={"nav" + data[element].lienSection} 
                    htmlFor="nav-check"                     
                    key={element + index}
                    onClick={(e)=>scrollToId(e.target.id.split("nav")[1])}
                    onMouseOver={(e)=>{
                        document.getElementById(e.target.id).style.backgroundColor ="rgba(0, 0, 0, 0.3)";
                        document.getElementById(e.target.id).style.cursor = "pointer";
                    }}
                    onMouseLeave={(e)=>{
                        document.getElementById(e.target.id).style.backgroundColor ="transparent";
                        document.getElementById(e.target.id).style.cursor = "none";
                    }}                       
                    style={{
                        display: navItemsDisplay,
                        marginLeft:navItemsMarginLeft,
                        color: "white",
                        fontSize: "18px",
                        height: "fit-content",
                        marginRight: navItemsMarginRight,//
                    }}                  
                    >{data[element].nomSection}
                    </label>
                )
            };
            return(<div key={element + index}></div>)        
        })
    };      

/**
 * @render Construction du DOM * DOM build
 */    
    return (
        <div>
            <div 
            className="topNavigationBar"
            style={{
                width: "100%",
                position:"fixed",
                zIndex: "2",
            }}>
                <div 
                className="nav"
                style={{
                    height: "87px",
                    width: "100%",
                    backgroundColor: "#4472c4",
                    position: "relative",
                    display: "flex",
                    justifyContent: "space-between",
                }}
                >
                    {navTitle()}
                    <input 
                    type="checkbox" 
                    id="nav-check"
                    defaultChecked={navCheck}
                    onClick={()=>{
                        setNavCheck(!navCheck)
                    }}
                    style={{
                        display: "none"}}/>
                    <div 
                    className="nav-btn"
                    style={{
                        display: navBtnDisplay,
                        position : "absolute",
                        top:"18px",
                        right:"0px",
                        borderRadius :"50%",                
                    }}>
                        <label htmlFor="nav-check">
                            <img 
                            id="burger"
                            src={config.img + "burger.png"} 
                            className="burger"
                            style={{
                                width: "40px",
                                height: "34px",
                                borderRadius: "50%",
                            }} 
                            onMouseOver={(e)=>document.getElementById(e.target.id).style.cursor="pointer"}
                            onMouseLeave={(e)=>document.getElementById(e.target.id).style.cursor="none"}
                            alt="Menu"/>
                        </label>
                    </div>
                    <div
                    className="nav-links"
                    style={{
                        display: navLinksDisplay,
                        position:navLinksPosition,
                        width:navLinksWidth,
                        top:navLinksTop,
                        overflowY:navLinksOverflowY,
                        height:navLinksHeight,
                        backgroundColor:"#4472c4",
                        float: "right",
                        fontSize: "15px",
                        alignItems: "center",                        
                    }}>
                    {navItemsList()}   
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopNavigationBar;