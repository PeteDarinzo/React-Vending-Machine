import React from "react";



/**
 * Render a popcorn image at the supplied coordinates
 */
const PopcornPile = ({ x, y }) => {

  return (
    <div style={{
      position: "absolute",
      top: `${y}vh`,
      left: `${x}vw`,
    }}>
      <img
        src="/images/popcorn.png"
        style={{
          height: "400px"
        }}
      />
    </div>
  );
}

export default PopcornPile;