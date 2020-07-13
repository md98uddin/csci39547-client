  import React, { Component } from "react";
  import { connect } from "react-redux";
// // import {fetchAllStudentsThunk, removeStudentThunk} from "../redux/reducers/studentReducers";
 import Students from "./Students";
 import {fetchAllStudentsThunk} from "../redux/reducers/studentReducers";

 class StudentsListingContainer extends Component {


     componentDidMount() {
        console.log("reaches here");
        this.props.FetchAllStudentsThunk();

    }

    render() {

         if(!this.props.campuses){
             return <div>
                 <h1>nothing yet</h1>
             </div>
         }

       return (

                    <Students
                        allStudents = {this.props.allStudents}
                        isLoading = {this.props.isLoading}
                     />

       )

    }
 };

function mapState(state) {
    return {
        allStudents: state.Students.students,
        isLoading: state.Students.isLoading,
        currentStudent: state.Students.currentStudent,

    }
}

function mapDispatch(dispatch) {
    return {
        // fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
        // removeAStudent: (id) => dispatch(removeStudentThunk(id))
        FetchAllStudentsThunk: () => {

            dispatch(fetchAllStudentsThunk());

        }
    }
 }

export default connect(mapState, mapDispatch)(StudentsListingContainer);

