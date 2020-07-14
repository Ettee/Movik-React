import * as ActionType from "./../constants/ActionType";
import Axios from 'axios';
import swal from 'sweetalert';

export const actGetListMovieAPI =()=>{
    return dispatch=>{
        Axios({
            method:"GET",
            url:"http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09"
            
        })
        .then(rs=>{
            dispatch(actGetListMovie(rs.data));
        })
        .catch(err=>{
            console.log(err);
        })
    }
}

//hàm dùng để gọi api
export const actGetDetailMovieAPI =movieID =>{
    return dispatch=> {
        Axios({
            method:"GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieID}`
        })
        .then(rs=>{
            // nếu gọi api và đc trả về data thì dispatch dữ liệu vào trong state của movieReducer
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
            url:`http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP09`
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
            swal({
                title: "Đăng kí thành công",
                icon: "success",
                button: "OK",
              }).then((ok)=>{
                if(ok){
                    window.location.reload()
                }
              });
        })
        .catch(err=>{
            swal({
                title: "Đăng kí thất bại",
                text:err.response.data,
                icon: "error",
                button: "OK",
            });
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
            if(rs.data.maLoaiNguoiDung === "KhachHang"){
                localStorage.setItem("userKhachHang",JSON.stringify(rs.data))
                swal({
                    title: "Đăng nhập thành công",
                    icon: "success",
                    button: "OK",
                  }).then((ok)=>{
                    if(ok){
                        window.location.reload()
                    }
                  });
               
            }else{
                if(rs.data.maLoaiNguoiDung==="QuanTri"){
                    swal({
                        title: "Đăng nhập thất bại",
                        text:"Không phải tài khoản khách hàng",
                        icon: "warning",
                        button: "OK",
                    });
                }
            }
        })
        .catch(err=>{
            swal({
                title: "Đăng nhập thất bại",
                text:err.response.data,
                icon: "error",
                button: "OK",
            });
        });
    }
}


export const actGetListMovie =listMovie =>{
    return{
        type:ActionType.GET_LIST_MOVIE,
        data:listMovie
    };
}