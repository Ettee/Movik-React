import * as moment from 'moment';
import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import * as service from "./homeService";
import { NavLink} from 'react-router-dom'

class TheaterBlock extends Component {
    constructor(props){
        super(props);
        this.state={
            listTheaterCompany:[],
            listTheater:[],
            listMovieShow:[],
            selectedTheaterCompanyIndex:0,
            selectedTheaterIndex:0,
            selectedMovieShow:0
        }

    }
    
    componentDidMount(){
        let listTheaterCompanyData;
        let listTheaterData;
        let listMovieShowData;
        if(this.props.showTimesOfMovie){
            listTheaterCompanyData= service.getAllTheaterCompanyByMovie(this.props.showTimesOfMovie);
            listTheaterData= service.getTheaterByCompanyAndMovie(listTheaterCompanyData[0].ma_cong_ty,this.props.showTimesOfMovie);
            listMovieShowData= service.getMovieShowByTheaterAndMovie(listTheaterData[0].theaterId,this.props.showTimesOfMovie);
            console.log("in detail movie")
        }else{
            listTheaterCompanyData= service.getAllTheaterCompany();
            listTheaterData= service.getTheaterByCompany(listTheaterCompanyData[0].ma_cong_ty);
            listMovieShowData= service.getMovieShowByTheater(listTheaterData[0].theaterId);
        }
        
        this.setState({
            listTheaterCompany:listTheaterCompanyData,
            listTheater:listTheaterData,
            listMovieShow:listMovieShowData
        })
    }

    renderTheaterCompany=()=>{
        return this.state.listTheaterCompany.map((x,i)=>{
            if(i===this.state.selectedTheaterCompanyIndex){
                return (
                    <div className="logo selected" key={i}>
                        <img src={x.logo} alt="logo" onClick={()=>this.selectTheaterCompany(x.ma_cong_ty,i)} />    
                    </div>
                )
            }
            return (
                <div className="logo" key={i}>
                    <img src={x.logo} alt="logo" onClick={()=>this.selectTheaterCompany(x.ma_cong_ty,i)}/>    
                </div>
            )
        })
    }
    selectTheaterCompany=(companyId,i)=>{
        let data;
        let data2;
        if(this.props.showTimesOfMovie){
            data = service.getTheaterByCompanyAndMovie(companyId,this.props.showTimesOfMovie);
            data2= service.getMovieShowByTheaterAndMovie(data[0].theaterId,this.props.showTimesOfMovie)
        }else{
            data = service.getTheaterByCompany(companyId);
            data2= service.getMovieShowByTheater(data[0].theaterId)
        }
        this.setState({
            selectedTheaterCompanyIndex:i,
            listTheater:data,
            listMovieShow:data2
        })
    }
    renderTheater=()=>{
        return this.state.listTheater.map((x,i)=>{
            if(this.state.selectedTheaterIndex === i){
                return (
                    <div className="theater selected" onClick={()=>this.selectTheater(x.theaterId,i)} key={i}>
                            <div>
                                <img src={x.theaterImg} alt="logo-theater" />
                            </div>
                            
                            <div className="theater-detail">
                                <div className="theater-name">{x.theaterName}</div>
                                <div className={this.props.showTimesOfMovie ||this.props.themeMode ?"theater-address dark":"theater-address light"}>{x.theaterAddress}</div>
                            </div>
                    </div>
                )
            }
            return (
                <div className="theater " onClick={()=>this.selectTheater(x.theaterId,i)} key={i}>
                            <div>
                                <img src={x.theaterImg} alt="logo-theater" />
                            </div>
                            
                            <div className="theater-detail">
                                <div className="theater-name">{x.theaterName}</div>
                                <div className={this.props.showTimesOfMovie ||this.props.themeMode?"theater-address dark":"theater-address light"}>{x.theaterAddress}</div>
                            </div>
                </div>
            )
        })
    }
    selectTheater=(theaterId,i)=>{
        let data;
        if(this.props.showTimesOfMovie){
            data= service.getMovieShowByTheaterAndMovie(theaterId,this.props.showTimesOfMovie);
        }else{
            data= service.getMovieShowByTheater(theaterId);
        }
        
        this.setState({
            selectedTheaterIndex:i,
            listMovieShow:data
        })
    }
    renderMovies=()=>{
        return this.state.listMovieShow.map((x,i)=>{
            return (
                <div className="showingMovie" key={i}>
                        <div className="movie">
                            <img src={x.poster}/>
                            <div className="movie-info">
                                <div className="main-info">
                                    <div className="age-tag">{x.doTuoi}</div>
                                    <div className={this.props.showTimesOfMovie ||this.props.themeMode?"movie-name dark":"movie-name light"}>
                                            {x.tenPhim}
                                    </div>
                                </div>
                                <div className="other-info">
                                    <span>{x.thoiLuong}</span> - IMDb: <span>{x.rating}</span>
                                </div>
                            </div>  
                        </div>
                    <div className="showtime-container">
                        {this.renderShowtimes(x.schedule)} 
                    </div>
                </div>
            )
        })
    }
    renderShowtimes=(schedule)=>{
        return schedule.map((x,i)=>{
            return (
                <NavLink className="showtime" key={i} to={`/pick-seat/${x.scheduleId}`} >
                    <span className={this.state.themeMode ? "start-time light":"start-time dark"}>{moment(x.startTime).format('LT')}</span>
                    <span className="end-time"> ~ {moment(x.endTime).format('LT')}</span>
                </NavLink>
            )
        })
    }
    render() {
        return (
            <section className={this.props.themeMode?" theater-section theater-section-dark ":" theater-section theater-section-light "} id="theater-block-home">
                <div className="container theater-container">
                    <div className="theater-company">
                        {this.renderTheaterCompany()}
                    </div>
                    <div className="theaters">
                        {this.renderTheater()}
                    </div>
                    <div className="showing-movies">
                        {this.renderMovies()}
                    </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        themeMode:state.userReducer.isDarkModeOn
    }
}
export default connect(mapStateToProps, null)(TheaterBlock);
