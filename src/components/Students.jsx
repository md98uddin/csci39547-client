import React, { Component } from "react";
import "../css/StudentListing.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import EmptyDataMessage from "./commons/EmptyDataMessage";
import {addStudentThunk, fetchStudentThunk, removeStudentThunk} from "../redux/reducers/studentReducers";
import {fetchStudent} from "../redux/actions/studentsActions";

class Students extends Component {


    removeStudent = async (id) => {
        await this.props.RemoveStudent(id);
        setTimeout(() => window.location.reload(), 500);
    };


    render() {


    return(

            <div className="container" style={{textAlign: "center"}}>
            <h1 style={{color: "rebeccapurple"}}>All Students</h1>

            <Link to="/student/add" style={{textDecoration: "none"}}>
            <button className="btn-success" id="add-btn">
            ADD A STUDENT
            </button>
            </Link>
            {/*{successMsg && <h1 id="success-msg">{this.props.successMsg}</h1>}*/}
            <div className="grid container" id="students-listings">
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
                                <Link to={`/students/${student.id}`}>
                                    {student.first_name + " " + student.last_name}
                                </Link>
                            </h5>


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
                <EmptyDataMessage message="There are no students registered in this database."/>
            )}
            </div>
            </div>
            );


       }


};

function mapState(state){
    return {
        successMsg: state.Students.addSuccessMsg,
        isLoading: state.Students.isLoading,
    }

}

function mapDispatch(dispatch){
    return {
        AddStudent: (obj) => {
            dispatch(addStudentThunk(obj));
        },
         RemoveStudent: (id) => dispatch(removeStudentThunk(id)),
        FetchAStudent: (id) => {
            dispatch(fetchStudentThunk(id));
        },
    }

}



export default connect(mapState, mapDispatch)(Students);