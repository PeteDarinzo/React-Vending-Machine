import React from "react";
import { Link } from "react-router-dom";
import "./Cheese.css";

/**
 * Return cheese header and link back to vending machine
 */
const Cheese = () => {
  return (
    <div className="Cheese">
      <h1>Brie it on.</h1>
      <Link className="Cheese-button" to="/">Different Selection</Link>
    </div>
  );
}

export default Cheese;