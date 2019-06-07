import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import DefaultProps from "./DefaultProps";
import "./App.css";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import Navbar from "./Navbar";

class App extends Component {
  static defaultProps = DefaultProps;

  render() {
    const getDog = props => {
      let name = props.match.params.name;
      let currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      );
      return <DogDetails {...props} dog={currentDog} />;
    };

    return (
      <div>
        <Navbar dogs={this.props.dogs} />
        <Switch>
          <Route
            exact
            path="/dogs"
            render={() => <DogList dogs={this.props.dogs} />}
          />
          <Route exact path="/dogs/:name" render={getDog} />
        </Switch>
      </div>
    );
  }
}

export default App;
