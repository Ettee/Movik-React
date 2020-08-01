import React, { Component } from 'react'
import { connect } from "react-redux";
import * as action from "../../redux/action";
import Select from 'react-select';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import MomentLocaleUtils, {
    formatDate,
    parseDate
} from "react-day-picker/moment";
import "moment/locale/it";
import { TimePicker } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import swal from 'sweetalert';
class bookingManagement extends Component {
    constructor(props) {
        super(props)
        this.state = {
            maPhim: 0,
            tenPhim: "",
            biDanh: "",
            hinhAnh: "",
            ngayKhoiChieu: "",
            tenRap:"",
            maRap:0,
            danhSachRap:[],
            giaVe:0,
            gioChieu:''
        }
    }
    //test
    handleOnDateChange = (date) => {
        this.setState({
            ngayKhoiChieu: new Date(date).toLocaleDateString('en-GB')
        })
    }
    componentDidMount() {
        this.props.layDanhSachPhim()
        this.props.layHeThongRap()
    }
    //format data từ api thành mảng obj để đưa vào React Select
    getDanhSachPhimForSelect = () => {
        let optionsDanhSachPhim = []
        let { danhSachPhim } = this.props
        let objOption = {}
        if (danhSachPhim.length > 0) {
            danhSachPhim.map(item => {
                objOption = {
                    value: item,
                    label: item.tenPhim
                }
                optionsDanhSachPhim.push(objOption)
            })
        }
        return optionsDanhSachPhim
    }
    getDanhSachHeThongRapForSelect = () => {
        let { danhSachHeThongRap } = this.props
        let optionsDanhSachHeThongRap = []
        let objOption = {}
        if (danhSachHeThongRap.length > 0) {
            danhSachHeThongRap.map(item => {
                objOption = {
                    value: item.maHeThongRap,
                    label: item.tenHeThongRap
                }
                optionsDanhSachHeThongRap.push(objOption)
            })
        }
        return optionsDanhSachHeThongRap
    }
    getDanhSachCumRapTheoHeThongForSelect=()=>{
        let { danhSachRapTheoHeThongRap } = this.props
        let optionsDanhSachCumRap = []
        let objOption = {}
        if(danhSachRapTheoHeThongRap.length >0){
            danhSachRapTheoHeThongRap.map(item=>{
                objOption={
                    value:item,
                    label:item.tenCumRap
                }
                optionsDanhSachCumRap.push(objOption)
            })
        }
        return optionsDanhSachCumRap
    }
    getDanhSachRapTheoCumRapForSelect=()=>{
        let { danhSachRap } = this.state
        let optionsdanhSachRapTheoCumRap = []
        let objOption = {}
        if(danhSachRap.length >0){
            danhSachRap.map(item=>{
                objOption={
                    value:item.maRap,
                    label:item.tenRap
                }
                optionsdanhSachRapTheoCumRap.push(objOption)
            })
        }
        return optionsdanhSachRapTheoCumRap
    }
    //react-select onchange
    handleTenPhimOnChange = (phim) => {
        this.setState({
            maPhim: phim.value.maPhim,
            tenPhim: phim.label,
            biDanh: phim.value.biDanh,
            hinhAnh: phim.value.hinhAnh
        })
    }
    handleHeThongRapOnChange=(rap)=>{
        this.props.layDanhSachRapTheoHeThongRap(rap.value) 
    }
    handleCumRapOnChange=(cumRap)=>{
        this.setState({
            tenRap:cumRap.value.tenCumRap,
            danhSachRap:cumRap.value.danhSachRap
        }) 
    }
    handleRapOnChange=(rap)=>{
        this.setState({
            maRap:rap.value
        })
    }
    handleGiaVeOnChange=(giaVe)=>{
        this.setState({
            giaVe:giaVe.value
        })
    }
    handleOnClickAddShowTime=()=>{
        let obj={
            maPhim:this.state.maPhim,
            ngayChieuGioChieu:this.state.ngayKhoiChieu+' '+this.state.gioChieu,
            maRap:this.state.maRap,
            giaVe:this.state.giaVe
        }
        let userAD=JSON.parse(localStorage.getItem('userAdmin'))
        console.log(obj)
        if(this.state.maPhim===0 || this.state.ngayKhoiChieu==="" ||this.state.maRap === 0 || this.state.giaVe===0){
            swal({
                text:"Hoàn thành form trước khi thêm lịch chiếu",
                icon:"info"
    
            })
        }else{
            swal({
                title:`Xác nhận tạo lịch chiếu cho phim ${this.state.tenPhim}`,
                icon:"warning",
                buttons:["Quay lại","Thêm lịch chiếu"]
            }).then(ok=>{
                if(ok){
                    this.props.themLichChieu(obj,userAD.accessToken)
                    
                }
            })
        }
    }
    renderShowTimeInfo=()=>{
        if(this.state.hinhAnh===""){
            return (
                <div className="not-available">
                    Chưa có phim nào được chọn
                </div>
            )
        }else{
            const style = {
                width: "150px"
            }
            return (
                <div className="showTimePreview">
                    <div className="row">
                        <div className="film-poster-preview col-md-5 d-flex justify-content-center " >
                            <img src={this.state.hinhAnh} alt={this.state.biDanh} style={style} />
                        </div>
                        <div className="info-preview col-md-7">
                            <div className="tenPhim-preview my-1">{this.state.tenPhim}</div>
                            <div className="ngayKhoiChieu-preview my-1">{this.state.ngayKhoiChieu}</div>
                            <div className="rap-preview my-1">{this.state.tenRap === "" ? "" : this.state.tenRap}</div>
                            <div className="maRap-preview my-1">{this.state.maRap === "" ? "" : "Mã rạp: " + this.state.maRap}</div>
                            <div className="giaVe-preview my-1">{this.state.giaVe === 0 ? "" : "Giá vé: " + this.state.giaVe + "đ"}</div>
                        </div>
                    </div>
                    <div className="addShowTime">
                        {this.state.hinhAnh === "" ? "" : <button onClick={this.handleOnClickAddShowTime}>Thêm lịch chiếu</button>}
                    </div>
                </div>
            )
        }
    }
    handleTimeOnChange=(time, timeString)=>{
        this.setState({
            gioChieu:timeString
        })
    }
    render() {
        
        //options cho React-Select
        const optionsTenPhim = this.getDanhSachPhimForSelect()
        const optionsDanhSachHeThongRap = this.getDanhSachHeThongRapForSelect()
        const optionsDanhSachCumRap =this.getDanhSachCumRapTheoHeThongForSelect()
        const optionsDanhSachRapTheoCumRap=this.getDanhSachRapTheoCumRapForSelect()
        const optionsGiaVe = [
            { value: 75000, label: '75.000đ' },
            { value: 90000, label: '90.000đ' }
        ]
        
        return (
            <div className="bookingManagement">
                <div className="taoLichChieuBox"> 
                    <div className="title my-2">Thêm lịch chiếu</div>    
                        <div className="d-flex info-box" >
                            <div className="infoShowTime mr-4">
                                <div className="chonMaPhim my-2">
                                    <Select
                                        placeholder="Chọn phim"
                                        isSearchable
                                        autoFocus
                                        options={optionsTenPhim}
                                        onChange={this.handleTenPhimOnChange}
                                    />
                                </div>
                                <div className="d-flex">
                                    <div className="chonNgayGioChieu my-2">
                                        <DayPickerInput
                                            placeholder="Chọn ngày chiếu"
                                            format="DD/MM/YYYY"
                                            formatDate={formatDate}
                                            parseDate={parseDate}
                                            dayPickerProps={{
                                                locale: "en",
                                                localeUtils: MomentLocaleUtils
                                            }}
                                            disabled={false}
                                            onDayChange={this.handleOnDateChange}
                                        />
                                    </div>
                                    <div className="chonGioChieu m-2">
                                        <TimePicker onChange={this.handleTimeOnChange} defaultValue={moment('00:00:00', 'HH:mm:ss')} />
                                    </div>
                                </div>
                                <div className="chonHeThongRap my-2">
                                    <Select
                                        placeholder="Chọn hệ thống rạp"
                                        isSearchable
                                        autoFocus
                                        options={optionsDanhSachHeThongRap}
                                        onChange={this.handleHeThongRapOnChange}
                                    />
                                </div>
                                <div className="chonRap my-2">
                                    <Select
                                        placeholder="Chọn rạp"
                                        isSearchable
                                        autoFocus
                                        options={optionsDanhSachCumRap}
                                        onChange={this.handleCumRapOnChange}
                                        noOptionsMessage={() => 'Chưa chọn hệ thống rạp'}
                                    />
                                </div>
                                <div className="chonMaRap my-2">
                                    <Select
                                        placeholder="Chọn mã rạp"
                                        isSearchable
                                        autoFocus
                                        options={optionsDanhSachRapTheoCumRap}
                                        onChange={this.handleRapOnChange}
                                        noOptionsMessage={() => 'Chưa chọn rạp'}
                                    />
                                </div>
                                <div className="chonGiaVe my-2">
                                    <Select
                                        placeholder="Chọn giá vé"
                                        options={optionsGiaVe}
                                        isSearchable
                                        autoFocus
                                        onChange={this.handleGiaVeOnChange}
                                        noOptionsMessage={() => 'Chưa chọn rạp'}
                                    />
                                </div>
                            </div>
                            {this.renderShowTimeInfo()}
                        </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        danhSachPhim: state.movieReducer.listMovie,
        danhSachHeThongRap: state.movieReducer.listOfTheaterSystem,
        danhSachRapTheoHeThongRap:state.movieReducer.thongTinCumRapTheoHeThongRap
    }
}
const mapDispatchToProps = dispatch => {
    return {
        layDanhSachPhim: () => {
            dispatch(action.actGetListMovieAPI())
        },
        layHeThongRap: () => {
            dispatch(action.actLayThongTinHeThongRap())
        },
        layDanhSachRapTheoHeThongRap:(maRap)=>{
            dispatch(action.actLayThongTinCumRapTheoHeThongRap(maRap))
        },
        themLichChieu:(obj,token)=>{
            dispatch(action.actTaoLichChieu(obj,token))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(bookingManagement)