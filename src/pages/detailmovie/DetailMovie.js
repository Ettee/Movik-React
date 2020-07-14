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
        //truyền tham số vào props để đưa lên api
        this.props.getDetail(id);
    }
    render() {
        //lấy data từ trong props ra để hiện thị lên web
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
    //lấy data từ state trong store về gán vào 1 props tự đặt tên
    return{
        //ví dụ: props tên movie => chứa data lấy từ 1 obj tên detailMovie trong state của movieReducer
        movie:state.movieReducer.detailMovie
    }
}
const mapDispatchToProps =dispatch =>{
    //gọi api thông qua dispatch
    //api sẽ đc dùng trong 1 hàm (VD: hàm actGetDetailMovieAPI() ),tùy vào api có require tham số hay ko để tạo ra hàm 
    //hàm dùng để gọi api để được chưa trong 1 file riêng biệt để quản lý
    return{
        //hàm dùng để gọi api đc gọi về component thông qua props tự đặt tên(nếu hàm cần tham số thì khi tạo props cũng cần phải add tham số)
        //VD:hàm actGetDetailMovieAPI() cần tham số id do đó tạo props như bên dưới
        //props getDatail sẽ truyển id vào hàm actGetDetailMovieAPI() và hàm actGetDetailMovieAPI() sẽ truyền id vào api
        getDetail:id=>{
            dispatch(action.actGetDetailMovieAPI(id));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DetailMovie);
