/**
 * Technologie.js : Component Technologie
 */
import React from "react";
import "./style.scss";
import data from "../../configData/dataPortfolio.json";
import { Card, ListGroup} from "react-bootstrap";
import Caroussel from "../Carousel/Carousel"


function Technologie(props) {
  /**
   * @var shortData Données extraites BDD * DB extracted data
   */
  let shortData = data.techno;

  /**
   * @method technoCard : Affichage des cartes par catégorie de technologie * Technologie category card build display
   * @var listeImage : Tableau d'objets nom-source pour le carrousel * Source-name objects Array for the carousel
   * @function acquiredSkill : Affichage du niveau d'aquisition des technologies * Acquired skill level display
   * @function skillList : Affichage de la liste des technologies par catégorie * Technologies list by category display
   */
  const technoCard = () => {
    return shortData.contenuSection.map((element, index) => {
      let listeImage=[]
      element.listeTechno.forEach(el => {
        listeImage.push({nom: el.nomTechno , source:el.logoTechno})
      });
      listeImage.push({nom: element.listeTechno[0].nomTechno , source:element.listeTechno[0].logoTechno})
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
          <ListGroup variant="flush">{skillList(element.listeTechno)}</ListGroup>
        </Card>
      );
    });

    /**
     * @function acquiredSkill : Affichage du niveau d'aquisition des technologies * Acquired skill level display
     */
    function acquiredSkill(e){
    
    }

    /** 
     * @function skillList : Affichage de la liste des technologies par catégorie * Technologies list by category display
     */
    function skillList(doc){   
      return doc.map((element, index) => {
        return (
          <ListGroup.Item 
          key={element.nomTechno + index}
          >
            <a
              href={""}
              className="itemTecho"
              id={element.nomTechno}
              name={element.nomTechno + index}
              onClick={(e)=>{acquiredSkill(e)}}
            >
              {element.nomTechno}
            </a>
          </ListGroup.Item>
        );
      });
    };
  };
 
  /**
   * @render Construction du DOM * DOM build
   */
  return (
    <section 
    id={shortData.lienSection} 
    className="technologie tousLiens chargement tailleEcran all"
    >
      <div 
      className="centre"
      >
   
            <h4 
            className="titreSection"
            >
              {shortData.nomSection}
            </h4>
        <div 
        className="listeTechno" 
        id="listeTechno"
        >
          {technoCard()}
        </div>
      
      </div>
    </section>
  );
 
}
export default Technologie;
