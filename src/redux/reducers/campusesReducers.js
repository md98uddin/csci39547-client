import {
  START_FETCHING_CAMPUSES,
  UPDATE_CAMPUSES_TO_STATE,
} from "../types/campusesTypes";
import Axios from "axios";

const initialState = {
  campuses: null,
  currentCampus: null,
  isLoading: false,
};

const campusesReducers = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING_CAMPUSES:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_CAMPUSES_TO_STATE:
      return {
        ...state,
        campuses: action.payload,
        currentCampus: null,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default campusesReducers;
