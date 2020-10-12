/**
 * Presentation.js : Component Presentation
 */
import React, { useState, useEffect } from "react";
import "./style.scss";
import data from "../../configData/dataPortfolio.json";
import config from "../../configData/config.json";
import { Card } from "react-bootstrap";
import { FaArrowCircleDown } from "react-icons/fa";

function Presentation(props) {
  /**
   * Gestion des datas utiles
   */
  let shortData = data.propos;
  /**
   * hauteur
   */

  /**
   * Affichage
   */
  return (
    <section id={shortData.lienSection} className="presentation tousLiens tailleEcran">
      <div className="centre">
        <Card className="textePresentation">
          <Card.Body>
            <h4>{shortData.nomSection}</h4>
            <p>
              Pourquoi devenir développeuse WEB ? ..par engouement pour le code
              depuis que j'ai décourvert les languages VBA excel par
              opportunité, python en autodidacte et le développement WEB en
              suivant une formation qui a confirmé ce choix pour mon avenir
              professionnel.
            </p>
            <p>
              Je recherche un poste qui me permettra à la fois de mettre en
              application mes nouvelles compétences, de les consolider et en
              apprendre davantage.
            </p>
            <p>
              Je suis ouverte au présentiel ou au téléprésentiel : l'essentiel
              ...
            </p>
          </Card.Body>
        </Card>
        <Card className="textePresentationInf">
          <Card.Body>
            <h4>c'est coder !</h4>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}
export default Presentation;
