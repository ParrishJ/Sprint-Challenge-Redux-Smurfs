import React from "react";
import Smurf from "./Smurf";

const List = props => {
  return (
    <ul>
      {props.smurfs.map(smurf => {
        return <Smurf smurf={smurf} />;
      })}
    </ul>
  );
};

export default List;
