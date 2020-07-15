import React, { Component, Fragment} from 'react'
import MainSlide from "./mainSlide";
import SearchBlock from "./searchBlock";
import MovieSlide from "./movieSlide";
import TheaterBlock from "./theaterBlock";
import News from "./news";
import Subcribes from "./subcribes";

export default class Home extends Component {
    
    render() {
        return (
            <Fragment >
                <MainSlide/>
                <SearchBlock/>
                <MovieSlide/>
                <TheaterBlock/>
                <News/>
                <Subcribes/>
            </Fragment> 
        )
    }
}