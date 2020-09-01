import React, { Component } from 'react'
import UserInfo from './userInfo';
import UserBookingInfo from './userBookingInfo'
import {connect} from "react-redux"
class UserProfile extends Component {
    constructor(props){
        super(props)
        this.state={
            user:{},
            
        }
    }
    componentDidMount(){
        let user
        if(localStorage.getItem("userKhachHang")){
            user=JSON.parse(localStorage.getItem("userKhachHang"))
        }else{
            if(localStorage.getItem("userAdmin")){
                user=JSON.parse(localStorage.getItem("userAdmin"))
            }
        }
        this.setState({
            user
        })
        
    }
    render() {
        return (
            <div className={this.props.themeMode?"user-info-page user-info-page-dark ":"user-info-page user-info-page-light "}>
                <div className="container-fluid">
                    <div className=" row profile-content"> 
                        <div className=" user-info-section col-xl-2">
                            
                            <div className={this.props.themeMode?"user-info-bar user-info-bar-dark":"user-info-bar user-info-bar-light"}>
                                <UserInfo user={this.state.user} themeMode={this.props.themeMode}/> 
                            </div>  
                        </div>
                        <div className=" col-xl-10 user-booking-info-section ">
                            <UserBookingInfo taiKhoan={this.props.match.params.taiKhoan} themeMode={this.props.themeMode}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        themeMode:state.userReducer.isDarkModeOn
    }
}
export default connect(mapStateToProps,null)(UserProfile)