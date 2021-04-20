import * as ActionType from "./../constants/ActionType";

//state của movieReducer
let initialState ={
    listMovie:[],
    detailMovie:null,//obj chứa data mà api trả về
    infoShow:{},
    danhSachLichChieuTheoMaHeThongRap:[],
    listOfTheaterSystem:[],
    chiTietPhongChieu:{},
    datVe:'',
    danhSachPhimPhanTrang:{},
    thongTinCumRapTheoHeThongRap:[],
    thongTinDatVe:{},
    datVeStatus:false,
    viewedMovie:{},
    danhSachGheTrongRap:{},
    isHomeReady:false,
    
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
        case ActionType.DAT_VE:
            state.datVe = action.data
            return { ...state }
        case ActionType.DANH_SACH_PHIM_PHAN_TRANG:
            state.danhSachPhimPhanTrang = action.data
            return { ...state }
        case ActionType.LAY_THONG_TIN_CUM_RAP_THEO_HE_THONG_RAP:
            state.thongTinCumRapTheoHeThongRap = action.data
            return { ...state }
        case ActionType.LUU_THONG_TIN_DAT_VE:
            state.thongTinDatVe = action.data
            return { ...state }   
        case ActionType.DAT_VE_STATUS:
            state.datVeStatus = action.data
            return { ...state }
        case ActionType.VIEWED_MOVIE:
            state.viewedMovie=action.data
            return { ...state }
        case ActionType.LAY_DANH_SACH_GHE:
            state.danhSachGheTrongRap=action.data
             return { ...state }
        case ActionType.IS_PAGE_READY:
            state.isHomeReady=action.data
            return {...state}
        case ActionType.CLEAR_DETAIL_MOVIE:
            state.detailMovie=action.data
            return {...state}

        default: 
            return {...state};
    }
};
export default movieReducer;