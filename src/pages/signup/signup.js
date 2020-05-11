import React, { Component,Fragment } from 'react'
import LoginModal from "../home/loginModal";
export default class Signup extends Component {
    
    render() {
        return (
            <Fragment>
                <section className="sign-up-section">
                <div
                    className="cover-bg"
                    style={{ backgroundImage: "url(../img/backapp.jpg)", height: "100vh" }}
                >
                    <div className="container">
                        <div className="vertical-box">
                            <div className="sign-up-form">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="hoTen">Họ và tên</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Nhập tên người dùng"
                                            id="hoTen"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="taiKhoan">Tài khoản</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Nhập tên tài khoản"
                                            id="taiKhoan"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="matKhau">Mật khẩu</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Nhập mật khẩu"
                                            id="matKhau"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="soDT">Điện thoại</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Nhập số điện thoại"
                                            id="soDT"
                                        />
                                    </div>
                                    <button type="submit" className="btn-login">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <LoginModal/>
            </Fragment>
            
        )
    }
}
