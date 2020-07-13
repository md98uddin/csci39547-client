import React, { Component } from "react";
import "../css/StudentListing.css";
import { Link } from "react-router-dom";
import EmptyDataMessage from "./commons/EmptyDataMessage";

const Students = ({ students, isLoading, successMsg }) => {
    return (
        <div className="container" style={{ textAlign: "center" }}>
            <h1 style={{ color: "rebeccapurple" }}>All Students</h1>

            <Link to="/student/add" style={{ textDecoration: "none" }}>
                <button className="btn-success" id="add-btn">
                    ADD A STUDENT
                </button>
            </Link>
            {successMsg && <h1 id="success-msg">{this.props.successMsg}</h1>}
            <div className="grid container" id="students-listings">
                {students.length > 0 ? (
                    students.map((student, index) => (
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
                                    //   to={`/student/edit/${student.campus_name.replace("", "&")}/${
                                    //     student.id
                                    //   }`}
                                >
                                    <button
                                        className="btn-info"
                                        id="edit-btn"
                                        //   onClick={() => this.props.FetchACampus(student.id)}
                                    >
                                        EDIT STUDENT
                                    </button>
                                </Link>
                                <button
                                    className="btn-danger"
                                    id="delete-btn"
                                    // onClick={() => this.removeCampus(student.id)}
                                >
                                    DELETE STUDENT
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <EmptyDataMessage message="There are no students registered in this database." />
                )}
            </div>
        </div>
    );
};

export default Students;