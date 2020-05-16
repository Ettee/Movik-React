import React, { Component } from 'react';
import * as action from "../../redux/action";
import  {connect} from "react-redux";
import Select from 'react-select';

class SearchBlock extends Component {
    
    componentDidMount(){
        this.props.getListMovie();
    }
    //lấy ra thông tin của phim đã chọn
    getMovieSelectedIDForInfoShow=(selectedOption)=>{
        // console.log(selectedOption)
        this.props.getInfoShow(selectedOption.value)
        
    }
    getOptionTheaterName=(variable)=>{
        let options;
        if (typeof variable !== 'undefined') {
            // the variable is defined
            options=variable.map(item=>({
                label:item.cumRapChieu[0].tenCumRap,
                value:item.maHeThongRap
            }))
            return options
        }
    }

    renderMovieName=()=>{
        return this.props.listMovie.map((movie)=> movie)
    }
    customTheme(theme){
        return{
            ...theme,
            colors:{
                ...theme.colors,
                primary25:'orange',
                primary:'red'
            }
        }
    }
   
    render() {
        let ListMovieOption=this.renderMovieName();     
        const optionName=ListMovieOption.map(item=>({
            label:item.tenPhim,
            value:item.maPhim
        })) 
        console.log("render")
        console.log("infoShow:",this.props.infoShow.heThongRapChieu)
        
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
                                    noOptionsMessage={() => 'Chưa chọn phim'}
                                    // options={this.getOptionTheaterName()}  
                               />
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="search-item-for-movie-ticket form-group"> 
                                <Select
                                    placeholder="Ngày chiếu"
                                    theme={this.customTheme}
                                    noOptionsMessage={() => 'Chưa chọn rạp'}
                                />
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="search-item-for-movie-ticket form-group">
                                <Select
                                    placeholder="Xuất chiếu"
                                    theme={this.customTheme}
                                    noOptionsMessage={() => 'Chưa chọn ngày chiếu'}
                                />
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="search-item-for-movie-ticket">
                                <a href="#">
                                    <button className="btn  btn-buynow text-uppercase">
                                        Mua vé ngay
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
const mapStateToProps =state =>{
    return{
        listMovie:state.movieReducer.listMovie,
        infoShow:state.movieReducer.infoShow  
    };
}
const mapDispatchToProps =dispatch =>{
    return {
        getListMovie:()=>{
            dispatch(action.actGetListMovieAPI());
        },
        getInfoShow:(movieID)=>{
            dispatch(action.actGetInfoShowByMovieID(movieID));
        }

    }
}
export default connect(mapStateToProps,mapDispatchToProps) (SearchBlock);