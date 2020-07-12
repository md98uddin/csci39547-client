import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CampusesListing from "./components/CampusesListing";
import StudentsListing from "./components/StudentsListingContainer";
import Navbar from "./components/commons/Navbar";
import StudentsListingContainer from "./components/StudentsListingContainer";
import StudentContainer from "./components/StudentContainer"

class App extends Component {
  render() {
    return (
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/campuses" component={CampusesListing} />
            <Route exact path="/students" component={StudentsListingContainer} />
            <Route exact path="/students/:id" component={StudentContainer} />
          </Switch>
        </div>
    );
  }
}

export default App;
