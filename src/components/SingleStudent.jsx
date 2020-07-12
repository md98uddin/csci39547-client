import React from "react";

const SingleStudent = (props) => {

    return(

        <div>
            <h1>{props.student.name}</h1>
            <p>{props.student.image} </p>
            <p>{props.student.email} </p>
            <p>{props.student.gpa} </p>
        </div>

    )


}

export default SingleStudent;