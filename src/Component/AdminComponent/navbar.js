import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
export default class Navbar extends Component {
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
        let admin=JSON.parse(localStorage.getItem("userAdmin"))
        this.setState({
            admin
        })
    }
    render() {
        return (
            <div className="navbar-admin">
                <div className=" sidebar">
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
                    </ul>
                </div>

            </div>
        )
    }
}
