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
    componentWillReceiveProps(nextProps){
      if(nextProps.isUserBookedReady===true){
        this.props.checkPageReady(true)
      }
    }
    componentWillUnmount(){
      this.props.checkPageReady(false)
      this.props.changeIsUserBookedReady(false)
    }
    renderBookingRow=()=>{
        let soLuongGhe=0
        if(Object.keys(this.props.bookingDetail).length !== 0){
            if(this.props.bookingDetail.thongTinDatVe.length!==0){
                return this.props.bookingDetail.thongTinDatVe.map((item,index)=>{
                    soLuongGhe=item.danhSachGhe.length
                    return(
                        <tr key={index}>
                            <td>{item.maVe}</td>
                            <td className="text-center">{item.tenPhim}</td>
                            <td className="text-center">{soLuongGhe}</td>
                            <td className="text-center">{new Date(item.ngayDat).toLocaleDateString()}</td>
                            <td className="text-center">{new Date(item.ngayDat).toLocaleTimeString()}<span className="detail-more"><i className="far fa-plus-square" onClick={()=>{this.handleDetailMore(item)}}></i></span></td> 
                        </tr>
                     )
                })
            }else{
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
          title: "Thông tin vé",
          content: (
            <div className={this.props.themeMode?"booking-detail-modal booking-detail-modal-dark ":"booking-detail-modal booking-detail-modal-light "}>
              <div className="detail-more-modal">
                <div className="row detail-row">
                  <div className="col-md-3 detail-title">Tên Phim:</div>
                  <div className={this.props.themeMode?"col-md-9 detail-value detail-value-dark":"col-md-9 detail-value detail-value-light"}>
                    {thongTinDatVe.tenPhim}
                  </div>
                </div>
                <div className="row detail-row">
                  <div className="col-md-3 detail-title">Thời lượng:</div>
                  <div className={this.props.themeMode?"col-md-9 detail-value detail-value-dark":"col-md-9 detail-value detail-value-light"}>
                    {thongTinDatVe.thoiLuongPhim} phút
                  </div>
                </div>
                <div className="row detail-row">
                  <div className="col-md-3 detail-title">Tên rạp:</div>
                  <div className={this.props.themeMode?"col-md-9 detail-value detail-value-dark":"col-md-9 detail-value detail-value-light"}>{tenHeThongRap}</div>
                </div>
                <div className="row detail-row">
                  <div className="col-md-3 detail-title">Rạp:</div>
                  <div className={this.props.themeMode?"col-md-9 detail-value detail-value-dark":"col-md-9 detail-value detail-value-light"}>{tenRap}</div>
                </div>
                <div className="row detail-row">
                  <div className="col-md-3 detail-title">Ghế:</div>
                  <div className={this.props.themeMode?"col-md-9 detail-value detail-value-dark":"col-md-9 detail-value detail-value-light"}>
                    {tenGhe.map((item) => {
                      return <span className="tenGheModal">{item}</span>;
                    })}
                  </div>
                </div>
                <div className="row detail-row">
                  <div className="col-md-3 detail-title">Giá vé:</div>
                  <div className={this.props.themeMode?"col-md-9 detail-value detail-value-dark":"col-md-9 detail-value detail-value-light"}>
                    {thongTinDatVe.giaVe}
                  </div>
                </div>
              </div>
            </div>
          ),
        });
        
    }

    render() {
        return (
            <div className="user-booking-info">
                <table className="table booking-detail table-hover">
                    <thead className={this.props.themeMode?"title title-dark":"title title-light"}>
                        <tr>
                            <th>Mã vé</th>
                            <th className="text-center">Tên phim</th>
                            <th className="text-center">Số lượng ghế</th>
                            <th className="text-center">Ngày đặt</th>
                            <th className="text-center">Giờ đặt</th>
                        </tr>
                    </thead>
                    <tbody className={this.props.themeMode?"value value-dark ":"value value-light "}>
                       {this.renderBookingRow()}
                    </tbody>

                </table>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
      bookingDetail:state.userReducer.thongTinDatVe,
      isUserBookedReady:state.userReducer.isUserBooked
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        getBookingDetail:(taiKhoan)=>{
          dispatch(action.actGetUserProfile(taiKhoan))
        },
        changeIsUserBookedReady:(val)=>{
          dispatch(action.actChangeIsUserBookedReady(val))
        },
        checkPageReady:(val)=>{
          dispatch(action.actCheckPageIsReady(val))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserBookingInfo)