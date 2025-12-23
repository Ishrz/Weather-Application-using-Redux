import { combineReducers } from "redux";
import { weatherReducer } from "./weatherReducer";

const combineReducer=combineReducers({ weatherDetails:weatherReducer,
});

export default combineReducer;
