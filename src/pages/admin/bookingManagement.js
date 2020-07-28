import React, { Component } from 'react'
import {connect} from "react-redux";
import * as action from "../../redux/action";
import Select from 'react-select';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import MomentLocaleUtils, {
    formatDate,
    parseDate
} from "react-day-picker/moment";
import "moment/locale/it";
import swal from 'sweetalert';
class bookingManagement extends Component {
    constructor(props){
        super(props)
    }
    handleOnDateChange=()=>{
        
    }
    componentDidMount(){
        this.props.layDanhSachPhim()
    }
    render() {
        console.log(this.props.danhSachPhim)
        return (
            <div className="bookingManagement">
               <div className="taoLichChieuBox container">
                    <div className="row">
                        <div className="chonMaPhim col-md-3">
                            <Select
                                placeholder="Chọn phim"
                                isSearchable
                                autoFocus
                            />
                        </div>
                        <div className="chonNgayGioChieu col-md-3">
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
                        <div className="chonMaRap col-md-3">

                        </div>
                        <div className="chonGiaVe col-md-3">

                        </div>
                    </div>
               </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
       danhSachPhim:state.movieReducer.listMovie
       
    }
}
const mapDispatchToProps = dispatch => {
    return {
        layDanhSachPhim:()=>{
            dispatch(action.actGetListMovieAPI())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(bookingManagement)