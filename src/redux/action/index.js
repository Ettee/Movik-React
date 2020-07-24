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
export const actDangNhap =(user)=>{
    return dispatch=>{
        Axios({
            method:"POST",
            url:"http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            data:user
        })
        .then(rs=>{
            if(rs.data.maLoaiNguoiDung === "KhachHang" ){
                localStorage.setItem("userKhachHang",JSON.stringify(rs.data))
                swal({
                    title: "Đăng nhập thành công",
                    icon: "success",
                    buttons: "OK",
                    
                    
                  }).then((ok)=>{
                    if(ok){
                        window.location.reload()
                    }
                  });
            }else{
                if(rs.data.maLoaiNguoiDung === "QuanTri"){
                    localStorage.setItem("userAdmin",JSON.stringify(rs.data))
                    swal({
                        title: "Đăng nhập thành công",
                        text:"ADMIN MODE",
                        icon: "success",
                        buttons: "OK",
                        
                        
                    }).then((ok)=>{
                        if(ok){
                            window.location.reload()
                        }
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
                className:"dark-sweat-modal"
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
export const actLayDanhSachUserPhanTrang=(soTrang)=>{
    return dispatch=>{
        Axios({
            method:"GET",
            url:`http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP09&soTrang=${soTrang}&soPhanTuTrenTrang=10`
        }).then((rs)=>{
            dispatch({
                type:ActionType.DANH_SACH_NGUOI_DUNG_PHAN_TRANG,
                data:rs.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
export const actLayDanhSachTatCaNguoiDung=()=>{
    return dispatch=>{
        Axios({
            method:"GET",
            url:'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP09'
        }).then((rs)=>{
            dispatch({
                type:ActionType.DANH_SACH_TAT_CA_NGUOI_DUNG,
                data:rs.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
export const actDeleteUser=(taiKhoan,token)=>{
    console.log(taiKhoan)
    return dispatch=>{
        Axios({
            method:"DELETE",
            url:`http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
            headers:{
                Authorization:`Bearer ${token}`
            }
        }).then((rs)=>{
            swal({
                title:"Xóa người dùng thành công",
                icon:"success",text:"Good job",
                buttons:false,
                timer:1500,
                closeOnEsc:false,
                buttons:false
            })
        })
        .catch(err=>{
            console.log(err)
            swal({
                text:err.response.data,
                icon:"error",
                timer:1500,
                closeOnEsc:false,
                buttons:false
            })
        })
    }
}
export const actUpdateUser=(obj,token)=>{
    return dispatch=>{
        Axios({
            method:"PUT",
            url:"http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
            data:obj,
            headers:{
                Authorization:`Bearer ${token}`
            }
        }).then(rs=>{
            swal({
                text:"Cập nhật thông tin người dùng thành công",
                icon:"success",
                timer:1500,
                className:"dark-sweat-modal",
                closeOnEsc:false,
                buttons:false
            })
        }).catch((err)=>{
            console.log(err)
            swal({
                text:"Đã xảy ra lỗi khi cập nhật thông tin",
                icon:"error",
                timer:1500,
                className:"dark-sweat-modal",
                closeOnEsc:false,
                buttons:false
            })
        })
    }
}
export const actGetListMovie =listMovie =>{
    return{
        type:ActionType.GET_LIST_MOVIE,
        data:listMovie
    };
}
export const actLayDanhSachPhimPhanTrang=(soTrang)=>{
    return dispatch=>{
        Axios({
            method:"GET",
            url:`http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP09&soTrang=${soTrang}&soPhanTuTrenTrang=4`
        })
        .then((rs)=>{
            dispatch({
                type:ActionType.DANH_SACH_PHIM_PHAN_TRANG,
                data:rs.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
export const actUpdateMovie=(obj,token)=>{
    return dispatch=>{
        Axios({
            method:"POST",
            url:"http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim",
            data:obj,
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        .then((rs)=>{
            swal({
                icon:"success",
                text:"Cập nhật phim thành công",
                timer:1500,
                className:"dark-sweat-modal",
                closeOnEsc:false,
                buttons:false
            })
        })
        .catch((err)=>{
            console.log(err.response.data)
            swal({
                title:"Đã xảy ra lỗi khi cập nhật"  ,
                icon:"error",
                text:err.response.data,
                timer:1500,
                className:"dark-sweat-modal",
                closeOnEsc:false,
                buttons:false
            })
        })
    }
}
export const actDeleteMovie=(maPhim,token)=>{
    console.log(maPhim)
    return dispatch=>{
        Axios({
            method:"DELETE",
            url:`http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        .then((rs)=>{
            swal({
                icon:"success",
                text:"Xóa phim phim thành công",
                timer:1500,
                className:"dark-sweat-modal",
                closeOnEsc:false,
                buttons:false
            })
        })
        .catch((err)=>{
            console.log(err)
            swal({
                title:"😲"   ,
                icon:"error",
                className:"dark-sweat-modal",
                text:err.response.data,
                timer:1500,
                closeOnEsc:false,
                buttons:false
            })
        })
    }
}