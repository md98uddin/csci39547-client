
import React, { Component } from "react";
import { connect } from "react-redux";
import {
    fetchCampuses,
    RemoveACampus,
    FetchACampus,
} from "../redux/actions/campusesActions";
import { fetchAllStudentsThunk } from "../redux/reducers/studentReducers";
import "../css/CampusListing.css";
import Loader from "./commons/Loader";
import EmptyDataMessage from "./commons/EmptyDataMessage";
import { Link } from "react-router-dom";

class CampusesListing extends Component {
    componentDidMount() {
        this.props.onFetchCampuses();
    }

    removeCampus = async (id) => {
        await this.props.onRemoveCampus(id);
        setTimeout(() => window.location.reload(), 500);
    };

    fetchCampusAndStudents = async (id) => {
        await this.props.FetchACampus(id);
        await this.props.FetchAllStudentsThunk();
    };

    render() {
        console.log("props", this.props);
        const { campuses, successMsg, isLoading } = this.props;

        return campuses && !isLoading ? (
            <div className="container" style={{ textAlign: "center" }}>
                <h1 style={{ color: "rebeccapurple" }}>All Campuses</h1>

                <Link to="/campuses/add" style={{ textDecoration: "none" }}>
                    <button className="btn-success" id="add-btn">
                        ADD A CAMPUS
                    </button>
                </Link>
                {successMsg && <h1 id="success-msg">{this.props.successMsg}</h1>}
                <div className="grid container" id="campuses-listings">
                    {campuses.length > 0 ? (
                        campuses.map((campus, index) => (
                            <div className="card" key={campus.id}>
                                <img
                                    src={campus.image_url}
                                    className="card-img-top"
                                    alt="..."
                                    width={150}
                                    height={125}
                                />
                                <div className="card-body">
                                    <Link
                                        to={`/campuses/${campus.campus_name.replace("", "&")}/${
                                            campus.id
                                        }`}
                                    >
                                        <h5
                                            className="card-title"
                                            onClick={() => this.fetchCampusAndStudents(campus.id)}
                                        >
                                            {campus.campus_name}
                                        </h5>
                                    </Link>
                                    {/*<p className="card-text">{campus.description.slice(0, 75)}</p>*/}
                                    <Link
                                        to={`/campuses/edit/${campus.campus_name.replace(
                                            "",
                                            "&"
                                        )}/${campus.id}`}
                                    >
                                        <button
                                            className="btn-info"
                                            id="edit-btn"
                                            onClick={() => this.props.FetchACampus(campus.id)}
                                        >
                                            EDIT CAMPUS
                                        </button>
                                    </Link>
                                    <button
                                        className="btn-danger"
                                        id="delete-btn"
                                        onClick={() => this.removeCampus(campus.id)}
                                    >
                                        DELETE CAMPUS
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <EmptyDataMessage message="There are no campuses registered in this database." />
                    )}
                </div>
            </div>
        ) : (
            <div id="loader">
                <Loader />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        campuses: state.Campuses.campuses,
        currentCampus: state.Campuses.currentCampus,
        successMsg: state.Campuses.addSuccessMsg,
        isLoading: state.Campuses.isLoading,
        students: state.Students.allStudents,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchCampuses: () => {
            dispatch(fetchCampuses());
        },
        onRemoveCampus: (id) => dispatch(RemoveACampus(id)),
        FetchACampus: (id) => {
            dispatch(FetchACampus(id));
        },
        FetchAllStudentsThunk: () => {
            dispatch(fetchAllStudentsThunk());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CampusesListing);