import React, { Component } from 'react';
import * as action from "../../redux/action";
import  {connect} from "react-redux";
import Select from 'react-select';

class SearchBlock extends Component {
    constructor(props){
        super(props)
        this.state={
            heThongRapChieu:[],
            tenCumRap:'',
            maHeThongRap:''
        }
    }
    componentDidMount(){
        this.props.getListMovie();
    }
    componentWillReceiveProps(nextProps){
        if(nextProps && typeof nextProps.infoShow !== "undefined"){
            this.setState({
                heThongRapChieu:nextProps.infoShow.heThongRapChieu
            })
        }
    } 
    //lấy ra thông tin của phim đã chọn
    getMovieSelectedIDForInfoShow=(selectedOption)=>{
        //console.log(selectedOption)
        this.props.getInfoShow(selectedOption.value)
        
    }
    //set tên rạp chiếu tương ứng vs phim đã chọn
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
    //lấy ra tên rạp chiếu đã chọn
    getPickedTheaterName=(selectedOption)=>{
        this.setState({
            tenCumRap:selectedOption.label,
            maHeThongRap:selectedOption.value
        })
    }

    //render ra tên các bộ phim 
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
    renderShowDate=()=>{
        let showDateOptions=[];
        let dateOptions;
        if(typeof this.state.heThongRapChieu !=="undefined"){
            let arr = this.state.heThongRapChieu;
            arr.map(item=>{
                if(item.maHeThongRap===this.state.maHeThongRap){
                    item.cumRapChieu.map(item=>{
                        if(item.tenCumRap=== this.state.tenCumRap){
                            item.lichChieuPhim.map(item=>{
                                showDateOptions.push(new Date(item.ngayChieuGioChieu).toLocaleDateString())
                            })
                        }
                    })
                }  
            })
        }
        console.log("showDateOptions: ",showDateOptions);
        
        dateOptions=showDateOptions.map(item=>({
            label:item,
            value:item
        }))
        console.log("text",dateOptions)
        return dateOptions;
    }
  
   
    render() {
        let ListMovieOption=this.renderMovieName();     
        const optionName=ListMovieOption.map(item=>({
            label:item.tenPhim,
            value:item.maPhim
        })) 
        //lấy ngày chiếu data, từ hàm renderShowDate trả về để đổ data ra Select
        let optionsDate=this.renderShowDate()
        //console.log("infoShow:",this.props.infoShow.heThongRapChieu)
        //console.log("state: ",this.state.heThongRapChieu)
        
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
                                    onChange={this.getPickedTheaterName}
                                    noOptionsMessage={() => 'Chưa chọn phim'}
                                    // options={this.getOptionTheaterName()}  
                               />
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="search-item-for-movie-ticket form-group"> 
                                <Select
                                    placeholder="Ngày chiếu"
                                    options={optionsDate}
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