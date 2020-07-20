import React, { Component } from 'react'
import UserInfo from './userInfo';
import UserBookingInfo from './userBookingInfo'
export default class UserProfile extends Component {
    constructor(props){
        super(props)
        this.state={
            user:{},
            
        }
    }
    componentDidMount(){
        let user=JSON.parse(localStorage.getItem("userKhachHang"))
        this.setState({
            user
        })
        
    }
    render() {
        return (
            <div className="user-info-page">
                <div className="container-fluid">
                    <div className=" row profile-content"> 
                        <div className=" user-info-section col-xl-2">
                            
                            <div className="user-info-bar">
                                <UserInfo user={this.state.user}/> 
                            </div>  
                        </div>
                        <div className=" col-xl-10 user-booking-info-section">
                            <UserBookingInfo taiKhoan={this.props.match.params.taiKhoan}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
