/**
 * Module principal
 */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import Homepage from "../Homepage/Homepage";
import Presentation from "../../assets/Presentation/Presentation";

function App() {
  return (
    <>
      <Router>
        <div id="appMainContainer">
          <Switch>
            <Route path="/" component={Homepage} />
          </Switch>
          <Switch>
            <Route path="/propos.." component={Presentation} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
