import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CampusesListing from "./components/CampusesListing";
import Navbar from "./components/commons/Navbar";
import AddCampus from "./components/AddCampus";
import EditCampus from "./components/EditCampus";
import EditStudent from "./components/EditStudent";
import StudentsListing from "./components/StudentsListing";
import StudentContainer from "./components/StudentContainer";
import SingleStudentCampus from "./components/SingleStudentCampus";
import AddStudent from "./components/AddStudent";
import ViewCampus from "./components/ViewCampus";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/campuses" component={CampusesListing} />
          <Route exact path="/campuses/add" component={AddCampus} />
          <Route exact path="/campuses/edit/:name/:id" component={EditCampus} />
          {/*<Route exact path="/campus/:id component={SingleCampus} />*/}
          <Route exact path="/students" component={StudentsListing} />
          <Route exact path="/student/add" component={AddStudent} />
          <Route exact path="/students/:id" component={StudentContainer} />
          <Route exact path="/student/edit/:name/:id" component={EditStudent} />
          <Route
            exact
            path="/studentcampus/:id"
            component={SingleStudentCampus}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
