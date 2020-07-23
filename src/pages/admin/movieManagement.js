import React, { Component } from 'react'
import {connect} from "react-redux";
import * as action from "../../redux/action";
class movieManagement extends Component {
    constructor(props){
        super(props)
        this.state={
            soTrang:1
        }
    }
    renderPhim=()=>{
        if(Object.keys(this.props.danhSachPhimPhanTrang).length !== 0){
            return this.props.danhSachPhimPhanTrang.items.map((item,index)=>{
                return (
                    <tr>
                        <th>{item.maPhim}</th>
                        <td className="poster-row">
                            <img src={item.hinhAnh} alt={item.biDanh}/>
                        </td>
                        <td>{item.tenPhim}</td>
                        <td>{new Date(item.ngayKhoiChieu).toLocaleDateString()}</td>
                        <td>
                            <i class="fas fa-expand-arrows-alt more-info"></i>
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
        console.log(this.props.danhSachPhimPhanTrang)
        return (
            <div className="movieManagement">
                <h3 className="text-muted text-center my-3">Quản lý phim</h3>
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
export default connect (mapStateToProps,mapDispatchToProps)(movieManagement)