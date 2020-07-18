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
                buttons: "OK"
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
                button: "OK"
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
            if(rs.data.maLoaiNguoiDung === "KhachHang" || rs.data.maLoaiNguoiDung === "QuanTri" ){
                localStorage.setItem("userKhachHang",JSON.stringify(rs.data))
                swal({
                    title: "Đăng nhập thành công",
                    icon: "success",
                    buttons: "OK"
                    
                  }).then((ok)=>{
                    if(ok){
                        window.location.reload()
                    }
                  });
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
export const actGetNews=()=>{
    return dispatch=>{
        Axios({
            method:"GET",
            url:"http://newsapi.org/v2/everything?domains=wsj.com&apiKey=af33fca3a18f40008777568dfab33544"
    
        }).then((rs)=>{
            dispatch({
                type:ActionType.GET_NEWS,
                data:rs.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
export const actDatVe=(obj,token)=>{
    return dispatch=>{
        Axios({
            method:"POST",
            url:"http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
            data:obj,
            headers:{
                Authorization:`Bearer ${token}`
            }
        }).then(rs=>{
            swal({
                title:"Đặt vé thành công",
                text:"Bạn sẽ được đưa về trang chủ",
                icon:"success",
                timer:3000,
                buttons:false,
                closeOnClickOutside: false,
                closeOnEsc: false,
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
export const actGetUserProfile=(taiKhoan)=>{
    return dispatch=>{
        Axios({
            method:"POST",
            url:"http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
            data:taiKhoan
        }).then((rs)=>{
            dispatch({
                type:ActionType.USER_PROFILE,
                data:rs.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
export const actGetListMovie =listMovie =>{
    return{
        type:ActionType.GET_LIST_MOVIE,
        data:listMovie
    };
}