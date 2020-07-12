import React, { Component } from "react";
import Link from "react-router-dom/modules/Link";

const Students = (props) => {
    return (
      <div>
            {props.allStudents.map((student) => (
                <div key={student.id}>
                    <Link to={`/students/${student.id}`}>
                        <h1>{student.name}</h1>
                    </Link>
                </div>
            ))}

      </div>


    );
};

export default Students;

