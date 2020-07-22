import * as ActionType from "./../constants/ActionType";
let initialState ={
   thongTinDatVe:[],
   danhSachNguoiDungPhanTrang:{},
   danhSachTatCaNguoiDung:[]
};
const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case ActionType.USER_PROFILE:
            state.thongTinDatVe=action.data;
            return {...state}
        case ActionType.DANH_SACH_NGUOI_DUNG_PHAN_TRANG:
            state.danhSachNguoiDungPhanTrang=action.data;
            return {...state}
        case ActionType.DANH_SACH_TAT_CA_NGUOI_DUNG:
            state.danhSachTatCaNguoiDung=action.data;
            return {...state}
        default:
            return{...state}
    }
}
export default userReducer;
