import React, { Component, Fragment} from 'react'
import MainSlide from "./mainSlide";
import SearchBlock from "./searchBlock";
import MovieSlide from "./movieSlide";
import Recommend from "../../Component/RecommendComponent/Recommend";
import TheaterBlock from "./theaterBlock";
import ViewedMovie from "../../Component/ViewedMovie/ViewedMovie";
import Map from '../../Component/mapComponent/Map';
import "leaflet/dist/leaflet.css";
//import Chat from "../../Component/ChatBot/chat";
export default class Home extends Component {
    constructor(props){
      super(props)
      document.title="Movik"
       
    }
    render() {
        return (
          <Fragment>
            <MainSlide />
            <SearchBlock />
            <MovieSlide />
            <TheaterBlock />
            <Recommend/>
            <Map/>
            <ViewedMovie/>
            {/* <Chat/> */}
          </Fragment>
        );
    }
}
