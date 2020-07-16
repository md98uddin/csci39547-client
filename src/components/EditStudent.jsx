import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/EditCampus.css";
import Loader from "./commons/Loader";
import { EditAStudentThunk } from "../redux/reducers/studentReducers";

class EditStudent extends Component {
    state = {
        first_name: null,
        last_name: null,
        email: null,
        gpa: null,
        CampusId: null,
        image_url: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
    };

    changeFirstName = (e) => {
        var text = e.target.value;
        this.setState({
            first_name: text,
        });
    };

    changeLastName = (e) => {
        var text = e.target.value;
        this.setState({
            last_name: text,
        });
    };

    changeEmail = (e) => {
        var text = e.target.value;
        this.setState({
            email: text,
        });
    };

    changeGPA = (e) => {
        var text = e.target.value;
        this.setState({
            gpa: text,
        });
    };

    changeCampusID = (e) => {
        var text = e.target.value;
        this.setState({
            CampusId: text,
        });
    };

    onEditSubmit = async (id, first_name, last_name, email, gpa, CampusId, image_url) => {
        if(first_name == null || last_name == null || email == null
            || gpa == null || CampusId == null){
            alert("incomplete");
        }
        else if(!email.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%" +
            "&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-" +
            "9](?:[a-z0-9-]*[a-z0-9])?")) {
            alert("wrong email format");

        }
        else {
            const student = {
                first_name: first_name,
                last_name: last_name,
                email: email,
                gpa: gpa,
                CampusId: CampusId,
                image_url: image_url,

            };

            await this.props.EditAStudent(id, student);
            setTimeout(() => window.location.assign("/students"), 500);
        }
    };
    render() {


        return this.props.student ? (
            <div className="container" id="edit-main">
                {this.props.successMsg && (
                    <h1 style={{ color: "rebeccapurple" }}>{this.props.successMsg}</h1>
                )}
                <h1 style={{ color: "rebeccapurple" }}>Editing Student</h1>
                <label className="label">First Name</label>
                <br />
                <input
                    className="input field"
                    type="text"
                    id="studentName"
                    onChange={this.changeFirstName}
                    placeholder={this.props.student.first_name}
                />
                <br />
                <label className="label">Last Name</label>
                <br />
                <input
                    className="input field"
                    type="text"
                    id=""
                    onChange={this.changeLastName}
                    placeholder={this.props.student.last_name}
                />
                <br />
                <label className="label">Email</label>
                <br />
                <input
                    className="input field"
                    type="text"
                    id="image_url"
                    onChange={this.changeEmail}
                    placeholder={this.props.student.email}
                />
                <br />
                <label className="label">GPA</label>
                <br />
                <input
                    className="input field"
                    type="text"
                    id="description"
                    onChange={this.changeGPA}
                    placeholder={this.props.student.gpa}
                />
                <br />
                <label className="label">Campus ID</label>
                <br />
                <input
                    className="input field"
                    type="text"
                    id="description"
                    onChange={this.changeCampusID}
                    placeholder={this.props.student.CampusId}
                />
                <br />
                <button
                    className="btn btn-primary"
                    onClick={() =>
                        this.onEditSubmit(this.props.student.id, this.state.first_name, this.state.last_name,
                        this.state.email, this.state.gpa, this.state.CampusId, this.state.image_url)
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



function mapState(state){
    return {
        student: state.Students.student,
        isLoading: state.Students.isLoading,
        successMsg: state.Students.addSuccessMsg,
    }

}

function mapDispatch(dispatch){
    return {
        EditAStudent: (id, obj) => {
            dispatch(EditAStudentThunk(id, obj));
        },
    };

}

export default connect(mapState, mapDispatch)(EditStudent);