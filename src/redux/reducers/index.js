import {combineReducers} from "redux";
import movieReducer from "./movieReducer";
import newsReducer from "./newsReducer";
import userReducer from "./userReducer";
import mapReducer from './mapReducer';
const rootReducer =combineReducers({
    //there will be many reducer in here
    movieReducer,
    newsReducer,
    userReducer,
    mapReducer
    
});
export default rootReducer;
