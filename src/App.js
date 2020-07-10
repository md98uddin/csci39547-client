import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAllCampuses, updateAllCampusesToState } from "./redux/dispatches";
import HomePage from "./components/HomePage";
import CampusesListing from "./components/CampusesListing";
import StudentsListing from "./components/StudentsListing";
import Navbar from "./components/commons/Navbar";
import studentsListing from "./components/StudentsListing";

class App extends Component {
  async componentDidMount() {
    await this.props.fetchAllCampuses();
    await this.props.updateAllCampusesToState();
  }
  render() {
    console.log("props", this.props);
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

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCampuses: () => dispatch(fetchAllCampuses()),
    updateAllCampusesToState: () => dispatch(updateAllCampusesToState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
