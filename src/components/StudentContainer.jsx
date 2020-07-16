import React, { Component } from "react";
import { connect } from "react-redux";
import SingleStudent from "./SingleStudent";
import { fetchStudentThunk } from "../redux/reducers/studentReducers";

//container for single student
class StudentContainer extends Component {
  componentDidMount() {
    this.props.fetchStudent(this.props.match.params.id);
  }

  render() {
    //pass in props to single student
    return <SingleStudent student={this.props.student} />;
  }
}

const mapState = (state) => {
  return {
    //get student data from state
    student: state.Students.student,
  };
};

const mapDispatch = (dispatch) => {
  return {
    //thunk to fetch student data
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);
