import React, { Component } from "react";
import { connect } from "react-redux";
import Students from "./Students";
import { fetchAllStudentsThunk } from "../redux/reducers/studentReducers";
import Loader from "./commons/Loader";

class StudentListings extends Component {
  componentDidMount() {
    this.props.FetchAllStudentsThunk();
  }

  render() {
    console.log("students", this.props.allStudents);

    return this.props.allStudents ? (
      <Students
        students={this.props.allStudents}
        isLoading={this.props.isLoading}
        successMsg={this.props.successMsg}
      />
    ) : (
      <div id="loader">
        <Loader />
      </div>
    );
  }
}

function mapState(state) {
  return {
    allStudents: state.Students.students,
    isLoading: state.Students.isLoading,
    currentStudent: state.Students.currentStudent,
    successMsg: state.Students.addSuccessMsg,
  };
}

function mapDispatch(dispatch) {
  return {
    // fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    // removeAStudent: (id) => dispatch(removeStudentThunk(id))
    FetchAllStudentsThunk: () => {
      dispatch(fetchAllStudentsThunk());
    },
  };
}

export default connect(mapState, mapDispatch)(StudentListings);
