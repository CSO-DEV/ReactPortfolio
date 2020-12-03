/**
 * Presentation.js : Component Presentation
 */
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import "./style.scss";
import data from "../../configData/dataPortfolio.json";


function Contact(props) {
  /**
   * @props
   */
  let backgroundColor=props.backgroundColor;
  /**
   *@var shortData : Données extraites BDD * DB extracted data
   */
  let shortData = data.contact;
  
  /**
   * 
   * @method  networkIcon : Construit la liste des réseaux sociaux * Build the social networks list
   */
  const networkIcon=(data)=>{
    return data.reseauContact.map((element,index)=>{
      return(
        <div
        key={element.nomReseau + index}
        style={{
        display: "flex",
        padding:"0 5px",
        flexDirection:"row",
        flexWrap:"nowrap",
        }}>
          {element.FontAwesomeIcon==="faLinkedin" ?
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{
                width:"20px",
                height:"20px",
                marginRight:"5px",
              }}/>
          :
          <div></div>}    
          {element.FontAwesomeIcon==="faGithub" ?
            <FontAwesomeIcon
              icon={faGithub}
              style={{
                width:"20px",
                height:"20px",
                marginRight:"5px",
              }}/>
          :
          <div></div>} 
          <a
          id={element.nomReseau}
          href={element.lienReseau}
          title={"Lien " + element.nomReseau}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color:"white",
          }}
          >
            {element.nomReseau}
            </a>
        </div>
      )
    })
  }

  /**
   * @render Construction du DOM * DOM build
   */
  return (
    <section 
    id={shortData.lienSection} 
    className="contact"
    style={{
      padding:"10px",
      color:"white",
      minHeight: "auto",
      backgroundColor: backgroundColor,
      flexGrow: '1',
    }}>
      <h4
      style={{
        color:"white",
      }}>{shortData.nomSection}</h4>

      <div
      style={{
        display: "flex",
        padding:"0 5px",
        flexDirection:"row",

      }}>
        <FontAwesomeIcon
        id="ArrowUp"
        icon={faAt}
        style={{
          width:"20px",
          height:"auto",
          marginRight:"5px",
        }}/>
        <a 
        href={"mailto:" + shortData.contenuSection[0].emailContact}
        title="Email"
        style={{
          color:"white",
        }}
        >
          {shortData.contenuSection[0].emailContact}
        </a>
        </div>        
        {networkIcon(shortData.contenuSection[0])}
      </section>
  );
}
export default Contact;
