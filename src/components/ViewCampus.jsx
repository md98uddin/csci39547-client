import React, { Component } from "react";
import "../css/ViewCampus.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchCampuses,
  RemoveACampus,
  FetchACampus,
} from "../redux/actions/campusesActions";
import Loader from "./commons/Loader";
import FilterStudents from "./commons/FilterStudents";
import { getStudentsByCampus } from "../services";

class ViewCampus extends Component {
  removeCampus = async (id) => {
    await this.props.onRemoveCampus(id);
    setTimeout(() => window.location.assign("/campuses"), 500);
  };

  render() {
    console.log("students", this.props.students);
    return this.props.currentCampus ? (
      <div className="view-campus" id="main">
        <div className="media view-card" id="view-card">
          <img
            className="mr-3"
            src={this.props.currentCampus.image_url}
            alt="..."
          />
          <div className="media-body" id="view-body">
            <h5 className="card-title">
              {this.props.currentCampus.campus_name}
            </h5>
            {this.props.currentCampus.description.slice(0, 75)}
            <br />
            <Link
              to={`/campuses/edit/${this.props.currentCampus.campus_name.replace(
                "",
                "&"
              )}/${this.props.currentCampus.id}`}
            >
              <button
                className="btn-info"
                id="edit-btn"
                onClick={() =>
                  this.props.FetchACampus(this.props.currentCampus.id)
                }
              >
                EDIT CAMPUS
              </button>
            </Link>
            <button
              className="btn-danger"
              id="delete-btn"
              onClick={() => this.removeCampus(this.props.currentCampus.id)}
            >
              DELETE CAMPUS
            </button>
          </div>
        </div>
        <h1 id="student-college-title">
          Students Attending {this.props.currentCampus.campus_name}{" "}
        </h1>
        {this.props.students && (
          <FilterStudents
            students={this.props.students}
            id={this.props.currentCampus}
          />
        )}
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
    isLoading: state.Campuses.isLoading,
    students: state.Students.students,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveCampus: (id) => dispatch(RemoveACampus(id)),
    FetchACampus: (id) => {
      dispatch(FetchACampus(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewCampus);
