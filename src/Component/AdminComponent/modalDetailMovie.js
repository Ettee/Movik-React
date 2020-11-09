import React, { Component } from 'react';
import {connect} from "react-redux";
import * as action from "../../redux/action";
import swal from 'sweetalert';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils, {
    formatDate,
    parseDate
} from "react-day-picker/moment";
import "moment/locale/it";
class ModalDetailMovie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            biDanh: "",
            danhGia: 11,
            hinhAnh: null,
            maNhom: "GP09",
            maPhim: "",
            moTa: "",
            ngayKhoiChieu: "",
            tenPhim: "",
            trailer: "",
            isEdit: false,
            imgUrl:'',
            isEditImg:false
           
        }
    }

    handleOnClickEdit = (biDanh, danhGia, hinhAnh, maPhim, moTa, ngayKhoiChieu, tenPhim, trailer) => {
        this.setState({
            biDanh: biDanh,
            danhGia: danhGia,
            hinhAnh: hinhAnh,
            maPhim: maPhim,
            moTa: moTa,
            ngayKhoiChieu: ngayKhoiChieu,
            tenPhim: tenPhim,
            trailer: trailer,
            isEdit: true
        })
    }
    confirmEditMovie=()=>{
        let date=new Date(this.state.ngayKhoiChieu).toLocaleDateString('en-GB')
        let obj={
            maPhim: this.state.maPhim,
            tenPhim: this.state.tenPhim,
            biDanh: this.state.biDanh,
            trailer: this.state.trailer,
            hinhAnh: this.state.hinhAnh,
            moTa: this.state.moTa,
            maNhom: this.state.maNhom,
            ngayKhoiChieu: date,
            danhGia: this.state.danhGia
        }
        let userAD=JSON.parse(localStorage.getItem("userAdmin"))
        let formdata= new FormData()
        for (const key in obj) {
            formdata.append(key, obj[key]);
        }
        swal({
            title:"Xác nhận cập nhật ",
            icon:"info",
            buttons:["Quay lại","Xác nhận"],
            dangerMode:true
        }).then((ok)=>{
            if(ok){
                if(this.state.isEditImg){
                    this.props.updatePhimCoHinh(formdata,userAD.accessToken)
                }else{
                    this.props.updatePhimKhongHinh(obj,userAD.accessToken)
                }
                setTimeout(()=>{
                    this.props.reLoad(true)
                    this.setState({
                        isEditImg:false,
                        isEdit:false
                    })
                },1600)
            }
        })
    }
    cancelEdit=()=>{
        this.setState({
            isEdit: false,
            hinhAnh:null
            
        })
    }
    handleOnDateChange=(date)=>{
        this.setState({
            ngayKhoiChieu:date
        })
    }
    handleOnChange=(e)=>{
        let name=e.target.name
        let value=e.target.value
        this.setState({
            [name]:value
            
        })
    }
    handleDeleteMovie=(maPhim)=>{
        let userAD=JSON.parse(localStorage.getItem("userAdmin"))
        swal({
            title:"Bạn đang chuẩn bị xóa 1 bộ phim",
            icon:"warning",
            text:"Bộ phim sẽ không thể phục hồi sau khi xóa",
            buttons:["Hủy","Xóa"],
            dangerMode:true
        }).then((ok)=>{
            if(ok){
                this.props.deletePhim(maPhim,userAD.accessToken)
                setTimeout(()=>{
                    this.props.reLoad(true)
                },1600)
            }
        })
    }
    imgUpLoadHandler=(e)=>{
        let file= e.target.files[0];
        file.responseType = "blob";
        let reader = new FileReader();
        let imgUrl=reader.readAsDataURL(file);
        
        reader.onloadend = () => {
            this.setState({
                imgUrl: reader.result,
                hinhAnh:file,
                biDanh:file.name,
                isEditImg:true
            });
        }
        
    }
    renderModalContent = () => {
        let { dataMovie } = this.props
        if (this.state.isEdit) {
            return (
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close text-white" data-dismiss="modal" onClick={this.cancelEdit}>×</button>
                    </div>
                    <div className="modal-body">
                        <div className="movie-poster d-flex align-items-center flex-column">
                            <img src={typeof this.state.hinhAnh === 'string'  ? dataMovie.hinhAnh : this.state.imgUrl} alt={this.state.biDanh === "" ? dataMovie.biDanh : this.state.biDanh} style={{ width: "100px" }} />
                            <div className="my-2 w-100">
                                <input className="w-100 " type="file" onChange={this.imgUpLoadHandler}/>
                            </div>
                        </div>
                        <div className="row movie-info-admin">
                            <div className="col-md-6">
                                <label className="mx-1">Mã phim:</label>
                                <input  type="text "  className="disabled" name="maPhim"  disabled value={dataMovie.maPhim } />
                            </div>
                            <div className="col-md-6 ">
                                <label className="mx-1">Tên phim:</label>
                                <input type="text " name="tenPhim" onChange={this.handleOnChange} value={this.state.tenPhim} />
                            </div>
                        </div>
                        <div className="row movie-info-admin">
                            <div className="col-md-6">
                                <label className="mx-1">Ngày khởi chiếu:</label>
                                <DayPickerInput
                                    value={this.state.ngayKhoiChieu}
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
                            <div className="col-md-6 ">
                                <label className="mx-1">Đánh giá:</label>
                                <input type="number" name="danhGia" max="10" onChange={this.handleOnChange} value={this.state.danhGia} />
                            </div>
                        </div>
                        <div className="movie-info-admin">
                            <label className="mx-1">Mô tả:</label>
                            <textarea className="moTa" name="moTa" onChange={this.handleOnChange} value={this.state.moTa} rows="3"></textarea>
                        </div>
                        <div className="movie-info-admin">
                            <label className="mx-1">Trailer:</label>
                            <input type="text" name="trailer" onChange={this.handleOnChange} value={this.state.trailer} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <i className="fas fa-check check-edit mx-3"
                            onClick={() => {
                                this.confirmEditMovie()
                            }
                            } data-dismiss="modal"></i>
                        <i className="far fa-times-circle cancel-edit mx-2" onClick={this.cancelEdit} ></i>
                    </div>
                </div>
            )
        }else{
            return (
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close text-white" data-dismiss="modal" onClick={this.cancelEdit}>×</button>
                    </div>
                    <div className="modal-body">
                        <div className="movie-poster d-flex align-items-center flex-column">
                            <img src={ dataMovie.hinhAnh } alt={dataMovie.biDanh } style={{ width: "100px" }} />
                            <div className="my-2 w-100">
                                <input className="w-100 disabled" disabled type="text" value={ dataMovie.hinhAnh } />
                            </div>
                        </div>
                        <div className="row movie-info-admin">
                            <div className="col-md-6">
                                <label className="mx-1">Mã phim:</label>
                                <input className="disabled" type="text" disabled value={ dataMovie.maPhim } />
                            </div>
                            <div className="col-md-6 ">
                                <label className="mx-1">Tên phim:</label>
                                <input className="disabled" type="text " disabled value={dataMovie.tenPhim } />
                            </div>
                        </div>
                        <div className="row movie-info-admin">
                            <div className="col-md-6">
                                <label className="mx-1">Ngày khởi chiếu:</label>
                                <DayPickerInput
                                    className="disabled"
                                    value={dataMovie.ngayKhoiChieu}
                                    format="DD/MM/YYYY"
                                    formatDate={formatDate}
                                    parseDate={parseDate}
                                    dayPickerProps={{
                                    locale: "it",
                                    localeUtils: MomentLocaleUtils
                                    }}
                                    inputProps={{ disabled: true },{className:"disabled"}}
                                    
                                    onDayChange={this.handleOnDateChange}
                                    />
                            </div>
                            <div className="col-md-6 ">
                                <label className="mx-1">Đánh giá:</label>
                                <input className="disabled" type="number" max="10" disabled value={dataMovie.danhGia} />
                            </div>
                        </div>
                        <div className="movie-info-admin">
                            <label className="mx-1">Mô tả:</label>
                            <textarea className="moTa disabled " disabled value={dataMovie.moTa } rows="3"></textarea>
                        </div>
                        <div className="movie-info-admin">
                            <label className="mx-1">Trailer:</label>
                            <input className="disabled" type="text" disabled value={dataMovie.trailer} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <i className="far fa-edit edit-movie mx-3"
                            onClick={() => {
                                this.handleOnClickEdit(dataMovie.biDanh, dataMovie.danhGia, dataMovie.hinhAnh, dataMovie.maPhim, dataMovie.moTa, dataMovie.ngayKhoiChieu, dataMovie.tenPhim, dataMovie.trailer)
                            }
                            }></i>
                        <i className="far fa-trash-alt delete-movie mx-2" onClick={()=>{this.handleDeleteMovie(dataMovie.maPhim)}} data-dismiss="modal"></i>
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div className="modal modal-detail-movie"  data-backdrop="static" data-keyboard="false" id="detailMovieModal">
                <div className="modal-dialog">
                    {this.renderModalContent()}
                </div>
            </div>

        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updatePhimCoHinh:(frd,token)=>{
            dispatch(action.actUpdateMovieCoHinh(frd,token))
        },
        updatePhimKhongHinh:(obj,token)=>{
            dispatch(action.actUpdateMovieKhongHinh(obj,token))
        },
        deletePhim:(maPhim,token)=>{
            dispatch(action.actDeleteMovie(maPhim,token))
        },
    }
}
export default connect(null,mapDispatchToProps)(ModalDetailMovie)