import React, { Component } from 'react';
import * as action from "../../redux/action";
import { connect } from "react-redux";
import Select from 'react-select';
import { NavLink } from 'react-router-dom';
import swal from 'sweetalert';
import { withRouter } from 'react-router-dom';
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
            maLichChieu:''

        }
    }
    componentDidMount() {
        this.props.getListMovie();
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
        let objOption={};
        let danhSachPhim=[];
        
        this.props.listMovie.forEach((item)=>{
            objOption={
                label:item.tenPhim,
                value:item.maPhim
            }
            danhSachPhim.push(objOption)
        })
        if(danhSachPhim.length!==0){
            this.props.isPageReady(true)
        }
        return danhSachPhim
    }
    handleOnMovieSelection=(val)=>{
        let {isRapSelected,isNgayChieuSelected,isXuatChieuSelected}=this.state;
        this.setState({
            movieSelected:val,
            isMovieSelected:true
        })
        // khi user đổi film => clear hết option còn lại
        if(isRapSelected || isNgayChieuSelected || isXuatChieuSelected){
            this.setState({
                rapSelected:'',
                ngayChieuSelected:'',
                xuatChieuSelected:'',
            })
        }
        this.props.getInfoShow(val.value);
    }
    //render ra option rap
    renderRapOptions=()=>{
        let {infoShow}=this.props;
        let objOption={};
        let rapOptions=[]
        if(Object.keys(infoShow).length>0){
            infoShow.heThongRapChieu.forEach((item)=>{
                item.cumRapChieu.forEach((item)=>{
                    objOption={
                        label:item.tenCumRap,
                        value:item.tenCumRap
                    }
                    rapOptions.push(objOption)
                })
            })
        }
        return rapOptions;
    }
    handleOnRapSelection=(val)=>{
        let {isNgayChieuSelected,isXuatChieuSelected}=this.state;
        this.setState({
            rapSelected:val,
            thongtinXuatChieu:this.props.infoShow,
            isRapSelected:true
        })
        // khi user đổi rạp => clear hết option còn lại
        if(isNgayChieuSelected || isXuatChieuSelected){
            this.setState({
                ngayChieuSelected:'',
                xuatChieuSelected:'',
            })
        }
    }
    //render ra option ngay chieu
    renderNgayChieuOptions=()=>{
        let {rapSelected,thongtinXuatChieu}=this.state;
        let objOption={};
        let danhSachNgayChieu=[];
        let set = new Set();
        if(thongtinXuatChieu !== null){
            thongtinXuatChieu.heThongRapChieu.forEach((item1)=>{
                    item1.cumRapChieu.forEach((item2)=>{
                        if(item2.tenCumRap===rapSelected.value){
                            item2.lichChieuPhim.forEach((item3)=>{
                                set.add(new Date(item3.ngayChieuGioChieu).toLocaleDateString());
                            })
                        }
                    })
            })
            let arr = Array.from(set)
            arr.forEach((item)=>{
                objOption={
                    label:item,
                    value:item
                }
                danhSachNgayChieu.push(objOption)
            })
            return danhSachNgayChieu
        }
        
    }
    handleOnNgayChieuSelection=(val)=>{
        let {isXuatChieuSelected}=this.state;
        this.setState({
            ngayChieuSelected:val,
            isNgayChieuSelected:true
        })
        // khi user đổi ngày chiếu => clear hết option còn lại
        if(isXuatChieuSelected){
            this.setState({
                xuatChieuSelected:'',
            })
        }
    }
    //render ra option xuatchieu
    renderXuatChieuOptions=()=>{
        let {thongtinXuatChieu,ngayChieuSelected,rapSelected}=this.state;
        let objOption={}
        let danhSachXuatChieu=[]
        if(thongtinXuatChieu !== null){
            thongtinXuatChieu.heThongRapChieu.forEach((item1)=>{
                item1.cumRapChieu.forEach((item2)=>{
                    if(item2.tenCumRap===rapSelected.value){
                        item2.lichChieuPhim.forEach((item3)=>{
                            if(new Date(item3.ngayChieuGioChieu).toLocaleDateString()===ngayChieuSelected.value){
                                objOption={
                                    label:new Date(item3.ngayChieuGioChieu).toLocaleTimeString(),
                                    value:item3.maLichChieu
                                }
                                danhSachXuatChieu.push(objOption)
                            }
                        })
                    }
                })
            })
            return danhSachXuatChieu;
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
            if (localStorage.getItem("userKhachHang")) {
                return (
                    <NavLink to={`/pick-seat/${this.state.maLichChieu}`}>
                        <button className="btn  btn-buynow text-uppercase active " >
                            Mua vé ngay
                        </button>
                    </NavLink>
                )
            } else {
                if (localStorage.getItem("userAdmin")) {
                    swal({
                        title: "Tài khoản admin không thể đặt vé",
                        icon: "info"    
                    }).then((ok) => {
                        if (ok) {
                            window.location.reload()
                        }
                    })
                    return (
                        <button className="btn btn-buynow text-uppercase active " >
                            Mua vé ngay
                        </button>
                    )
                }
                else{
                    swal({
                        title: "Bạn cần đăng nhập trước khi đặt vé",
                        icon: "info"    
                    }).then((ok) => {
                        if (ok) {
                            window.location.reload()
                        }
                    })
                    return (
                        <button className="btn btn-buynow text-uppercase active " >
                            Mua vé ngay
                        </button>
                    )
                }
            }

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
                                    options={this.renderListMovie()}
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
                                    options={this.renderRapOptions()}
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
                                    options={this.renderNgayChieuOptions()}
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
                                    options={this.renderXuatChieuOptions()}
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