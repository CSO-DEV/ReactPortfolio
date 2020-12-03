import React,{useEffect, useState} from 'react';
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
    document.getElementById("slideContact").style.left="-210px";
    document.getElementById("slideContact").style.zIndex="2";
    setNavCheck(false)
    Object.keys(data).forEach((element,index)=>{
        if(index<Object.keys(data).length-1){
            let minSection=document.getElementById(data[element].lienSection).offsetTop
            let heightSection=document.getElementById(data[element].lienSection).offsetHeight
            if(window.scrollY>=(parseInt(minSection)-globalHeight) && window.scrollY<(parseInt(minSection+heightSection)-globalHeight)){
                document.getElementById('map').innerText=">" + data[element].nomSection
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
                        key={element + index}
                        id={"li" + element + index}
                        style={{
                            height:globalHeight/1.5,
                            lineHeight:globalHeight/25,
                            width:navCenterLiWidth,
                            paddingLeft:navCenterLiPaddingLeft,
                            display:"flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            marginLeft:"10px",
                            marginRight:"10px",
                            marginBottom:navCenterLiMarginBottom,
                            borderTop : navCenterLiBorderTop,
                       
                        }}
                        >
                            <div
                            style={{
                                display:"flex",
                                flexDirection:"column",
                                alignItems: "center",
                            }}>                       
                                <button
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
                                    height:"auto",//(globalHeight/3),
                                    lineHeight:"normal",
                                    color:textColor,
                                    textTransform: "uppercase",
                                    border:'none', 
                                    backgroundColor:"transparent",
                                    outline:"transparent",               
                                }}>{data[element].nomSection}</button>
                                <div 
                                id={"navCenterLienUnderline" + data[element].lienSection}
                                style={{
                                    width:"0%",
                                    height:"2px",
                                    backgroundColor:"transparent",
                                    transitionProperty:"all",
                                    transitionDuration:"0.5s",
                                    transitionTimingFunction:"ease",
                                }}
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
            display:"flex",
            position:"fixed",
            zIndex:"5"
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
            width: "auto",
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
                color:textColor,
                }}>{shortData.nomPropos}</h1>
            <h1 
            style={{
                margin:"0",
                fontSize:"23px",
                fontWeight:"bolder",
                textTransform: "uppercase",
                color:textColor,
                }}>{shortData.titrePropos}</h1>
            </div>
        </div>
        </div>
    )
    };

    /**
     * @render Construction du DOM * DOM build
    */ 
    return (
        <div>            
            <div
            style={{
                position: "fixed",
                width: windowWidth,
                zIndex: "2",
            }}>
                {navTitle()}
                <div
            id="map"
            style={{                
                position:"fixed",
                top:globalHeight,
                fontSize: "small",
                fontStyle:"italic",
                width: "inherit",
                zIndex: "5",
                backgroundColor: "#4472c4",
                color:"white",
                
            }}>Plan du site</div>
                {navBarPosition==="center" ? 
                <nav
                    style={{
                        height:globalHeight,
                        backgroundColor:backgroundColor,
                        fontWeight:"bolder",
                        display:"flex",
                        flexDirection:"row",
                        justifyContent:"flex-end",
                        position:"relative",
                        padding:"0px 10px",
                        alignItems: "center",    
                    }}>
                        <div
                        id="burger"
                        style={{
                        width: globalHeight,
                        height:globalHeight,
                        display:burgerDisplay,
                        justifyContent: "center",
                        alignItems: "center", 
                                            
                        }}>
                            <button
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
                            style={{
                                textAlign:"center",
                                width: "fit-content",
                                border:'1px solid white',
                                borderRadius:"5px",
                                backgroundColor:"transparent",
                                //outline:"none"  
                            }}>
                                <img 
                                id="imgBurger"
                                src={config.img + "burger.png"} 
                                className="burger"
                                style={{
                                    width: globalHeight/2,
                                    height:globalHeight/2,                            
                                }}
                            alt="Ouverture du menu"/>
                            </button>
                        </div>
                            <ul
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
                                alignItems: "center",
                                padding:"0",
                                margin:"0",
                                textDecoration:"none",
                                listStyleType :"none",
                                display:navCenterUlDisplay,
                                left: "0px",
                                zIndex:"5"                                 
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