import { combineReducers } from "redux";
import cartDux from "./cart";
import productsDux from "./products";

/**
 * Autodux is for reducing Redux Boilerplate,
 * each dux will be an object with actions and reducer
 */
const rootReducer = combineReducers({
  cart: cartDux.reducer,
  products: productsDux.reducer
});

export default rootReducer;
