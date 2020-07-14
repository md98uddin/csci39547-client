import React, {Component} from "react";
import { connect } from "react-redux";
import {fetchStudentThunk} from "../redux/reducers/studentReducers";
import {FetchACampus} from "../redux/actions/campusesActions";
import {Link} from "react-router-dom";
import Loader from "./commons/Loader";


class SingleStudentCampus extends Component {

    componentDidMount() {
        this.props.fetchCampus(this.props.match.params.id);

    }


    render() {

        return !this.props.isLoading && this.props.campus ? (

            <div className="container" style={{ textAlign: "center" }}>
                <h1 style={{ color: "rebeccapurple", textAlign: "center" }}>Single Campus</h1>,

                <div className="card"  style={{ margin: "auto" }}>
                    <img
                        src="https://homepages.cae.wisc.edu/~ece533/images/fruits.png"
                        className="card-img-top"
                        alt="..."
                        width={150}
                        height={125}
                    />
                    <div className="card-body">
                        <h5 className="card-title">

                            {this.props.campus.campus_name}

                        </h5>
                        <p>address: {this.props.campus.address}</p>
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
                            // onClick={() => this.removeCampus(student.id)}
                        >
                            DELETE CAMPUS
                        </button>
                    </div>
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
    };
};

const mapDispatch = (dispatch) => {
    return {
        fetchCampus: (id) => dispatch(FetchACampus(id)),
    };
};

export default connect(mapState, mapDispatch)(SingleStudentCampus);