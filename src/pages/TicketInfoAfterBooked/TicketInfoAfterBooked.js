import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import * as action from '../../redux/action';
import { withRouter,NavLink } from 'react-router-dom';
import QRCode from 'qrcode.react';

import swal from '@sweetalert/with-react';
class TicketInfoAfterBooked extends Component {
    constructor(props){
        super(props)
        this.state={
            maVe:0
        }
    }
    
    componentDidMount(){
        let taiKhoan=JSON.parse(localStorage.getItem("userKhachHang"))
        let obj={
            taiKhoan:taiKhoan.taiKhoan
        }
        this.props.getBookingDetail(obj)
        setTimeout(()=>{
          this.props.sendReadySignal(true)
        },3000)
        //handle khi thông tin đặt vé không đc truyền qua 
        if(Object.keys(this.props.thongTinDatVe)===0){
            console.log(Object.keys(this.props.thongTinDatVe))
            swal({
                title:"Lỗi khi xác nhận vé",
                icon:"error",
                text:"Thông tin đặt vé không tồn tại.Bạn hãy đặt vé lại.",
                closeOnClickOutside: false,
                closeOnEsc: false
            })
            .then((ok)=>{
                if(ok){
                    this.props.history.push("/")
                }
            }) 
        }
    }
    getBookingDataFromAccount=()=>{
        if(Object.keys(this.props.bookingDetailFromAccount).length>0){
            let lstThongTinDatVe=this.props.bookingDetailFromAccount.thongTinDatVe;
            return lstThongTinDatVe.pop()
            
        }
    }
    renderDanhSachGhe=(danhSachGhe)=>{
      return danhSachGhe.map((item,index)=>{
        return (
          <div key={index}>{item.tenGhe}</div>
        )
      })
    }
    renderThongTinPhim=(ticketData)=>{
        let{thongTinDatVe}=this.props
        if (typeof thongTinDatVe !== "undefined" &&typeof ticketData !== "undefined" ) {
          // console.log("thongTinDatVe: ",thongTinDatVe)
          // console.log("ticketData: ",ticketData)
          if (
            Object.keys(thongTinDatVe).length > 0 &&
            Object.keys(ticketData).length > 0
          ) {
            return (
              <Fragment>
                <div className="col-md-6">
                  <div className="ticket-info">
                    <span>Mã phim: </span>
                    {thongTinDatVe?.maLichChieu}
                  </div>
                  <div className="ticket-info">
                    <span>Tên phim: </span>
                    {ticketData.tenPhim}
                  </div>
                  <div className="ticket-info">
                    <span>Thời lượng: </span>
                    {ticketData.thoiLuongPhim}
                  </div>
                  <div className="ticket-info">
                    <span>Giờ chiếu: </span>
                    {thongTinDatVe?.thongTinPhim.gioChieu}
                  </div>
                  <div className="ticket-info">
                    <span>Ngày chiếu: </span>
                    {thongTinDatVe?.thongTinPhim.ngayChieu}
                  </div>
                  <div className="ticket-info">
                    <span>Tên cụm rạp: </span>
                    {thongTinDatVe?.thongTinPhim.tenCumRap}
                  </div>
                  <div className="ticket-info">
                    <span>Tên rạp: </span>
                    {thongTinDatVe?.thongTinPhim.tenRap}
                  </div>
                  <div className="ticket-info">
                    <div className="ticket-info-seat">
                      Ghế: {this.renderDanhSachGhe(ticketData.danhSachGhe)}
                    </div>
                  </div>
                  <button
                    className="btn-backToHome"
                    onClick={this.handleToHome}
                  >
                    Quay về Movik
                  </button>
                </div>
                <div className="col-md-6">
                  <div className="poster">
                    <img src={thongTinDatVe?.thongTinPhim.hinhAnh} />
                  </div>
                </div>
              </Fragment>
            );
          } else {
            return <div></div>;
          }
        }
    }
    handleToHome=()=>{
      this.props.sendReadySignal(false)
        this.props.history.push("/")
    }
    renderQRCode=(ticketData)=>{
     
        let string=''
        if(typeof ticketData !=="undefined" ){
            string='maVe: '+ticketData.maVe+' ,tenPhim:'+ticketData.tenPhim
            return(
                <QRCode
                    id="qrcode"
                    value={string}
                    size={290}
                    level={"H"}
                    includeMargin={true}
                />
            )
        }
    }
    render() {
        let ticketData= this.getBookingDataFromAccount()
        return (
          <div className="TicketInfoAfterBooked">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="qr-code-block">
                    {this.renderQRCode(ticketData)}
                    <div className="qr-note">
                      * Mã QR này có giá trị như 1 tấm vé.
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="ticket-info-block">
                    <div className="row">{this.renderThongTinPhim(ticketData)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        bookingDetailFromAccount:state.userReducer.thongTinDatVe,
        thongTinDatVe:state.movieReducer.thongTinDatVe,
        datVeStatus:state.movieReducer.datVeStatus
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        getBookingDetail:(taiKhoan)=>{
            dispatch(action.actGetUserProfile(taiKhoan))
        },
        DatVe:(obj,token)=>{
            dispatch(action.actDatVe(obj,token));
        },
        sendReadySignal:(val)=>{
            dispatch(action.actCheckPageIsReady(val))
        }
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(TicketInfoAfterBooked))
