import React, { Component } from 'react'

export default class LoginModal extends Component {
    render() {
        return (
            <div className="login-modal">
                <div className="modal fade" id="LoginModal">
                    <div className="modal-dialog ">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title text-center">Đăng nhập</h4>
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="taiKhoan">Tên đăng nhập: </label>
                                        <input type="text" className="form-control" placeholder="Nhập tên đăng nhập" id="taiKhoan" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="matKhau">Mật khẩu:</label>
                                        <input type="password" className="form-control" placeholder="Nhập mật khẩu" id="matKhau" />
                                    </div>
                                    <button type="submit" className="btn-login">Đăng nhập</button>
                                    <button className="btn-sign-up">Tạo tài khoản</button>
                                </form>
                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer">
                                <button type="button" className="btn-close-login" data-dismiss="modal">Đóng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
