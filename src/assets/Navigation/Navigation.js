/**
 * Navigation.js : Component Navigation
 */
import React, { useEffect } from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import "./style.scss";
import data from "../../configData/dataPortfolio.json";
import config from "../../configData/config.json";

function Navigation(props) {

  /**
   * @var shortData : Données extraites BDD * DB extracted data
   */
  let shortData = data.propos.contenuSection[0];

  /**
   * @function useEffect : Controle de position des elements DOM * DOM element position control
   */
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      console.log('test')
    })
  })

  /**
   * @method navItems : Affichage des éléments de navigation * Navigation items Display
   * @var data : Donnée BDD * DB data
   * @var dataListItems : Liste des clés de la BDD * DB data keys list
   * @function displaySection : Affiche les sections en fonction du choix dans le navigateur * displays the sections according to the choice in the browser
   * @var allElements : Récupère les elements DOM de class "all" * Get class "all" DOM's elements
   * @function sectionContent : Affichage des items pour chaque section * Display items for each section
   * @var sectionItemsList : Tableau des items pour chaque section * Items' array for each section
   * 
   */
  const navItems = () => {

     let dataListItems = Object.keys(data);
    return dataListItems.map((element, index) => {
      let n = data[element].contenuSection.length;
      if (n === 1) {
        return (
          <Nav.Link
            href={"#"}
            name={data[element].lienSection}
            className="texteNavigation"
            key={data[element].lienSection + index}
            onClick={(e) => displaySection(e)}
            id={"nav" + data[element].lienSection}
          >
            {data[element].nomSection}
          </Nav.Link>
        );
      } else {
        return (
          <NavDropdown
            title={data[element].nomSection}
            id={"nav" + data[element].lienSection}
            className="menuNavigation"
            key={data[element].lienSection + index}

          >
            <NavDropdown.Item
              href={"#"}
              name={data[element].lienSection}
              key={data[element].lienSection + index}
              onClick={(e) => displaySection(e)}
            >
              {data[element].nomSection}
            </NavDropdown.Item>
            <NavDropdown.Divider />
            {sectionContent(data[element])}
          </NavDropdown>
        );
      }
    });
  
  /**
   * @function displaySection :Affiche les sections en fonction du choix dans le navigateur * displays the sections according to the choice in the browser
   * @var allElements : Récupère les elements DOM de class "all" * Get class "all" DOM's elements
   */
  function displaySection(e){
    let allElements = document.getElementsByClassName("all");
    for (let i = 0; i < allElements.length; i++) {
      allElements[i].style.display = "none";
    }
    document.getElementById(e.target.name).style.display = "flex";
  };

  /**
   * @function sectionContent : Affichage des items pour chaque section * Display items for each section
   * @var sectionItemsList : Tableau des items pour chaque section * Items' array for each section
   */
  function sectionContent(data){
    let sectionItemsList = data.contenuSection;
    return sectionItemsList.map((element, index) => {
      return (
        <NavDropdown.Item
          //href={"#" + element.lienMenu}
          name={element.lienMenu}
          key={index}
          //onClick={(e) => navigation(e)}
        >
          {element.nomMenu}
        </NavDropdown.Item>
      );
    });
  };

  };


/**
 * @render Construction du DOM * DOM build
 */
  return (
    <nav>
      <Navbar fixed="top" expand="lg" className="navigation">
        <Navbar.Brand className="identite">
          <img
            className="photoPropos"
            src={config.img + "PhotoCV.jpg"}
            alt={"photo d'identité" + shortData.nomPropos}
            title={shortData.nomPropos}
          />
          <div className="nomTitre">
            <span className="nomPropos">{shortData.nomPropos}</span>
            <span className="titrePropos">{shortData.titrePropos}</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="boutonNavigation"
          id="boutonNavigation"
        />
        <Navbar.Collapse id="basic-navbar-nav" className="listeNavigation listeNavigationInit">
          <Nav className="mr-auto">{navItems()}</Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}
export default Navigation;
