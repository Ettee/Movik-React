import React, { Component } from 'react'
import TheaterInfo from "../../Component/TheaterInfo";
import TheaterLogo from "../../Component/TheaterLogo";
import MovieInTheaterBlock from "../../Component/MovieInTheaterBlock";
import * as action from "../../redux/action";
import { NavLink } from "react-router-dom"
import { connect } from "react-redux";

class TheaterBlock extends Component {
    
    
    getMaHeThongRap = (maHeThongRap) => {
        console.log(maHeThongRap)
        return maHeThongRap
        //da lay đc mã
    }
    componentDidMount() {
        this.props.getTheaterSystem();

    }
    renderTheaterLogo = () => {
        return this.props.listOfTheaterSystem.map((item, index) => {
            return (
                <TheaterLogo key={index} logo={item.logo} getMaHeThongRap={this.getMaHeThongRap} maHeThongRap={item.maHeThongRap} LayDanhSachLichChieuTheoMaHeThongRap={this.props.LayDanhSachLichChieuTheoMaHeThongRap} />
            )
        })
    }

    renderTheaterInfo = () => {
        return this.props.danhSachLichChieuTheoMaHeThongRap.map((item) => {
           return item.lstCumRap.map(item => {
               
                return (
                    <TheaterInfo tenCumRap={item.tenCumRap} diaChi={item.diaChi} danhSachPhim={item.danhSachPhim[0]}  getDanhSachXuatChieu={this.getDanhSachXuatChieu}  />
                )
                
            })
        })
    }
    
    getDanhSachXuatChieu=(arr)=>{
        console.log(arr)
    }
    text=()=>{
        this.props.danhSachLichChieuTheoMaHeThongRap.map((item)=>{
            item.lstCumRap.map(item=>{
                console.log(item)
                console.log('item.danhsachphim',item.danhSachPhim)
                //in ra tên phim theo rạp ở đây
                item.danhSachPhim.map(item=>{
                    console.log("itemitem.danhSachPhim[0].lstLichChieuTheoPhim",item.lstLichChieuTheoPhim)
                })
                // item.danhSachPhim[0].lstLichChieuTheoPhim.map(item=>{
                //     console.log(item)
                // })
            })
        })
    }


    render() {
        this.text()
        
        return (
            <section className="theater-section" id="theater-block-home">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1 logo-column">
                            <div className="pick-logo-theater">
                                <ul className="nav nav-pills">
                                    {this.renderTheaterLogo()}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 theater-column">
                            <div className="pick-theater">
                                <div className="tab-content">
                                    <div className="tab-pane container active" id="cgv-theater">
                                        <ul className="nav nav-pills">
                                            {this.renderTheaterInfo()}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 show-column">
                            <div className="pick-movie-show">
                                <div className="tab-pane container first-page active" id="cgv-1">
                                    
                                <MovieInTheaterBlock />
                                    
                                    
                                </div>                             
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        listOfTheaterSystem: state.movieReducer.listOfTheaterSystem,
        danhSachLichChieuTheoMaHeThongRap: state.movieReducer.danhSachLichChieuTheoMaHeThongRap
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getTheaterSystem: () => {
            dispatch(action.actLayThongTinHeThongRap())
        },
        LayDanhSachLichChieuTheoMaHeThongRap: (maHeThongRap) => {
            dispatch(action.actLayLichChieuHeThongRap(maHeThongRap))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TheaterBlock);
