import React, { Component, Fragment} from 'react'
import MainSlide from "./mainSlide";
import SearchBlock from "./searchBlock";
import MovieSlide from "./movieSlide";
import TheaterBlock from "./theaterBlock";
import News from "./news";
import Subcribes from "./subcribes";
// import AdSense from 'react-adsense';

export default class Home extends Component {
    constructor(props){
        super(props)
        document.title="Movik"
    }
    render() {
        return (
            <Fragment >
                <MainSlide/>
                <SearchBlock/>
                <MovieSlide/>
                <TheaterBlock/>
                {/* <AdSense.Google
                    client='ca-pub-7292810486004926'
                    slot='7806394673'
                    style={{ display: 'block' }}
                    format='auto'
                    responsive='true'
                    layoutKey='-gw-1+2a-9x+5c'
                /> */}
                <News/>
                <Subcribes/>
            </Fragment> 
        )
    }
}