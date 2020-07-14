import React, { Component, Fragment } from 'react'
import LoginModal from "../home/loginModal";
import {connect} from "react-redux";
import { createBrowserHistory }   from 'history';
import * as action from "../../redux/action";
class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            values: {
                hoTen: "",
                taiKhoan: "",
                matKhau: "",
                email: "",
                soDT: "",
                maNhom: "GP09",
                maLoaiNguoiDung: "KhachHang",
            },
            errors: {
                hoTen: "",
                taiKhoan: "",
                matKhau: "",
                email: "",
                soDT: ""
            },
            formValid: false,
            hoTenValid: false,
            taiKhoanValid: false,
            matKhauValid: false,
            emailValid: false,
            soDTValid: false

        }
    }
    handleErrors=(e)=>{
        let{name,value}=e.target;
        let message=value===""?name+" không được rỗng":"";
        let {hoTenValid,taiKhoanValid,matKhauValid,emailValid,soDTValid}=this.state;
        switch(name){
            case "hoTen":
                hoTenValid = message !==""? false:true;
                break;
            case "taiKhoan":
                taiKhoanValid =message !==""?false:true;
                if(value!== "" && value.length> 10){
                    taiKhoanValid=false;
                    message="Tên tài khoản không thể dài quá 10 kí tự"
                }
                break;
            case "matKhau":
                matKhauValid =message !== ""?false:true;
                if( value !== "" && value.length < 5){
                    matKhauValid =false;
                    message ="Mật khẩu quá ngắn "
                }
                break;
            case "email":
                emailValid = message !== "" ? false : true;
                if (
                    value !== "" &&
                    !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
                ) {
                    emailValid = false;
                    message = "Email không đúng định dạng";
                }
                break;
            case "soDT":
                soDTValid =message !== ""?false:true;
                break;    
        }
        this.setState(
            {
                errors:{...this.state.errors,[name]:message},
                hoTenValid,
                taiKhoanValid,
                matKhauValid,
                emailValid,
                soDTValid
            },
            ()=>{
                console.log("handleError: ",this.state)
                this.validationForm()
            }
            
        )
    }
    handleOnChange=(e)=>{
        let{name,value}=e.target;
        this.setState({
            values:{...this.state.values,[name]:value}
        },
        ()=>{
            console.log("handleOnChange: ",this.state)
        })
        
    }
    validationForm=()=>{
        let {hoTenValid,taiKhoanValid,matKhauValid,emailValid,soDTValid}=this.state;
        this.setState(
            {
                formValid: hoTenValid && taiKhoanValid && matKhauValid && emailValid && soDTValid
            }
        );
    }
    handleSubmit=(event)=>{
        if(this.state.formValid){
            this.props.SignUpUser(this.state.values);
            alert("Đăng kí thành công")
            
        }else{
            event.preventDefault();
            alert("Xin hãy hoàn thành form đăng kí")
        }
        
        
    }
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
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="hoTen">Họ và tên</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Nhập tên người dùng"
                                                id="hoTen"
                                                name="hoTen"
                                                onChange={this.handleOnChange}
                                                onBlur={this.handleErrors}
                                                onKeyUp={this.handleErrors}
                                            />
                                            {this.state.errors.hoTen !== "" ? (
                                                <div className=" form-err my-2">{this.state.errors.hoTen}</div>
                                            ) : ("")}
                                        </div>
                                        <div className="form-group">
                                                <label htmlFor="taiKhoan">Tài khoản</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Nhập tên tài khoản"
                                                    id="taiKhoan"
                                                    name="taiKhoan"
                                                    onChange={this.handleOnChange}
                                                    onBlur={this.handleErrors}
                                                    onKeyUp={this.handleErrors}
                                                />
                                                {this.state.errors.taiKhoan !== "" ? (
                                                    <div className=" form-err my-2">{this.state.errors.taiKhoan}</div>
                                                ) : ("")}
                                        </div>
                                        <div className="form-group">
                                                <label htmlFor="matKhau">Mật khẩu</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Nhập mật khẩu"
                                                    id="matKhau"
                                                    name="matKhau"
                                                    onChange={this.handleOnChange}
                                                    onBlur={this.handleErrors}
                                                    onKeyUp={this.handleErrors}
                                                />
                                                {this.state.errors.matKhau !== "" ? (
                                                    <div className=" form-err my-2">{this.state.errors.matKhau}</div>
                                                ) : ("")}
                                        </div>
                                        <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Nhập email"
                                                    id="email"
                                                    name="email"
                                                    onChange={this.handleOnChange}
                                                    onBlur={this.handleErrors}
                                                    onKeyUp={this.handleErrors}
                                                />
                                                {this.state.errors.email !== "" ? (
                                                    <div className=" form-err my-2">{this.state.errors.email}</div>
                                                ) : ("")}
                                        </div>
                                        <div className="form-group">
                                                <label htmlFor="soDT">Điện thoại</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Nhập số điện thoại"
                                                    id="soDT"
                                                    name="soDT"
                                                    onChange={this.handleOnChange}
                                                    onBlur={this.handleErrors}
                                                    onKeyUp={this.handleErrors}
                                                />
                                                {this.state.errors.soDT !== "" ? (
                                                    <div className="form-err my-2">{this.state.errors.soDT}</div>
                                                ) : ("")}
                                        </div>
                                            <div className="form-group">
                                                <button type="submit" className="btn-login">
                                                    Đăng kí tài khoản
                                                </button>
                                            </div>
                                            
                                    </form>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
            
        )
    }
}
const mapDispatchToProps =dispatch=>{
    return {
        SignUpUser: user=>{
            dispatch(action.actDangKi(user));
        }
    }
}
export default connect(null,mapDispatchToProps) (Signup);