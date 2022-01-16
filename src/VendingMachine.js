import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css"


const VendingMachine = () => {
  return (
    <div className="VendingMachine">
      <h1>VENDOR.LY</h1>
      <div className="VendingMachine-buttons-container">
        <Link className="VendingMachine-button" to="/cheese">Cheese</Link>
        <Link className="VendingMachine-button" to="/popcorn">Popcorn</Link>
        <Link className="VendingMachine-button" to="/donut">Donut</Link>
      </div>
      <div>
        <p><i className="far fa-arrow-alt-circle-down"></i> RETRIEVE ITEM BELOW <i className="far fa-arrow-alt-circle-down"></i></p>
        <p>WATCH FINGERS</p>
      </div>
    </div >
  );
}

export default VendingMachine;