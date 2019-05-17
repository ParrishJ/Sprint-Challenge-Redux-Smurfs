import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import { getSmurfs } from "../actions";
import List from "./List";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    if (this.props.fetching) {
      return <h1>Loading...</h1>;
    }
    if (this.props.error) {
      return <h1>ERROR</h1>;
    }
    return (
      <div className="App">
        <List smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetching: state.fetchingSmurfs,
  error: state.error
});

export default connect(
  mapStateToProps,
  {
    getSmurfs
  }
)(App);

/* export default App; */
