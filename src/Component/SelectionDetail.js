import React, { Component, Fragment } from 'react'
import swal from '@sweetalert/with-react';
import {connect} from 'react-redux';
import * as action from '../redux/action';
import {withRouter} from "react-router-dom";
import numeral  from "numeral";
import * as moment from 'moment'
import * as service from '../pages/theater/theaterService';
import { Dropdown } from 'primereact/dropdown';
class SelectionDetail extends Component {
    constructor(props){
        super(props)
        this.state={
            infoKhachHang:{},
            reload:false,
            paymentList:[
               {name:"VISA/MasterCard",code:1},
               {name:"Zalo pay",code:2},
            ],
            selectedPayment:''
        }
    }
    
    renderGheDaChon=()=>{
        let {danhSachGhe}=this.props;
        if(typeof danhSachGhe !== "undefined"){
            return danhSachGhe.map((item,index)=>{
                return (
                    <div key={index}>{item.tenGhe}</div>
                
                )
            })
        }
    }
    tinhTongGiaVe=()=>{
        let tongTien= 0;
        let {danhSachGhe}=this.props;
        if(typeof danhSachGhe !== "undefined"){
            danhSachGhe.forEach(item=>{
                tongTien+=50000
            })
        }
       
        if(tongTien===0){
            return(
                <span className="tongTienVe ">0đ</span>
            )
        }else{
            let tongTienVeFormatted =numeral(tongTien).format('0,0')
            return(
                <span className="tongTienVe">{tongTienVeFormatted}đ</span>
            )
        }
    }
    componentDidMount(){
        let info=JSON.parse( localStorage.getItem("userKhachHang"))
        this.setState({
            infoKhachHang:info
        })
    }
    
    
    handleDatVe=()=>{
        let{maLichChieu,danhSachGhe}=this.props;
        if(danhSachGhe.length>0 && this.state.selectedPayment !== ''){
            swal({
                title:"Xác nhận đặt vé",
                text:"Hãy kiểm tra lại thông tin vé trước khi đặt",
                icon:"warning",
                buttons:["Quay lại","Xác nhận"],
                closeOnEsc: false,
                closeOnClickOutside: false,
                dangerMode: true
            }).then(ok=>{
                if(ok){
                    let lstGhe=[]
                    danhSachGhe.forEach(item=>{
                    let ghe={
                        seatId:item.maGhe
                    }
                    lstGhe.push(ghe)
                    })
                    let obj={
                        showId:maLichChieu,
                        seats:lstGhe,
                        user:this.state.infoKhachHang.taiKhoan
                    }
                    console.log(obj)
                    let ticketInfo = service.bookTicket(obj);
                    this.props.saveTicketInfo(ticketInfo);
                    this.props.history.push("/ticket-info")
                }
            })
           return
        }
        if(danhSachGhe.length===0){
            swal({
                title:"Bạn chưa chọn ghế.",
                icon:"info"
            })
            return
        }
        console.log()
        if(this.state.selectedPayment === ''){
            swal({
                title:"Bạn chưa chọn phương thức thanh toán.",
                icon:"info"
            })
            return
        }
        
    }
    onPaymentChange=(e)=>{
        console.log(encodeURI)
        this.setState(
            {
                selectedPayment:e.value
            }
        )
    }
    
    render() {
        let{thongTinPhim}=this.props;
        return (
            <Fragment>
                <div className="selection-detail">
                    <div className="price-block">
                        <div className="total-price text-center">{this.tinhTongGiaVe()}</div>
                    </div>
                    <div className="movie-picked-detail">
                        <div className="ticket-for-movie">
                            <span className="age-tag">C18</span>
                            <span className="ticket-movie-name text-uppercase">
                                {thongTinPhim?.movieName}
                            </span>
                        </div>
                        <div className="ticket-theater">{thongTinPhim?.theaterName}<br /> <span>({thongTinPhim?.theaterAddress})</span> </div>

                        <div className="ticket-time">
                            <span className="ticket-time-detail">{moment(thongTinPhim?.ngayChieu).format('L')}</span>
                            <span className="movie-show-date"> {moment(thongTinPhim?.gioChieu).format('LT')}</span>
                            <span className="movie-theater-number"> {thongTinPhim?.roomName}</span>
                        </div>
                    </div>
                    <div className="seat-selected-detail">
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="seat">
                                    Ghế <span className="seat-selected-item">
                                            {this.renderGheDaChon()}
                                        </span>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="seat-price">{this.tinhTongGiaVe()}</div>
                            </div>
                        </div>
                    </div>
                    <div className="payment-method">
                        <p>Phương thức thanh toán</p>
                        <Dropdown value={this.state.selectedPayment} options={this.state.paymentList} onChange={this.onPaymentChange} optionLabel="name" placeholder="Chọn phương thức thanh toán" />
                    </div>
                    <div className="customer-info">
                        <p>Thông tin khách hàng: </p>
                        <div className="row">
                            <div className="col-sm-4">
                               <div className="info-item">Tài khoản: </div>
                               <div className="info-item">Họ tên: </div>
                               <div className="info-item">Email: </div>
                               <div className="info-item">số ĐT: </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="info-data">{this.state.infoKhachHang.taiKhoan}</div>
                                <div className="info-data">{this.state.infoKhachHang.hoTen}</div>
                                <div className="info-data">{this.state.infoKhachHang.email}</div>
                                <div className="info-data">{this.state.infoKhachHang.soDT}</div>
                            </div>
                        </div>
                    </div>
                    
                    <button className="checkout text-uppercase text-center" onClick={this.handleDatVe}>   
                        Đặt vé
                    </button>
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        datVeStatus:state.movieReducer.datVeStatus,
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        saveTicketInfo:(val)=>{
            dispatch(action.actSaveTicketInfo(val))
        }
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SelectionDetail))
