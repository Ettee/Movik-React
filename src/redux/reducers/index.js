import {combineReducers} from "redux";
import movieReducer from "./movieReducer";
import userReducer from "./userReducer";

const rootReducer =combineReducers({
    //there will be many reducer in here
    movieReducer,
    userReducer 
});
export default rootReducer;
