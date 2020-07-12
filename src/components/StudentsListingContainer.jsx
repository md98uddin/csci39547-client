import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchAllStudents} from "../redux/actions/studentsActions";
// import {fetchAllStudentsThunk, removeStudentThunk} from "../redux/reducers/studentReducers";
import Students from "./Students"


class StudentsListingContainer extends Component {


    componentDidMount() {
        console.log(this.props);
        this.props.fetchAllStudents();
    }

    render() {
        return (
            <div>
                    <Students
                        allStudents = {this.props.allStudents}
                    ></Students>

            </div>



        )
    }
}


function mapState(state) {
    return {
         allStudents: state.students

    }
}

function mapDispatch(dispatch) {
    return {
        // fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
        // removeAStudent: (id) => dispatch(removeStudentThunk(id))
        fetchAllStudents: () => {

            dispatch(fetchAllStudents());
        },
    }
}

export default connect(mapState, mapDispatch)(StudentsListingContainer);

