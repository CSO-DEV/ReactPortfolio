/**
 * Module principal
 */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import data from "../../configData/dataPortfolio.json";
import Homepage from "../Homepage/Homepage";
import Presentation from "../../assets/Presentation/Presentation";
import Formation from "../../assets/Formation/Formation";
import Technologie from "../../assets/Technologie/Technologie";
import Portfolio from "../../assets/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Homepage} />
        </Switch>
      </Router>
    </>
  );
}
export default App;
