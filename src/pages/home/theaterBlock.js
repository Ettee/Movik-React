import React, { Component, Fragment } from 'react'
import TheaterInfo from "../../Component/TheaterInfo";
import TheaterLogo from "../../Component/TheaterLogo";
import MovieInTheaterBlock from "../../Component/MovieInTheaterBlock";
import * as action from "../../redux/action";
import { connect } from "react-redux";

class TheaterBlock extends Component {
    constructor(props){
        super(props)
        this.state={
            danhSachPhimTheoRap:[],
            thongTinXuatChieuTheoPhim:[],
            phim:false
        }
    }
    componentDidMount() {
        this.props.getTheaterSystem();
        this.getDanhSachChieuTheoPhim();
        
    }
    getDanhSachChieuTheoPhim=()=>{
        let movieID;
        if(window.location.pathname.indexOf("/detail-movie")==!-1){
            movieID =window.location.pathname.replace( /^\D+/g, '');
            this.props.LayThongTinLichChieuTheoPhim(movieID);
            this.setState({
                phim:true
            })
        }
    }
    renderTheaterLogo = () => {
        let {chiTietXuatChieuTheoPhim}=this.props;
        if(!this.state.phim){
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
        else{
            //check if obj is empty
            if(Object.entries(chiTietXuatChieuTheoPhim).length > 0){
                return chiTietXuatChieuTheoPhim.heThongRapChieu.map((item, index) => {
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
        }
    }
    renderTheaterBlock=()=>{
        let {chiTietXuatChieuTheoPhim}=this.props;
        if(Object.entries(chiTietXuatChieuTheoPhim).length > 0 && window.location.pathname.indexOf("/detail-movie")==!-1){
            console.log(chiTietXuatChieuTheoPhim)
            console.log(chiTietXuatChieuTheoPhim.heThongRapChieu.length)
            if(chiTietXuatChieuTheoPhim.heThongRapChieu.length !== 0  ){
                return (
                    <Fragment>
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
                    </Fragment>
                )   
            }else{
                    return(
                        <div className="noShowTime">
                            <p>Phim hiện chưa có xuất chiếu</p>
                        </div>
                    )
            }
        }else{
            return (
                <Fragment>
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
                </Fragment>
            )
        }
    }
    renderTheaterInfo = () => {
        let {chiTietXuatChieuTheoPhim}=this.props;
        if(!this.state.phim){
            return this.props.danhSachLichChieuTheoMaHeThongRap.map((item) => {
                return item.lstCumRap.map(item => {
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
        }else{
            return this.props.danhSachLichChieuTheoMaHeThongRap.map((item) => {

                return item.lstCumRap.map(itemlstCumRap => {
                    return itemlstCumRap.danhSachPhim.map((item)=>{
                        if(item.maPhim===this.props.chiTietXuatChieuTheoPhim.maPhim){
                            return (
                                <TheaterInfo 
                                   tenCumRap={itemlstCumRap.tenCumRap} 
                                   maCumRap={itemlstCumRap.maCumRap}
                                   diaChi={itemlstCumRap.diaChi} 
                                   danhSachPhim={itemlstCumRap}
                                   movieID={chiTietXuatChieuTheoPhim.maPhim}
                                   getDanhSachPhimTheoRapDaChon={this.DanhSachPhimTheoRapDaChon}  
                                />
                            )
                        }
                    })  
                })
             })
        }
        
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
                    {this.renderTheaterBlock()}
                </div>
            </section>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        listOfTheaterSystem: state.movieReducer.listOfTheaterSystem,
        danhSachLichChieuTheoMaHeThongRap: state.movieReducer.danhSachLichChieuTheoMaHeThongRap,
        danhSachPhimTheoMaLichChieu:state.movieReducer.chiTietPhongChieu,
        chiTietXuatChieuTheoPhim:state.movieReducer.infoShow

    }
}
const mapDispatchToProps = dispatch => {
    return {
        getTheaterSystem: () => {
            dispatch(action.actLayThongTinHeThongRap())
        },
        LayDanhSachLichChieuTheoMaHeThongRap: (maHeThongRap) => {
            dispatch(action.actLayLichChieuHeThongRap(maHeThongRap))
        },
        LayThongTinLichChieuTheoPhim:(movieID)=>{
            dispatch(action.actGetInfoShowByMovieID(movieID))
        }
       

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TheaterBlock);
