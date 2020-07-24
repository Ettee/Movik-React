import React, { Component, Fragment } from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../img/movikLogo.png';
import swal from 'sweetalert';
import { withRouter } from "react-router";
class Header extends Component {
    checkLogin=()=>{
        if(localStorage.getItem('userKhachHang')||localStorage.getItem('userAdmin')){
           
            return (
                <Fragment></Fragment>
            )
        }else{
            return (
                <Fragment>
                    <div className="user-signup-logo">
                        <i className="fas fa-user-plus"></i>
                    </div>
                    <div className="user-signup-link">
                        <NavLink to="/sign-up">Đăng kí</NavLink>
                    </div>
                </Fragment>
            )
        } 
    }
    LoginStatus =()=>{
        if(localStorage.getItem('userKhachHang')){
            let userInLocalStore =localStorage.getItem('userKhachHang')
            let userName =JSON.parse(userInLocalStore).taiKhoan
            return (
            <a>Xin Chào, {userName}</a>
            )
        }else{
            if(localStorage.getItem('userAdmin')){
                let userInLocalStore =localStorage.getItem('userAdmin')
                let userName =JSON.parse(userInLocalStore).taiKhoan
                return (
                <a>Xin Chào, {userName}</a>
                )
            }else{
                return (
                    <a data-toggle="modal" data-target="#LoginModal">Đăng Nhập</a>
                )
            } 
        }
    }
    showAccMenuOnHover=()=>{
        if(localStorage.getItem('userKhachHang')){
            let taiKhoan=JSON.parse(localStorage.getItem('userKhachHang'))
            return(
                <div className="menu-login  menu-hover-user">
                    <button className="user-profile">
                        <NavLink to={`/profile/${taiKhoan.taiKhoan}`}>
                        <i className="fas fa-address-card"></i> Profile
                        </NavLink>
                    </button>
                    <button onClick={this.logout}>
                    <i className="fas fa-sign-out-alt"></i> Đăng xuất
                    </button>
                </div>
            )
        }else{
            if(localStorage.getItem('userAdmin')){
                let taiKhoan=JSON.parse(localStorage.getItem('userAdmin'))
                return(
                    <div className="menu-login  menu-hover-user">
                        <button className="user-profile">
                            <NavLink to={`/profile/${taiKhoan.taiKhoan}`}>
                            <i className="fas fa-address-card"></i> Profile
                            </NavLink>
                        </button>
                        <button className="user-admin">
                            <NavLink to={"/admin"}>
                            <i className="fas fa-cogs"></i> Movik Manager
                            </NavLink>
                        </button>
                        <button onClick={this.logout}>
                        <i className="fas fa-sign-out-alt"></i> Đăng xuất
                        </button>
                    </div>
                )
            }else{
                return(
                    <Fragment></Fragment>
                )
            }
            
        }
    }
    logout=()=>{
        if(localStorage.getItem('userKhachHang')||localStorage.getItem('userAdmin')){
            swal({
                title: "Đăng xuất ",
                text: "Bạn sẽ không thể tiếp tục đặt vé",
                icon: "warning",
                buttons: true,
                
                dangerMode: true,
              })
              .then((yes) => {
                if (yes) {
                    localStorage.removeItem('userKhachHang')
                    localStorage.removeItem('userAdmin')
                    swal({
                    title:"Đăng xuất thành công",
                    icon: "success",
                    
                    }).then((ok)=>{
                        if(ok){
                            this.props.history.push("/")
                        }
                    });
                } 
              })
              
            
            
        }
    }
    handleOnClickLinks=()=>{
        if(window.location.pathname!=='/'){
            this.props.history.push('/')
        }
        
    }
    render() {
        this.checkLogin()
        this.LoginStatus()
        return (
            <header>
                <nav className="navbar navbar-expand-sm bg-darktheme navbar-light">
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
                                <a className="nav-link" 
                                    href="#showing-coming-movie"
                                    onClick={this.handleOnClickLinks}
                                >Lịch chiếu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" 
                                    href="#theater-block-home"
                                    onClick={this.handleOnClickLinks}
                                >Cụm rạp</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" 
                                    href="#news-block"
                                    onClick={this.handleOnClickLinks}
                                >Tin tức</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" 
                                    href="#subs-block"
                                    onClick={this.handleOnClickLinks}
                                >Đăng kí</a>
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
                                    {this.LoginStatus()}
                                </div>
                                {this.showAccMenuOnHover()}
                            </li>
                            {/* User Sign up */}
                            <li className="user-signup nav-item">
                                {this.checkLogin()}
                            </li>

                        </ul>
                        
                    </div>
                </nav>
            </header>

        )
    }
}
export default withRouter(Header)