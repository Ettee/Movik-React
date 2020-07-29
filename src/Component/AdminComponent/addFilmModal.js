import React, { Component } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import {connect} from "react-redux";
import * as action from "../../redux/action";
import MomentLocaleUtils, {
    formatDate,
    parseDate
} from "react-day-picker/moment";
import "moment/locale/it";
import swal from 'sweetalert';
class AddFilmModal extends Component {
    constructor(props){
        super(props)
        this.state={
            selectedImg:null,
            tenPhim: "",
            biDanh: "",
            trailer: "",
            moTa: "",
            maNhom: "GP09",
            ngayKhoiChieu: "",
            danhGia: 0,
            imgUrl:"",
            
        }
    }
    imgUpLoadHandler=(e)=>{
        let file= e.target.files[0];
        let reader = new FileReader();
        let imgUrl=reader.readAsDataURL(file);
        
        reader.onloadend = () => {
            this.setState({
                imgUrl: reader.result,
                selectedImg:file,
                biDanh:file.name,
            });
          }
        
    }
    handleInfoOnChange=(e)=>{
        let name=e.target.name
        let value=e.target.value
        this.setState({
            [name]:value
        })
        
    }
    handleOnDateChange=(date)=>{ 
        this.setState({
            ngayKhoiChieu:new Date(date).toLocaleDateString('en-GB')
            
        })
    }
    handleAddMovie=()=>{
        let{selectedImg,tenPhim,trailer,moTa,ngayKhoiChieu,danhGia}=this.state
        if(selectedImg ==='' || tenPhim==='' || trailer ==='' || moTa==='' || ngayKhoiChieu==='' || danhGia===''){
            swal({
                title:"Hoàn thành form trước khi thêm phim ",
                icon:"info"
            })
        }else{
            let formdata=new FormData();
            let newFilm =this.state;
            for (const key in newFilm) {
                formdata.append(key, newFilm[key]);
            }
            let userAD=JSON.parse(localStorage.getItem("userAdmin"))
            console.log(this.state)
            swal({
                text:"Hãy kiểm tra kĩ thông tin trước khi thêm phim",
                icon:"warning",
                dangerMode:true,
                buttons:["Quay lại","Thêm phim"]
            })
            .then(ok=>{
                if(ok){
                    console.log(formdata)
                    this.props.addMovie(formdata,userAD.accessToken)
                    setTimeout(()=>{
                        this.props.reLoad(true)
                        
                    },1600)

                }
            })
        }
    }
    render() {
        const styleForImgUpload={
            width:"100px",
            margin:"10px 0"
        }
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        today = dd + '/' + mm + '/' + yyyy;
        return (
            <div className="modal addMovieModal" id="addMovieModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">Thêm phim</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                            <div className="upload-Img">
                                <img src={this.state.imgUrl===""?`../../img/No_picture.png`:this.state.imgUrl} alt="movie-img" style={styleForImgUpload}/>
                                <div className="upload-box">
                                    <input type="file" onChange={this.imgUpLoadHandler}/>
                                </div>
                            </div>
                            <div className="upload-film-info">
                                <div className="row">
                                    <label className="col-md-3 ">Tên phim:</label>
                                    <input className="col-md-8" type="text" onChange={this.handleInfoOnChange} name="tenPhim" placeholder="Tên phim..."/>
                                </div>
                                <div className="row">
                                    <label className="col-md-3 ">Mô tả</label>
                                    <textarea rows="5" className="col-md-8" onChange={this.handleInfoOnChange}  name="moTa" placeholder="Mô tả..." />
                                </div>
                                <div className="row">
                                    <label className="col-md-3 ">Ngày khởi chiếu:</label>
                                    <DayPickerInput
                                    placeholder="Chọn ngày khởi chiếu"
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
                                <div className="row">
                                    <label className="col-md-3 ">Đánh giá: </label>
                                    <input className="col-md-8" type="number" onChange={this.handleInfoOnChange} max="10" name="danhGia" placeholder="Đánh giá..." />
                                </div>
                                <div className="row">
                                    <label className="col-md-3 ">Trailer: </label>
                                    <input className="col-md-8" type="text" onChange={this.handleInfoOnChange}  name="trailer"placeholder="https://xyz..." />
                                </div>
                            </div>

                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button type="button" className="add-movie" onClick={this.handleAddMovie}>Thêm phim</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addMovie:(frd,token)=>{
            dispatch(action.actAddMovie(frd,token))
        }
        
    }
}
export default connect(null,mapDispatchToProps)(AddFilmModal)