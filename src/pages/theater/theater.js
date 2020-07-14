import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux';
import * as action from '../../redux/action';
import { isEmptyObject } from 'jquery';
import Seat from "../../Component/Seat";
class Theater extends Component {
    constructor(props){
        super(props)
        let maLichChieu=this.props.match.params.maLichChieu;
        this.props.layChiTietPhongChieuBangMaLichChieu(maLichChieu)
        
    }
   
    
    layChiTietPhongChieu=()=>{
        let thongTinPhim={}
        let {chiTietPhongChieu}=this.props
        if(!isEmptyObject(chiTietPhongChieu)){
            thongTinPhim=chiTietPhongChieu.thongTinPhim
        }
        return thongTinPhim
    }
    layDanhSachGhe=()=>{
        let danhSachGhe=[]
        let {chiTietPhongChieu}=this.props
        if(!isEmptyObject(chiTietPhongChieu)){
            danhSachGhe=chiTietPhongChieu.danhSachGhe
        }
        return danhSachGhe
    }
    
    render() {
        let thongTinPhim=this.layChiTietPhongChieu()
        let danhSachPhim=this.layDanhSachGhe()
        return (
            <Fragment>
                    <section className="movie-picked">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="movie-name-title">
                                        <h1 className="text-uppercase">
                                            {thongTinPhim.tenPhim} <span className="age-tag">(C18)</span>
                                        </h1>
                                        <p className="text-uppercase">{thongTinPhim.ngayChieu},{thongTinPhim.gioChieu}</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="timer">
                                        <div className="text-uppercase">Thời gian giữ ghế</div>
                                        <div id="timer" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="seat-section">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="seat-picker">
                                    <div className="theater-name-picked display-4 text-center my-5">
                                        {thongTinPhim.tenCumRap}
                                    </div>
                                    <div className="theater-screen">
                                        <img src="../img/seatNscreen/screen.png" />
                                    </div>
                                    <div className="seat-block">
                                        <div className="container">
                                           <Seat danhSachPhim={danhSachPhim} />
                                        </div>
                                    </div>
                                </div>
                                <div className="seat-picker-note">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-1">
                                                <div className="seat-item " />
                                            </div>
                                            <div className="seat-note">:Ghế chưa chọn</div>
                                            <div className="col-sm-1">
                                                <div className="seat-item inactive" />
                                            </div>
                                            <div className="seat-note">:Ghế đã chọn</div>
                                            <div className="col-sm-1">
                                                <div className="seat-item active" />
                                            </div>
                                            <div className="seat-note">:Ghế đang chọn</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="selection-detail">
                                    <div className="price-block">
                                        <div className="total-price text-center">0 đ</div>
                                    </div>
                                    <div className="movie-picked-detail">
                                        <div className="ticket-for-movie">
                                            <span className="age-tag">C18</span>
                                            <span className="ticket-movie-name text-uppercase">
                                                {thongTinPhim.tenPhim}
                                            </span>
                                        </div>
                                        <div className="ticket-theater">{thongTinPhim.tenCumRap}<br/> <span>({thongTinPhim.diaChi})</span> </div>

                                        <div className="ticket-time">
                                            <span className="ticket-time-detail">{thongTinPhim.ngayChieu}</span>
                                            <span className="movie-show-date"> {thongTinPhim.gioChieu}</span>
                                            <span className="movie-theater-number"> {thongTinPhim.tenRap}</span>
                                        </div>
                                    </div>
                                    <div className="seat-selected-detail">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <div>
                                                    Ghế <span className="seat-selected-item">G1</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="seat-price">60.000 đ</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="combo-block-detail">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <span className="popcorn">
                                                    <a href="#" data-toggle="modal" data-target="#popcornModal">
                                                        <img src="../img/icon/popcorn-icon-8.png"  />
                                                    </a>
                                                    <span className="popcorn-name">Combo 1</span>
                                                </span>
                                            </div>
                                            <div className="col-sm-4">
                                                <span className="combo-price">120.000 đ</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="checkout text-uppercase text-center">
                                        Đặt vé
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Popcorn combo Modal */}
                    <div className="popcorn-combo-modal">
                        <div className="modal fade" id="popcornModal">
                            <div className="modal-dialog modal-lg modal-bg-color">
                                <div className="modal-content">
                                    {/* Modal Header */}
                                    <div className="modal-header">
                                        <h4 className="modal-title">Popcorn Combo</h4>
                                    </div>
                                    {/* Modal body */}
                                    <div className="modal-body">
                                        <div className="combo-block">
                                            <div className="combo-item">
                                                <div className="row">
                                                    <div className="col-sm-8">
                                                        <div className="combo-img">
                                                            <img
                                                                src="../img/seatNscreen/volka-smirnoff-nga1522165193.png"
                                                                
                                                            />
                                                        </div>
                                                        <div className="combo-name">Combo 1</div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="combo-price">2200$</div>
                                                        <div className="combo-quantity">
                                                            <div className="comboPlus combo-quantity-action ">
                                                                <i className="fas fa-plus" />
                                                            </div>
                                                            <div className="combo-quantity-number">1</div>
                                                            <div className="comboMinus combo-quantity-action">
                                                                <i className="fas fa-minus" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Fragment>
        )
    }
}
const mapStateToProps =state=>{
    return{
        chiTietPhongChieu:state.movieReducer.chiTietPhongChieu
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        layChiTietPhongChieuBangMaLichChieu:(maLichChieu)=>{
            dispatch(action.actLayChiTietPhongVeBangMaLichChieu(maLichChieu));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Theater);