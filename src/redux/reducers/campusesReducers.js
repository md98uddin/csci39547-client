import {
  START_FETCHING_CAMPUSES,
  UPDATE_CAMPUSES_TO_STATE,
  ADD_A_CAMPUS,
  CALL_API_TO_ADD_CAMPUS,
  ON_ADD_SUCCESS,
} from "../types/campusesTypes";

const initialState = {
  campuses: null,
  currentCampus: null,
  isLoading: false,
  addSuccessMsg: null,
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
    case ADD_A_CAMPUS:
      return { ...state, isLoading: true };
    case CALL_API_TO_ADD_CAMPUS:
      return {
        ...state,
        addSuccessMsg: "succesfully added campus!",
        isLoading: false,
      };
    case ON_ADD_SUCCESS:
      return {
        ...state,
        addSuccessMsg: null,
      };
    default:
      return state;
  }
};

export default campusesReducers;
