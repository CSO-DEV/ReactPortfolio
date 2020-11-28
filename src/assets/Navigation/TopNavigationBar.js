import React,{useState} from 'react';
//import "./style1.scss";
import data from "../../configData/dataPortfolio.json";
import config from "../../configData/config.json";
import scrollToId from "../../lib/scrollTo"


function TopNavigationBar(props) {
    /**
     * @param globalHeight : Hauteur de la barre de navigation
     */
    let globalHeight=props.size

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
     * @var navCenterLinks.. : Variables de style de la class nav-links * variables for nav-links class style
     * @var navItems.. : Variables de style de la class nav-links * variables for navItems class style
     */
    let navBtnDisplay;
    let navCenterLinksDisplay,navCenterLinksPosition,navCenterLinksWidth,navCenterLinksTop,navCenterLinksOverflowY,navCenterLinksHeight;
    let navItemsDisplay,navItemsMarginLeft,navItemsMarginRight;

    /**
     * @WindowSize : Affichage des styles suivant la largeur de la fenetre * Display styles according to the window width
     */
    window.addEventListener('resize',(e)=>{
        setWindowWidth(window.innerWidth);
      });
    if(windowWidth<1300){
        navBtnDisplay="inline-block";
        navCenterLinksDisplay="block";
        navCenterLinksPosition="absolute";
        navCenterLinksWidth="100%";
        navCenterLinksTop= globalHeight + "px";
        navCenterLinksOverflowY="hidden";
        navItemsDisplay="block";
        navItemsMarginLeft="90px";
        navItemsMarginRight="0px";
    }else{
        navBtnDisplay="none";
        navCenterLinksDisplay="flex";
        navCenterLinksPosition="relative";
        navCenterLinksWidth="auto";
        navCenterLinksTop="auto";
        navCenterLinksOverflowY="auto";
        navItemsDisplay="inline-block";
        navItemsMarginLeft="0px";
        navItemsMarginRight="20px";
    };

    /**
 * @navCenterLinksHeightFunction : Animation de la barre de navigation *Navigation bar animation
     */
    if (windowWidth<1300 && !navCheck){
        navCenterLinksHeight="0px"
    }else{
        navCenterLinksHeight="auto"
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
                width: globalHeight-10 + "px",
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
            <a  >test</a> 
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
                    <div
                    id={"test" + data[element].lienSection}
                    key={element + index}
                    style={{
                        height: "68px",                 
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: navItemsMarginRight,
                        marginLeft:navItemsMarginLeft,
                    }}
                    onMouseOver={(e)=>{
                        console.log(e.target.id)
                        document.getElementById(e.target.id).style.backgroundColor ="rgba(0, 0, 0, 0.3)";
                        document.getElementById(e.target.id).style.cursor = "pointer";
                    }}
                    onMouseLeave={(e)=>{
                        console.log(e.target.id)
                        document.getElementById(e.target.id).style.backgroundColor ="transparent";
                        document.getElementById(e.target.id).style.cursor = "none";
                    }}>
                        <label 
                        className="navItems"
                        id={"nav" + data[element].lienSection} 
                        htmlFor="nav-check"                  
                        onClick={(e)=>scrollToId(e.target.id.split("nav")[1])}                                        
                        style={{
                            display: navItemsDisplay,
                            marginLeft:navItemsMarginLeft,
                            color: "white",
                            fontSize: "18px",
                            height: "fit-content",
                            marginRight: navItemsMarginRight,
                        }}                  
                        >{data[element].nomSection}
                        </label>
                    </div>
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
                    height: globalHeight + "px",
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
                        top: (globalHeight-40)/2 + "px",
                        right:"5px",
                        borderRadius :"50%",                
                    }}>
                        <label htmlFor="nav-check">
                            <img 
                            id="burger"
                            src={config.img + "burger.png"} 
                            className="burger"
                            style={{
                                width: "40px",
                                height: "40px",
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
                        display: navCenterLinksDisplay,
                        position:navCenterLinksPosition,
                        width:navCenterLinksWidth,
                        top:navCenterLinksTop,
                        overflowY:navCenterLinksOverflowY,
                        height:navCenterLinksHeight,
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