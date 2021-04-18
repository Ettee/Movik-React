import React, { Component, Fragment } from 'react'
import {connect} from "react-redux";
import * as action from "../../redux/action";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import InputAdornment from '@material-ui/core/InputAdornment';
import DoneIcon from '@material-ui/icons/Done';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfFavoriteMovieType:[],
            validationName:false,
            validationAccount:false,
            validationEmail:"",
            validationPhone:false,
            validationPass:"",
            valuesName:"",
            valuesAccount:"",
            valuesEmail:"",
            valuesPhone:"",
            valuesPass:"",
            showPassword: false,
            remindToChooseMovieType:false
        }
        document.title="Movik | Đăng kí "
    }
    renderChips=()=>{
        let listOfMovieType=[
            {
                label:"Hành động",
                id:1
            },
            {
                label:"Drama",
                id:2
            },
            {
                label:"Tình cảm",
                id:3
            },
            {
                label:"Tài liệu 1",
                id:4
            },
            {
                label:"Tài liệu 2",
                id:5
            },
            {
                label:"Tài liệu 3",
                id:6
            },
            {
                label:"Tài liệu 4",
                id:7
            },
        ]
        return listOfMovieType.map((x,i)=>{
            return (
                <Chip
                    // avatar={<Avatar>M</Avatar>}
                    key={i}
                    color={this.state.listOfFavoriteMovieType.includes(x.id)?"primary":"default"}
                    icon={this.state.listOfFavoriteMovieType.includes(x.id)?<DoneIcon style={{fontSize:"small"}}  />:null}
                    label={x.label}
                    onClick={()=>{this.handleClickOnMovieTypeChip(x.id)}}
                    variant="outlined"
                    style={{margin:"5px 5px"}}
                />
            )
        })
    }

    handleClickOnMovieTypeChip=(value)=>{
        let listOfFavoriteMovieType =[... this.state.listOfFavoriteMovieType];
        if(!listOfFavoriteMovieType.includes(value)){
            listOfFavoriteMovieType.push(value)
        }else{
            listOfFavoriteMovieType.splice(listOfFavoriteMovieType.indexOf(value),1);
        }
        this.setState({
            listOfFavoriteMovieType
        })
    }

    validateName=()=>{
        if(this.state.valuesName===""){
            this.setState({
                validationName:true
            })
        }else{
            this.setState({
                validationName:false
            })
        }
    }

    validateAccount=()=>{
        if(this.state.valuesAccount===""){
            this.setState({
                validationAccount:true
            })
        }else{
            this.setState({
                validationAccount:false
            })
        }
    }

    validateEmail=()=>{
        let regex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(this.state.valuesEmail===""){
            this.setState({
                validationEmail:"empty"
            })
        }else{
            if(regex.test(this.state.valuesEmail.toLowerCase())){
                this.setState({
                    validationEmail:"valid"
                })
            }else{
                this.setState({
                    validationEmail:"invalid"
                })
            }
            
        }
    }

    validatePhone=()=>{
        if(this.state.valuesPhone===""){
            this.setState({
                validationPhone:true
            })
        }else{
            this.setState({
                validationPhone:false
            })
        }
    }
    
    validatePass=()=>{
        if(this.state.valuesPass===""){
            this.setState({
                validationPass:"empty"
            })
        }else{
            if(this.state.valuesPass.length>=8){
                this.setState({
                    validationPass:"valid"
                })
            }else{
                this.setState({
                    validationPass:"invalid"
                })
            }
        }
    }
    onChangeField=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleDateChange=(data)=>{
        this.setState({
            selectedDateoFBirth:data
        })
    }
    handleShowPassword=()=>{
        this.setState({
            showPassword:!this.state.showPassword
        })
    }
    submit=()=>{
        let {validationAccount,validationEmail,validationPhone,validationName,validationPass,listOfFavoriteMovieType}=this.state;
        let {valuesAccount,valuesName,valuesEmail,valuesPhone,valuesPass} =this.state;
        if(!validationAccount && !validationPhone && !validationName && validationPass==="valid" && validationEmail==="valid" && listOfFavoriteMovieType.length!== 0 ){
            console.log(valuesAccount)
            console.log(valuesName)
            console.log(valuesEmail)
            console.log(valuesPhone)
            console.log(valuesPass)
            console.log(listOfFavoriteMovieType)
            
        }else{
            if(listOfFavoriteMovieType.length=== 0){
                this.setState({
                    remindToChooseMovieType:true
                })
            }
            this.validateName();
            this.validatePhone();
            this.validateEmail();
            this.validateAccount();
            this.validatePass();
        }
    }
    handleCloseSnackbarRemindChooseMovieType=(event, reason)=>{
        if (reason === 'clickaway') {
            return;
        }
        this.setState({
            remindToChooseMovieType:false
        })
    }

    
    render() {
        return (
          <Fragment>
            <Snackbar open={this.state.remindToChooseMovieType} autoHideDuration={3000} onClose={this.handleCloseSnackbarRemindChooseMovieType}>
              <MuiAlert  elevation={6} variant="filled" onClose={this.handleCloseSnackbarRemindChooseMovieType} severity="error">
                Bạn chưa chọn thể loại phim 
              </MuiAlert>
            </Snackbar>
            <section className="sign-up-section">
              <div
                className="cover-bg"
                style={{
                  backgroundImage: "url(../img/backapp.jpg)",
                  padding:"30px 0",
                }}
              >
                <div className="sign-up-container">
                  <div className="form-container">
                    <div className="form-header">
                      <div className="form-title">Welcome to Movik</div>
                      <div className="form-desc">
                        Đăng kí để được nhiều ưu đãi, mua vé và bảo mật thông
                        tin!
                      </div>
                    </div>
                    <hr />
                    <div className="form-body">
                      <div className="full-name-account-field form-field">
                        <Grid container spacing={2}>
                          <Grid item lg={6} xs={12}>
                            <TextField
                              className="textfield-input"
                              style={{ width: "100%" }}
                              name="valuesName"
                              error={this.state.validationName}
                              label="Họ và tên"
                              helperText={
                                this.state.validationName
                                  ? "Họ tên không được trống."
                                  : ""
                              }
                              value={this.state.valuesName}
                              onChange={this.onChangeField}
                              onBlur={this.validateName}
                            />
                          </Grid>
                          <Grid item lg={6} xs={12}>
                            <TextField
                              className="textfield-input"
                              style={{ width: "100%" }}
                              error={this.state.validationAccount}
                              name="valuesAccount"
                              label="Tài khoản"
                              helperText={
                                this.state.validationAccount
                                  ? "Tài khoản không đc trống."
                                  : ""
                              }
                              value={this.state.valuesAccount}
                              onChange={this.onChangeField}
                              onBlur={this.validateAccount}
                            />
                          </Grid>
                        </Grid>
                      </div>
                      <div className="password-birthday-field form-field">
                        <Grid container spacing={2}>
                          <Grid item lg={12} xs={12}>
                            <TextField
                              type={
                                this.state.showPassword ? "text" : "password"
                              }
                              className="textfield-input"
                              style={{ width: "100%" }}
                              name="valuesPass"
                              error={
                                this.state.validationPass === "empty" ||
                                this.state.validationPass === "invalid"
                              }
                              label="Mật khẩu"
                              helperText={
                                this.state.validationPass === "empty"
                                  ? "Mật khẩu không được trống."
                                  : this.state.validationPass === "invalid"
                                  ? "Mật khẩu quá ngắn."
                                  : ""
                              }
                              value={this.state.valuesPass}
                              onChange={this.onChangeField}
                              onBlur={this.validatePass}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="toggle password visibility"
                                      onClick={this.handleShowPassword}
                                    >
                                      {this.state.showPassword ? (
                                        <Visibility />
                                      ) : (
                                        <VisibilityOff />
                                      )}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </Grid>
                        </Grid>
                      </div>
                      <div className="email-phone-field form-field">
                        <Grid container spacing={2}>
                          <Grid item lg={6} xs={12}>
                            <TextField
                              className="textfield-input"
                              style={{ width: "100%" }}
                              name="valuesEmail"
                              error={
                                this.state.validationEmail === "empty" ||
                                this.state.validationEmail === "invalid"
                              }
                              label="Email"
                              helperText={
                                this.state.validationEmail === "empty"
                                  ? "Email không được trống."
                                  : this.state.validationEmail === "invalid"
                                  ? "Email không đúng."
                                  : ""
                              }
                              value={this.state.valuesEmail}
                              onChange={this.onChangeField}
                              onBlur={this.validateEmail}
                            />
                          </Grid>
                          <Grid item lg={6} xs={12}>
                            <TextField
                              className="textfield-input"
                              style={{ width: "100%" }}
                              name="valuesPhone"
                              error={this.state.validationPhone}
                              label="Số điện thoại"
                              helperText={
                                this.state.validationPhone
                                  ? "Số điện thoại không đc trống."
                                  : ""
                              }
                              value={this.state.valuesPhone}
                              onChange={this.onChangeField}
                              onBlur={this.validatePhone}
                            />
                          </Grid>
                        </Grid>
                      </div>

                      <div className="favorite-movie-type">
                        <div className="favorite-movie-type-title">
                          <BeenhereIcon
                            style={{
                              fontSize: "small",
                              marginRight: "5px",
                              color: "#00c60d",
                            }}
                          />
                          Bạn thích xem những thể loại phim nào ?
                        </div>
                        <div className="movie-types">{this.renderChips()}</div>
                      </div>
                      <div className="sign-up-desc">
                        Bằng cách nhấp vào Đăng ký, bạn đồng ý với{" "}
                        <span className="fake-link">Điều khoản</span> ,{" "}
                        <span className="fake-link">Chính sách dữ liệu</span> và{" "}
                        <span className="fake-link">Chính sách cookie</span> của
                        chúng tôi. Bạn có thể nhận được thông báo của chúng tôi
                        qua SMS và hủy nhận bất kỳ lúc nào.
                      </div>
                    </div>
                    <div className="form-footer">
                      <button
                        onClick={this.submit}
                        className={
                          this.props.themeMode
                            ? "btn-sign-up dark-btn"
                            : "btn-sign-up  light-btn"
                        }
                      >
                        Đăng kí
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Fragment>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
      isUserBookedReady:state.userReducer.isUserBooked,
      themeMode:state.userReducer.isDarkModeOn
    }
}
const mapDispatchToProps =dispatch=>{
    return {
        SignUpUser: user=>{
            dispatch(action.actDangKi(user));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Signup);