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
    let {isHomePageReady}=this.props
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
    },3000)

    if(!this.state.is3Seconds ){
      return(
        <div className="loading-page">
          <Lottie options={defaultOptions}  width={'35vw'} />
        </div>
      )
    }
    else{
       return(
        <div className="loading-page fade-out">
          <Lottie options={defaultOptions} height={'50vh'} width={'50vw'} />
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
