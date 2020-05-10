import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-sm bg-white navbar-light">
                    {/* Brand */}
                    <div className="header-brand">
                        <a className="navbar-brand" href="#">
                            <img src="./img/logo/1a8baaa2-3dca-4125-ad61-1442a3d7c7a9_200x200.png" alt="logo" />
                        </a>
                    </div>
                    {/* Links */}
                    <div className="header-links">
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
                    <div className="header-user">
                        <ul className="navbar-nav">
                            {/* User Login */}
                            <li className="user-login">
                                <div className="user-login-logo">
                                    <i className="fas fa-user-circle" data-toggle="modal" data-target="#LoginModal" />
                                </div>
                                <div className="user-login-link">
                                    <a href="#" data-toggle="modal" data-target="#LoginModal">Đăng nhập</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

        )
    }
}
