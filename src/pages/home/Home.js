import React, { Component } from 'react'
import MainSlide from "./mainSlide";
import LoginModal from "./loginModal";
import SearchBlock from "./searchBlock";
import MovieSlide from "./movieSlide";
import TheaterBlock from "./theaterBlock";
import News from "./news";
import Subcribes from "./subcribes";
export default class Home extends Component {
    render() {
        return (
            <div>
                <MainSlide/>
                
                <SearchBlock/>
                <MovieSlide/>
                <TheaterBlock/>
                <News/>
                <Subcribes/>
            </div>
        )
    }
}
