/**
 * Technologie.js : Component Technologie
 */
import React, { useState, useEffect } from "react";
import "./style.scss";
import data from "../../configData/dataPortfolio.json";
import config from "../../configData/config.json";
import { Card, ListGroup, ListGroupItem, Image, Carousel } from "react-bootstrap";
import { FaArrowCircleDown, FaArrowCircleUp, FaFilePdf } from "react-icons/fa";
import Caroussel from "../Carousel/Carousel"
function Technologie(props) {

  /**
   * @param shortData objet contenant les informations de la section Techno
   */
  let shortData = data.techno;

  /**
   * @function carteTechno Construction du DOM des cartes techno
   * @param listeImage Tableau d'objet contenant le nom et la source de chaque image
   * @method item Construit la liste des items
   */
  const carteTechno = () => {
    /**
     * @method afficheImage Animation : affiche le logo correspondant dans le caroussel 
     */
    function afficheImage(e){
      let idItem = e.target.id
      let parentLiCarousel = document.getElementsByName("carouselLi" + idItem)
      console.log(parentLiCarousel)
    }

    /** 
     * @method item Construit la liste des item
     */
    function item(doc){   
      return doc.map((element, index) => {
        return (
          <ListGroup.Item 
          key={element.nomTechno + index}
          >
            <a
              className="itemTecho"
              id={element.nomTechno}
              onMouseOver={(e)=>{afficheImage(e)}}
            >
              {element.nomTechno}
            </a>
          </ListGroup.Item>
        );
      });
    };
    return shortData.contenuSection.map((element, index) => {
      //Liste des images à transférer en props dans le caroussel
      let listeImage=[]
      element.listeTechno.forEach(el => {
        listeImage.push({nom: el.nomTechno , source:el.logoTechno})
      });

      return (
        <Card
          id={element.lienMenu}
          className="carteTechno"
          key={element.lienMenu + index}
        >
          <Card.Header>
            <div className="TechnoTitre">
              <Caroussel
              numCarousel={index}
              listeImage={listeImage}
              widthImage="50px"
              HeightImage="50px"
              prevNext={false}
              />
              <span className="sousTitreSection">               
                {element.categorieTechno}
              </span>         
            </div>
          </Card.Header>
          <ListGroup variant="flush">{item(element.listeTechno)}</ListGroup>
        </Card>
      );
    });
  };
 
  /**
   * @render Construction du DOM
   */
  return (
    <section 
    id={shortData.lienSection} 
    className="technologie tousLiens chargement tailleEcran"
    >
      <div 
      className="centre"
      >
        {/*<div  className="">
        <a href="#" title="Affichage précédent">
          <FaArrowCircleUp className="iconPrecedent" />
        </a>
      </div>*/}
            <h4 
            className="titreSection"
            >
              {shortData.nomSection}
            </h4>
        <div 
        className="listeTechno" 
        id="listeTechno"
        >
          {carteTechno()}
        </div>
        {/*<div className="suivant">
        <a href="#" title="Affichage suivant">
          <FaArrowCircleDown className="iconSuivant" />
        </a>
      </div>*/}
      </div>
    </section>
  );
 
}
export default Technologie;
