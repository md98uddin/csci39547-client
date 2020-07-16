import React, { Component } from "react";
import { connect } from "react-redux";
import Students from "./Students";
import { fetchAllStudentsThunk } from "../redux/reducers/studentReducers";
import Loader from "./commons/Loader";

//main component to show all students
class StudentListings extends Component {
  componentDidMount() {
    // thunk that fetches all the students from the database
    this.props.FetchAllStudentsThunk();
  }

  render() {
    //only return if students isnt empty
    return this.props.allStudents ? (
      <Students
      //props needed in Students component
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
    //get data from state
    allStudents: state.Students.students,
    isLoading: state.Students.isLoading,
    currentStudent: state.Students.currentStudent,
    successMsg: state.Students.addSuccessMsg,
  };
}

function mapDispatch(dispatch) {
  return {
    // dispatch thunk to get all students
    FetchAllStudentsThunk: () => {
      dispatch(fetchAllStudentsThunk());
    },
  };
}

//connect state and dispatch to this component
export default connect(mapState, mapDispatch)(StudentListings);
