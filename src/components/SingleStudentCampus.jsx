import React, {Component} from "react";
import { connect } from "react-redux";
import {fetchAllStudentsCampusThunk, fetchStudentThunk, removeStudentThunk} from "../redux/reducers/studentReducers";
import {FetchACampus} from "../redux/actions/campusesActions";
import {Link} from "react-router-dom";
import Loader from "./commons/Loader";


class SingleStudentCampus extends Component {

    componentDidMount() {
        this.props.fetchCampus(this.props.match.params.id);
        this.props.fetchStudentsCampus(this.props.match.params.id);
    }

    removeStudent = async (id) => {
        await this.props.RemoveStudent(id);
        setTimeout(() => window.location.reload(), 500);
    };


    render() {

        return !this.props.isLoading && this.props.campus && this.props.studentsCampus ? (

            <div className="container" style={{ textAlign: "center" }}>
                <h1 style={{ color: "rebeccapurple", textAlign: "center" }}>Single Campus</h1>,

                <div className="card"  style={{ margin: "auto" }}>
                    <img
                        src={this.props.campus.image_url}
                        className="card-img-top"
                        alt="..."
                        width={150}
                        height={125}
                    />
                    <div className="card-body">
                        <h5 className="card-title">

                            {this.props.campus.campus_name}

                        </h5>
                        <p>address: {this.props.campus.campus_address}</p>
                        <p className="card-text">description: {this.props.campus.description}</p>

                        <button
                            className="btn-info"
                            id="edit-btn"
                            //   onClick={() => this.props.FetchACampus(student.id)}
                        >
                            EDIT CAMPUS
                        </button>

                        <button
                            className="btn-danger"
                            id="delete-btn"
                           //  onClick={() => this.removeCampus(student.id)}
                        >
                            DELETE CAMPUS
                        </button>
                    </div>
                </div>

                <div className="grid container" id="students-listings">
                    {this.props.studentsCampus.map((student) => (
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
                    ))}
                </div>

            </div>


        ) :
            (
                <div id="loader">
                    <Loader />
                </div>
            )
    }


}

const mapState = (state) => {
    return {
        campus: state.Campuses.currentCampus,
        successMsg: state.Campuses.addSuccessMsg,
        isLoading: state.Campuses.isLoading,
        studentsCampus: state.Students.studentsCampus,
    };
};

const mapDispatch = (dispatch) => {
    return {
        fetchCampus: (id) => dispatch(FetchACampus(id)),
        fetchStudentsCampus: (id) => dispatch(fetchAllStudentsCampusThunk(id)),
        RemoveStudent: (id) => dispatch(removeStudentThunk(id)),
        FetchAStudent: (id) => dispatch(fetchStudentThunk(id)),

    };
};

export default connect(mapState, mapDispatch)(SingleStudentCampus);