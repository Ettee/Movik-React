import React, { Component } from 'react';
import DetailMovieTop from './detailMovieTop';
import DetailBlock from './detailBlock';
import TheaterBlock from '../home/theaterBlock';
import {connect} from 'react-redux';
import * as action from '../../redux/action';
import * as service from "./service";
class DetailMovie extends Component {
    constructor(props){
        super(props);
        this.state={
            detailMovie:{}
        }
    }
    checkIfPageIsReady=()=>{
        if(this.props.movie){
            if(this.props.movie.hinhAnh){
                setTimeout(()=>{
                    this.props.sendReadySignal(true)
                },1000)
            }
            
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        //truyền tham số vào props để đưa lên api
        let data = service.getMovieDetail(id)
        this.setState({
            detailMovie:data
        })
        window.scrollTo(0, 0)  
    }
    componentWillUnmount(){
        this.props.sendReadySignal(false)
    }

    storeViewedMovie=()=>{
        let id = this.props.match.params.id;
        let itemInLstViewedMovie=[]
        if(!localStorage.getItem('lstViewedMovie')){
            
            itemInLstViewedMovie.push(id)
            localStorage.setItem("lstViewedMovie",JSON.stringify(itemInLstViewedMovie))
        }else{
            let arrMovie=JSON.parse(localStorage.getItem('lstViewedMovie'))
            if(!arrMovie.includes(id)){
                arrMovie.push(id)
            }
           localStorage.setItem("lstViewedMovie",JSON.stringify(arrMovie))
        }
    }
    
    render() {
        this.checkIfPageIsReady()
        //lấy data từ trong props ra để hiện thị lên web
        return (
            <div>
                <DetailMovieTop movie={this.state.detailMovie} />
                <DetailBlock movie={this.state.detailMovie}/>
                <div className="movie-detail-theater">
                    <TheaterBlock showTimesOfMovie={1}/>
                </div>
                
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{  
    }
}
const mapDispatchToProps =dispatch =>{
    return{ 
        sendReadySignal:(val)=>{
            dispatch(action.actCheckPageIsReady(val))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DetailMovie);
