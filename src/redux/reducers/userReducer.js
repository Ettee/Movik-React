import * as ActionType from "./../constants/ActionType";
let initialState ={
    thongTinDatVe:[],
    danhSachNguoiDungPhanTrang:{},
    danhSachTatCaNguoiDung:[],
    isAdmin:false,
    isDarkModeOn:false,
    isUserBooked:false
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
        case ActionType.DANG_NHAP_ADMIN:
            state.isAdmin=action.data;
            return {...state}
        case ActionType.DANG_XUAT_ADMIN:
            state.isAdmin=action.data;
            return {...state} 
        case ActionType.CHANGE_THEME:
            state.isDarkModeOn=action.data;
            return {...state}
        case ActionType.IS_USER_BOOKED_READY:
            state.isUserBooked=action.data;
            return {...state}
        case ActionType.CHANGE_IS_USER_BOOKED_READY:
            state.isUserBooked=action.data;
            return {...state}
        default:
            return{...state}
    }
}
export default userReducer;
