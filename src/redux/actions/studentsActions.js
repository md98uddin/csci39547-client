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
    UPDATE_STUDENT_TO_STATE,
    EDIT_A_STUDENT,
    CALL_API_TO_EDIT_STUDENT,
    UPDATE_STUDENTS_CAMPUS,
    UPDATE_STUDENTS_CAMPUS_TO_STATE,
} from "../types/studentTypes";
import {
    CALL_API_TO_EDIT_CAMPUS, EDIT_A_CAMPUS,
    FETCH_A_CAMPUS,
    UPDATE_CAMPUS_TO_STATE,
    UPDATE_CAMPUSES_TO_STATE
} from "../types/campusesTypes";
import Axios from "axios";
import {fetchAllCampuses, updateAllCampusesToState} from "./campusesActions";


export const fetchAllStudents = () => {
    return{
        type: START_FETCHING_STUDENTS,
    };
};


export const fetchStudent = () => {
    return {
        type: FETCH_A_STUDENT,

    };
};

export const addStudent = () => {
    return {
        type: ADD_A_STUDENT,
    };
};

export const addStudentSuccess = () => {
    return {
        type: ON_ADD_SUCCESS,
    };
};



export const removeStudent = () => {
    return {
        type: REMOVE_A_STUDENT,
    };
};

export const updateStudentToState = (student) => {
    return {
        type: UPDATE_STUDENT_TO_STATE,
        payload: student,
    };
};

export const updateAllStudentsToState = (students) => {
    return {
        type: UPDATE_STUDENTS_TO_STATE,
        payload: students,
    };
};

export const updateStudentsCampusToState = (students) => {
    return {
        type: UPDATE_STUDENTS_CAMPUS_TO_STATE,
        payload: students,
    };
};

export const addStudenttoDb = () => {
    return {
        type: CALL_API_TO_ADD_STUDENT,
    }
}

export const editStudent = () => {
    return {
        type: EDIT_A_STUDENT,
    };
};

export const updateStudenttoDb = () => {
    return {
        type: CALL_API_TO_EDIT_STUDENT,
    };
};

export const removeStudentFromDb = () => {
    return {
        type: CALL_API_TO_REMOVE_STUDENT,

    };
};


// Thunks
