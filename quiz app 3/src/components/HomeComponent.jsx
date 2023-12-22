import React from "react";
import "../css/HomeComponent.css";
import {NavLink } from "react-router-dom";

function HomeComponent() {
    return (
      <div className="home">
        <h2 className="home-heading">Quiz App</h2>
        <NavLink to="/Quiz">
          <button className="home-bt">Play</button>
        </NavLink>
      </div>
    );
  }

export default HomeComponent;