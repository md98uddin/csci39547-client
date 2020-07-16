import React, { Component } from "react";
import { connect } from "react-redux";
import { addACampus } from "../redux/actions/campusesActions";
import "../css/AddCampus.css";
import Loader from "./commons/Loader";

//component to add a campus
class AddCampus extends Component {
  state = { campusName: null };

  handleChange = (e) => {
    var text = e.target.value;
    this.setState({
      campusName: text,
    });
  };

  onSubmitCampus = async (campusName) => {
    this.setState({
      campusName: null,
    });

    var campusObj = {
      address: `123 ${campusName} Drive`,
      name: campusName,
      image_url: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
      description: `Located at the heart of the city, ${campusName} is a public university focused on public education.`,
    };

    await this.props.AddCampus(campusObj);
  };

  render() {
    return !this.props.isLoading ? (
      <div className="container" id="add-form">
        {this.props.successMsg && (
          <h1 id="success-msg">{this.props.successMsg}</h1>
        )}
        <h1 style={{ color: "rebeccapurple" }}>Add A Campus</h1>
        <label id="add-label">Campus Name</label>
        <br />
        <input type="text" id="campusName" onChange={this.handleChange} />
        <br />
        <button
          className="btn"
          id="add-btn"
          onClick={() => this.onSubmitCampus(this.state.campusName)}
        >
          Add Campus
        </button>
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
    successMsg: state.Campuses.addSuccessMsg,
    isLoading: state.Campuses.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    AddCampus: (obj) => {
      dispatch(addACampus(obj));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCampus);
