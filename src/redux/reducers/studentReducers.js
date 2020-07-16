import axios from "axios";

//action types needed
import {
    START_FETCHING_STUDENTS,
    FETCH_A_STUDENT,
    FETCH_ALL_STUDENTS,
    ADD_A_STUDENT,
    REMOVE_A_STUDENT,
    ON_ADD_SUCCESS,
    TEST_FUNCTION,
    UPDATE_STUDENTS_TO_STATE,
    UPDATE_STUDENT_TO_STATE,
    CALL_API_TO_ADD_STUDENT,
    CALL_API_TO_REMOVE_STUDENT,
    CALL_API_TO_EDIT_STUDENT, EDIT_A_STUDENT, UPDATE_STUDENTS_CAMPUS, UPDATE_STUDENTS_CAMPUS_TO_STATE,
} from "../types/studentTypes";

import { fetchAllStudents, updateAllCampusesToState } from "../dispatches";
import {
    addStudent,
    addStudentSuccess,
    addStudenttoDb,
    editStudent,
    fetchStudent,
    removeStudent,
    removeStudentFromDb,
    updateAllStudentsToState,
    updateStudentsCampusToState,
    updateStudentsToState,
    updateStudenttoDb,
    updateStudentToState,
} from "../actions/studentsActions";

import Axios from "axios";
import {
    addCampus,
    addCampusSuccess,
    addCampustoDb, EditCampus,
    fetchCampus, onEditSuccess,
    onFetchSuccess, updateCampustoDb,
    updateCampusToState
} from "../actions/campusesActions";
import {ON_EDIT_SUCCESS} from "../types/studentTypes";

//initial state for student data
const initialState = {
  //all of the students
    students: null,
    isLoading: false,
    addSuccessMsg: null,
    //a specific student
    student: null,
    //campus of a particular student
    studentsCampus: null,
};

// THUNK CREATORS;

//gets a student from database using a specific id
export const fetchStudentThunk = (id) => {
    return (dispatch) => {
        dispatch(fetchStudent());
        Axios.get(`http://localhost:5000/students/${id}`).then((res) => {
            dispatch(updateStudentToState(res.data));
        });
        dispatch(addStudentSuccess());
    };
};

//gets all students from the database
export const fetchAllStudentsThunk = () => {
    return function (dispatch) {
        dispatch(fetchAllStudents());
        Axios.get("http://localhost:5000/students").then((res) => {
            dispatch(updateAllStudentsToState(res.data));
        });
    };
};

//gets all students for a specific campus
export const fetchAllStudentsCampusThunk = (id) => {
    return function (dispatch) {
        dispatch(fetchAllStudents());
        Axios.get(`http://localhost:5000/students/find/${id}`).then((res) => {
            dispatch(updateStudentsCampusToState(res.data));
        });
        dispatch(addStudentSuccess());
    };
};

//adds a student to the database
export const addStudentThunk = (obj) => {
    return (dispatch) => {
        dispatch(addStudent());
        Axios.post("http://localhost:5000/students/add", obj).then((res) => {
            dispatch(addStudenttoDb());
        });
        setTimeout(() => dispatch(addStudentSuccess()), 2000);
    };
};

//removes a student from the databse
export const removeStudentThunk = (id) => {
    return function (dispatch) {
        dispatch(removeStudent());
        Axios.delete(`http://localhost:5000/students/remove/${id}`).then((res) => {
            dispatch(removeStudentFromDb());
        });
    };
};

//edits a student from the database
export const EditAStudentThunk = (id, obj) => {
    return (dispatch) => {
        dispatch(editStudent());
        Axios.put(`http://localhost:5000/students/edit/${id}`, obj).then(() => {
            dispatch(updateStudenttoDb());
        });
        setTimeout(() => dispatch(onEditSuccess()), 2000);
    };
};


//reducer that modifies the state for students
function AllStudentsReducer(state = initialState, action) {
    switch (action.type) {
        case START_FETCHING_STUDENTS:
            return {
                ...state,
                isLoading: true,
            };
        case UPDATE_STUDENTS_TO_STATE:
            return {
                ...state,
                students: action.payload,
                student: null,
                isLoading: false,
            };
        case UPDATE_STUDENT_TO_STATE:
            return{
                ...state,
                student: action.payload,
                isLoading: false,
            };
        case UPDATE_STUDENTS_CAMPUS_TO_STATE:
            return{
                ...state,
                studentsCampus: action.payload,
                isLoading: false,
            }
        case ON_ADD_SUCCESS:
            return {
                ...state,
                addSuccessMsg: null,
            };
        case FETCH_A_STUDENT:
            return {
                ...state,
                isLoading: true,
            }
        case ADD_A_STUDENT:
            return { ...state, isLoading: true };
        case CALL_API_TO_ADD_STUDENT:
            return{
                ...state,
                addSuccessMsg: "successfully added student!",
                isLoading: false,
            }
        case REMOVE_A_STUDENT:
            return {
                ...state,
                isLoading: true,
                addSuccessMsg: null,
            };
        case CALL_API_TO_REMOVE_STUDENT:
            return {
                ...state,
                isLoading: false,
                addSuccessMsg: "Campus was removed!",
            };
        case EDIT_A_STUDENT:
            return{
                ...state,
                isLoading: true,
            }
        case CALL_API_TO_EDIT_STUDENT:
            return {
                ...state,
                isLoading: false,
                addSuccessMsg: "Campus was edited!",
            };
        case ON_EDIT_SUCCESS:
            return {
                ...state,
                addSuccessMsg: null,
            };
        default:
            return state;
    }
}

export default AllStudentsReducer;
