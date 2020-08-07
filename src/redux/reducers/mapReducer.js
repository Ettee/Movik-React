import * as ActionType from "./../constants/ActionType";
let initialState ={
    geocodeData:[]
};
const mapReducer =(state = initialState,action) =>{
    switch(action.type){
        case ActionType.GEOCODE:
            state.geocodeData.push(action.data)
            return {...state}
        case ActionType.RESET_GEOCODE:
            if(state.geocodeData.length>0){
                console.log("xóa")
                state.geocodeData=action.data
            }
        default: 
            return {...state};
    }
};
export default mapReducer;