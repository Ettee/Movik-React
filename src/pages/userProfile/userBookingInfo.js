import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import * as action from "../../redux/action";
import swal from '@sweetalert/with-react'
class UserBookingInfo extends Component {
   
    componentDidMount(){
        let {taiKhoan}=this.props
        let obj={
            taiKhoan:taiKhoan
        }
        this.props.getBookingDetail(obj)
    }

    renderBookingRow=()=>{
        let soLuongGhe=0
        if(Object.keys(this.props.bookingDetail).length !== 0){
            if(this.props.bookingDetail.thongTinDatVe.length!==0){
                return this.props.bookingDetail.thongTinDatVe.map(item=>{
                    soLuongGhe=item.danhSachGhe.length
                    return(
                        <tr>
                            <td>{item.maVe}</td>
                            <td className="text-center">{item.tenPhim}</td>
                            <td className="text-center">{soLuongGhe}</td>
                            <td className="text-center">{new Date(item.ngayDat).toLocaleDateString()}</td>
                            <td className="text-center">{new Date(item.ngayDat).toLocaleTimeString()}<span className="detail-more"><i class="far fa-plus-square" onClick={()=>{this.handleDetailMore(item)}}></i></span></td> 
                        </tr>
                     )
                })
            }else{
                console.log("1")
                return (
                    <div className="no-booking-data">Bạn chưa đặt vé trên Movik</div>
                )
            }
        }else{
            return (
                <tr>
                    Không có dữ liệu
                </tr>
            )
        }
    }
    
    handleDetailMore=(thongTinDatVe)=>{
        let tenRap='',tenHeThongRap='',tenGhe=[]
        thongTinDatVe.danhSachGhe.map(item=>{
            tenGhe.push(item.tenGhe)
            tenRap=item.tenRap;
            tenHeThongRap=item.tenHeThongRap;
        })
        swal({
            title:"Thông tin vé",
            className: "booking-detail-modal",
            content:(
                <div className="detail-more-modal">
                    <div className="row detail-row">
                        <div className="col-md-3 detail-title">
                            Tên Phim:
                        </div>
                        <div className="col-md-9 detail-value">
                            {thongTinDatVe.tenPhim}
                        </div>
                    </div>
                    <div className="row detail-row">
                        <div className="col-md-3 detail-title">
                            Thời lượng:
                        </div>
                        <div className="col-md-9 detail-value">
                            {thongTinDatVe.thoiLuongPhim} phút
                        </div>
                    </div>
                    <div className="row detail-row">
                        <div className="col-md-3 detail-title">
                            Tên rạp:
                        </div>
                        <div className="col-md-9 detail-value">
                            {tenHeThongRap}
                        </div>
                    </div>
                    <div className="row detail-row">
                        <div className="col-md-3 detail-title">
                            Rạp:
                        </div>
                        <div className="col-md-9 detail-value">
                            {tenRap}
                        </div>
                    </div>
                    <div className="row detail-row">
                        <div className="col-md-3 detail-title">
                            Ghế:
                        </div>
                        <div className="col-md-9 detail-value">
                            {tenGhe.map(item=>{
                                return(
                                    <span className="tenGheModal">{item}</span>
                                )
                            })}
                        </div>
                    </div>
                    <div className="row detail-row">
                        <div className="col-md-3 detail-title">
                            Giá vé:
                        </div>
                        <div className="col-md-9 detail-value">
                            {thongTinDatVe.giaVe}
                        </div>
                    </div>
                </div>
            )
        })
        
    }

    render() {
        return (
            <div className="user-booking-info">
                <table className="table booking-detail table-hover">
                    <thead className="title">
                        <tr>
                            <th>Mã vé</th>
                            <th className="text-center">Tên phim</th>
                            <th className="text-center">Số lượng ghế</th>
                            <th className="text-center">Ngày đặt</th>
                            <th className="text-center">Giờ đặt</th>
                        </tr>
                    </thead>
                    <tbody className="value">
                       {this.renderBookingRow()}
                    </tbody>

                </table>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        bookingDetail:state.userReducer.thongTinDatVe
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        getBookingDetail:(taiKhoan)=>{
            dispatch(action.actGetUserProfile(taiKhoan))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserBookingInfo)