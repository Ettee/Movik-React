import * as ActionType from "./../constants/ActionType";

let initialState ={
    listMovie:[],
    detailMovie:{},//cách khai báo "tên :{}" là cách khai báo 1 object
    infoShow:{},
    danhSachLichChieuTheoMaHeThongRap:[],
    listOfTheaterSystem:[],
    chiTietPhongChieu:{}
};
const movieReducer =(state = initialState,action) =>{
    switch(action.type){
        case ActionType.GET_LIST_MOVIE:
            state.listMovie=action.data;
            return {...state}
        case ActionType.GET_DETAIL_MOVIE_BY_ID:
            state.detailMovie=action.data;
            return {...state}
        case ActionType.GET_INFO_SHOW_BY_MOVIE_ID:
            state.infoShow=action.data;
            return {...state}
        case ActionType.LAY_LICH_CHIEU_HE_THONG_RAP:
            state.danhSachLichChieuTheoMaHeThongRap=action.data;
            return{...state}
        case ActionType.LAY_THONG_TIN_HE_THONG_RAP:
            state.listOfTheaterSystem=action.data
            return {...state}
        case ActionType.LAY_CHI_TIET_PHONG_VE_BANG_MA_LICH_CHIEU:
            state.chiTietPhongChieu=action.data
            return {...state}
        default: 
            return {...state};
    }
};
export default movieReducer;