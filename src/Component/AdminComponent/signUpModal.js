import React, { Component } from 'react'
import swal from 'sweetalert';
import {connect} from "react-redux";
import * as action from "../../redux/action";
class SignUpModal extends Component {
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
                maLoaiNguoiDung: "",
            },
            errors: {
                hoTen: "",
                taiKhoan: "",
                matKhau: "",
                email: "",
                soDT: "",
                maLoaiNguoiDung:""
            },
            formValid: false,
            hoTenValid: false,
            taiKhoanValid: false,
            matKhauValid: false,
            emailValid: false,
            soDTValid: false,
            maLoaiNguoiDungValid:false
            

        }
    }
    handleErrors=(e)=>{
        let{name,value}=e.target;
        let message=value===""?name+" không được rỗng":"";
        let {hoTenValid,taiKhoanValid,matKhauValid,emailValid,soDTValid,maLoaiNguoiDungValid}=this.state;
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
            case "maLoaiNguoiDung":
                maLoaiNguoiDungValid=message !==""?false:true;
                break;
            default:
                break;    
        }
        this.setState(
            {
                errors:{...this.state.errors,[name]:message},
                hoTenValid,
                taiKhoanValid,
                matKhauValid,
                emailValid,
                soDTValid,
                maLoaiNguoiDungValid
            },
            ()=>{
                this.validationForm()
            }
            
        )
    }
    handleOnChange=(e)=>{
        let{name,value}=e.target;

        this.setState({
            values:{...this.state.values,[name]:value}
        })
        
    }
    validationForm=()=>{
        let {hoTenValid,taiKhoanValid,matKhauValid,emailValid,soDTValid,maLoaiNguoiDungValid}=this.state;
        this.setState(
            {
                formValid: hoTenValid && taiKhoanValid && matKhauValid && emailValid && soDTValid,maLoaiNguoiDungValid
            }
        );
    }
    handleSubmit=(event)=>{
        if(this.state.formValid){
            this.props.SignUpUser(this.state.values); 
            event.preventDefault();
        }else{
            event.preventDefault();
            swal({
                title:"Xin hãy hoàn thành form đăng kí",
                icon:"info"
            })
        }
        
        
    }
    render() {
        return (
            <div className="signUpAdmin ">
                <div className="modal" id="signUpAdmin">
                    <div className="modal-dialog">
                        <div className="modal-content bg-dark">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">Thêm người dùng</h4>
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
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
                                                <label htmlFor="maLoaiNguoiDung">Loại người dùng</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="QuanTri,KhachHang..."
                                                    id="maLoaiNguoiDung"
                                                    name="maLoaiNguoiDung"
                                                    onChange={this.handleOnChange}
                                                    onBlur={this.handleErrors}
                                                    onKeyUp={this.handleErrors}
                                                />
                                                
                                                {this.state.errors.maLoaiNguoiDung !== "" ? (
                                                    <div className="form-err my-2">{this.state.errors.maLoaiNguoiDung}</div>
                                                ) : ("")}
                                        </div>
                                        <div className="form-group">
                                             <button type="submit" className="btn-login-admin">
                                                Thêm người dùng
                                            </button>
                                        </div>
                                            
                                    </form>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
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
export default connect(null,mapDispatchToProps) (SignUpModal);