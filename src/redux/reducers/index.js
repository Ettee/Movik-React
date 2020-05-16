import {combineReducers} from "redux";
import movieReducer from "./movieReducer";
const rootReducer =combineReducers({
    //there will be many reducer in here
    movieReducer
});
export default rootReducer;
