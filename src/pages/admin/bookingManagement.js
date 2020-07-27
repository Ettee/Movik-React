import React, { Component } from 'react'
import {connect} from "react-redux";
import * as action from "../../redux/action";
class bookingManagement extends Component {
    
    render() {
        
        return (
            <div>
               bookingManagement
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
       
       
    }
}
const mapDispatchToProps = dispatch => {
    return {
       
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(bookingManagement)