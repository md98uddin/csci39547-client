import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CampusesListing from "./components/CampusesListing";
import StudentsListing from "./components/StudentsListing";
import Navbar from "./components/commons/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/campuses" component={CampusesListing} />
          <Route exact path="/students" component={StudentsListing} />
        </Switch>
      </div>
    );
  }
}

export default App;
