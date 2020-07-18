import React, { Component } from 'react'

export default class UserInfo extends Component {
    
    render() {
        let {user}=this.props;
        return (
            <div className="user-info">
                <div className="user-info-avatar">
                    <div className="avarta">
                        <i class="fas fa-user-circle"></i>
                    </div>
                    
                </div>

                <div className="user-info-detail">
                    <div className="account-name">
                       {user.taiKhoan}
                    </div>
                    <div className="info-item">
                        <div className=" info-key">
                            <i class="fas fa-signature"></i>
                        </div>
                        <div className=" info-value">
                            : {user.hoTen}
                        </div>
                    </div>
                    <div className="info-item">
                        <div className=" info-key">
                            <i class="far fa-envelope"></i> 
                        </div>
                        <div className=" info-value">
                            : {user.email}
                        </div>
                    </div>
                    <div className="info-item">
                        <div className=" info-key">
                            <i class="fas fa-phone"></i> 
                        </div>
                        <div className=" info-value">
                            : {user.soDT}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
