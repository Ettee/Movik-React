import React, { Component, Fragment } from "react";
import Lottie from "react-lottie";
import loadingData from "./loading.json";

export default class Loading extends Component {
  constructor(props){
    super(props)
    this.state={
      is3Seconds:false
    }
  }
  renderLoading=()=>{
    
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: loadingData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    setTimeout(()=>{
      this.setState({
        is3Seconds:true
      })
    },300)

    if(!this.state.is3Seconds ){
      return(
        <div className="loading-page">
          <div>
            <Lottie options={defaultOptions}  speed={3}  />
          </div>  
        </div>
      )
    }
    else{
       return(
        <div className="loading-page fade-out">
          <div>
            <Lottie options={defaultOptions}  />
          </div>  
        </div>
      )
    }
    
  }
  render() {
    return (
     <Fragment>
       {this.renderLoading()}
     </Fragment>
    );
  }
}
