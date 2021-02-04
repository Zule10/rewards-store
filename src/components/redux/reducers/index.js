import { combineReducers } from "redux";
import user_reducer from "./users";
import product_reducer from "./products";
import points_reducer from "./points";

export default combineReducers({ user_reducer , product_reducer, points_reducer});