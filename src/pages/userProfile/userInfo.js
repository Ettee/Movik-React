import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import * as service from "./userService";

export default class UserInfo extends Component {
    constructor(props){
        super(props);
        this.state={
            snackBarStatusErr:false,
            snackBarStatusSuccess:false,
            nameValue:"",
            emailValue:"",
            phoneValue:"",
            validateName:true,
            validateEmail:"valid",
            validatePhone:true,
            
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.user){
            this.setState({
                nameValue:nextProps.user.hoTen,
                emailValue:nextProps.user.email,
                phoneValue:nextProps.user.soDT,
            })
        }
    }
    onChangeValue=(e)=>{
        let {name,value}=e.target;
        this.setState({
            [name]:value
        })
    }
    handleCloseSnackbar=(event, reason)=>{
        if (reason === 'clickaway') {
            return;
        }
        this.setState({
            snackBarStatusErr:false,
            snackBarStatusSuccess:false,
        })
    }
    validateName=()=>{
        if(this.state.nameValue===""){
            this.setState({
                validateName:false
            })
        }else{
            this.setState({
                validateName:true
            })
        }
    }
    validateEmail=()=>{
        let regex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(this.state.emailValue===""){
            this.setState({
                validateEmail:"empty"
            })
        }else{
            if(regex.test(this.state.emailValue.toLowerCase())){
                this.setState({
                    validateEmail:"valid"
                })
            }else{
                this.setState({
                    validateEmail:"invalid"
                })
            }
            
        }
    }
    validatePhone=()=>{
        if(this.state.phoneValue===""){
            this.setState({
                validatePhone:false
            })
        }else{
            this.setState({
                validatePhone:true
            })
        }
    }
    submit=()=>{
        let{validateName,validateEmail,validatePhone,nameValue,emailValue,phoneValue}=this.state;
        if(validateName && validateEmail==="valid" && validatePhone){
            console.log(this.state);
            if(service.updateUserInfo({name:nameValue,email:emailValue,phone:phoneValue})){
              this.setState({
                snackBarStatusSuccess:true
              })
            }
        }else{
            this.setState({
                snackBarStatusErr:true
            })
            this.validateEmail();
            this.validatePhone();
            this.validateName();
        }
    }
    render() {
        let {user}=this.props;
        return (
          <div className="user-info">
            <div className="user-info-avatar">
              <div className="avarta">
                <i className="fas fa-user-circle"></i>
              </div>
            </div>
            <div className="user-info-detail">
              <div
                className={
                  this.props.themeMode
                    ? "account-name"
                    : "account-name account-name-light"
                }
              >
                {user.taiKhoan}
              </div>
              <div className="info-item">
                <div
                  className={
                    this.props.themeMode
                      ? " info-key info-key-dark"
                      : " info-key info-key-light"
                  }
                >
                  <i className="fas fa-signature icon-dark"></i>:
                </div>
                <div
                  className={
                    this.props.themeMode
                      ? " info-value info-value-dark"
                      : " info-value info-value-light"
                  }
                >
                  <input 
                    value={this.state.nameValue} 
                    onChange={this.onChangeValue}
                    onBlur={this.validateName}
                    name="nameValue"  />
                    <br/>
                    {!this.state.validateName?(<small style={{color:"red"}}>Họ tên không được bỏ trống.</small>):(<div></div>)}
                </div>
              </div>
              <div className="info-item">
                <div
                  className={
                    this.props.themeMode
                      ? " info-key info-key-dark"
                      : " info-key info-key-light"
                  }
                >
                  <i className="far fa-envelope"></i>:
                </div>
                <div
                  className={
                    this.props.themeMode
                      ? " info-value info-value-dark"
                      : " info-value info-value-light"
                  }
                >
                  <input 
                    value={this.state.emailValue}
                    onChange={this.onChangeValue}
                    onBlur={this.validateEmail}
                    name="emailValue" />
                    <br/>
                    {this.state.validateEmail==="invalid"?(<small style={{color:"red"}}>Email không đúng.</small>):(<div></div>)}
                    {this.state.validateEmail==="empty"?(<small style={{color:"red"}}>Email không được bỏ trống.</small>):(<div></div>)}

                </div>
              </div>
              <div className="info-item">
                <div
                  className={
                    this.props.themeMode
                      ? " info-key info-key-dark"
                      : " info-key info-key-light"
                  }
                >
                  <i className="fas fa-phone"></i>:
                </div>
                <div
                  className={
                    this.props.themeMode
                      ? " info-value info-value-dark"
                      : " info-value info-value-light"
                  }
                >
                  <input 
                    value={this.state.phoneValue}
                    onChange={this.onChangeValue}
                    onBlur={this.validatePhone}
                    name="phoneValue" />
                    <br/>
                    {!this.state.validatePhone?(<small style={{color:"red"}}>Số điện thoại không được bỏ trống.</small>):(<div></div>)}
                </div>
              </div>
            </div>
            <div className={this.props.themeMode?"update-info-button dark-buton":"update-info-button light-buton"}>
              <button className="btn-update" onClick={this.submit}>Cập nhật thông tin</button>
            </div>
            <Snackbar
              open={this.state.snackBarStatusErr}
              autoHideDuration={3000}
              onClose={this.handleCloseSnackbar}
            >
              <MuiAlert
                elevation={6}
                variant="filled"
                onClose={this.handleCloseSnackbar}
                severity="error"
              >
                Thông tin không hợp lệ
              </MuiAlert>
            </Snackbar>
            <Snackbar
              open={this.state.snackBarStatusSuccess}
              autoHideDuration={3000}
              onClose={this.handleCloseSnackbar}
            >
              <MuiAlert
                elevation={6}
                variant="filled"
                onClose={this.handleCloseSnackbar}
                severity="success"
              >
                Cập nhật thành công
              </MuiAlert>
            </Snackbar>
          </div>
        );
    }
}
