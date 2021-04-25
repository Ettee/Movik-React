import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import * as action from '../../redux/action';
import { withRouter } from 'react-router-dom';
import QRCode from 'qrcode.react';
import * as moment from 'moment';

import swal from '@sweetalert/with-react';
class TicketInfoAfterBooked extends Component {
    constructor(props){
        super(props)
        this.state={
            maVe:0,
            
        }
    }
    componentDidMount(){
      if(Object.keys(this.props.ticketInfo).length === 0 ){
        this.props.history.push('/')
      }
    }
    renderDanhSachGhe=(danhSachGhe)=>{
      if(typeof danhSachGhe !== "undefined"){
        return danhSachGhe.map((item,index)=>{
          return (
            <div key={index}>{item}</div>
          )
        })
      }
    }
    renderThongTinPhim=(ticketData)=>{
        if (typeof ticketData !== "undefined" ) {
          return (
            <Fragment>
              <div className="col-md-6">
                <div className="ticket-info">
                  <span>Tên phim: </span>
                  {ticketData.movieName}
                </div>
                <div className="ticket-info">
                  <span>Thời lượng: </span>
                  {ticketData.thoiLuong}
                </div>
                <div className="ticket-info">
                  <span>Giờ chiếu: </span>
                  {moment(ticketData.startTime).format('LT')}
                </div>
                <div className="ticket-info">
                  <span>Ngày chiếu: </span>
                  {moment(ticketData.scheduleDate).format('l')}
                </div>
                <div className="ticket-info">
                  <span>Tên cụm rạp: </span>
                  {ticketData.theaterName}
                </div>
                <div className="ticket-info">
                  <span>Tên rạp: </span>
                  {ticketData.roomName}
                </div>
                <div className="ticket-info">
                  <div className="ticket-info-seat">
                    Ghế: {this.renderDanhSachGhe(ticketData.seats)}
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
                  <img src={ticketData.poster} />
                </div>
              </div>
            </Fragment>
          );
        }
    }
    handleToHome=()=>{
      this.props.sendReadySignal(false)
        this.props.history.push("/")
    }
    downloadQR = (tenPhim) => {
      const canvas = document.getElementById('qrcode');
      const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
      // console.log('pngUrl', pngUrl);
      let downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = `${tenPhim}-QRCode.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
    renderQRCode=(ticketData)=>{
      console.log(ticketData)
        if(Object.keys(ticketData).length !== 0 ){
            return(
                <QRCode
                    id="qrcode"
                    value={ticketData.ticketId}
                    size={290}
                    level={"H"}
                    includeMargin={true}
                />
            )
        }
    }
    render() {
        let {ticketInfo} = this.props;
        return (
          <div className="TicketInfoAfterBooked">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="qr-code-block">
                    {this.renderQRCode(ticketInfo)}
                    <div className="qr-note">
                      * Mã QR này có giá trị như 1 tấm vé.
                    </div>
                    <div className="qr-download" onClick={()=>{this.downloadQR(ticketInfo.movieName)}}>Tải về</div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="ticket-info-block">
                    <div className="row">{this.renderThongTinPhim(ticketInfo)}</div>
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
        datVeStatus:state.movieReducer.datVeStatus,
        ticketInfo:state.movieReducer.ticketInfo
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
