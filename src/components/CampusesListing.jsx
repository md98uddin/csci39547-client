import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampuses } from "../redux/actions/campusesActions";
import "../css/CampusListing.css";
import Loader from "./commons/Loader";
import EmptyDataMessage from "./commons/EmptyDataMessage";
import { Link } from "react-router-dom";

class CampusesListing extends Component {
    componentDidMount() {
        this.props.onFetchCampuses();
    }
    render() {
        console.log("props", this.props);
        const { campuses } = this.props;

        return campuses ? (
            <div className="container" style={{ textAlign: "center" }}>
                <h1 style={{ color: "rebeccapurple" }}>All Campuses</h1>

                <Link to="/campus/add" style={{ textDecoration: "none" }}>
                    <button className="btn-success" id="add-btn">
                        ADD A CAMPUS
                    </button>
                </Link>

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
                                    <h5 className="card-title">{campus.campus_name}</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make
                                        up the bulk of the card's content.
                                    </p>
                                    <button className="btn-info" id="edit-btn">
                                        EDIT CAMPUS
                                    </button>
                                    <button className="btn-danger" id="delete-btn">
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
        campuses: state.campuses,
        currentCampus: state.currentCampus,
        isLoading: state.isLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchCampuses: () => {
            dispatch(fetchCampuses());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CampusesListing);