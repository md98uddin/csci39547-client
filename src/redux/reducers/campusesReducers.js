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
      Axios.get("https://moj-api.herokuapp.com/debits").then((res) => {
        console.log("data", res.data);
        return {
          ...state,
          campuses: res.data,
          isLoading: false,
        };
      });
      break;
    default:
      return state;
  }
};

export default campusesReducers;
