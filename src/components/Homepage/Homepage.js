/**
 * Homepage.js : Component Homepage
 */
import React, { useState, useEffect } from "react";
import Navigation from "../../assets/Navigation/Navigation";
import Presentation from "../../assets/Presentation/Presentation";
import Formation from "../../assets/Formation/Formation";
import "./style.scss";

function Homepage(props) {
  return (
    <div className="homepage" id="homepage">
      <Navigation />
      <Presentation />
      <Formation />
    </div>
  );
}
export default Homepage;
