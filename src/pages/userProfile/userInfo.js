import React, { Component } from 'react'

export default class UserInfo extends Component {
    
    render() {
        let {user}=this.props;
        return (
            <div className="user-info">
                <div className="user-info-avatar">
                    <div className="avarta">
                        <i className="fas fa-user-circle"></i>
                    </div>
                    
                </div>

                <div className="user-info-detail">
                    <div className={this.props.themeMode?"account-name":"account-name account-name-light"}>
                       {user.taiKhoan}
                    </div>
                    <div className="info-item">
                        <div className={this.props.themeMode?" info-key info-key-dark":" info-key info-key-light"}>
                            <i className="fas fa-signature icon-dark"></i>:
                        </div>
                        <div className={this.props.themeMode?" info-value info-value-dark":" info-value info-value-light"}>
                            {user.hoTen}
                        </div>
                    </div>
                    <div className="info-item">
                        <div className={this.props.themeMode?" info-key info-key-dark":" info-key info-key-light"}>
                            <i className="far fa-envelope"></i>:
                        </div>
                        <div className={this.props.themeMode?" info-value info-value-dark":" info-value info-value-light"}>
                            {user.email}
                        </div>
                    </div>
                    <div className="info-item">
                        <div className={this.props.themeMode?" info-key info-key-dark":" info-key info-key-light"}>
                            <i className="fas fa-phone"></i>:
                        </div>
                        <div className={this.props.themeMode?" info-value info-value-dark":" info-value info-value-light"}>
                            {user.soDT}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
