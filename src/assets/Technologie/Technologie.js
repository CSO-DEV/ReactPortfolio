/**
 * Technologie.js : Component Technologie
 */
import React, { useState, useEffect } from "react";
import "./style.scss";
import data from "../../configData/dataPortfolio.json";
import config from "../../configData/config.json";
import { Card, ListGroup, ListGroupItem, Image } from "react-bootstrap";
import { FaArrowCircleDown, FaArrowCircleUp, FaFilePdf } from "react-icons/fa";

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
      return (
        <Card
          id={element.lienMenu}
          className="carteTechno"
          key={element.lienMenu + index}
        >
          <Card.Header>
            <div className="TechnoTitre">
              <div className="TechnoTexte">
                <span className="sousTitreSection">
                  {element.categorieTechno}
                </span>
              </div>
            </div>
          </Card.Header>
          <ListGroup variant="flush">{item(element.listeTechno)}</ListGroup>
        </Card>
      );
    });
  };
  const item = (doc) => {
    return doc.map((element, index) => {
      return (
        <ListGroup.Item key={element.nomTechno + index} className="">
          {element.nomTechno}
        </ListGroup.Item>
      );
    });
  };
  /**
   * Affichage
   */
  return (
    <section id={shortData.lienSection} className="technologie tousLiens chargement">
      <div className="centre">
        {/*<div  className="">
        <a href="#" title="Affichage précédent">
          <FaArrowCircleUp className="iconPrecedent" />
        </a>
      </div>*/}
        <h4 className="titreSection">{shortData.nomSection}</h4>
        <div className="listeTechno">{carteTechno()}</div>
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
