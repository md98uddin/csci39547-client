 import React, { Component } from "react";
 import {Link} from "react-router-dom";

 const Students = (props) => {

     if (!props.allStudents.length) {
         return <div className="all-campuses">There are no students</div>;
     }

    return (

            <div>
                {props.allStudents.map((student) => (
                    <div key={student.id}>
                        <Link to={`/students/${student.id}`}>
                            <h1>{student.first_name + " " + student.last_name}</h1>
                            <h1>{student.email}</h1>
                            <h1>{student.gpa}</h1>
                        </Link>
                    </div>
                ))}

            </div>


    );
 };

 export default Students;

