import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import DefaultProps from "./DefaultProps";
import "./App.css";
import DogList from "./DogList";

class App extends Component {
  static defaultProps = DefaultProps;

  render() {
    return (
      <Route path="/dogs" render={() => <DogList dogs={this.props.dogs} />} />
    );
  }
}

export default App;
