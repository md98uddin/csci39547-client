import axios from "axios";

import {
  START_FETCHING_STUDENTS,
  FETCH_A_STUDENT,
  FETCH_ALL_STUDENTS,
  ADD_A_STUDENT,
  REMOVE_A_STUDENT,
  ON_ADD_SUCCESS,
  TEST_FUNCTION,
  UPDATE_STUDENTS_TO_STATE,
} from "../types/studentTypes";

import { fetchAllStudents, updateAllCampusesToState } from "../dispatches";
import {
  fetchStudent,
  removeStudent,
  updateAllStudentsToState,
} from "../actions/studentsActions";
import Axios from "axios";

const initialState = {
  students: null,
  currentStudent: null,
  isLoading: false,
  addSuccessMsg: null,
};

// THUNK CREATORS;

export const fetchStudentThunk = (id) => {
  return function (dispatch) {
    dispatch(fetchStudent(id));
    Axios.get("http://localhost:5000/students" + id).then((res) => {
      dispatch(updateAllStudentsToState(res.data));
    });
  };
};

export const fetchAllStudentsThunk = () => {
  return function (dispatch) {
    dispatch(fetchAllStudents());
    Axios.get("http://localhost:5000/students").then((res) => {
      dispatch(updateAllStudentsToState(res.data));
    });
  };
};

export const removeStudentThunk = (id) => {
  return function (dispatch) {
    dispatch(removeStudent(id));
    Axios.delete("http://localhost:5000/students/" + id).then((res) => {
      dispatch(updateAllStudentsToState(res.data));
    });
  };
};

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
        currentStudent: null,
        isLoading: false,
      };
    case ON_ADD_SUCCESS:
      return {
        ...state,
        addSuccessMsg: null,
      };
    case ADD_A_STUDENT:
      return { ...state, isLoading: true };
    case REMOVE_A_STUDENT:
      return state.filter((student) => student.id != action.payload);
    default:
      return state;
  }
}

export default AllStudentsReducer;
