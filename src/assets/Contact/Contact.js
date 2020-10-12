/**
 * Presentation.js : Component Presentation
 */
import React, { useState, useEffect } from "react";
import "./style.scss";
import data from "../../configData/dataPortfolio.json";
import config from "../../configData/config.json";
import { Card } from "react-bootstrap";
import { FaArrowCircleDown } from "react-icons/fa";

function Contact(props) {
  /**
   * Gestion des datas utiles
   */
  let shortData = data.contact;
  /**
   * hauteur
   */

  /**
   * Affichage
   */
  return (
    <section id={shortData.lienSection} className="contact tousLiens chargement">
      <h4 className="titreSection">{shortData.nomSection}</h4>
      {/*<div className="">
        <a href="#formation" title="Affichage suivant">
          <FaArrowCircleDown className="iconSuivant" />
        </a>
      </div>*/}
    </section>
  );
}
export default Contact;
