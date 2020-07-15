import * as ActionType from "./../constants/ActionType";
let initialState ={
    articles:{}
};
const newsReducer =(state = initialState,action) =>{
    switch(action.type){
        case ActionType.GET_NEWS:
            state.articles=action.data
            return {...state}
        default: 
            return {...state};
    }
};
export default newsReducer;