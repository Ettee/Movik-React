import React, { Component } from 'react';
import Slider from "react-slick";
import MovieCardInSlide from "../../Component/MovieCardInSlide";
import * as action from "../../redux/action";
import {connect} from "react-redux";
class MovieSlide extends Component {
    renderMovieCardInSlide =(isTicketNotAvailable)=>{
        return this.props.listMovie.map((movie,index)=>{
            return (
                <div key={index}>
                    <MovieCardInSlide 
                        key={index}
                        movie={movie}
                        isTicketNotAvailable={isTicketNotAvailable}
                    />
                </div>
                
            )
        })
    }
    componentDidMount(){
        this.props.getListMovie();
    }
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            slidesToShow: 2,
            speed: 500,
            rows: 2,
            slidesPerRow:2,
            centerPadding: "0px",
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    centerPadding: "0px",
                    infinite: true,
                    rows:1
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // centerPadding: "0px",
                    rows:1,
                    arrows: false,
                    centerMode:true
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    
                    rows:1,
                    arrows: false
                  }
                }
              ]
        };
        return (
            <section className="showing-coming-movie-section" id="showing-coming-movie">
                {
                    /* Nav pills */
                }
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="pill" href="#showing">
                            Đang chiếu
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#coming">
                            Sắp chiếu
                        </a>
                    </li>
                </ul>
                <div className="tab-content">
                    {/* SHOWING MOVIE */}
                    <div className="tab-pane container active" id="showing">
                        <div className="container">
                            <Slider {...settings} className="row slick-carousel">
                                {this.renderMovieCardInSlide(false)}
                            </Slider>
                        </div>
                    </div>
                    {/* COMING MOVIE */}
                    <div className="tab-pane container fade" id="coming">
                        <div className="container">
                            <Slider {...settings} className="row slick-carousel">
                            {this.renderMovieCardInSlide(true)}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
const mapStateToProps =state =>{
    return{
        listMovie:state.movieReducer.listMovie
    };
}
const mapDispatchToProps =dispatch =>{
    return {
        getListMovie:()=>{
            dispatch(action.actGetListMovieAPI());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (MovieSlide);