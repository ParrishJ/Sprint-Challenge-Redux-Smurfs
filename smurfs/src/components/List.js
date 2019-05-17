import React from "react";
import Smurf from "./Smurf";
import AddForm from "./AddForm";

const List = props => {
  return (
    <div>
      <h1>Smurf Village</h1>
      <ul>
        {props.smurfs.map(smurf => {
          return <Smurf smurf={smurf} />;
        })}
      </ul>
    </div>
  );
};

export default List;
