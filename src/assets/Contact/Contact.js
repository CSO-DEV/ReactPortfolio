/**
 * Presentation.js : Component Presentation
 */
import React from "react";
import "./style.scss";
import data from "../../configData/dataPortfolio.json";


function Contact(props) {
  /**
   *@var shortData : Données extraites BDD * DB extracted data
   */
  let shortData = data.contact;
  
  /**
   * @render Construction du DOM * DOM build
   */
  return (
    <section id={shortData.lienSection} className="contact tousLiens chargement tailleEcran all">
      <h4 className="titreSection">{shortData.nomSection}</h4>
    </section>
  );
}
export default Contact;
