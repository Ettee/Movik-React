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
            heThongRapChieu: [],
            tenCumRap: '',
            maHeThongRap: '',
            xuatChieu: '',
            checkFilmInput: false,
            checkTheaterInput: false,
            checkDateInput: false,
            checkTimeInput: false,
            indexOfXuatChieu: 0,
            maLichChieu: 0,
            refresh: 1,
            isPhimLoading:true,
            isRapLoading:true,
            isNgayChieuLoading:true,
            isXuatChieuLoading:true

        }
    }
    componentDidMount() {
        this.props.getListMovie();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && typeof nextProps.infoShow !== "undefined") {
            this.setState({
                heThongRapChieu: nextProps.infoShow.heThongRapChieu
            })
        }
    }
    //lấy ra thông tin của phim đã chọn
    getMovieSelectedIDForInfoShow = (selectedOption) => {
        //console.log(selectedOption)
        this.props.getInfoShow(selectedOption.value)
        this.setState({
            checkFilmInput: true,
            isPhimLoading:false
        })
    }
    //set tên rạp chiếu tương ứng vs phim đã chọn
    getOptionTheaterName = (variable) => {
        let options;

        if (typeof variable !== 'undefined') {
            // the variable is defined
            options = variable.map(item => ({
                label: item.cumRapChieu[0].tenCumRap,
                value: item.maHeThongRap
            }))
            return options
        }

    }
    //lấy ra tên rạp chiếu đã chọn
    getPickedTheaterName = (selectedOption) => {
        this.setState({
            tenCumRap: selectedOption.label,
            maHeThongRap: selectedOption.value,
            checkTheaterInput: true,
            isRapLoading:false
        })

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
    renderShowTime = () => {
        let obj = {
            dateTimeArr: [],
            maLichChieuArr: []
        }
        if (typeof this.state.heThongRapChieu !== "undefined") {
            let arr = this.state.heThongRapChieu;
            arr.map(item => {
                if (item.maHeThongRap === this.state.maHeThongRap) {
                    item.cumRapChieu.map(item => {
                        if (item.tenCumRap === this.state.tenCumRap) {
                            item.lichChieuPhim.map(item => {
                                obj.maLichChieuArr.push(item.maLichChieu)
                                obj.dateTimeArr.push(item.ngayChieuGioChieu)

                            })
                        }
                    })
                }
            })
        }
        return obj;
    }
    getTime = (pickedDate) => {
        let objRenderShowTime = this.renderShowTime();
        let ShowTimeArr = objRenderShowTime.dateTimeArr;
        let time;
        ShowTimeArr.map((item, index) => {
            if (typeof pickedDate !== 'undefined' && index === pickedDate.value) {
                time = new Date(item).toLocaleTimeString()
            }
        })
        this.setState({
            xuatChieu: time,
            checkDateInput: true,
            indexOfXuatChieu: pickedDate.value,
            isNgayChieuLoading:false

        })
    }
    getMaLichChieu = () => {
        let objRenderShowTime = this.renderShowTime();
        let maLichChieuArr = objRenderShowTime.maLichChieuArr;
        let maLichChieu;
        maLichChieuArr.map((item, index) => {
            if (index === this.state.indexOfXuatChieu) {
                maLichChieu = item
            }
        })
        this.setState({
            maLichChieu: maLichChieu
        })

    }
    checkTimeInput = () => {
        this.setState({
            checkTimeInput: true,
            isXuatChieuLoading:false
        })
        this.getMaLichChieu()
    }

    renderButton = () => {
        let filmInput = this.state.checkFilmInput;
        let theaterInput = this.state.checkTheaterInput;
        let dateInput = this.state.checkDateInput;
        let timeInput = this.state.checkTimeInput;
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
    //render ra tên các bộ phim 
    renderMovieName = () => {
        return this.props.listMovie.map((movie) => movie)
    }
    render() {
        //lấy ra danh sách tên phim
        let ListMovieOption = this.renderMovieName();
        const optionName = ListMovieOption.map(item => ({
            label: item.tenPhim,
            value: item.maPhim
        }))
        //lấy danh sách ngày chiếu 
        let objRenderShowTime = this.renderShowTime();
        let showTimeArr = objRenderShowTime.dateTimeArr;
        let DateArr = []
        showTimeArr.map(item => {
            DateArr.push(new Date(item).toLocaleDateString())
        })
        let optionsDate = DateArr.map((item, index) => ({
            label: item,
            value: index
        }))
        //lấy danh sách ngày chiếu 
        let timeArr = [];
        if (this.state.xuatChieu !== "") {
            timeArr.push(this.state.xuatChieu)
        }
        let optionsTime = timeArr.map(item => ({
            label: item,
            value: item
        }))
        return (
            <section className="search-movie-section">
                <div className="search-movie-box">

                    <div className="row">
                        <div className="col-sm-4">
                            <div className="search-item-for-movie-ticket form-group ">
                                <Select
                                    onChange={this.getMovieSelectedIDForInfoShow}
                                    options={optionName}
                                    theme={this.customTheme}
                                    placeholder="Phim"
                                    isSearchable
                                    isLoading={this.state.isPhimLoading}
                                    autoFocus
                                />
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="search-item-for-movie-ticket form-group">
                                <Select
                                    placeholder="Rạp"
                                    theme={this.customTheme}
                                    options={this.getOptionTheaterName(this.props.infoShow.heThongRapChieu)}
                                    onChange={this.getPickedTheaterName}
                                    noOptionsMessage={() => 'Chưa chọn phim'}
                                    isLoading={this.state.isRapLoading}
                                />
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="search-item-for-movie-ticket form-group">
                                <Select
                                    placeholder="Ngày chiếu"
                                    options={optionsDate}
                                    onChange={this.getTime}
                                    theme={this.customTheme}
                                    noOptionsMessage={() => 'Chưa chọn rạp'}
                                    isLoading={this.state.isNgayChieuLoading}
                                />
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="search-item-for-movie-ticket form-group">
                                <Select
                                    placeholder="Xuất chiếu"
                                    options={optionsTime}
                                    theme={this.customTheme}
                                    onChange={this.checkTimeInput}
                                    noOptionsMessage={() => 'Chưa chọn ngày chiếu'}
                                    isLoading={this.state.isXuatChieuLoading}
                                />
                            </div>
                        </div>
                        <div className="col-sm-2">
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
        infoShow: state.movieReducer.infoShow
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