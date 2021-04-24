import React, { Component } from 'react'
import * as action from "../../redux/action";
import {connect} from "react-redux";
import Slider from "react-slick";
import MovieCardInSlide from "../MovieCardInSlide"
import * as homeService from "../../pages/home/homeService";
class Recommend extends Component {
    componentDidMount(){
        this.taoDanhSachPhimRecommend();
    }
    taoDanhSachPhimRecommend=()=>{
        let danhSachPhim=homeService.getRecommendMovie();
        return danhSachPhim;
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
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            autoplay: true,
            speed: 2000,
            autoplaySpeed:2000,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
        };
        return (
          <section className={this.props.themeMode?"recommend-section recommend-section-dark d-flex flex-column justify-content-center":"recommend-section recommend-section-light d-flex flex-column justify-content-center"} id="recommend-block" >
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
      themeMode: state.userReducer.isDarkModeOn
    }
}


export default connect(mapStateToProps,null)(Recommend)
