import {

    START_FETCHING_STUDENTS,
    UPDATE_STUDENTS_TO_STATE,
    CALL_API_TO_ADD_STUDENT,
    CALL_API_TO_REMOVE_STUDENT,
    ON_ADD_SUCCESS,
    FETCH_A_STUDENT,
    FETCH_ALL_STUDENTS,
    ADD_A_STUDENT,
    REMOVE_A_STUDENT,
} from "../types/studentTypes";
import {CALL_API_TO_EDIT_CAMPUS, FETCH_A_CAMPUS, UPDATE_CAMPUSES_TO_STATE} from "../types/campusesTypes";
import Axios from "axios";
import {fetchAllCampuses, updateAllCampusesToState} from "./campusesActions";


export const fetchAllStudents = () => {
    return{
        type: START_FETCHING_STUDENTS,
    };
};


export const fetchStudent = (id) => {
    return {
        type: FETCH_A_STUDENT,
        payload: id,
    };
};

export const addStudent = (student) => {
    return {
        type: ADD_A_STUDENT,
        payload: student
    };
};

export const addStudentSuccess = () => {
    return {
        type: ON_ADD_SUCCESS,
    };
};


export const removeStudent = (id) => {
    return {
        type: REMOVE_A_STUDENT,
        payload: id
    };
};

export const updateAllStudentsToState = (students) => {
    return {
        type: UPDATE_STUDENTS_TO_STATE,
        payload: students,
    };
};

export const updateStudentstoDb = () => {
    return {
        type: CALL_API_TO_EDIT_CAMPUS,
    };
};


// Thunks
