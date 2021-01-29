/**
 * Portfolio.js : Component Portfolio
 */
import React from "react";
import "./style.scss";
import data from "../../configData/dataPortfolio.json";
import config from "../../configData/config.json";
import { Card, ListGroup, Button } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";


function Portfolio(props) {
/**
 * @props 
 */
let heightNavBar=props.height + "px";

  /**
   *@var shortData : Données extraites BDD * DB extracted data
   */
  let shortData = data.projet;
 
  /**
   * @method portfolioCard : Affichage des projets du portfolio * Portfolio projets display
   * @function moreClose : Animation en fonction de l'etat de la commande "en savoir plus" (affichage du détail) ou "Fermer" (cacher le détail)
   *                      * Animation depending on "en savoir plus" (show more) or "Fermer" (hide more) order status
   * @var moreCloseButtonName : récupère le nom du bouton "moreClose" selectionné * keep select button "moreClose" name
   * @var moreCloseButtonId : récupère l'ID du bouton "moreClose" selectionné * keep select button "moreClose" ID
   * @function githubList : Affichage de la liste des liens GitHub * GitHub links list display
   * @param githubLink : Tableau contenant la liste des liens github  * GitHub links list array
   */
  const portfolioCard = () => {
    return shortData.contenuSection.map((element, index) => {
      return (
        <div 
        id={"unitPortfolioCard" + index}
        className="unitPortfolioCard"
        key={element.lienMenu + index}
        >
        <Card
          id={element.lienMenu}
          className="cartePortfolio"
          key={element.lienMenu + index}          
        >
          <Card.Header>
            <div className="titrePortfolio">
              <div className="imgProjet">
                <img src={config.img + element.photoProjet} className="ImagePortfolio"  alt={"photo" + element.photoProjet}/>
              </div>
              <div className="TextePortfolio">
                <span className="sousTitreSection">{element.nomProjet}</span>
                <span>{element.anneeProjet}</span>
              </div>
              <Button         
                id={"button" + index}
                name={element.idProjet + index}
                className={"moreCloseButton"}
                onClick={(e) => {
                  moreClose(e);
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
            <div 
              className="detailPortfolio"
              name={"button" + index}>
              <p className="portfolioSeparation">{element.objectifProjet}</p>
              <span>{element.descriptionProjet}</span>
              <p className="portfolioSeparation">Technologies</p>
              <span>{element.technoProjet}</span>
              <p className="portfolioSeparation">Liens</p>
              <div className="githubPortfolio">{githubList(element.GitProjet)}</div>
              
            </div>
          </ListGroup>
        </Card>
        </div>
      );
    });

  /**
   * @function moreClose : Animation en fonction de l'etat de la commande "en savoir plus" (affichage du détail) ou "Fermer" (cacher le détail)
   *                      * Animation depending on "en savoir plus" (show more) or "Fermer" (hide more) order status
   * @var moreCloseButtonName : récupère le nom du bouton "moreClose" selectionné * keep select button "moreClose" name
   * @var moreCloseButtonId : récupère l'ID du bouton "moreClose" selectionné * keep select button "moreClose" ID
   * @var moreCloseButtonClass : récupère la class du bouton "moreClose" selectionné * keep select button "moreClose" Classname
   * 
   */
    function moreClose(e){
      let moreCloseButtonName = document.getElementById(e.target.name);
      let moreCloseButtonId = document.getElementById(e.target.id);
      let moreCloseButtonClass = document.getElementsByClassName("moreCloseButton");

      //Fermeture de l'ensemble des elements * Close all elements
        for (let i=0;i<moreCloseButtonClass.length;i++){
          if (document.getElementById(moreCloseButtonClass[i].id)!==moreCloseButtonId){
            document.getElementById(moreCloseButtonClass[i].id).innerText = "En savoir plus..";
            document.getElementById(moreCloseButtonClass[i].name).style.height = "0";           
          }
        }
      
      //Ouverture de l'ensemble de l'element sélectionné * Open element selected
      if (moreCloseButtonId.innerText === "En savoir plus..") {
        moreCloseButtonName.style.height = document.getElementsByName(e.target.id)[0].offsetHeight + "px";
        moreCloseButtonId.innerText = "Fermer"; 
           return;
      }
      //Fermeture de l'ensemble de l'element sélectionné * Close element selected
      if (moreCloseButtonId.innerText === "Fermer") {
        moreCloseButtonName.style.height = "0";
        moreCloseButtonId.innerText = "En savoir plus..";
        return;
      }
    };

    /**
     * @function githubList : Affichage de la liste des liens GitHub * GitHub links list display
     * @param githubLink : Tableau contenant la liste des liens github  * GitHub links list array
     */
    function githubList(githubLink){
      return githubLink.map((element, index) => {
        return (
          <div key={element.gitNom + index}>
            <AiFillGithub />
            <a
              className="lienGitHub"
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
  };

  /**
   * @render Construction du DOM * DOM build
   */
  return (
    <section 
    id={shortData.lienSection} 
    className="portfolio"// tousLiens chargement all"
    style={{
      paddingTop:heightNavBar,
    }}>
      <div className="centre">
        <h4 className="titreSection">{shortData.nomSection}</h4>
        <div className="listePortfolio">{portfolioCard()}</div>       
      </div>
    </section>
  );
}
export default Portfolio;
