import React, { Component,lazy,Suspense } from 'react';
import DetailMovieTop from './detailMovieTop';
import DetailBlock from './detailBlock';
import TheaterBlock from '../home/theaterBlock';

import {connect} from 'react-redux';
import * as action from '../../redux/action';
class DetailMovie extends Component {
    
    componentDidMount(){
        let id = this.props.match.params.id;
        //truyền tham số vào props để đưa lên api
        this.props.getDetail(id);  
           
        window.scrollTo(0, 0)  
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
        this.storeViewedMovie()
        //lấy data từ trong props ra để hiện thị lên web
        const {movie}=this.props; 
        document.title=movie.tenPhim
        return (
            <div>
                <DetailMovieTop movie={movie}/>
                <DetailBlock movie={movie}/>
                <div className="movie-detail-theater">
                    <TheaterBlock movie={movie}/>
                </div>
                
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{  
        movie:state.movieReducer.detailMovie
    }
}
const mapDispatchToProps =dispatch =>{
    return{ 
        getDetail:id=>{
            dispatch(action.actGetDetailMovieAPI(id));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DetailMovie);
