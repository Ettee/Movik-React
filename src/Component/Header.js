import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/movikLogo.png";
import swal from '@sweetalert/with-react'
import { withRouter } from "react-router";
import { connect } from "react-redux";
import * as action from "../redux/action";
class Header extends Component {
  
  checkLogin = () => {
    if (
      localStorage.getItem("userKhachHang") ||
      localStorage.getItem("userAdmin")
    ) {
      return <Fragment></Fragment>;
    } else {
      return (
        <Fragment>
          <div className="user-signup-logo">
            <i className="fas fa-user-plus"></i>
          </div>
          <div className={this.props.themeMode?"user-signup-link user-signup-link-dark":"user-signup-link user-signup-link-light"}>
            <NavLink to="/sign-up">Đăng kí</NavLink>
          </div>
        </Fragment>
      );
    }
  };
  LoginStatus = () => {
    if (localStorage.getItem("userKhachHang")) {
      let userInLocalStore = localStorage.getItem("userKhachHang");
      let userName = JSON.parse(userInLocalStore).taiKhoan;
      return <a>Xin Chào, {userName}</a>;
    } else {
      if (localStorage.getItem("userAdmin")) {
        let userInLocalStore = localStorage.getItem("userAdmin");
        let userName = JSON.parse(userInLocalStore).taiKhoan;
        return <a>Xin Chào, {userName}</a>;
      } else {
        return (
          <a data-toggle="modal" data-target="#LoginModal">
            Đăng nhập
          </a>
        );
      }
    }
  };
  showAccMenuOnHover = () => {
    if (localStorage.getItem("userKhachHang")) {
      let taiKhoan = JSON.parse(localStorage.getItem("userKhachHang"));
      return (
        <div className="menu-login menu-hover-user">
          <button className="user-profile">
            <NavLink to={`/profile/${taiKhoan.taiKhoan}`}>
              <i className="fas fa-address-card"></i> Profile
            </NavLink>
          </button>
          <button className="darkMode-switch" >
            <div className="switch">
              <input type="checkbox" id="switch"onClick={this.changeTheme} />
              <label for="switch" >Toggle</label>
            </div>
            <label for="switch">Dark mode</label>
          </button>
          <button onClick={this.logout}>
            <i className="fas fa-sign-out-alt"></i> Đăng xuất
          </button>
        </div>
      );
    } else {
      if (localStorage.getItem("userAdmin")) {
        let taiKhoan = JSON.parse(localStorage.getItem("userAdmin"));
        return (
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
            <button className="darkMode-switch" >
              <div className="switch">
                <input type="checkbox" id="switch"onClick={this.changeTheme} />
                <label for="switch" >Toggle</label>
              </div>
              <label for="switch">Dark mode</label>
            </button>
            <button onClick={this.logout}>
              <i className="fas fa-sign-out-alt"></i> Đăng xuất
            </button>
          </div>
        );
      } else {
        return <Fragment></Fragment>;
      }
    }
  };
  logout = () => {
    if (
      localStorage.getItem("userKhachHang") ||
      localStorage.getItem("userAdmin")
    ) {
      swal({
        title: "Đăng xuất ",
        text: "Bạn sẽ không thể tiếp tục đặt vé",
        icon: "warning",
        buttons: true,

        dangerMode: true,
      }).then((yes) => {
        if (yes) {
          localStorage.removeItem("userKhachHang");
          localStorage.removeItem("userAdmin");
          swal({
            title: "Đăng xuất thành công",
            icon: "success",
            button: "OK",
          }).then((ok) => {
            if (ok) {
              this.props.dangXuat();
              this.props.history.push("/");
            }
          });
        }
      });
    }
  };
  handleOnClickLinks = () => {
    if (window.location.pathname !== "/") {
      this.props.history.push("/");
    }
  };
  //tạo popup khi ấn vào phần user ở mobile
  popUpUserOptionMobile=()=>{
    if (localStorage.getItem("userKhachHang")) {
      let taiKhoan = JSON.parse(localStorage.getItem("userKhachHang"));
      return(
        <div className="user-option-mobile">
          <button className="user-profile">
            <NavLink to={`/profile/${taiKhoan.taiKhoan}`}>
              <i className="fas fa-address-card"></i> Profile
            </NavLink>
          </button>
          <button className="darkMode-switch" >
            <div className="switch">
              <input type="checkbox" id="switch" />
              <label for="switch" onClick={this.changeTheme}>Toggle</label>
            </div>
            <label for="switch">Dark mode</label>
          </button>
          <button onClick={this.logout}>
            <i className="fas fa-sign-out-alt"></i> Đăng xuất
          </button>
        </div>
      )
    } else {
      if (localStorage.getItem("userAdmin")) {
        let taiKhoan = JSON.parse(localStorage.getItem("userAdmin"));
        return(
          <div className="user-option-mobile">
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
            <button className="darkMode-switch" >
              <div className="switch">
                <input type="checkbox" id="switch" />
                <label for="switch" onClick={this.changeTheme}>Toggle</label>
              </div>
            <label for="switch">Dark mode</label>
          </button>
            <button onClick={this.logout}>
              <i className="fas fa-sign-out-alt"></i> Đăng xuất
            </button>
          </div>
          
        )
      } else {
        return <Fragment></Fragment>;
      }
    }
  }
  changeTheme=()=>{
    let {themeMode,changeMode}=this.props
    
    if(themeMode){
      changeMode(false)
      
    }else{
      changeMode(true) 
      
    }
  }
  render() {
    this.checkLogin();
    this.LoginStatus();
    return (
      <header>
        {/* desktop nav */}
        <nav className={this.props.themeMode?"navbar navbar-expand-sm bg-darktheme navbar-light desktop-header":"navbar navbar-expand-sm  bg-lighttheme navbar-light desktop-header"}>
          {/* Brand */}
          <div className="header-brand">
            <NavLink className="navbar-brand" exact to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          {/* Links */}
          <div className="header-links ">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#showing-coming-movie"
                  onClick={this.handleOnClickLinks}
                >
                  Lịch chiếu
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#theater-block-home"
                  onClick={this.handleOnClickLinks}
                >
                  Cụm rạp
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#recommend-block"
                  onClick={this.handleOnClickLinks}
                >
                  Phim hay
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#theater-nearby-block"
                  onClick={this.handleOnClickLinks}
                >
                  Rạp phim
                </a>
              </li>
            </ul>
          </div>
          {/* Header Users Section */}
          <div className={this.props.themeMode?"header-user  header-user-dark ":"header-user  header-user-light "} id="collapsibleNavbar">
            <ul className="navbar-nav">
              {/* User Login */}
              <li className="user-login nav-item">
                <div className={this.props.themeMode?"user-login-logo user-login-logo-dark":"user-login-logo user-login-logo-light"}>
                  <i
                    className="fas fa-user-circle"
                    data-toggle="modal"
                    data-target="#LoginModal"
                  />
                </div>
                <div className={this.props.themeMode?"user-login-link user-login-link-dark":"user-login-link user-login-link-light"}>{this.LoginStatus()}</div>
                {this.showAccMenuOnHover()}
              </li>
              {/* User Sign up */}
              <li className="user-signup nav-item">{this.checkLogin()}</li>
            </ul>
          </div>
        </nav>
        {/* mobile-nav */}
        <div className="mobile-navbar">
          <div className="mobile-navbar-content">
            <div className="mobile-navbar-brand">
              <NavLink exact to="/">
                <img className="mobile-brand-logo" src={logo} alt="logo" />
              </NavLink>
            </div>
            <div className="menu-bar">
              <input type="checkbox" id="check" />
              <label for="check" className="bar-icon">
                <i className="fas fa-bars "></i>
              </label>
              <div className="menu-content" id="menu-content">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#showing-coming-movie"
                      onClick={this.handleOnClickLinks}
                    >
                      Lịch chiếu
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#theater-block-home"
                      onClick={this.handleOnClickLinks}
                    >
                      Cụm rạp
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#recommend-block"
                      onClick={this.handleOnClickLinks}
                    >
                      Phim hay
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#theater-nearby-block"
                      onClick={this.handleOnClickLinks}
                    >
                      Rạp phim
                    </a>
                  </li>
                </ul>
                <div className="mobile-header-user ">
                  <ul className="navbar-nav">
                    {/* User Login */}
                    <li className="user-login nav-item">
                      <div className="user-login-link">
                        <input type="checkbox" id="dropdown-user-option"/>
                        <label for="dropdown-user-option">
                        <i
                          className="fas fa-user-circle"
                        /> {this.LoginStatus()}  
                        </label>
                        <i className="fas fa-angle-down dropDownArrow"></i>
                        {this.popUpUserOptionMobile()}             
                      </div>
                      
                    </li>
                    {/* User Sign up */}
                    <li className="user-signup nav-item">
                      {this.checkLogin()}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    dangXuat: () => {
      dispatch(action.actDangXuatAdmin());
    },
    changeMode:(val)=>{
      dispatch(action.actChangeTheme(val));
    }
  };
};
const mapStateToProps=(state)=>{
  return {
    themeMode:state.userReducer.isDarkModeOn
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
