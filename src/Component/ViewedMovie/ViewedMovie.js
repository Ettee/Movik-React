import React, { Component, Fragment } from 'react'
import * as action from "../../redux/action";
import {connect} from "react-redux";
import Slider from "react-slick";
import MovieCardInSlide from "../MovieCardInSlide";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
class ViewedMovie extends Component {
    constructor(props){
        super(props)
        this.lstMovie=[];
        this.uniqLstMovie=[]
    }
    renderItemInSlider=(lstMovie)=>{
        //console.log(lstMovie)
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
    //vấn đề ở lstViewedMovie được truyền vào đôi khi bị TRÙNG LẶP phim
    renderViewedMovie=(lstViewedMovie)=>{
        if(localStorage.getItem("lstViewedMovie") && Object.keys(lstViewedMovie).length >0){
            this.lstMovie.push(lstViewedMovie)

            //remove duplicate item in array of object
            this.uniqLstMovie=Array.from(new Set(this.lstMovie.map(item=>item.maPhim)))
            .map(itemMaPhim=>{
                return this.lstMovie.find(a=>a.maPhim===itemMaPhim)
            })
            let slidesToShow=this.uniqLstMovie.length
            if(slidesToShow>3){
                slidesToShow=3
            }
            const settings = {    
                autoplay: true,
                autoplaySpeed: 2000,
                infinite: true,
                speed: 500,
                slidesToShow: slidesToShow,
                slidesToScroll: 1,
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
              <section className={this.props.themeMode?"viewed-movie-section viewed-movie-section-dark":"viewed-movie-section viewed-movie-section-light"}>
                <h2 className="viewed-movie text-center my-4">Phim bạn đã xem</h2>
                <div className="container">
                  <Slider {...settings}>{this.renderItemInSlider(this.uniqLstMovie)}</Slider>
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
        viewedMovie:state.movieReducer.viewedMovie,
        themeMode:state.userReducer.isDarkModeOn
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
