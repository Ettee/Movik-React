import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as action from "../../redux/action";
class UserBookingInfo extends Component {
   
    componentDidMount(){
        let {taiKhoan}=this.props
        console.log(taiKhoan)
        let obj={
            taiKhoan:taiKhoan
        }
        this.props.getBookingDetail(obj)
    }
    renderBookingRow=()=>{
        if(Object.keys(this.props.bookingDetail).length !== 0){
            return this.props.bookingDetail.thongTinDatVe.map(item=>{
                return(
                    <tr>
                        <td>{item.maVe}</td>
                        <td>{item.tenPhim}</td>
                        <td>{new Date(item.ngayDat).toLocaleDateString()}</td>
                        <td>{new Date(item.ngayDat).toLocaleTimeString()}</td>
                        <td><i class="far fa-plus-square"></i></td>
                    </tr>
                 )
            })
        }else{
            return (
                <tr>
                    Không có dữ liệu
                </tr>
            )
        }
        
       
    }
    render() {
        console.log("1:",this.props.bookingDetail)
        return (
            <div className="user-booking-info">
                <table className="table booking-detail">
                    <thead className="title">
                        <tr>
                            <th>Mã vé</th>
                            <th>Tên phim</th>
                            <th>Ngày đặt</th>
                            <th>Giờ đặt</th> 
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