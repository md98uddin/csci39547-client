import {
  START_FETCHING_CAMPUSES,
  UPDATE_CAMPUSES_TO_STATE,
  FETCH_A_CAMPUS,
  UPDATE_CAMPUS_TO_STATE,
  ADD_A_CAMPUS,
  CALL_API_TO_ADD_CAMPUS,
  ON_ADD_SUCCESS,
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

    Axios.get("http://localhost:5000/campuses").then((res) => {
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

export const addCampus = () => {
  return {
    type: ADD_A_CAMPUS,
  };
};

export const addCampustoDb = () => {
  return {
    type: CALL_API_TO_ADD_CAMPUS,
  };
};

export const addCampusSuccess = () => {
  return {
    type: ON_ADD_SUCCESS,
  };
};

//api to add a campus
export const addACampus = (obj) => {
  return (dispatch) => {
    dispatch(addCampus());
    Axios.post("http://localhost:5000/campuses/add", obj).then((res) => {
      dispatch(addCampustoDb());
    });
    setTimeout(() => dispatch(addCampusSuccess()), 3000);
  };

};

