import React, { Component } from 'react'
import MainSlide from "./mainSlide";
import SearchBlock from "./searchBlock";
import MovieSlide from "./movieSlide";
import TheaterBlock from "./theaterBlock";
import News from "./news";
import Subcribes from "./subcribes";
import { withRouter } from 'react-router-dom'
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