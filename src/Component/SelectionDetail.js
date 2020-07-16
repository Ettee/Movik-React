import React, { Component, Fragment } from 'react'

export default class SelectionDetail extends Component {
    constructor(props){
        super(props)
        this.state={
            infoKhachHang:{}
        }
    }
    
    renderGheDaChon=()=>{
        let {danhSachGhe}=this.props;
        return danhSachGhe.map(item=>{
            return (
                <div>{item.tenGhe}</div>
            
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
                <span className="tongTienVe invisible">{tongTien}đ</span>
            )
        }else{
            return(
                <span className="tongTienVe">{tongTien}đ</span>
            )
        }
    }
    componentDidMount(){
        let info=JSON.parse( localStorage.getItem("userKhachHang"))
        console.log(info)
        this.setState({
            infoKhachHang:info
        })
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
                    
                    <button className="checkout text-uppercase text-center">
                        Đặt vé
                    </button>
                </div>
            </Fragment>
        )
    }
}
