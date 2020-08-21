import React, { Component } from 'react'
import {connect} from "react-redux";
import * as action from "../../redux/action";
import ModalDetailMovie from "../../Component/AdminComponent/modalDetailMovie";
import AddFilmModal from "../../Component/AdminComponent/addFilmModal";
import { withRouter } from "react-router";
class movieManagement extends Component {
    constructor(props){
        super(props)
        if(!localStorage.getItem('userAdmin')){
            this.props.history.push('/login-admin')
        }
        this.state={
            soTrang:1,
            detailMovie:{}
        }
    }
    getDetailMovieForModal=(data)=>{
        this.setState({
            detailMovie:data
        })
        
    }
    reRender=(flag)=>{
        if(flag){
            // this.setState({
            //     soTrang:1
            // })
            this.props.layDanhSachPhimPhanTrang(this.state.soTrang)
        }
    }
    renderPhim=()=>{
        if(Object.keys(this.props.danhSachPhimPhanTrang).length !== 0){
            return this.props.danhSachPhimPhanTrang.items.map((item,index)=>{
                return (
                    <tr key={index}>
                        <th>{item.maPhim}</th>
                        <td className="poster-row">
                            <img src={item.hinhAnh} alt={item.biDanh}/>
                        </td>
                        <td>{item.tenPhim}</td>
                        <td>{new Date(item.ngayKhoiChieu).toLocaleDateString()}</td>
                        <td>
                            <i className="fas fa-expand-arrows-alt more-info" data-toggle="modal" data-target="#detailMovieModal" 
                            onClick={()=>{this.getDetailMovieForModal(item)}}></i>
                        </td>
                    </tr>
                )
            })

        }
    }
    componentDidMount(){
        this.props.layDanhSachPhimPhanTrang(this.state.soTrang)
    }
    nextPage=()=>{
        let currentPage= this.state.soTrang;
        currentPage +=1;
        this.props.layDanhSachPhimPhanTrang(currentPage)
        this.setState({
            soTrang:currentPage
        })
    }
    previousPage=()=>{
        let currentPage= this.state.soTrang;
        if(currentPage!==1){
            currentPage -=1;
            this.props.layDanhSachPhimPhanTrang(currentPage)
            this.setState({
                soTrang:currentPage 
            })
        }
        
    }
    render() {
        return (
            <div className="movieManagement">
                <div className="movieManagementTop">
                    <h3 className="text-muted text-center my-3">Quản lý phim</h3>
                    <div className="add-film">
                        <i className="fas fa-film" data-toggle="modal" data-target="#addMovieModal" ></i>
                    </div>
                </div>
                <table className="table table-dark table-hover text-center">
                    <thead>
                        <tr className="text-muted">
                            <th>Mã phim</th>
                            <th>Poster</th>
                            <th>Tên phim</th>
                            <th>Ngày khởi chiếu</th>
                            <th>Tác vụ</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.renderPhim()}
                    </tbody>
                </table>
                {/* pagination */}
                <nav className="pagination-right">
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
                <ModalDetailMovie dataMovie={this.state.detailMovie} reLoad={this.reRender}/>
                <AddFilmModal reLoad={this.reRender}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        danhSachPhimPhanTrang:state.movieReducer.danhSachPhimPhanTrang
    }
}
const mapDispatchToProps = dispatch => {
    return {
       layDanhSachPhimPhanTrang:(soTrang)=>{
            dispatch(action.actLayDanhSachPhimPhanTrang(soTrang))
       }
    }
}
export default withRouter(connect (mapStateToProps,mapDispatchToProps)(movieManagement))