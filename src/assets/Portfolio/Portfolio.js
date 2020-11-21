/**
 * Portfolio.js : Component Portfolio
 */
import React, { useState, useEffect } from "react";
import "./style.scss";
import data from "../../configData/dataPortfolio.json";
import config from "../../configData/config.json";
import { Card, ListGroup, ListGroupItem, Image, Button } from "react-bootstrap";
import { FaArrowCircleDown, FaArrowCircleUp, FaFilePdf } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

function Portfolio(props) {
  /**
   * Gestion des datas utiles
   */
  let shortData = data.projet;
  /**
   * Fonctions
   */
  const cartePortfolio = () => {
    return shortData.contenuSection.map((element, index) => {
      return (
        <Card
          id={element.lienMenu}
          className="cartePortfolio"
          key={element.lienMenu + index}
        >
          <Card.Header>
            <div className="titrePortfolio">
              <Image src={config.img + element.photoProjet} className="ImagePortfolio"  alt={"photo" + element.photoProjet}/>
              <div className="TextePortfolio">
                <span className="sousTitreSection">{element.nomProjet}</span>
                <span>{element.anneeProjet}</span>
              </div>
              <Button
         
                id={"button" + index}
                name={element.idProjet + index}
                onClick={(e) => {
                  display(e);
                }}
              >
                En savoir plus..
              </Button>
            </div>
          </Card.Header>
          <ListGroup
            variant="flush"
            id={element.idProjet + index}
            className="plus"
          >
            <div className="detailPortfolio">
            <p className="portfolioSeparation">{element.objectifProjet}</p>
              <span>{element.descriptionProjet}</span>
              <p className="portfolioSeparation">Technologies</p>
              <span>{element.technoProjet}</span>
              <p className="portfolioSeparation">Liens</p>
              <span>{listGithub(element.GitProjet)}</span>
            </div>
          </ListGroup>
        </Card>
      );
    });
  };
  const listGithub = (liste) => {
    return liste.map((element, index) => {
      return (
        <div key={element.gitNom + index}>
          <AiFillGithub />
          <a
            href={element.gitLien}
            title={"Lien GitHub " + element.gitNom}
            target="_blank"
            rel="noopener noreferrer"
          >
            {element.gitNom}
          </a>
        </div>
      );
    });
  };
  /**
   * animation de la partie détail de la fiche
   */
  const display = (e) => {
    let name = e.target.name;
    let affichage = document.getElementById(name);
    let id = e.target.id;
    let bouton = document.getElementById(id);
    if (bouton.innerText === "En savoir plus..") {
      affichage.style.height = "200px";
      bouton.innerText = "Fermer";
      return;
    }
    if (bouton.innerText === "Fermer") {
      affichage.style.height = "0";
      bouton.innerText = "En savoir plus..";
      return;
    }
  };

  /**
   * Affichage
   */
  return (
    <section id={shortData.lienSection} className="portfolio tousLiens chargement">
      <div className="centre">

        <h4 className="titreSection">{shortData.nomSection}</h4>
        <div className="listePortfolio">{cartePortfolio()}</div>
       
      </div>
    </section>
  );
}
export default Portfolio;
