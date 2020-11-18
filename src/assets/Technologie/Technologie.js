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
   * Gestion des datas utiles
   */
  let shortData = data.techno;
  /**
   * Fonctions
   */
  const carteTechno = () => {
    return shortData.contenuSection.map((element, index) => {
      //Liste des images à transférer en props dans le caroussel
      let listeImage=[]
      element.listeTechno.forEach(el => {
        listeImage.push(el.logoTechno)
      });
      //--

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
   * Construction liste des items
   */
  const item = (doc) => {   
    return doc.map((element, index) => {
      return (
        <ListGroup.Item key={element.nomTechno + index}>
          {element.nomTechno}
        </ListGroup.Item>
      );
    });
  };
   
   /**
   * Affichage
   */
  return (
    <section id={shortData.lienSection} className="technologie tousLiens chargement tailleEcran">
      <div className="centre">
        {/*<div  className="">
        <a href="#" title="Affichage précédent">
          <FaArrowCircleUp className="iconPrecedent" />
        </a>
      </div>*/}
            <h4 className="titreSection">{shortData.nomSection}</h4>
        <div className="listeTechno" id="listeTechno">{carteTechno()}</div>
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
