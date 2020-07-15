import {combineReducers} from "redux";
import movieReducer from "./movieReducer";
import newsReducer from "./newsReducer"
const rootReducer =combineReducers({
    //there will be many reducer in here
    movieReducer,newsReducer
    
});
export default rootReducer;
