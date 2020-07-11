import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchAllStudentsThunk, removeStudentThunk} from "../redux/reducers/studentReducers";

class StudentsListing extends Component {
    state = {};

    componentDidMount() {
        console.log(this.props);
        this.props.fetchAllStudents();
    }

    render() {
        return (

            <p>Hello World students</p>



        )
    }
}


function mapState(state) {
    return {
        allStudents: state.allStudents
    }
}

function mapDispatch(dispatch) {
    return {
        fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
        removeAStudent: (id) => dispatch(removeStudentThunk(id))
    }
}

export default connect(mapState, mapDispatch)(StudentsListing);

// export default StudentsListing;