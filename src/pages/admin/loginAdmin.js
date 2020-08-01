import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../redux/action";
import { withRouter } from "react-router";
class LoginAdmin extends Component {
  constructor(props){
    super(props)
    this.state={
      taiKhoan:'',
      matKhau:''

    }
  }
  handleOnChange=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    this.setState({
      [name]:value
    })
  }
  handleSubmit=(e)=>{
    let acc ={
      taiKhoan:this.state.taiKhoan,
      matKhau:this.state.matKhau
    }
    if(localStorage.getItem('userKhachHang')){
      localStorage.removeItem('userKhachHang')
    }
    this.props.dangNhap(acc)
    
    setTimeout(()=>{
      if(this.props.isAdmin){
        this.props.history.push('/admin')
      }else{
        this.props.history.push('/')
      }
    },200)
    e.preventDefault()
  }
  render() {
    
    return (
      <div
        className="login-admin"
        style={{
          backgroundImage: "url(../../img/backapp.jpg)",
          height: "100vh",
        }}
      >
        <div className="login-wrapper d-flex ">
          <div className="loginForm">
            <div className="title text-center text-uppercase">Đăng nhập</div>
            <form className="d-flex align-items-center flex-column" onSubmit={this.handleSubmit}>
              <div className="row my-2 form-group">
                <label
                  className="label col-md-4 no-paddingXRight"
                  htmlFor="taiKhoan"
                >
                  Tài khoản:{" "}
                </label>
                <input
                  className="col-md-8 form-control"
                  type="text"
                  name="taiKhoan"
                  value={this.state.taiKhoan}
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="row my-2 form-group">
                <label
                  className=" label col-md-4 no-paddingXRight"
                  htmlFor="matKhau"
                >
                  Mật khẩu:{" "}
                </label>
                <input
                  className="col-md-8 form-control"
                  type="password"
                  name="matKhau"
                  value={this.state.matKhau}
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="btn-box form-group">
                <button type="submit" className="btn-login">
                  Đăng nhập
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAdmin:state.userReducer.isAdmin
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dangNhap: (user) => {
      dispatch(action.actDangNhap(user));
    },
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginAdmin));
