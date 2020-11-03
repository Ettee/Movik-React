import React, { Component, Fragment } from 'react'
import swal from '@sweetalert/with-react';
import {connect} from 'react-redux';
import * as action from '../redux/action';
import {withRouter} from "react-router-dom";
import numeral  from "numeral";
class SelectionDetail extends Component {
    constructor(props){
        super(props)
        this.state={
            infoKhachHang:{},
            reload:false
        }
    }
    
    renderGheDaChon=()=>{
        let {danhSachGhe}=this.props;
        return danhSachGhe.map((item,index)=>{
            return (
                <div key={index}>{item.tenGhe}</div>
            
            )
        })
    }
    tinhTongGiaVe=()=>{
        let tongTien= 0;
        let {danhSachGhe}=this.props;
        danhSachGhe.map(item=>{
            tongTien+=item.giaVe
        })
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
        let{maLichChieu,danhSachGhe,thongTinPhim}=this.props;
        if(danhSachGhe.length>0){
            let obj={
                maLichChieu:maLichChieu,
                danhSachGhe:danhSachGhe,
                thongTinPhim:thongTinPhim
            }      
            this.props.LuuThongTinDatVe(obj)
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
                    danhSachGhe.map(item=>{
                    let ghe={
                        maGhe:item.maGhe,
                        giaVe:item.giaVe
                    }
                    lstGhe.push(ghe)
                    })
                    let obj={
                        maLichChieu,
                        danhSachVe:lstGhe,
                        taiKhoanNguoiDung:this.state.infoKhachHang.taiKhoan
                    }
                    this.props.DatVe(obj,this.state.infoKhachHang.accessToken)
                }
            })
            setTimeout(()=>{
                if(this.props.datVeStatus){
                    this.props.history.push("/ticket-info")
                }
            },3000)
        }else{
            swal({
                title:"Bạn chưa chọn ghế.",
                icon:"info"
            })
        }
        
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
                                {thongTinPhim.tenPhim}
                            </span>
                        </div>
                        <div className="ticket-theater">{thongTinPhim.tenCumRap}<br /> <span>({thongTinPhim.diaChi})</span> </div>

                        <div className="ticket-time">
                            <span className="ticket-time-detail">{thongTinPhim.ngayChieu}</span>
                            <span className="movie-show-date"> {thongTinPhim.gioChieu}</span>
                            <span className="movie-theater-number"> {thongTinPhim.tenRap}</span>
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
                    <div className="customer-info">
                        <p>Thông tin khách hàng: </p>
                    <div className="row">
                            <div className="col-sm-4">
                               <div className="info-item">Tài khoản: </div>
                               <div className="info-item">Họ tên: </div>
                               <div className="info-item">email: </div>
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
        danhSachGheTrongRap:state.movieReducer.danhSachGheTrongRap

    }
}
const mapDispatchToProps=dispatch=>{
    return {
        LuuThongTinDatVe:(obj)=>{
            dispatch(action.actLuuThongTinDatVe(obj));
        },
        DatVe:(obj,token)=>{
            dispatch(action.actDatVe(obj,token));
        },
        layDanhSachGhe:(maLichChieu)=>{
            dispatch(action.actLayDanhSachGheTheoMaLichChieu(maLichChieu));
        }
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SelectionDetail))
