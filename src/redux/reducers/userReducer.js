import * as ActionType from "./../constants/ActionType";
let initialState ={
   thongTinDatVe:[]
};
const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case ActionType.USER_PROFILE:
            state.thongTinDatVe=action.data;
            return {...state}
        default:
            return{...state}
    }
}
export default userReducer;
