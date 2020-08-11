import React, { Component, Fragment } from 'react'
import * as action from "../../redux/action";
import {connect} from "react-redux";
import Slider from "react-slick";
import MovieCardInSlide from "../MovieCardInSlide"
class ViewedMovie extends Component {
    constructor(props){
        super(props)
        this.lstMovie=[]
    }
    renderItemInSlider=(lstMovie)=>{
        console.log(lstMovie)
            return lstMovie.map((item,index)=>{
                return (
                    <div key={index}>
                        <MovieCardInSlide 
                            key={index}
                            movie={item}
                            isTicketNotAvailable={false}
                        />
                    </div>
                )
            })
    }
    renderViewedMovie=(lstViewedMovie)=>{
        if(localStorage.getItem("lstViewedMovie") && Object.keys(lstViewedMovie).length >0){
            this.lstMovie.push(lstViewedMovie)
            const settings = {
                infinite: true,
                slidesToShow: 3,
                speed: 500,
                autoplay: true,
                autoplaySpeed: 2000,
                centerPadding: "50px",
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
              <section className="viewed-movie-section">
                <h2 className="viewed-movie text-center my-4">Phim bạn đã xem</h2>
                <div className="container">
                  <Slider {...settings}>{this.renderItemInSlider(this.lstMovie)}</Slider>
                </div>
              </section>
            );
        }else{
            return(
                <div></div>
            )
        }
    }
    componentDidMount(){
        let lstViewedMovie=[]
        if(localStorage.getItem("lstViewedMovie")){
            lstViewedMovie=JSON.parse(localStorage.getItem("lstViewedMovie"))
            lstViewedMovie.map(item=>{
                this.props.getViewedMovie(item)
            })
            
        }
        
    }

    render() {
        return (
            <Fragment>
                {this.renderViewedMovie(this.props.viewedMovie)}
            </Fragment>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        viewedMovie:state.movieReducer.viewedMovie
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        getViewedMovie:id=>{
            dispatch(action.actGetViewedMovie(id));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewedMovie)
