import React from "react";

const Smurf = props => {
  return (
    <div>
      <h2>{props.smurf.name}</h2>
      <p>{props.smurf.age} smurf years old</p>
      <p>{props.smurf.height} tall</p>
    </div>
  );
};

export default Smurf;
