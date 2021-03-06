import React,{useEffect, useState} from 'react';
import "./style.scss";
import ArrowUpNavigation from './ArrowUpNavigation'
import data from "../../configData/dataPortfolio.json";
import config from "../../configData/config.json";
import scrollToId from "../../lib/scrollTo"
function TopNavigationBar(props) {
    
    /**
     * @param globalHeight : Hauteur de la barre de navigation
     * @param textColor : Hauteur de la barre de navigation
     * @param backgroundColor : Hauteur de la barre de navigation
     */
    let globalHeight, textColor,underLine,backgroundColor,navBarPosition;
    props.height ? globalHeight=props.height : globalHeight=50;
    props.color ? textColor=props.color : textColor="black";
    props.underLine ? underLine=props.underLine : underLine="red";
    props.backgroundColor ? backgroundColor=props.backgroundColor : backgroundColor="ivory";
    props.navBarPosition ? navBarPosition=props.navBarPosition : navBarPosition="center";

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
     * @Style : Variable de style * style variable
     */
    let burgerDisplay;
    let navCenterUlFlexDirection,navCenterUlHeight,navCenterUlPosition,navCenterUlTop,navCenterUlWidth,navCenterUlOverflow,navCenterUlBorder,navCenterUlDisplay,
    navCenterUltransitionProperty,navCenterUltransitionDuration,navCenterUltransitionTimingFunction;
    let navCenterLiWidth,navCenterLiPaddingLeft,navCenterLiBorderTop, navCenterLiMarginBottom;
    
    /**
     * @WindowSize : Affichage des styles suivant la largeur de la fenetre * Display styles according to the window width
     */
    window.addEventListener('resize',(e)=>{
        setWindowWidth(window.innerWidth);
      });
    let windowWidthSize=1000;

    if(windowWidth<windowWidthSize){
        burgerDisplay="flex";
        navCenterUlFlexDirection="column";
        navCenterUlPosition="absolute";
        navCenterUlTop=globalHeight;
        navCenterUlWidth=window.innerWidth;
        navCenterLiWidth=window.innerWidth;
        navCenterLiPaddingLeft="50px";
        navCenterUlHeight="0px";
        navCenterUlOverflow="hidden";
        navCenterLiMarginBottom="5px";
        navCenterUlDisplay="none";
    }else{
        burgerDisplay="none";
        navCenterUlFlexDirection="row";
        navCenterUlPosition="relative";
        navCenterUlWidth="auto";
        navCenterLiMarginBottom="0px"
        navCenterUlHeight="auto";
        navCenterUlBorder= "none"; 
        navCenterUlDisplay="flex" ;  
    };

        if (windowWidth<windowWidthSize && !navCheck){
            navCenterUlHeight="0px";
            navCenterUlBorder= "none";
            //navCenterUltransitionProperty="height";
            //navCenterUltransitionDuration="5s";
            //navCenterUltransitionTimingFunction="ease";
            navCenterUlDisplay="none";
    
        }if(windowWidth<windowWidthSize && navCheck){
            navCenterUlBorder= "1px solid rgba(0, 0, 0, 0.3)";
            navCenterUlHeight=((Object.keys(data).length-1) * (5 + 1 +globalHeight/2));
            //navCenterUltransitionProperty="height";
            //navCenterUltransitionDuration="5s";
            //navCenterUltransitionTimingFunction="ease";
            navCenterUlDisplay="flex";
            document.getElementById("slideContact").style.zIndex="1";
        };
        useEffect(()=>{
            if(!navCheck){document.getElementById("slideContact").style.zIndex="2"};
        })

    /**
    *@WindowScroll
    */
   window.addEventListener("scroll",(e)=>{
    //Animation du slide au scroll * 
    document.getElementById("slideContact").style.left="-210px";
    document.getElementById("slideContact").style.zIndex="2";

    //Animation du plan du site au scroll * 
    setNavCheck(false)
    Object.keys(data).forEach((element,index)=>{
        if(index<Object.keys(data).length-1){
            let minSection=document.getElementById(data[element].lienSection).offsetTop
            let heightSection=document.getElementById(data[element].lienSection).offsetHeight
            if(window.scrollY>=(parseInt(minSection)-globalHeight) && window.scrollY<(parseInt(minSection+heightSection)-globalHeight*2)){
                document.getElementById('map').innerText=">" + data[element].nomSection;

                if(data[element].lienSection!="realisations"){
                    //Animation de portfolio au scroll * 
                    for(let i=0;i<data.projet.contenuSection.length;i++){
                        let button=document.getElementById('button' + i)
                        let name=document.getElementById('button' + i).name
                        if (button.innerText === "Fermer") {
                            document.getElementById(name).style.height = "0px";
                            button.innerText = "En savoir plus.."; 
                        }
                    }
                }
            }
            
            
        }
        
    })
   
  })

    /**
    * @function navCenterList Afiche la liste des items * items list display
    */
    const navCenterList=()=>{
        return sectionList.map((element,index)=>{
            if(index<sectionList.length-1){            
                    return(                   
                        <li
                        className="topNavigationBarUrlList"
                        key={element + index}
                        id={"li" + element + index}
                        style={{
                            height:globalHeight/1.5,
                            lineHeight:globalHeight/25,
                            width:navCenterLiWidth,
                            paddingLeft:navCenterLiPaddingLeft,
                            marginBottom:navCenterLiMarginBottom,
                            borderTop : navCenterLiBorderTop,
                       
                        }}
                        >
                            <div
                            className="topNavigationBarUrlNav">                       
                                <button
                                className="topNavigationBarUrlNavButton"
                                id={"navCenterLien" + data[element].lienSection} 
                                onClick={(e)=>{
                                    scrollToId(e.target.id.split("navCenterLien")[1]);
                                    setNavCheck(false)}}        
                                onMouseOver={(e)=>{
                                    document.getElementById("navCenterLienUnderline" + e.target.id.split("navCenterLien")[1]).style.width ="90%";
                                    document.getElementById("navCenterLienUnderline" + e.target.id.split("navCenterLien")[1]).style.backgroundColor =underLine;                                                   
                                }}
                                onMouseLeave={(e)=>{
                                    document.getElementById("navCenterLienUnderline" + e.target.id.split("navCenterLien")[1]).style.width ="0%";
                                    document.getElementById("navCenterLienUnderline" + e.target.id.split("navCenterLien")[1]).style.backgroundColor ="transparent";  
                                }}
                                onFocus={(e)=>{
                                    document.getElementById("navCenterLienUnderline" + e.target.id.split("navCenterLien")[1]).style.width ="90%";
                                    document.getElementById("navCenterLienUnderline" + e.target.id.split("navCenterLien")[1]).style.backgroundColor =underLine;
                                }}
                                onBlur={(e)=>{
                                    document.getElementById("navCenterLienUnderline" + e.target.id.split("navCenterLien")[1]).style.width ="0%";
                                    document.getElementById("navCenterLienUnderline" + e.target.id.split("navCenterLien")[1]).style.backgroundColor ="transparent"; 
                                }}
                                style={{
                                    color:textColor,
                                    }}>{data[element].nomSection}</button>
                                <div
                                className="topNavigationBarUrlNavUnderline"
                                id={"navCenterLienUnderline" + data[element].lienSection}
                                ></div>
                            </div>                        
                        </li>               
                    )               
            }
        return (<div key={element + index}></div>); 
        })
    }

    /**
    * @function navTitle Afiche le titre * title display
    */
   function navTitle(){
    return(
        <div className="topNavigationBarTitle"
        style={{
            //display:"flex",
            //position:"fixed",
            //zIndex:"5"
        }}>
          
        <div className="topNavigationBarTitleTextImgContainer"
        style={{
            //margin:"5px",
            width: globalHeight-10 + "px",
        }}>
            <img
            className="topNavigationBarTitleImg"
            src={config.img + shortData.photoPropos} alt={"Photo profil " + shortData.nomPropos}
            style={{
                //borderRadius:"50%",
                //width: "100%",
            }}/>
        </div>
        <div className="topNavigationBarTitleText"
        style={{
            //margin:"5px",
            //position: "relative",
           // width: "auto",
            //display: "flex",
            //alignItems: "center",
        }}>
            <div>
                <h1 className="topNavigationBarText1" 
                style={{
                    //margin:"0",
                    //fontSize:"17px",
                    color:textColor,
                }}>
                    {shortData.nomPropos}
                </h1>
                <h1 className="topNavigationBarText2" 
                style={{
                    //margin:"0",
                    //fontSize:"23px",
                    //fontWeight:"bolder",
                    //textTransform: "uppercase",
                    color:textColor,
                    }}>
                        {shortData.titrePropos}
                </h1>
            </div>
        </div>
        </div>
    )
    };

    /**
     * @render Construction du DOM * DOM build
    */ 
    return (
        <div className="topNavigationBar">            
            <div
            className="topNavigationBarTitleContainer"
            style={{
                width: windowWidth,
            }}>
                {navTitle()}
                <div
            className="topNavigationBarTitleMap"
            id="map"
            style={{                
                top:globalHeight,                
            }}>Plan du site</div>
                {navBarPosition==="center" ? 
                <nav
                className="topNavigationBarTitleNav"
                    style={{
                        height:globalHeight,
                        backgroundColor:backgroundColor,  
                    }}>
                        <div
                        id="burger"
                        className="topNavigationBarTitleNavBurger"
                        style={{
                        width: globalHeight,
                        height:globalHeight,
                        display:burgerDisplay,                                            
                        }}>
                            <button
                            className="topNavigationBarTitleNavButton"
                            id="imgLien"
                            type="button"
                            onClick={()=>{
                                setNavCheck(!navCheck);
                                document.getElementById("imgBurger").style.boxShadow="none"}}
                            onMouseOver={(e)=>{
                                document.getElementById(e.target.id).style.cursor="pointer";
                            }}
                            onMouseLeave={(e)=>{
                                document.getElementById(e.target.id).style.cursor="none";
                            }}                                               
                           >
                                <img 
                                id="imgBurger"
                                src={config.img + "burger.png"} 
                                style={{
                                    width: globalHeight/2,
                                    height:globalHeight/2,                            
                                }}
                            alt="Ouverture du menu"/>
                            </button>
                        </div>
                            <ul
                            className="topNavigationBarUrl"
                            id="navCenterUl"
                            style={{
                                flexDirection:navCenterUlFlexDirection,
                                height:navCenterUlHeight,
                                overflow:navCenterUlOverflow,
                                position:navCenterUlPosition,
                                top:navCenterUlTop,
                                width:navCenterUlWidth,
                                backgroundColor:backgroundColor,
                                transitionProperty:navCenterUltransitionProperty,
                                transitionDuration:navCenterUltransitionDuration,
                                transitionTimingFunction:navCenterUltransitionTimingFunction,
                                border: navCenterUlBorder,
                                display:navCenterUlDisplay,                                
                            }}>
                            {navCenterList()}
                            </ul>              
                </nav>
                :
                <div></div>}                
            </div>
             <ArrowUpNavigation
              color={backgroundColor}
              underLine={underLine}
              width={30}
              windowSize={[window.innerWidth,window.innerHeight]}
              data={data}
              />
            
        </div>
    );
}
export default TopNavigationBar;