// third-party
import { combineReducers } from "redux";
import apiSlice from "./apiSlice";

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  api: apiSlice,
});

export default reducers;
