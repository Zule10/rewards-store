import { combineReducers } from "redux";
import user_reducer from "./users";
import product_reducer from "./products";
import points_reducer from "./points";
import history_reducer from "./history";

export default combineReducers({ user_reducer , product_reducer, points_reducer, history_reducer});