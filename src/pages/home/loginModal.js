import React, { Component } from 'react';
import * as service from "./homeService";
import swal from 'sweetalert';
class LoginModal extends Component {
    constructor(props){
        super(props)
        this.state={
            taiKhoan:"",
            matKhau:"",
        };
    }
    handleOnChange=(event)=>{
        let {name,value}=event.target;
        this.setState({
            [name]:value
        });
    }
    handleLogin=(e)=>{
        // this.props.login(this.state);
        service.login({ten_dang_nhap:this.state.taiKhoan,mat_khau:this.state.matKhau});
        //thành công thì lưu thông tin xuống local store
        let data ={
            email:"thanhson1185@gmail.com",
            hoTen:"Trần Thanh Sơn",
            soDT:"0123123132",
            taiKhoan:"devfie"
        }
        localStorage.setItem("userKhachHang",JSON.stringify(data))
        swal({
            title: "Đăng nhập thành công",
            icon: "success"    
        }).then((ok) => {
            if (ok) {
                window.location.reload()
            }
        })
        e.preventDefault();
    }
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
                                <form onSubmit={this.handleLogin}>
                                    <div className="form-group">
                                        <label htmlFor="taiKhoan">Tên đăng nhập: </label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Nhập tên đăng nhập" 
                                            id="taiKhoan" name="taiKhoan" 
                                            onChange={this.handleOnChange} 
                                            onBlur={this.handleOnChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="matKhau">Mật khẩu:</label>
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            placeholder="Nhập mật khẩu" 
                                            id="matKhau" 
                                            name="matKhau" 
                                            onChange={this.handleOnChange}
                                            onBlur={this.handleOnChange}
                                        />
                                    </div>
                                    <button type="submit" className="btn-login">Đăng nhập</button>
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

export default LoginModal;