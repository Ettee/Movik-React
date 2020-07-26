 import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux';
import * as action from '../../redux/action';
import { isEmptyObject } from 'jquery';
import Seat from "../../Component/Seat";
import SelectionDetail from '../../Component/SelectionDetail'
import swal from 'sweetalert';
import {withRouter} from "react-router-dom"
class Theater extends Component {
    constructor(props){
        super(props)
        let maLichChieu=this.props.match.params.maLichChieu;
        this.props.layChiTietPhongChieuBangMaLichChieu(maLichChieu);
        this.state={
            lstGheDaChon:[],
            time:0,
            seconds:300,
            reload:false
        };
        this.timer=0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
        
    }
    reloadPage=(val)=>{
        this.setState({
            reload:val
        })
    }
    secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));
    
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
    
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
    
        let obj = {
          "h": hours,
          "m": minutes,
          "s": seconds
        };
        return obj;
    }
    startTimer() {
        if (this.timer === 0 && this.state.seconds > 0) {
          this.timer = setInterval(this.countDown, 1000);
        }
    }
    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
          time: this.secondsToTime(seconds),
          seconds: seconds,
        });
        
        // Check if we're at zero.
        if (seconds === 0) { 
          clearInterval(this.timer);
          swal({
            title:"Hết thời gian đặt vé",
            icon:"info",
            text:"Bạn sẽ được đưa về trang chủ để đặt lại vé",
            closeOnEsc: false,
            closeOnClickOutside: false,
            timer: 3000,
            buttons:false
          })
          setTimeout(()=>{
            this.props.history.push("/")
          },3000)

        }
    }
    layDanhSachGheDaChon=(objBooking)=>{
        let checkIfMaGheInState=true
        let arr=[];
        arr=[...this.state.lstGheDaChon]
        if(arr.length>0){
            checkIfMaGheInState=arr.some(item=>item.maGhe===objBooking.maGhe)
            if(!checkIfMaGheInState){
                arr.push(objBooking)
            }else{
                let i =0
                arr.map((item,index)=>{
                    if(item.maGhe===objBooking.maGhe){
                        i=index
                    }
                })
                arr.splice(i,1)
            }
        }else{
            //push maGhe mới
            arr.push(objBooking)
        }
        
        this.setState({
            lstGheDaChon:arr
        })
        
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
    componentDidMount(){
        window.scrollTo(0, 0)
        this.startTimer()
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
    }
    render() {
        let thongTinPhim=this.layChiTietPhongChieu()
        let danhSachPhim=this.layDanhSachGhe()
        return (
            <Fragment>
                    <section className="movie-picked">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 ">
                                    <div className="movie-name-title">
                                        <h1 className="text-uppercase">
                                            {thongTinPhim.tenPhim} <span className="age-tag">(C18)</span>
                                        </h1>
                                        <p className="text-uppercase" >{thongTinPhim.ngayChieu}, {thongTinPhim.gioChieu}</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="timer">
                                        <div className="text-uppercase">Thời gian giữ ghế</div>
                                        <div id="timer">
                                            0{this.state.time.m}:{this.state.time.s}
                                        </div>
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
                                        <img src="../img/seatNscreen/screen.png" alt="screen" />
                                    </div>
                                    <div className="seat-block">
                                        <div className="container">
                                           <Seat danhSachPhim={danhSachPhim} layDanhSachGheDaChon={this.layDanhSachGheDaChon} />
                                        </div>
                                    </div>
                                </div>
                                <div className="seat-picker-note">
                                    <div className="container">
                                        <div className="row">

                                            <div className="col-sm-1">
                                                <div className="seat-item vip" />
                                            </div>
                                            <div className="seat-note">:Ghế vip</div>

                                            <div className="col-sm-1">
                                                <div className="seat-item "/>
                                            </div>
                                            <div className="seat-note">:Ghế thường</div>

                                            <div className="col-sm-1">
                                                <div className="seat-item inactive" />
                                            </div>
                                            <div className="seat-note">:Ghế đã đặt</div>

                                            <div className="col-sm-1">
                                                <div className="seat-item active" />
                                            </div>
                                            <div className="seat-note">:Ghế đang chọn</div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <SelectionDetail 
                                    thongTinPhim={thongTinPhim}
                                    danhSachGhe={this.state.lstGheDaChon}
                                    maLichChieu={this.props.match.params.maLichChieu}
                                    
                                />
                            </div>
                        </div>
                    </section>
                   
                    
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
export default  withRouter(connect(mapStateToProps,mapDispatchToProps)(Theater));