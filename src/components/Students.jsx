import React, { Component } from "react";
import "../css/StudentListing.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import EmptyDataMessage from "./commons/EmptyDataMessage";
import {
  addStudentThunk,
  fetchStudentThunk,
  removeStudentThunk,
} from "../redux/reducers/studentReducers";
import { fetchStudent } from "../redux/actions/studentsActions";

class Students extends Component {

  //function to remove a student from the database
  removeStudent = async (id) => {
    await this.props.RemoveStudent(id);
    setTimeout(() => window.location.reload(), 500);
  };

  render() {
    return (
      <div className="container" style={{ textAlign: "center" }}>
        <h1 style={{ color: "rebeccapurple" }}>All Students</h1>

//when user presses add student button it takes the user to a
//different page to input information to add  new student
        <Link to="/student/add" style={{ textDecoration: "none" }}>
          <button className="btn-success" id="add-btn">
            ADD A STUDENT
          </button>
        </Link>
        {/*{successMsg && <h1 id="success-msg">{this.props.successMsg}</h1>}*/}
        <div className="grid container" id="students-listings">

        //show this if students isnt empty
          {this.props.students.length > 0 ? (
            this.props.students.map((student, index) => (
              <div className="card" key={student.id}>
                <img
                  src={student.image_url}
                  className="card-img-top"
                  alt="..."
                  width={150}
                  height={125}
                />
                <div className="card-body">
                  <h5 className="card-title">
                  //link to single students page when name is clicked
                    <Link to={`/students/${student.id}`}>
                      {student.first_name + " " + student.last_name}
                    </Link>
                  </h5>

          //link to edit page when edit button is clicked
                  <Link
                    to={`/student/edit/${student.first_name.replace("", "&")}/${
                      student.id
                    }`}
                  >
                    <button
                      className="btn-info"
                      id="edit-btn"
                      onClick={() => this.props.FetchAStudent(student.id)}
                    >
                      EDIT STUDENT
                    </button>
                  </Link>

                  <button
                    className="btn-danger"
                    id="delete-btn"
                    onClick={() => this.removeStudent(student.id)}
                  >
                    DELETE STUDENT
                  </button>
                </div>
              </div>
            ))
          ) : (
            <EmptyDataMessage message="There are no students registered in this database." />
          )}
        </div>
      </div>
    );
  }
}

function mapState(state) {
  return {
    successMsg: state.Students.addSuccessMsg,
    isLoading: state.Students.isLoading,
  };
}

function mapDispatch(dispatch) {
  //thunks needed to add, remove and edit a student
  return {
    AddStudent: (obj) => {
      dispatch(addStudentThunk(obj));
    },
    RemoveStudent: (id) => dispatch(removeStudentThunk(id)),
    FetchAStudent: (id) => {
      dispatch(fetchStudentThunk(id));
    },
  };
}

//connect state and dispatch to this component
export default connect(mapState, mapDispatch)(Students);
