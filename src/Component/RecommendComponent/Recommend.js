import React, { Component } from 'react'
import * as action from "../../redux/action";
import {connect} from "react-redux";
import Slider from "react-slick";
import MovieCardInSlide from "../MovieCardInSlide"
class Recommend extends Component {
    componentDidMount(){
        this.props.layDanhSachPhim()
    }
    taoDanhSachPhimRecommend=()=>{
        let {danhSachPhim}=this.props
        let lstRecommendByScore=[]
        if(danhSachPhim.length >0 ){
            //nếu có data từ api
            danhSachPhim.map(phim=>{
                if(phim.danhGia >=8){
                    lstRecommendByScore.push(phim)
                }
            })
            
            let lstRecommendByDate = lstRecommendByScore.sort((a,b)=>{
                let keyA= new Date(a.ngayKhoiChieu)    
                let keyB= new Date(b.ngayKhoiChieu)
                //sắp xếp giảm dần 
                if(keyA<keyB){
                    return 1
                }
                if(keyA>keyB){
                    return -1
                }
                return 0
            })
            //lấy ra 5 phim đầu danh sách những phim có lịch chiếu gần current date
            lstRecommendByDate.splice(5)
            return lstRecommendByDate
        }else{
            //nếu ko có data từ api thì trả về mảng rỗng
            return lstRecommendByScore
        }
    }
    renderItemInSlider=()=>{
        let lstOfRecommendFilm = this.taoDanhSachPhimRecommend()
        return lstOfRecommendFilm.map((item,index)=>{
            return (
                <div key={index}>
                    <MovieCardInSlide 
                        key={index}
                        movie={item}
                        isTicketNotAvailable={false}
                        recommend={true}
                    />
                </div>
            )
        })
    }
    
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            slidesToShow: 3,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 2000,
            centerPadding: "60px",
            responsive: [
                {
                  breakpoint: 1000,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                    breakpoint: 800,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
              ]
            
        };
        return (
          <section className="recommend-section d-flex flex-column justify-content-center" id="recommend-block" >
            <h2 className="text-center my-4">Phim dành cho bạn <i className="fas fa-info-circle" style={{cursor:"pointer"}} data-toggle="tooltip" title="Những bộ phim được gợi ý dựa trên số điểm cao nhất và ngày chiếu gần nhất"></i></h2>
            
            <div className="container">
                <Slider {...settings}>
                    {this.renderItemInSlider()}
                </Slider>
            </div>
          </section>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        danhSachPhim:state.movieReducer.listMovie
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        layDanhSachPhim:()=>{
            dispatch(action.actGetListMovieAPI())
        },
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Recommend)
