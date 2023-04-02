// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import snackbar from './snackbar';
import apiSlice from './apiSlice';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  menu,
  snackbar,
  api: apiSlice
});

export default reducers;
