import {
  START_FETCHING_CAMPUSES,
  UPDATE_CAMPUSES_TO_STATE,
  FETCH_A_CAMPUS,
  UPDATE_CAMPUS_TO_STATE,
  ADD_A_CAMPUS,
  CALL_API_TO_ADD_CAMPUS,
  REMOVE_A_CAMPUS,
  CALL_API_TO_REMOVE_CAMPUS,
} from "../types/campusesTypes";
import Axios from "axios";

export const fetchAllCampuses = () => {
  return {
    type: START_FETCHING_CAMPUSES,
  };
};

export const updateAllCampusesToState = (campuses) => {
  return {
    type: UPDATE_CAMPUSES_TO_STATE,
    payload: campuses,
  };
};

//API Call for the above types
export const fetchCampuses = () => {
  return (dispatch) => {
    dispatch(fetchAllCampuses());

    Axios.get("https://moj-api.herokuapp.com/debits").then((res) => {
      dispatch(updateAllCampusesToState(res.data));
    });
  };
};

export const fetchCampus = (id) => {
  return {
    type: FETCH_A_CAMPUS,
    payload: id,
  };
};

export const updateCampusToState = () => {
  return {
    type: UPDATE_CAMPUS_TO_STATE,
  };
};

export const addCampus = (campus) => {
  return {
    type: ADD_A_CAMPUS,
  };
};

export const addCampustoDb = () => {};
