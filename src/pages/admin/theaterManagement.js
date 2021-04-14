import React, { Component } from 'react'
import {connect} from "react-redux";
import * as action from "../../redux/action";
import { withRouter } from "react-router";
class theaterManagement extends Component {
    constructor(props){
        super(props)
        // if(!localStorage.getItem('userAdmin')){
        //     this.props.history.push('/login-admin')
        // }
        this.state={
            heThongRapClicked:'BHDStar'
        }
    }
    componentDidMount(){
        this.props.getTheaterSystem()
        this.props.layThongTinCumRapTheoHeThongRap(this.state.heThongRapClicked)
        
    }
    handleOnClickHeThongRap=(maHeThongRap)=>{
        this.setState({
            heThongRapClicked:maHeThongRap
        })
        this.props.layThongTinCumRapTheoHeThongRap(maHeThongRap)
    }
    renderCumRapInfo=()=>{
        let {thongTinCumRapTheoHeThongRap}=this.props
        return thongTinCumRapTheoHeThongRap.map((item,index)=>{
            return(
                <tr key={index}>
                    <td>{index}</td>
                    <td>{item.maCumRap}</td>
                    <td>{item.tenCumRap}</td>
                    <td>{item.diaChi}</td>
                    <td>{item.danhSachRap.length}</td>
                </tr>
            )
        })
    }
    renderHeThongRap=()=>{
        let {heThongRap}=this.props
        const styleForLogo={
            width:"70px"
        }
        if(heThongRap.length >0){
            return heThongRap.map((item,index)=>{
                if(item.maHeThongRap===this.state.heThongRapClicked){
                    return(
                        <div className="heThongRap-item  col-md-3 rounded-lg m-2 py-1 heThongRap-selected  " key={index} onClick={()=>{this.handleOnClickHeThongRap(item.maHeThongRap)}}>
                            
                                <div className="logo-heThongRap d-flex justify-content-center">
                                    <img src={item.logo} style={styleForLogo} alt="img_logo" />
                                </div>
                                <div className="heThongRapInfo d-flex align-items-center flex-column">
                                    <div className="maHeThongRap">
                                        {item.maHeThongRap}
                                    </div>
                                    <div className="tenHeThongRap">
                                        {item.tenHeThongRap}
                                    </div>
                                </div>                             
                        </div>
                    )
                }
                else{
                    return(
                        <div className="heThongRap-item heThongRap-item-hover  col-md-3 rounded-lg m-2  " key={index} 
                            onClick={() => { this.handleOnClickHeThongRap(item.maHeThongRap) }}> 
                                <div className="logo-heThongRap d-flex justify-content-center">
                                    <img src={item.logo} style={styleForLogo} alt="img_logo" />
                                </div>
                                <div className="heThongRapInfo d-flex align-items-center flex-column">
                                    <div className="maHeThongRap">
                                        {item.maHeThongRap}
                                    </div>
                                    <div className="tenHeThongRap">
                                        {item.tenHeThongRap}
                                    </div>
                                </div>
                        </div>
                    )
                }
            })
        }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="heThongRap d-flex justify-content-center row mt-5" >
                        {this.renderHeThongRap()}
                    </div>
                </div>               
                <table className="table table-dark table-hover mt-5">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Mã cụm rạp</th>
                            <th>Tên cụm rạp</th>
                            <th>Địa chỉ</th>
                            <th>Tổng số rạp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderCumRapInfo()}
                    </tbody>
                </table>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        heThongRap: state.movieReducer.listOfTheaterSystem,
        thongTinCumRapTheoHeThongRap:state.movieReducer.thongTinCumRapTheoHeThongRap
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getTheaterSystem: () => {
            dispatch(action.actLayThongTinHeThongRap())
        },
        layThongTinCumRapTheoHeThongRap: (maHeThongRap) => {
            dispatch(action.actLayThongTinCumRapTheoHeThongRap(maHeThongRap))
        }
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(theaterManagement))
