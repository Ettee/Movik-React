import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../img/movikLogo.png'
export default class Header extends Component {
    checkLogin=()=>{
        if(localStorage.getItem('userKhachHang')){
            return "user-signup nav-item checkout"
        }else{
            return "user-signup nav-item"
        } 
    }
    logOut =()=>{
        if(localStorage.getItem('userKhachHang')){
            let userInLocalStore =localStorage.getItem('userKhachHang')
            let userName =JSON.parse(userInLocalStore).taiKhoan
            return "Xin Chào, " + userName
        }else{
            return "Đăng nhập"
        }

    }
    render() {
        this.checkLogin()
        this.logOut()
        return (
            <header>
                <nav className="navbar navbar-expand-sm bg-white navbar-light">
                    {/* Brand */}
                    <div className="header-brand">
                        <NavLink className="navbar-brand" exact to="/">
                            <img src={logo} alt="logo" />
                        </NavLink>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapsibleNavbar"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/* Links */}
                    <div className="header-links ">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#showing-coming-movie">Lịch chiếu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#theater-block-home">Cụm rạp</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#news-block">Tin tức</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#subs-block">Đăng kí</a>
                            </li>
                        </ul>
                    </div>
                    {/* Header Users Section */}
                    <div className="header-user collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            {/* User Login */}
                            <li className="user-login nav-item">
                                <div className="user-login-logo">
                                    <i className="fas fa-user-circle" data-toggle="modal" data-target="#LoginModal" />
                                </div>
                                <div className="user-login-link">
                                    <a href="#" data-toggle="modal" data-target="#LoginModal">{this.logOut()}</a>
                                </div>
                            </li>
                            <li className={this.checkLogin()}>
                                <div className="user-signup-logo">
                                    <i className="fas fa-user-plus"></i>
                                </div>
                                <div className="user-signup-link">
                                    <NavLink to="/sign-up">Đăng kí</NavLink>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

        )
    }
}
