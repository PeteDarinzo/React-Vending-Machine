import React from "react";
import { Link } from "react-router-dom";
import "./Donut.css";


/**
 * Return donut header and link back to vending machine
 */
const Donut = () => {
  return (
    <div className="Donut">
    <h1>Mmm... donut</h1>
    <Link className="Donut-button" to="/">Different Selection</Link>
    </div>
  );
}

export default Donut;