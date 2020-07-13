import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/EditCampus.css";
import { EditACampus } from "../redux/actions/campusesActions";
import Loader from "./commons/Loader";

class EditCampus extends Component {
    state = {
        campusName: null,
        campusAddress: null,
        image_url: null,
        description: null,
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

    onEditSubmit = async (id, obj) => {
        const campus = {
            name: obj.campusName,
            address: obj.campusAddress,
            image_url: obj.image_url,
            description: obj.description,
        };
        console.log("campus", campus);
        await this.props.EditACampus(id, campus);
        setTimeout(() => window.location.assign("/campuses"), 500);
    };
    render() {
        console.log("props on edit", this.props.currentCampus);
        console.log("state", this.state);

        return this.props.currentCampus ? (
            <div className="container" id="edit-main">
                {this.props.successMsg && (
                    <h1 style={{ color: "rebeccapurple" }}>{this.props.successMsg}</h1>
                )}
                <h1 style={{ color: "rebeccapurple" }}>Editing Campus</h1>
                <label className="label">Campus Name</label>
                <br />
                <input
                    className="input field"
                    type="text"
                    id="campusName"
                    onChange={this.handleChange}
                    placeholder={this.props.currentCampus.campus_name}
                />
                <br />
                <label className="label">Campus Address</label>
                <br />
                <input
                    className="input field"
                    type="text"
                    id="campusAddress"
                    onChange={this.handleChange}
                    placeholder={this.props.currentCampus.campus_address}
                />
                <br />
                <label className="label">Image URL</label>
                <br />
                <input
                    className="input field"
                    type="text"
                    id="image_url"
                    onChange={this.handleChange}
                    placeholder={this.props.currentCampus.image_url}
                />
                <br />
                <label className="label">Description</label>
                <br />
                <input
                    className="input field"
                    type="text"
                    id="description"
                    onChange={this.handleChange}
                    placeholder={this.props.currentCampus.description}
                />
                <br />
                <button
                    className="btn btn-primary"
                    onClick={() =>
                        this.onEditSubmit(this.props.currentCampus.id, this.state)
                    }
                    id="edit-btn"
                >
                    SAVE EDIT
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
        currentCampus: state.Campuses.currentCampus,
        isLoading: state.Campuses.isLoading,
        successMsg: state.Campuses.addSuccessMsg,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        EditACampus: (id, obj) => {
            dispatch(EditACampus(id, obj));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCampus);