import * as ActionType from "./../constants/ActionType";
import Axios from 'axios';


export const actGetListMovieAPI =()=>{
    return dispatch=>{
        Axios({
            method:"GET",
            url:"http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP08"
            
        })
        .then(rs=>{
            dispatch(actGetListMovie(rs.data));
        })
        .catch(err=>{
            console.log(err);
        })
    }
}
export const actGetDetailMovieAPI =movieID =>{
    return dispatch=> {
        Axios({
            method:"GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieID}`
        })
        .then(rs=>{
            dispatch({
                type:ActionType.GET_DETAIL_MOVIE_BY_ID,
                data:rs.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
export const actGetInfoShowByMovieID =movieID=>{
    return dispatch=>{
        Axios({
            method:"GET",
            url:`http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieID}`
        })
        .then(rs=>{
            dispatch({
                type:ActionType.GET_INFO_SHOW_BY_MOVIE_ID,
                data:rs.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
export const actLayThongTinHeThongRap=()=>{
    return dispatch=>{
        Axios({
            method:'GET',
            url:'http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap'
        })
        .then(rs=>{
            dispatch({
                type:ActionType.LAY_THONG_TIN_HE_THONG_RAP,
                data:rs.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
export const actLayLichChieuHeThongRap=(maHeThongRap)=>{
    return dispatch=>{
        Axios({
            method:"GET",
            url:`http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP08`
        })
        .then(rs=>{
            dispatch({
                type:ActionType.LAY_LICH_CHIEU_HE_THONG_RAP,
                data:rs.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }

}
export const actLayChiTietPhongVeBangMaLichChieu=(maLichChieu)=>{
    return dispatch=>{
        Axios({
            method:"GET",
            url:`http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
            
        })
        .then(rs=>{
            dispatch({
                type:ActionType.LAY_CHI_TIET_PHONG_VE_BANG_MA_LICH_CHIEU,
                data:rs.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
export const actDangKi=user =>{
    return dispatch=>{
        Axios({
            method:"POST",
            url:"http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            data:user
        })
        .then(rs=>{
            alert("Đăng kí thành công")
            console.log("Trạng thái đăng nhập :",rs.data)

        })
        .catch(err=>{
            alert(err.response.data);
            console.log(err.response.data);
        })
    }
}
export const actDangNhap =(user )=>{
    return dispatch=>{
        Axios({
            method:"POST",
            url:"http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            data:user
        })
        .then(rs=>{
            if(rs.data.maLoaiNguoiDung == "KhachHang"){
                localStorage.setItem("userKhachHang",JSON.stringify(rs.data))
            }
            console.log("đăng nhập thành công: ",rs.data)
            alert("Đăng nhập thành công")
            
            
            // dispatch({
            //     type:ActionType.DANG_NHAP,
            //     data:rs.data
            // })
        })
        .catch(err=>{
            console.log(err)
        });
    }
}


export const actGetListMovie =listMovie =>{
    return{
        type:ActionType.GET_LIST_MOVIE,
        data:listMovie
    };
}