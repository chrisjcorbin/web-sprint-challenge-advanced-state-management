import React from "react";

const SmurfCard = (props) => {
  return (
    <div>
      <h2>{props.smurf.name}</h2>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
      <p>ID: {props.smurf.id}</p>
    </div>
  );
};

export default SmurfCard;