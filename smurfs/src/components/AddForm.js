import React from "react";
import { connect } from "react-redux";

import { addSmurf } from "../actions";

class AddForm extends React.Component {
  state = {
    smurf: {
      name: "",
      age: "",
      height: ""
    }
  };

  addSmurf = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.smurf);
    this.setState({
      name: "",
      age: "",
      height: ""
    }); ///may need to make this.state only
  };

  handleChanges = e => {
    this.ListeningStateChangedEvent({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="form">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleChanges}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleChanges}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleChanges}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
        </form>
      </div>
    );
  }
}
