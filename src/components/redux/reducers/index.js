import { combineReducers } from "redux";
import user_reducer from "./users";
import product_reducer from "./products";

export default combineReducers({ user_reducer , product_reducer});