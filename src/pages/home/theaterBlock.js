import React, { Component } from 'react'
import TheaterInfo from "../../Component/TheaterInfo";
import TheaterLogo from "../../Component/TheaterLogo";
import MovieInTheaterBlock from "../../Component/MovieInTheaterBlock";
import * as action from "../../redux/action";
import { NavLink } from "react-router-dom"
import { connect } from "react-redux";

class TheaterBlock extends Component {
    constructor(props){
        super(props)
        this.state={
            danhSachPhimTheoRap:[]
        }
    }
    componentDidMount() {
        this.props.getTheaterSystem();

    }
    
    renderTheaterLogo = () => {
        return this.props.listOfTheaterSystem.map((item, index) => {
          
            return (
                <TheaterLogo 
                    key={index} 
                    logo={item.logo} 
                    biDanh={item.biDanh}
                    maHeThongRap={item.maHeThongRap} 
                    LayDanhSachLichChieuTheoMaHeThongRap={this.props.LayDanhSachLichChieuTheoMaHeThongRap} 
                />
            )
        })
    }

    renderTheaterInfo = () => {
        return this.props.danhSachLichChieuTheoMaHeThongRap.map((item) => {
           return item.lstCumRap.map(item => {
               //console.log("item",item)
                return (
                    <TheaterInfo 
                        tenCumRap={item.tenCumRap} 
                        maCumRap={item.maCumRap}
                        diaChi={item.diaChi} 
                        danhSachPhim={item}  
                        getDanhSachPhimTheoRapDaChon={this.DanhSachPhimTheoRapDaChon}  
                    />
                )
                
            })
        })
    }
    
    DanhSachPhimTheoRapDaChon=(arr)=>{
        let danhSachPhimTheoRap=[];
        let objDanhSachPhim={
            maPhim:"",
            hinhAnh:"",
            tenPhim:"",
            xuatChieu:[]
        }
        if(typeof arr !== "undefined"){
            arr.map(item=>{
                objDanhSachPhim={...objDanhSachPhim}
                objDanhSachPhim.tenPhim=item.tenPhim
                objDanhSachPhim.maPhim=item.maPhim
                objDanhSachPhim.hinhAnh=item.hinhAnh
                objDanhSachPhim.xuatChieu=item.lstLichChieuTheoPhim
                danhSachPhimTheoRap.push(objDanhSachPhim)
            })
        }
        this.setState({
            danhSachPhimTheoRap
        })
        
    }
    renderPhimTheoRapDaChon=()=>{
        let danhSachPhim=this.state.danhSachPhimTheoRap
        if(danhSachPhim.length >0){
            return danhSachPhim.map(item=>{
                 return (
                     <MovieInTheaterBlock
                        maPhim={item.maPhim}
                        hinhAnh={item.hinhAnh}
                        tenPhim={item.tenPhim}
                        lstXuatChieu={item.xuatChieu}
                    />
                 )
            })
        }
    }

    render() {
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
                                    {this.renderPhimTheoRapDaChon()}
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
        danhSachLichChieuTheoMaHeThongRap: state.movieReducer.danhSachLichChieuTheoMaHeThongRap,
        danhSachPhimTheoMaLichChieu:state.movieReducer.chiTietPhongChieu
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
