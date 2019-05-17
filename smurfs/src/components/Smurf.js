import React from "react";

const Smurf = props => {
  return (
    <div>
      <li>{props.smurf.name}</li>
      <li>{props.smurf.age}</li>
      <li>{props.smurf.height}</li>
    </div>
  );
};

export default Smurf;
