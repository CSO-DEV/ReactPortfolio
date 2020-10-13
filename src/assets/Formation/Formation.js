/**
 * Formation.js : Component Formation
 */
import React, { useState, useEffect } from "react";
import "./style.scss";
import data from "../../configData/dataPortfolio.json";
import config from "../../configData/config.json";
import { Card, ListGroup, ListGroupItem, Image } from "react-bootstrap";
import { FaArrowCircleDown, FaArrowCircleUp, FaFilePdf } from "react-icons/fa";

function Formation(props) {
  /**
   * Gestion des datas utiles
   */
  let shortData = data.formations;
  /**
   * Gestion presentation des formations
   */
  const carteFormation = () => {
    return shortData.contenuSection.map((element, index) => {
      return (
        <div className="flexCard" key={element.lienMenu + index}>
          <div id={element.lienMenu} className=""></div>
          <Card className="carteFormation" key={element.lienMenu + index}>
            <Card.Header>
              <div className="formationInfo">
                <Image
                  src={config.img + element.logoFormation}
                  className="infoImage"
                ></Image>
                <div className="infoTexte">
                  <span className="sousTitreSection">
                    {element.nomFormation}
                  </span>
                  <span>{element.dateFormation}</span>
                  <span>{element.objectifFormation}</span>
                  <span>
                    <a
                      href={element.siteFormation}
                      target="_blank"
                      title={"lien site " + element.nomSite}
                      className="lienSite"
                      rel="noopener noreferrer"
                    >
                      {element.nomSite}
                    </a>
                  </span>
                </div>
              </div>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item
                className="commentaireFormation"
                dangerouslySetInnerHTML={{
                  __html: element.commentaireFormation,
                }}
              ></ListGroup.Item>
              <ListGroup.Item className="fichierFormation">
                {pj(element.titreFormation)}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      );
    });
  };
  const pj = (doc) => {
    return doc.map((element, index) => {
      return (
        <div key={element.lienTitre + index}>
          <a
            href={config.doc + element.lienTitre}
            target="_blank"
            type="application/pdf"
            rel="noopener noreferrer"
          >
            <FaFilePdf />
            {element.nomTitre}
          </a>
        </div>
      );
    });
  };
  /**
   * Affichage
   */
  return (
    <section id={shortData.lienSection} className="formation tousLiens chargement">
      <div className="centre">
        {/*<div className="">
        <a href="#" title="Affichage précédent">
          <FaArrowCircleUp className="iconPrecedent" />
        </a>
      </div>*/}
        <h4 className="titreSection">{shortData.nomSection}</h4>
        <div className="listeFormation">{carteFormation()}</div>
        {/*<div className="suivant">
        <a href="#" title="Affichage suivant">
          <FaArrowCircleDown className="iconSuivant" />
        </a>
</div>*/}
      </div>
    </section>
  );
}
export default Formation;
