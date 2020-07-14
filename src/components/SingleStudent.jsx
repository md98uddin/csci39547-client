import React from "react";
import Loader from "./commons/Loader";
import {Link} from "react-router-dom";

const SingleStudent = (props) => {

    return props.student ? (

        <div className="container" style={{ textAlign: "center" }}>
            <h1 style={{ color: "rebeccapurple", textAlign: "center" }}>Single Student</h1>,

        <div className="card"  style={{ margin: "auto" }}>
            <img
                // src="https://homepages.cae.wisc.edu/~ece533/images/fruits.png"
                src={props.student.image_url}
                className="card-img-top"
                alt="..."
                width={150}
                height={125}
            />
            <div className="card-body">
                <h5 className="card-title">

                        {props.student.first_name + " " + props.student.last_name}

                </h5>
                <p>email: {props.student.email}</p>
                <Link to={`/studentcampus/${props.student.CampusId}`} >
                 <p>CampusId: {props.student.CampusId}</p>
                </Link>
                <p className="card-text">gpa: {props.student.gpa}</p>

                    <button
                        className="btn-info"
                        id="edit-btn"
                        //   onClick={() => this.props.FetchACampus(student.id)}
                    >
                        EDIT STUDENT
                    </button>

                <button
                    className="btn-danger"
                    id="delete-btn"
                    // onClick={() => this.removeCampus(student.id)}
                >
                    DELETE STUDENT
                </button>
            </div>
         </div>
        </div>

    ) : (
        <div id="loader" >
            <Loader/>
        </div>
    )



}

export default SingleStudent;