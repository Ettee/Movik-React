import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import {withRouter} from "react-router-dom"
import swal from 'sweetalert';
class Navbar extends Component {
    constructor(props){
        super(props)
        this.state={
            admin:{}
           
        }
    }
    componentDidMount(){
        // if(localStorage.getItem("QuanTri")){
        //     //chuyển tới trang đăng nhập cho admin bằng history.push() 
        //     //import withHistory
        // }
        document.title="Movik Manager"
        let admin=JSON.parse(localStorage.getItem("userAdmin"))
        this.setState({
            admin
        })
    }
    logOut=()=>{
        swal({
            title:"Bạn đang chuẩn bị thoát khỏi quyền quản trị",
            icon:"warning",
            text:"Bạn sẽ được đưa về trang chủ Movik và không thể tiếp tục quản trị ở Movik Manager.",
            buttons: true,
            dangerMode: true,

        }).then(ok=>{
            if(ok){
                localStorage.removeItem("userAdmin")
                this.props.history.push("/")
            }
        })
    }
    moveToMovik=()=>{
        swal({
            title:"Chuyển về Movik",
            icon:"warning",
            buttons: true,
            dangerMode: true,

        }).then(ok=>{
            if(ok){
                this.props.history.push("/")
            }
        })
    }
    render() {
        
        return (
            <div className="navbar-admin">
                <div className="sidebar" >
                    <div
                        className="navbar-brand d-block mx-auto text-center py-3 mb-4 bottom-border"
                    >
                        Movik Manager
                    </div>
                    <div className="bottom-border pb-3 text-white text-center" style={{fontSize:"24px"}}>
                        {/* <img src="../../img/admin.jpeg" width={50} className="rounded-circle mr-3" /> */}
                        {this.state.admin.taiKhoan}
                    </div>
                    <ul className="navbar-nav flex-column mt-4">
                        <li className="nav-item">
                            <NavLink  className={window.location.pathname==="/admin"? "nav-link text-white p-3 mb-2 current":"nav-link text-white p-3 mb-2 sidebar-link "} 
                                
                                to={"/admin"}
                                >
                                <i className="fas fa-users-cog text-light fa-lg mr-3" ></i>
                                Quản lý người dùng
                            </NavLink>
                           
                        </li>
                        <li className="nav-item">
                            <NavLink className={window.location.pathname==="/admin/movieManagement"? "nav-link text-white p-3 mb-2 current":"nav-link text-white p-3 mb-2 sidebar-link "} 
                                
                                to={"/admin/movieManagement"}
                                >                               
                                <i className="fas fa-film text-light fa-lg mr-3"></i>
                                Quản lý phim
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={window.location.pathname==="/admin/theaterManagement"? "nav-link text-white p-3 mb-2 current":"nav-link text-white p-3 mb-2 sidebar-link "} 
                                
                                to={"/admin/theaterManagement"}
                                >
                                <i className="fas fa-clipboard-list text-light fa-lg mr-3"></i>
                            Quản lý rạp
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={window.location.pathname==="/admin/bookingManagement"? "nav-link text-white p-3 mb-2 current":"nav-link text-white p-3 mb-2 sidebar-link "} 
                                
                                to={"/admin/bookingManagement"}
                                >
                                <i className="fas fa-ticket-alt text-light fa-lg mr-3"></i>
                                Quản lý phòng chiếu & đặt vé
                            </NavLink>
                        </li>
                        <li className="nav-item" style={{cursor:"pointer"}}>
                            <a className="nav-link text-white p-3 mb-2 sidebar-link" onClick={this.moveToMovik}>
                                <i className="fab fa-phoenix-squadron text-light fa-lg mr-3"></i>
                                Trở về Movik
                            </a>
                        </li>
                        <li className=" nav-item log-out-admin">
                            <a className="nav-link text-white p-3 mb-2 sidebar-link" onClick={this.logOut}>
                                <i className="fas fa-sign-out-alt text-light fa-lg mr-3"></i>
                                Đăng xuất
                            </a>                  
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}
export default withRouter(Navbar)