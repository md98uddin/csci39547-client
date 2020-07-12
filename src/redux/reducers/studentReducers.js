import axios from "axios";

import {
    START_FETCHING_STUDENTS,
    FETCH_A_STUDENT,
    FETCH_ALL_STUDENTS,
    ADD_A_STUDENT,
    REMOVE_A_STUDENT,
    TEST_FUNCTION
} from "../types/studentTypes";



import {fetchAllStudents} from "../dispatches";
import {fetchStudent, removeStudent, testing} from "../actions/studentsActions";



const initialState = {
    students: null,
    currentStudent: null,
    isLoading: false,
    testing1: ""
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





function AllStudentsReducer(state = initialState, action){
    switch (action.type) {
        case FETCH_ALL_STUDENTS:
            return action.payload
        case ADD_A_STUDENT:
            return [...state, action.payload];
        case REMOVE_A_STUDENT:
            return state.filter(student => student.id != action.payload);
        case TEST_FUNCTION:
            return {
                ...state,
                testing1: action.payload
            }
        default:
            return state;

    }
}

export default AllStudentsReducer;