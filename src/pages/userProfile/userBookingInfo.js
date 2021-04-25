import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as action from "../../redux/action";
import swal from '@sweetalert/with-react';
import * as service from './userService'
class UserBookingInfo extends Component {
  constructor(props){
    super(props);
    this.state={
      userBookingHistory:[]
    }
  }
   
    componentDidMount(){
      let userInfo = localStorage.getItem("userKhachHang")
      let data = service.getUserBookingHistory(userInfo.taiKhoan);
      this.setState({userBookingHistory:data})
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
      let {userBookingHistory}= this.state;
        if(userBookingHistory.length >0){
          return userBookingHistory.map((x,i)=>{
            return(
              <tr key={i}>
                  <td>{x.ticketId}</td>
                  <td className="text-center">{x.movieName}</td>
                  <td className="text-center">{x.seats.length}</td>
                  <td className="text-center">{new Date(x.saleTime).toLocaleDateString()}</td>
                  <td className="text-center">{new Date(x.saleTime).toLocaleTimeString()}<span className="detail-more"><i className="far fa-plus-square" onClick={()=>{this.handleDetailMore(x)}}></i></span></td> 
              </tr>
            )
          })
        }else{
          return (
            <div className="no-booking-data">Bạn chưa đặt vé trên Movik</div>
          )
        }
    }
    
    handleDetailMore=(thongTinDatVe)=>{
        let tenRap=thongTinDatVe.roomName;
        let tenHeThongRap=thongTinDatVe.theaterName;
        let tenGhe = thongTinDatVe.seats;
        
        
        swal({
          title: "Thông tin vé",
          content: (
            <div className={this.props.themeMode?"booking-detail-modal booking-detail-modal-dark ":"booking-detail-modal booking-detail-modal-light "}>
              <div className="detail-more-modal">
                <div className="row detail-row">
                  <div className="col-md-3 detail-title">Tên Phim:</div>
                  <div className={this.props.themeMode?"col-md-9 detail-value detail-value-dark":"col-md-9 detail-value detail-value-light"}>
                    {thongTinDatVe.movieName}
                  </div>
                </div>
                <div className="row detail-row">
                  <div className="col-md-3 detail-title">Thời lượng:</div>
                  <div className={this.props.themeMode?"col-md-9 detail-value detail-value-dark":"col-md-9 detail-value detail-value-light"}>
                    {thongTinDatVe.thoiLuong} phút
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
                    {thongTinDatVe.salePrice}
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
      isUserBookedReady:state.userReducer.isUserBooked
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        changeIsUserBookedReady:(val)=>{
          dispatch(action.actChangeIsUserBookedReady(val))
        },
        checkPageReady:(val)=>{
          dispatch(action.actCheckPageIsReady(val))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserBookingInfo)