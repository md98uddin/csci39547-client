import React, {Component} from "react";
import Loader from "./commons/Loader";
import {Link} from "react-router-dom";
import {addStudentThunk, fetchStudentThunk, removeStudentThunk} from "../redux/reducers/studentReducers";
import { connect } from "react-redux";


class SingleStudent extends Component  {



    render()
    {


    return this.props.student ? (

        <div className="container" style={{textAlign: "center"}}>
            <h1 style={{color: "rebeccapurple", textAlign: "center"}}>Single Student</h1>

            <div className="card" style={{margin: "auto"}}>
                <img
                    // src="https://homepages.cae.wisc.edu/~ece533/images/fruits.png"
                    src={this.props.student.image_url}
                    className="card-img-top"
                    alt="..."
                    width={150}
                    height={125}
                />
                <div className="card-body">
                    <h5 className="card-title" style={{ color: "rebeccapurple" }}>

                        {this.props.student.first_name + " " + this.props.student.last_name}

                    </h5>
                    <p style={{ color: "rebeccapurple" }}>email: {this.props.student.email}</p>
                    <Link to={`/studentcampus/${this.props.student.CampusId}`}>
                        <p>CampusId: {this.props.student.CampusId}</p>
                    </Link>
                    <p className="card-text" style={{ color: "rebeccapurple" }}>gpa: {this.props.student.gpa}</p>


                    <Link
                        to={`/student/edit/${this.props.student.first_name.replace("", "&")}/${
                            this.props.student.id
                        }`}
                    >
                    <button
                        className="btn-info"
                        id="edit-btn"
                        onClick={() => this.props.FetchAStudent(this.props.student.id)}
                    >
                        EDIT STUDENT
                    </button>
                    </Link>


                </div>
            </div>
        </div>

    ) : (
        <div id="loader">
            <Loader/>
        </div>
    )

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
        FetchAStudent: (id) => {
            dispatch(fetchStudentThunk(id));
        },
    }
}

export default connect(mapState, mapDispatch)(SingleStudent);