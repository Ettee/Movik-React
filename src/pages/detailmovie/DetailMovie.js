import React, { Component } from 'react';
import DetailMovieTop from './detailMovieTop';
import DetailBlock from './detailBlock';
import TheaterBlock from '../home/theaterBlock';
import TrailerBlock from './trailerBlock';
import {connect} from 'react-redux';
import * as action from '../../redux/action';
class DetailMovie extends Component {
    componentDidMount(){
        let id = this.props.match.params.id;
        this.props.getDetail(id);
    }
    render() {
        const {movie}=this.props;
        
        return (
            <div>
                <DetailMovieTop movie={movie}/>
                <DetailBlock movie={movie}/>
                <div className="movie-detail-theater">
                    <TheaterBlock movie={movie}/>
                </div>
                <TrailerBlock movie={movie}/>
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
