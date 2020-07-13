//these types will fetch all campuses at load
export const START_FETCHING_CAMPUSES = "START_FETCHING_CAMPUSES";
export const UPDATE_CAMPUSES_TO_STATE = "ADD_CAMPUSES_TO_STATE";

//these types will fetch a single campus based on
//whichever clicked by user
export const FETCH_A_CAMPUS = "FETCH_A_CAMPUS";
export const UPDATE_CAMPUS_TO_STATE = "UPDATE_CAMPUS_TO_STATE";
export const ON_FETCH_SUCCESS = "ON_FETCH_SUCCESS";

//these types will add a new campus to database
export const ADD_A_CAMPUS = "ADD_A_CAMPUS";
export const CALL_API_TO_ADD_CAMPUS = "CALL_API_TO_ADD_CAMPUS";
export const ON_ADD_SUCCESS = "ON_ADD_SUCCESS";

//these types will edit a campus
export const EDIT_A_CAMPUS = "EDIT_A_CAMPUS";
export const CALL_API_TO_EDIT_CAMPUS = "CALL_API_TO_EDIT_CAMPUS";
export const ON_EDIT_SUCCESS = "ON_EDIT_SUCCESS";

//these types will remove a campus
export const REMOVE_A_CAMPUS = "REMOVE_A_CAMPUS";
export const CALL_API_TO_REMOVE_CAMPUS = "CALL_API_TO_REMOVE_CAMPUS";
export const ON_REMOVE_SUCCESS = "ON_REMOVE_SUCCESS";