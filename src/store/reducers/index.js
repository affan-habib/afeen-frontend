// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import snackbar from './snackbar';
import cartReducer from './cart';
import productReducer from './product';
import apiSlice from './apiSlice';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  menu,
  snackbar,
  api: apiSlice,
  cart : cartReducer,
  product: productReducer
});

export default reducers;
