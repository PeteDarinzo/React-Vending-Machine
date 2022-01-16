import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PopcornPile from "./PopcornPile";
import "./Popcorn.css"
import { v4 as uuid } from "uuid";


/** Get random int min..max (not incl max) */
function randRange(min = 0, max = 100) {
  return Math.random() * (max - min) + min;
}

/**
 * Return popcorn message and link back to vending machine
 * Stores a list of popcorn piles in state, each pile includes random x-y coordinates
 * Piles appear on screen every 100ms
 */
const Popcorn = () => {

  const [popcornPiles, setPopcornPiles] = useState([]);

  const addPopcornPile = () => {
    setPopcornPiles(piles => [...piles, { x: randRange(), y: randRange() }]);
  }

  useEffect(() => {
    const id = setInterval(() => {
      addPopcornPile();
    }, 100);

    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <div className="Popcorn-message">
        <p>
          <i className="fas fa-dizzy" /> MALFUNCTION <i className="fas fa-dizzy" />
        </p>
        <Link className="Popcorn-button" to="/">Different Selection</Link>
      </div>
      {popcornPiles.map((pile) => (
        <PopcornPile x={pile.x} y={pile.y} key={uuid()} />
      ))}
    </div>
  );
}

export default Popcorn;