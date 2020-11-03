import React, { Component, Fragment } from "react";
import Lottie from "react-lottie";
import loadingData from "./loading.json";
import * as action from "../../redux/action";
import { connect } from "react-redux";
class Loading extends Component {
  constructor(props){
    super(props)
    this.state={
      is3Seconds:false
    }
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        is3Seconds:true
      })
    },2000)
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
    
    if(!this.state.is3Seconds ){
      return(
        <div className="loading-page">
          <div className="loading-page-screen">
            <Lottie options={defaultOptions}  speed={3}  />
          </div>  
        </div>
      )
    }
    else{
       if(!this.props.isHomeReady){
        return(
          <div className="loading-page">
            <div className="loading-page-screen">
              <Lottie options={defaultOptions}  />
            </div>  
          </div>
        )
       }else{
        return(
          <div className="loading-page fade-out">
            <div className="loading-page-screen">
              <Lottie options={defaultOptions}  />
            </div>  
          </div>
        )
       }
    }
  }
  render() {
    console.log(this.props.isHomeReady)
    return (
     <Fragment>
       {this.renderLoading()}
     </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    isHomeReady: state.movieReducer.isHomeReady
  };
}

export default connect(mapStateToProps,null)(Loading);