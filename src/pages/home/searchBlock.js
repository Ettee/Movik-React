import React, { Component } from 'react';
import * as action from "../../redux/action";
import { connect } from "react-redux";
import Select from 'react-select';
import { NavLink } from 'react-router-dom';
import swal from 'sweetalert';
import { withRouter } from 'react-router-dom';
import * as service from ".//homeService";
import * as moment from 'moment'
class SearchBlock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            thongtinXuatChieu:null,
            movieSelected:'',
            rapSelected:'',
            ngayChieuSelected:'',
            xuatChieuSelected:'',
            isMovieSelected:false,
            isRapSelected:false,
            isNgayChieuSelected:false,
            isXuatChieuSelected:false,
            maLichChieu:'',
            listMovie:[],
            listTheater:[],
            listDateShowtime:[],
            listTimeShowTime:[]

        }
    }
    componentDidMount() {
        this.renderListMovie();
    }
    customTheme(theme) {
        return {
            ...theme,
            colors: {
                ...theme.colors,
                primary25: 'orange',
                primary: '#ffc107'
            }
        }
    }
    componentWillUnmount(){
        this.props.isPageReady(false)
        
    }
    //render ra option phim
    renderListMovie=()=>{
        let data = service.getAllMovieForSearchBlock().map(x=>{return {label:x.tenPhim,value:x.maPhim}});
        this.setState({
            listMovie:data
        })
        if(data.length!==0){
            this.props.isPageReady(true)
        }
    }
    handleOnMovieSelection=(val)=>{
        let {isRapSelected,isNgayChieuSelected,isXuatChieuSelected}=this.state;
        let data = service.getTheaterByMovieID(val.value).map(x=>{return {label:x.tenRap,value:x.maRap}});
        this.setState({
            listTheater:data,
            isMovieSelected:true,
            movieSelected:val
        })
        // khi user đổi film => clear hết option còn lại
        if(isRapSelected || isNgayChieuSelected || isXuatChieuSelected){
            this.setState({
                rapSelected:'',
                ngayChieuSelected:'',
                xuatChieuSelected:'',
            })
        }
    }

    handleOnRapSelection=(val)=>{
        let {isNgayChieuSelected,isXuatChieuSelected}=this.state;
        let data = service.getDateShowTimeByMovieAndTheater(this.state.movieSelected.value,val.value).map(x=>{return{label:moment(x.ngayChieu).format('L'),value:x.ngayChieu}});

        this.setState({
            rapSelected:val,
            isRapSelected:true,
            listDateShowtime:data
        })

        // khi user đổi rạp => clear hết option còn lại
        if(isNgayChieuSelected || isXuatChieuSelected){
            this.setState({
                ngayChieuSelected:'',
                xuatChieuSelected:'',
            })
        }
    }

    handleOnNgayChieuSelection=(val)=>{
        let {isXuatChieuSelected}=this.state;
        let data = service.getStartTimeByMovieTheaterAndDate(this.state.movieSelected.value,this.state.rapSelected.value,val.value).map(x=>{return {label:moment(x.gioChieu).format('LT'),value:x.maXuatChieu}});
        this.setState({
            ngayChieuSelected:val,
            isNgayChieuSelected:true,
            listTimeShowTime:data
        })
        // khi user đổi ngày chiếu => clear hết option còn lại
        if(isXuatChieuSelected){
            this.setState({
                xuatChieuSelected:'',
            })
        }
    }
    handleOnXuatChieuChange=(val)=>{
        this.setState({
            xuatChieuSelected:val,
            maLichChieu:val.value,
            isXuatChieuSelected:true
        })
    }
    renderButton = () => {
        let filmInput = this.state.isMovieSelected;
        let theaterInput = this.state.isRapSelected;
        let dateInput = this.state.ngayChieuSelected;
        let timeInput = this.state.xuatChieuSelected;
        if (filmInput && theaterInput && dateInput && timeInput) {
            //console.log(this.state.maLichChieu)
            return (
                <NavLink to={`/pick-seat/${this.state.maLichChieu}`}>
                    <button className="btn  btn-buynow text-uppercase active " >
                        Mua vé ngay
                    </button>
                </NavLink>
            )


            // swal({
            //     title: "Bạn cần đăng nhập trước khi đặt vé",
            //     icon: "info"    
            // }).then((ok) => {
            //     if (ok) {
            //         window.location.reload()
            //     }
            // })
            // return (
            //     <button className="btn btn-buynow text-uppercase active " >
            //         Mua vé ngay
            //     </button>
            // )
            

        } else {
            return (
                <button className="btn  btn-buynow text-uppercase" >
                    Mua vé ngay
                </button>
            )
        }
    }
    render() {
        return (
            <section className={this.props.themeMode?"search-movie-section search-movie-section-dark ":"search-movie-section search-movie-section-light "}>
                <div className={this.props.themeMode ?"search-movie-box search-movie-box-dark":"search-movie-box search-movie-box-light"}>
                    <div className="row">
                        <div className="col-md-4 ">
                            {/* Danh sach phim */}
                            <div className="search-item-for-movie-ticket form-group ">
                                <Select
                                    onChange={this.handleOnMovieSelection}
                                    options={this.state.listMovie}
                                    value={this.state.movieSelected}
                                    theme={this.customTheme}
                                    placeholder="Phim"
                                    isSearchable
                                    autoFocus
                                />
                            </div>
                        </div>
                        <div className="col-md-2">
                            {/* Danh sach rap */}
                            <div className="search-item-for-movie-ticket form-group">                               
                                <Select
                                    placeholder="Rạp"
                                    theme={this.customTheme}
                                    options={this.state.listTheater}
                                    onChange={this.handleOnRapSelection}
                                    value={this.state.rapSelected}
                                    noOptionsMessage={() => 'Chưa chọn phim'}  
                                />
                            </div>
                        </div>
                        <div className="col-md-2">
                            {/* Danh sach ngay chieu */}
                            <div className="search-item-for-movie-ticket form-group">                                
                                <Select
                                    placeholder="Ngày chiếu"
                                    options={this.state.listDateShowtime}
                                    onChange={this.handleOnNgayChieuSelection}
                                    value={this.state.ngayChieuSelected}
                                    theme={this.customTheme}
                                    noOptionsMessage={() => 'Chưa chọn rạp'}
                                />
                            </div>
                        </div>
                        <div className="col-md-2">
                            {/* Danh sach xuat chieu */}
                            <div className="search-item-for-movie-ticket form-group">
                                <Select
                                    placeholder="Xuất chiếu"
                                    options={this.state.listTimeShowTime}
                                    onChange={this.handleOnXuatChieuChange}
                                    value={this.state.xuatChieuSelected}
                                    theme={this.customTheme}
                                    noOptionsMessage={() => 'Chưa chọn ngày chiếu'}
                                />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="search-item-for-movie-ticket">
                                {this.renderButton()}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
const mapStateToProps = state => {
    return {
        listMovie: state.movieReducer.listMovie,
        infoShow: state.movieReducer.infoShow,
        themeMode:state.userReducer.isDarkModeOn
    };
}
const mapDispatchToProps = dispatch => {
    return {
        getListMovie: () => {
            dispatch(action.actGetListMovieAPI());
        },
        getInfoShow: (movieID) => {
            dispatch(action.actGetInfoShowByMovieID(movieID));
        }
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBlock));