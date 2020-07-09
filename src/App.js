import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAllCampuses, updateAllCampusesToState } from "./redux/dispatches";
import HomePage from "./components/HomePage";
import Navbar from "./components/commons/Navbar";

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
