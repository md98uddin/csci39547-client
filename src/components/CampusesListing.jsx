import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampuses } from "../redux/actions/campusesActions";
import Loader from "./commons/Loader";

class CampusesListing extends Component {
    componentDidMount() {
        this.props.onFetchCampuses();
    }
    render() {
        console.log("props", this.props);

        return !this.props.campuses ? (
            <h>Campuses load</h>
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