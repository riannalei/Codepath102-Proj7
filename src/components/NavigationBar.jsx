// src/components/NavigationBar.js
import React from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <nav className="navigation-bar">
      <Link to="/">Home</Link>
      <Link to="/crewmates">Crewmates</Link>
      <Link to="/add-crewmate">Add Crewmate</Link>
    </nav>
  );
}

export default NavigationBar;