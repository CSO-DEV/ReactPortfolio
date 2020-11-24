/**
 * Technologie.js : Component Technologie
 */
import React from "react";
import "./style.scss";
import data from "../../configData/dataPortfolio.json";
import { Card, ListGroup} from "react-bootstrap";
import Caroussel from "../Carousel/Carousel"
import { AiFillStar,AiOutlineStar } from 'react-icons/ai';

function Technologie(props) {
  /**
   * @var shortData Données extraites BDD * DB extracted data
   */
  let shortData = data.techno;

  /**
   * @method technoCard : Affichage des cartes par catégorie de technologie * Technologie category card build display
   * @var imageList : Tableau d'objets nom-source pour le carrousel * Source-name objects Array for the carousel
   * @function skillList : Affichage de la liste des technologies par catégorie * Technologies list by category display
   */
  const technoCard = () => {
  
    return shortData.contenuSection.map((element, index) => {
      let imageList=[]
      element.listeTechno.forEach(el => {
        imageList.push({nom: el.nomTechno , source:el.logoTechno})
      });
      imageList.push({nom: element.listeTechno[0].nomTechno , source:element.listeTechno[0].logoTechno})
         return (
          <div className="groupTechnoCard">
            <Card
              id={element.lienMenu}
              className="carteTechno"
              key={element.lienMenu + index}
            >
              <Card.Header>
                <div className="TechnoTitre">
                  <Caroussel
                  numCarousel={index}
                  listeImage={imageList}
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
          </div>
        );
 
    });

    /** 
     * @function skillList : Affichage de la liste des technologies par catégorie * Technologies list by category display
     */
    function skillList(techno){   
      return techno.map((element, index) => {
        return (
          <ListGroup.Item 
          key={element.nomTechno + index}
          className='skillItem'
          >
            <div className='skillLevel'>
              {skillLevel(element.niveauTechno)}
            </div>
            <div className='skillName'>
              <span
                className="itemTecho"
                id={element.nomTechno}
                name={element.nomTechno + index}
              >
                {element.nomTechno}
              </span>
            </div>
       
          </ListGroup.Item>
        );
      });
    };
  };
 
    /**
     * @function skillLevel : Affichage du niveau de compétences * skill level display
     */
    function skillLevel(level){
      let nFillStar=Math.trunc(level/20);
      let nOutLineStar=5-nFillStar;
      let starColor="#cc3300"
      let starShow=[];
      for(let i=0;i<nFillStar;i++){
        starShow.push("F")
      }
      for(let i=0;i<nOutLineStar;i++){
        starShow.push("O")
      }
      return starShow.map(element=>{
        if(element==="F"){
          return <AiFillStar color={starColor}/>
        }
        else{
          return <AiOutlineStar color={starColor}/>
        }
      })
    }


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
