import axios from "axios";

import {
    START_FETCHING_STUDENTS,
    FETCH_A_STUDENT,
    FETCH_ALL_STUDENTS,
    ADD_A_STUDENT,
    REMOVE_A_STUDENT
} from "../types/studentTypes";



import {fetchAllStudents} from "../dispatches";
import {fetchStudent, removeStudent} from "../actions/studentsActions";

const initialState = {
    students: null,
    currentStudent: null,
    isLoading: false
}


// THUNK CREATORS;

export const fetchStudentThunk = () => (dispatch) => {
    return axios
        .get("/api/students")
        .then((res) => res.data)
        .then((students) => dispatch(fetchStudent(students)))
        .catch((err) => console.log(err));
};


export const fetchAllStudentsThunk = () => (dispatch) => {
    return axios
        .get("/api/students")
        .then((res) => res.data)
        .then((students) => dispatch(fetchAllStudents(students)))
        .catch((err) => console.log(err));
};

export function removeStudentThunk(id) {
    return function (dispatch) {
        axios
            .delete(`/api/students/${id}`)
            .then(res => res.data)
            .then(() => dispatch(removeStudent(id)))
            .catch(err => console.log(err))
    }
}



function AllStudentsReducer(state = [], action){
    switch (action.type) {
        case FETCH_ALL_STUDENTS:
            return action.payload
        case ADD_A_STUDENT:
            return [...state, action.payload];
        case REMOVE_A_STUDENT:
            return state.filter(student => student.id != action.payload);

    }
}

export default AllStudentsReducer;