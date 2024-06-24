import { combineReducers } from "redux";
import AuthReducer from "../Reducers/AuthReducer";

const reducers = combineReducers({
    auth: AuthReducer
}); 

export default reducers;