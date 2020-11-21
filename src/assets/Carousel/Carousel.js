/**
 * Presentation.js : Component Presentation
 */
import React, { useEffect} from "react";
import config from '../../configData/config.json'
import "./style.scss";

function Carousel(props) {

/**
 * @param list Tableau contenant la liste des images à afficher
 * @param imgWidth Largeur d'une image
 * @param imgHeight Hauteur d'une image
 * @param numCarousel Index du carousel
 * @param afficheButton True : Affichage des commandes Preview et Next
 * @var carouselUlWidth Taille de l'UL du carousel
 */

let list=props.listeImage;
let [imgWidth,imgHeight]=[props.widthImage,props.HeightImage];
let numCarousel=props.numCarousel;
let afficheButton=props.prevNext;
let carouselUlWidth=(list.length+1) * 100 + "%"; //Taille de chaque carousel suivant le nombre d'image

/**
 * @function useEffect Lance l'animation après construction du DOM
 */
useEffect(()=>{
  carouselAnimation();
})

/**
 * @function carouselAnimation Gestion de l'annimation du caroussel
 * @method carouselNext  Animation manuelle Next
 * @method carouselPrev  Animation manuelle Preview
 * @method carouselAuto  Animation automatique : incrémentation de l'item
 * @method startCarouselTimeout  Lance la tempo active et relance une nouvelle tempo
 */
const carouselAnimation=()=>{
  //récupération de chaque élément DOM du carousel
  let carousel={}
  carousel.global=document.getElementsByClassName('carouselGlobal' + numCarousel)[0];
  carousel.container=document.getElementsByClassName('carouselContainer' + numCarousel)[0];
  carousel.ul=document.getElementsByClassName('carouselUl' + numCarousel)[0];
  carousel.bouton={
    advance:document.getElementsByClassName('carouselAdvance' + numCarousel)[0],
    preview:document.getElementsByClassName('carouselPrevious' + numCarousel)[0]
  };
  carousel.currentItem = -1;
  carousel.items=carousel.ul.children;
  
  //Variable de temps initial
  let [duringTime,preview]=[3000,afficheButton];

  //Fonction d'écoute des boutons s'ils sont utilisés
    if (carousel.bouton.advance){
		carousel.bouton.preview.addEventListener('click', function(e){ carouselPrev(); });
    carousel.bouton.advance.addEventListener('click', function(e){ carouselNext(); });
    }
  //Fonctions d'écoute des survols de la liste des items
    list.forEach((element,index) => {
      document.getElementById(element.nom).addEventListener('mouseover',function(e){carouselHover(index)})
      document.getElementById(element.nom).addEventListener('mouseleave',function(e){startCarouselTimeout()})
      document.getElementById(element.nom).addEventListener('onFocus',function(e){carouselHover(index)})
  
    });
   
    // Lance la première animation
    startCarouselTimeout(); 

     /**@method  carouselHover  Animation du carousel sur hover des items*/
  function carouselHover(item) {
    //Animation liste des items => reset le style
    document.getElementById(list[carousel.currentItem].nom).style.color="black"
    carousel.currentItem=item
    document.getElementById(list[carousel.currentItem].nom).style.color="#cc3300"
    duringTime=3000;
    carousel.ul.style.transition = "all 2s ease"
    carousel.ul.style.left = -1 * (carousel.currentItem * 100 ) + "%"
    clearTimeout(carousel.interval);
  }

  /**@method  carouselNext  Animation manuelle Next*/
  function carouselNext() {    
    carousel.currentItem++;   
    if(carousel.currentItem >= carousel.items.length) {		
      carousel.currentItem = 0; 
      carousel.ul.style.transition = 'none'
      carousel.ul.style.left = -1 * (carousel.currentItem * 100 ) + "%"
      duringTime=500;    
    }else{
      duringTime=3000;
      carousel.ul.style.transition = "all 2s ease"
      carousel.ul.style.left = -1 * (carousel.currentItem * 100 ) + "%"
    }
    startCarouselTimeout(); 
  }

  /**@method  carouselPrev  Animation manuelle Preview*/
  function carouselPrev() {
    carousel.currentItem--;   
    if(carousel.currentItem <=-1) {	
      carousel.currentItem = carousel.items.length-1; 
      carousel.ul.style.transition = "none"
      carousel.ul.style.left = -1 * (carousel.currentItem * 100 ) + "%"
    }else{
      duringTime=3000;
      carousel.ul.style.transition = "all 2s ease"
      carousel.ul.style.left = -1 * (carousel.currentItem * 100 ) + "%"
      startCarouselTimeout(); 
    }    
  }

  /**@method  carouselAuto  Animation automatique : incrémentation de l'item*/
  function carouselAuto() {
    //Animation liste des items => reset le style
    if(carousel.currentItem>=0 && carousel.currentItem<list.length){
      document.getElementById(list[carousel.currentItem].nom).style.color="black"}
    //Gestion des affichage image  
    carousel.currentItem++;   
    if(carousel.currentItem >= carousel.items.length) {		
      carousel.currentItem = 0;
      carousel.ul.style.transition = 'none'
      carousel.ul.style.left = -1 * (carousel.currentItem * 100 ) + "%"      
      duringTime=500;
    }else{
      duringTime=3000;
      carousel.ul.style.transition = "all 2s ease"
      carousel.ul.style.left = -1 * (carousel.currentItem * 100 ) + "%"
    }
    //Animation liste des items => Change le style
    document.getElementById(list[carousel.currentItem].nom).style.color="#cc3300";
    //Lance la tempo
      startCarouselTimeout(); 
  } 

  /**@method  startCarouselTimeout  Lance la tempo active et relance une nouvelle tempo*/
  function startCarouselTimeout() {
    
    clearTimeout(carousel.interval);
      carousel.interval = setTimeout(function(){
        carouselAuto();
      },duringTime);    
  }
}

/**
 * @function createListImage Gestion de la liste d'images
 * @method createImg Construction de la liste d'images en fonction de la liste props
 */
const createListImage=()=>{

  /**@method createImg Construction de la liste d'images en fonction de la liste props*/
  function createImg(){
    return list.map((element,index)=>{
      return (
      <li 
        className={"carouselLi"  + numCarousel}
        key={"carouselLi" + numCarousel + index}
        name={"carouselLi" + element.nom}
        >
        <img 
        src={config.img + element.source}       
        alt={element.nom}
        name={element.nom}
        style={{
          float: "left",
          width: imgWidth,
          height: imgHeight,
        }}      
        />
      </li>)
    })
}

  return(
    <ul 
    className={"carouselUl" + numCarousel}
    style={{
      listStyleType: "none",
      position: "relative",
      width: carouselUlWidth,
      height:"auto",
      margin: "0",
      padding: "0",
      fontSize: "0",
      textAlign: "left",
    }}
    >
    {createImg()}     
    </ul>)
 }

/**
 * @render Construction du DOM
 */
  return (
    <div 
    className={"carouselGlobal" + numCarousel}
    style={{
      display:'flex',
      justifyContent: 'center',
      border: "3px inset lightgrey",
    }}
    > 
      {afficheButton ? 
      <button 
        className={"carouselPrevious" + numCarousel}
        style={{
          border:"0px",
          height:"28px",
          width:"17px"
        }}>
          P
      </button>
      : <></>
      }
      <div          
        className={"carouselContainer" + numCarousel}
        style={{
          width: imgWidth,
          maxWidth: "1000px",
          overflow: "hidden",        
        }}
      >
        {createListImage()}
      </div>
      {afficheButton ? 
      <button 
        className={"carouselAdvance" + numCarousel}
        style={{
          border:"0px",
          height:"28px",
          width:"17px"
        }}
        >
      N
      </button>
      : <></>
      }
    </div>

  );
}
export default Carousel;