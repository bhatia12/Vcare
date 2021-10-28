import { combineReducers } from "redux";
import authReducer from "./authReducer";
import apiResReducer from "./apiResReducer";
export default combineReducers({
    auth: authReducer,
    apiRes: apiResReducer
});
