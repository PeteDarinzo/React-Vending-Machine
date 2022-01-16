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
        src="https://www.pngall.com/wp-content/uploads/2018/06/Popcorn-PNG-Clipart.png"
        style={{
          height: "400px"
        }}
      />
    </div>
  );
}

export default PopcornPile;