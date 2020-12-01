/**
 * Presentation.js : Component Presentation
 */
import React from "react";
import "./style.scss";
import data from "../../configData/dataPortfolio.json";
import { Card } from "react-bootstrap";


function Presentation(props) {
/**
 * @props 
 */
let heightNavBar=props.height + "px";

/**
 * @var shortData : Données extraites BDD * DB extracted data
 */
  let shortData = data.propos;

/**
 * @render Construction du DOM * DOM build
*/
  return (
    <section 
    id={shortData.lienSection} 
    className="presentation"// tousLiens tailleEcran all"
    style={{
      paddingTop:heightNavBar,
    }}>
      <div className="presentationContainer">
        <Card className="presentationText1">
          <Card.Body>
            <h4>{shortData.nomSection}</h4>
            <div dangerouslySetInnerHTML={{ __html: shortData.contenuSection[0].textePropos[0]}} />
      
          </Card.Body>
        </Card>
        <Card className="presentationText2">
          <Card.Body>
          <div dangerouslySetInnerHTML={{ __html: shortData.contenuSection[0].textePropos[1]}} />
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}
export default Presentation;
