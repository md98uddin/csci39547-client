import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
 //import rootReducer from "./reducers/campusesReducers";
 import * as reducers from "./reducers";

 const rootReducer = combineReducers(reducers);

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;