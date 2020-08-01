import React, { Component, Fragment } from 'react'
import SearchBarForUser from '../../Component/AdminComponent/searchBarForUser';
import {connect} from "react-redux";
import * as action from "../../redux/action";
import swal from 'sweetalert';
import { withRouter } from "react-router";
import SignUpModal from "../../Component/AdminComponent/signUpModal";
class UserManagement extends Component {
    constructor(props){
        super(props)
        if(!localStorage.getItem('userAdmin')){
            this.props.history.push('/login-admin')
        }
        this.state={
            soTrang:1,
            indexToExecuteAction:100,
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: "GP09",
            maLoaiNguoiDung: "",
            hoTen: "",
            danhSachUser:[],
            keyword:""
            
        }
        
    }
    handleEdit=(index,taiKhoan,hoTen,matKhau,email,soDt,maLoaiNguoiDung)=>{
        
        if(index === this.state.indexToExecuteAction){
            this.setState({
                indexToExecuteAction:100
            })
        }else{
            this.setState({
                indexToExecuteAction:index,
                taiKhoan: taiKhoan,
                matKhau: matKhau,
                email: email,
                soDt: soDt,
                maLoaiNguoiDung: maLoaiNguoiDung,
                hoTen: hoTen
            })
        }
    }
    handleOnChangeUser=(e)=>{
        let name =e.target.name
        let value=e.target.value
        this.setState({
            [name]:value
        })
    }
    handleConfirmEditUser=()=>{
        let obj={
            taiKhoan: this.state.taiKhoan,
            matKhau: this.state.matKhau,
            email: this.state.email,
            soDt: this.state.soDt,
            maNhom: this.state.maNhom,
            maLoaiNguoiDung: this.state.maLoaiNguoiDung,
            hoTen: this.state.hoTen
        }
        let userAD=JSON.parse(localStorage.getItem("userAdmin"))
        
        swal({
            text:"Bạn có chắc chắn muốn cập nhật thông tin người dùng",
            icon:"warning",
            dangerMode: true,
            buttons:["Quay lại","Ok"]
        }).then(ok=>{
            if(ok){
                console.log(obj)
                this.props.updateUser(obj,userAD.accessToken)
                setTimeout(()=>{
                    this.props.layDanhSachUser(this.state.soTrang);
                    this.props.layDanhSachTatCaUser()
                    this.setState({
                        indexToExecuteAction:100,
                        keyword:''
                    })
                },1600)

            }
        })

    }
    handleDeleteUser=(taiKhoan)=>{
        let userAD=JSON.parse(localStorage.getItem("userAdmin"))
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this account!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                    
                    this.props.xoaNguoiDung(taiKhoan,userAD.accessToken)
                    setTimeout(()=>{
                        this.props.layDanhSachUser(this.state.soTrang);
                        this.setState({
                            indexToExecuteAction:100
                        })
                    },1600)
               
              
            } else {
              swal("Account is safe!");
            }
          });
        
    }
    renderUser=()=>{   
        if(Object.keys(this.props.danhSachUser).length !== 0){ 
            if(this.state.keyword===""){
                //trường hợp ko search nên ko có keyword
                return this.props.danhSachUser.items.map((item,index)=>{
                    if(index===this.state.indexToExecuteAction){
                        return (
                            <tr key={index}>
                                <th>{index+1}</th>
                                <td>
                                    <input className="user-props "  onChange={this.handleOnChangeUser} name="taiKhoan" type="text" value={this.state.taiKhoan} disabled={true}/>
                                </td>
                                <td>
                                    <input className="user-props editable"  onChange={this.handleOnChangeUser} name="hoTen" type="text" value={this.state.hoTen} disabled={false}/>
                                </td>
                                <td>
                                    <input className="user-props editable"  onChange={this.handleOnChangeUser} name="matKhau" type="text" value={this.state.matKhau} disabled={false}/>
                                </td>
                                <td>
                                    <input className="user-props "  onChange={this.handleOnChangeUser} name="email" type="text" value={this.state.email} disabled={true}/>
                                </td>
                                <td>
                                    <input className="user-props editable"  onChange={this.handleOnChangeUser} name="soDt" type="text" value={this.state.soDt} disabled={false}/>
                                </td>
                                <td> 
                                    <input className="user-props editable"  onChange={this.handleOnChangeUser} name="maLoaiNguoiDung" type="text" value={this.state.maLoaiNguoiDung} disabled={false}/> 
                                </td>
                                <td className="d-flex justify-content-around">
                                    <span className=" w-75 mx-1 py-2 action-user">
                                        <i className="fas fa-check check-edit-ok" onClick={this.handleConfirmEditUser}></i>
                                    </span>
                                    <span className=" w-75 mx-1 py-2 action-user">
                                        <i className="far fa-times-circle check-edit-cancel" onClick={()=>{this.handleEdit(index)}}></i>
                                    </span>
                                </td>
                            </tr>
                        )
                    }else{
                        return (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>
                                    <input className="user-props"  name="taiKhoan" type="text" value={item.taiKhoan} disabled={true} />
                                </td>
                                <td>
                                    <input className="user-props"  name="hoTen" type="text" value={item.hoTen} disabled={true} />
                                </td>
                                <td>
                                    <input className="user-props"  name="matKhau" type="text" value={item.matKhau} disabled={true} />
                                </td>
                                <td>
                                    <input className="user-props"  name="email" type="text" value={item.email} disabled={true} />
                                </td>
                                <td>
                                    <input className="user-props"  name="soDt" type="text" value={item.soDt} disabled={true} />
                                </td>
                                <td>
                                    <input className="user-props"  name={item.maLoaiNguoiDung} type="text" value={item.maLoaiNguoiDung} disabled={true} />
                                </td>
                                <td className="d-flex justify-content-around">
                                    <span className=" w-75 mx-1 py-2 action-user">
                                        <i className="fas fa-user-edit action-user-edit" 
                                            data-toggle="tooltip" 
                                            title="Edit user" 
                                            onClick={() => { this.handleEdit(index,item.taiKhoan,item.hoTen,item.matKhau,item.email,item.soDt,item.maLoaiNguoiDung)}}></i>
                                    </span>
                                    <span className=" w-75 mx-1 py-2 action-user">
                                        <i className="fas fa-user-slash action-user-delete" data-toggle="tooltip" title="Delete user" 
                                            onClick={()=>{this.handleDeleteUser(item.taiKhoan)}}></i>
                                    </span>
                                </td>
                            </tr>
                        )
                    }   
                })
            }else{
                //trường hợp có keyword
                let { danhSachUser, keyword } = { ...this.state };
                danhSachUser = danhSachUser.filter(item => {
                    return item.taiKhoan.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
                });
                
                return danhSachUser.map((item,index)=>{
                    if(index===this.state.indexToExecuteAction){
                        return (
                            <tr key={index}>
                                <th>{index+1}</th>
                                <td>
                                    <input className="user-props "  onChange={this.handleOnChangeUser} name="taiKhoan" type="text" value={this.state.taiKhoan} disabled={true}/>
                                </td>
                                <td>
                                    <input className="user-props editable"  onChange={this.handleOnChangeUser} name="hoTen" type="text" value={this.state.hoTen} disabled={false}/>
                                </td>
                                <td>
                                    <input className="user-props editable"  onChange={this.handleOnChangeUser} name="matKhau" type="text" value={this.state.matKhau} disabled={false}/>
                                </td>
                                <td>
                                    <input className="user-props "  onChange={this.handleOnChangeUser} name="email" type="text" value={this.state.email} disabled={true}/>
                                </td>
                                <td>
                                    <input className="user-props editable"  onChange={this.handleOnChangeUser} name="soDt" type="text" value={this.state.soDt} disabled={false}/>
                                </td>
                                <td> 
                                    <input className="user-props editable"  onChange={this.handleOnChangeUser} name="maLoaiNguoiDung" type="text" value={this.state.maLoaiNguoiDung} disabled={false}/> 
                                </td>
                                <td className="d-flex justify-content-around">
                                    <span className=" w-75 mx-1 py-2 action-user">
                                        <i className="fas fa-check check-edit-ok" onClick={this.handleConfirmEditUser}></i>
                                    </span>
                                    <span className=" w-75 mx-1 py-2 action-user">
                                        <i className="far fa-times-circle check-edit-cancel" onClick={()=>{this.handleEdit(index)}}></i>
                                    </span>
                                </td>
                            </tr>
                        )
                    }else{
                        return (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>
                                    <input className="user-props"  name="taiKhoan" type="text" value={item.taiKhoan} disabled={true} />
                                </td>
                                <td>
                                    <input className="user-props"  name="hoTen" type="text" value={item.hoTen} disabled={true} />
                                </td>
                                <td>
                                    <input className="user-props"  name="matKhau" type="text" value={item.matKhau} disabled={true} />
                                </td>
                                <td>
                                    <input className="user-props"  name="email" type="text" value={item.email} disabled={true} />
                                </td>
                                <td>
                                    <input className="user-props"  name="soDt" type="text" value={item.soDt} disabled={true} />
                                </td>
                                <td>
                                    <input className="user-props"  name={item.maLoaiNguoiDung === "QuanTri" ? "QuanTri" : "KhachHang"} type="text" value={item.maLoaiNguoiDung} disabled={true} />
                                </td>
                                <td className="d-flex justify-content-around">
                                    <span className=" w-75 mx-1 py-2 action-user">
                                        <i className="fas fa-user-edit action-user-edit" data-toggle="tooltip" title="Edit user" onClick={() => { this.handleEdit(index,item.taiKhoan,item.hoTen,item.matKhau,item.email,item.soDt,item.maLoaiNguoiDung)}}></i>
                                    </span>
                                    <span className=" w-75 mx-1 py-2 action-user">
                                        <i className="fas fa-user-slash action-user-delete" data-toggle="tooltip" title="Delete user" onClick={()=>{this.handleDeleteUser(item.taiKhoan)}}></i>
                                    </span>
                                </td>
                            </tr>
                        )
                    }
                    
                })
            }
            
        }
    }
    nextPage=()=>{
        let currentPage= this.state.soTrang;
        currentPage +=1;
        this.props.layDanhSachUser(currentPage)
        this.setState({
            soTrang:currentPage,
            indexToExecuteAction:100
        })
    }
    previousPage=()=>{
        let currentPage= this.state.soTrang;
        if(currentPage!==1){
            currentPage -=1;
            this.props.layDanhSachUser(currentPage)
            this.setState({
                soTrang:currentPage,
                indexToExecuteAction:100
            })
        }
        
    }
    componentDidMount(){
        this.props.layDanhSachUser(this.state.soTrang)
        this.props.layDanhSachTatCaUser()
    }
    handleGetKeyWord = keyword => {
        this.setState({
          keyword,
          danhSachUser:this.props.danhSachTatCaUser
        });
    };
    render() {
        return (
            <Fragment>
                <SearchBarForUser getKeyWord={this.handleGetKeyWord} />
                <div className="table-user">
                    <table className="table table-dark table-hover text-center ">
                        <thead>
                            <tr className="text-muted">
                                <th>#</th>
                                <th>Tài khoản</th>
                                <th>Họ tên</th>
                                <th>Mật khẩu</th>
                                <th>Email</th>
                                <th>Số điện thoại</th>
                                <th>Loại người dùng</th>
                                <th>Tác vụ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* gọi hàm để render data ra giao diện */}
                            {this.renderUser()} 
                        </tbody>
                    </table>
                    <nav className={this.state.keyword===""?"pagination-right":"d-none"}>
                        <ul className="pagination justify-content-center">
                            <li className="page-item" onClick={this.previousPage}>
                                <a  className="page-link py-2 px-3">
                                    <span>«</span>
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link py-2 px-3">
                                    {this.state.soTrang}
                                </a>
                            </li>
                            <li className="page-item" onClick={this.nextPage}>
                                <a  className="page-link py-2 px-3">
                                    <span>»</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <SignUpModal/>

            </Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        danhSachUser: state.userReducer.danhSachNguoiDungPhanTrang,
        danhSachTatCaUser:state.userReducer.danhSachTatCaNguoiDung
    }
}
const mapDispatchToProps = dispatch => {
    return {
        layDanhSachUser:(soTrang)=>{
            dispatch(action.actLayDanhSachUserPhanTrang(soTrang))
        },
        updateUser:(obj,token)=>{
            dispatch(action.actUpdateUser(obj,token))
        },
        layDanhSachTatCaUser:()=>{
            dispatch(action.actLayDanhSachTatCaNguoiDung())
        },
        xoaNguoiDung:(taiKhoan,token)=>{
            dispatch(action.actDeleteUser(taiKhoan,token))
        }
    }
}
export default withRouter(connect (mapStateToProps,mapDispatchToProps)(UserManagement))