import React from "react";
import "../../css/ViewCampus.css";
import Loader from "./Loader";
import EmptyDataMessage from "./EmptyDataMessage";
import { getStudentsByCampus } from "../../services";

const FilterStudents = (students, id) => {
  return students ? (
    <div className="container grid" id="filter-container">
      {students.students.length > 0 ? (
        getStudentsByCampus(students.students, 2).map((student) => (
          <div className="card" key={student.id} id="student-div">
            <img
              className="card-img-top"
              src={student.image_url}
              alt="Card image cap"
              id="student-img"
              width={50}
              heigh={50}
            />
            <div className="card-body">
              <h5 className="card-title">
                {student.first_name} {student.last_name}
              </h5>
            </div>
          </div>
        ))
      ) : (
        <EmptyDataMessage message="No students go to this college" />
      )}
    </div>
  ) : (
    <div id="loader">
      <Loader />
    </div>
  );
};

export default FilterStudents;
