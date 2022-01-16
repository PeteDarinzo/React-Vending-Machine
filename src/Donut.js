import React from "react";
import { Link } from "react-router-dom";
import "./Donut.css";

const Donut = () => {
  return (
    <div className="Donut">
    <h1>Mmm... donut</h1>
    <Link className="Donut-button" to="/">Different Selection</Link>
    </div>
  );
}

export default Donut;