import React, { Component } from "react";
import { connect } from "react-redux";
import SingleStudent from "./SingleStudent";
import { fetchStudentThunk } from "../redux/reducers/studentReducers";

class StudentContainer extends Component {
  componentDidMount() {
    this.props.fetchStudent(this.props.match.params.id);
  }

  render() {
    return <SingleStudent student={this.props.student} />;
  }
}

const mapState = (state) => {
  return {
    student: state.Students.student,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);
