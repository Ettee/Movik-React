import {combineReducers} from "redux";
import movieReducer from "./movieReducer";
import theaterReducer from "./theaterReducer";
const rootReducer =combineReducers({
    //there will be many reducer in here
    movieReducer,
    theaterReducer
});
export default rootReducer;
