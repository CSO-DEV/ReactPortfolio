/**
 * Formation.js : Component Formation
 */
import React from "react";
import "./style.scss";
import data from "../../configData/dataPortfolio.json";
import config from "../../configData/config.json";
import { Card, ListGroup, Image } from "react-bootstrap";
import { FaFilePdf } from "react-icons/fa";


function Formation(props) {
  /**
   * @var shortData : Données extraites BDD * DB extracted data
   */
  let shortData = data.formations;

  /**
   * @method trainingCard : Affichage des cartes de formations *  Trainig card display
   * @function pj : Affichage des liens de chaque pièce jointe * Display each attachements' links
   */
  const trainingCard=()=>{
    return shortData.contenuSection.map((element, index) => {
      return (
        <div className="flexCard" key={element.lienMenu + index}>
          <div id={element.lienMenu} className=""></div>
          <Card className="carteFormation" key={element.lienMenu + index}>
            <Card.Header>
              <div className="formationInfo">
                <img
                  src={config.img + element.logoFormation}
                  className="infoImage"
                />
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
    
    /**
     * @method pj Affichage des liens de chaque pièce jointe * Display each attachements' links
     */
    function pj (doc){
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
  };

  /**
   * @render Construction du DOM * DOM build
   */
  return (
    <section id={shortData.lienSection} className="formation tousLiens chargement all">
      <div className="centre">
        <h4 className="titreSection">{shortData.nomSection}</h4>
        <div className="listeFormation">{trainingCard()}</div>
      </div>
    </section>
  );
}
export default Formation;
