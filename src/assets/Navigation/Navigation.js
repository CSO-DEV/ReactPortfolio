/**
 * Navigation.js : Component Navigation
 */
import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import "./style.scss";
import data from "../../configData/dataPortfolio.json";
import config from "../../configData/config.json";

function Navigation(props) {
  /**
   * Gestion des datas utiles
   */
  let shortData = data.propos.contenuSection[0];
  /**
   * Gestion des items
   */
  const items = () => {
    let listeItems = Object.keys(data);
    return listeItems.map((element, index) => {
      let n = data[element].contenuSection.length;
      if (n === 1) {
        return (
          <Nav.Link
            //href={"#" + data[element].lienSection}
            name={data[element].lienSection}
            className="texteNavigation"
            key={data[element].lienSection + index}
            onClick={(e) => navigation(e)}
          >
            {data[element].nomSection}
          </Nav.Link>
        );
      } else {
        return (
          <NavDropdown
            title={data[element].nomSection}
            id="basic-nav-dropdown"
            className="menuNavigation"
            key={data[element].lienSection + index}
          >
            <NavDropdown.Item
              //href={"#" + data[element].lienSection}
              name={data[element].lienSection}
              key={data[element].lienSection + index}
              onClick={(e) => navigation(e)}
            >
              {data[element].nomSection}
            </NavDropdown.Item>
            <NavDropdown.Divider />
            {itemsListe(data[element])}
          </NavDropdown>
        );
      }
    });
  };
  const itemsListe = (data) => {
    let contenuSection = data.contenuSection;
    return contenuSection.map((element, index) => {
      return (
        <NavDropdown.Item
          //href={"#" + element.lienMenu}
          name={element.lienMenu}
          key={index}
          onClick={(e) => navigation(e)}
        >
          {element.nomMenu}
        </NavDropdown.Item>
      );
    });
  };
  /**
   * Gestion des affichages
   */
  const navigation = (e) => {
    let height = window.innerHeight;
    let elements = document.getElementsByClassName("tousLiens");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }
    document.getElementById(e.target.name).style.display = "flex";
    document.getElementById(e.target.name).style.minHeight = height + "px";
  };
  /**
   * Affichage navigateur
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
        <Navbar.Collapse id="basic-navbar-nav" className="listeNavigation">
          <Nav className="mr-auto">{items()}</Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}
export default Navigation;
