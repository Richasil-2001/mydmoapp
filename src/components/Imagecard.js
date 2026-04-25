import React from "react";

function Imagecard({ name, imgLink }) {
  console.log("This is the Imagecard component");

  return (
    <>
      <h2>{name}</h2>
      <img src={imgLink} alt="placeholder" />
    </>
  );
}

export default Imagecard;