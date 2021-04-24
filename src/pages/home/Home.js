import React, { Component, Fragment} from 'react'
import MainSlide from "./mainSlide";
import SearchBlock from "./searchBlock";
import MovieSlide from "./movieSlide";
import Recommend from "../../Component/RecommendComponent/Recommend";
import TheaterBlock from "./theaterBlock";
import ViewedMovie from "../../Component/ViewedMovie/ViewedMovie";
import Map from '../../Component/mapComponent/Map';
import "leaflet/dist/leaflet.css";
import * as action from "../../redux/action";
import { connect } from "react-redux";
class Home extends Component {
    constructor(props){
      super(props)
      document.title="Movik"
       
    }
    checkIfPageIsReady=(val)=>{
      if(val){
        this.props.sendReadySignal(val)
      }
    }
    render() {
        return (
          <Fragment>
            <MainSlide />
            <SearchBlock isPageReady={this.checkIfPageIsReady} />
            <MovieSlide />
            <TheaterBlock />
            <Recommend/>
            <Map/>
            {/* <ViewedMovie/> */}
            {/* <Chat/> */}
          </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => {
  return {
    sendReadySignal:(val)=>{
      dispatch(action.actCheckPageIsReady(val))
    }
  }
}
export default connect(null, mapDispatchToProps)(Home);