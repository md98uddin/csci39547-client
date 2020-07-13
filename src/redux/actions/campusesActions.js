
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
  ON_REMOVE_SUCCESS,
  EDIT_A_CAMPUS,
  CALL_API_TO_EDIT_CAMPUS,
  ON_EDIT_SUCCESS,
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
    setTimeout(() => dispatch(addCampusSuccess()), 2000);
  };
};

export const EditCampus = () => {
  return {
    type: EDIT_A_CAMPUS,
  };
};

export const updateCampustoDb = () => {
  return {
    type: CALL_API_TO_EDIT_CAMPUS,
  };
};

export const onEditSuccess = () => {
  return {
    type: ON_EDIT_SUCCESS,
  };
};

//call API to edit
export const EditACampus = (id, obj) => {
  return (dispatch) => {
    dispatch(EditCampus());
    Axios.put(`http://localhost:5000/campuses/edit/${id}`, obj).then(() => {
      dispatch(updateCampustoDb());
    });
    setTimeout(() => dispatch(onEditSuccess()), 2000);
  };
};

export const RemoveCampus = () => {
  return {
    type: REMOVE_A_CAMPUS,
  };
};

export const RemoveCampusFromDb = () => {
  return {
    type: CALL_API_TO_REMOVE_CAMPUS,
  };
};

export const onRemoveSuccess = () => {
  return {
    type: ON_REMOVE_SUCCESS,
  };
};

export const RemoveACampus = (id) => {
  return (dispatch) => {
    dispatch(RemoveCampus());
    Axios.delete(`http://localhost:5000/campuses/remove/${id}`).then(() => {
      dispatch(RemoveCampusFromDb());
    });
    setTimeout(() => dispatch(onRemoveSuccess()), 2000);
  };
};