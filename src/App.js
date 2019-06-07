import React, { Component } from "react";
import DefaultProps from "./DefaultProps";
import "./App.css";
import Navbar from "./Navbar";
import Routes from "./Routes";

class App extends Component {
  static defaultProps = DefaultProps;

  render() {
    return (
      <div>
        <Navbar dogs={this.props.dogs} />
        <div className="container">
          <Routes dogs={this.props.dogs} />
        </div>
      </div>
    );
  }
}

export default App;
