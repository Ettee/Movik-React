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
            // autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            rows:2,
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
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      rows:1
                    }
                  },
                  {
                    breakpoint: 670,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      rows:1
                    }
                  }
              ]
            
        };

        return (
            <section className={this.props.themeMode?"showing-coming-movie-section showing-coming-movie-section-dark":"showing-coming-movie-section showing-coming-movie-section-light"} id="showing-coming-movie">
                {
                    /* Nav pills */
                }
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className={this.props.themeMode?"nav-link nav-link-dark active":"nav-link nav-link-light active"} data-toggle="pill" href="#showing">
                            Đang chiếu
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className={this.props.themeMode?"nav-link nav-link-dark ":"nav-link nav-link-light "} data-toggle="pill" href="#coming">
                            Sắp chiếu
                        </a>
                    </li>
                </ul>
                <div className="tab-content">
                    {/* SHOWING MOVIE */}
                    <div className="tab-pane container active" id="showing">
                        <div className={this.props.themeMode?"container container-dark ":"container container-light "}>
                            <Slider {...settings} className="row slick-carousel">
                                {this.renderMovieCardInSlide(false)}
                            </Slider>
                        </div>
                    </div>
                    {/* COMING MOVIE */}
                    <div className="tab-pane container fade" id="coming">
                        <div className={this.props.themeMode?"container container-dark ":"container container-light "}>
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
        listMovie:state.movieReducer.listMovie,
        themeMode:state.userReducer.isDarkModeOn
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