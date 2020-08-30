import React, { Component } from 'react'
import { connect } from 'react-redux'

class TheaterInfo extends Component {
    constructor(props){
        super(props)
        this.danhSachPhim=[]
    }
    taoDanhSachPhim=(danhSachPhim)=>{
        if(this.props.movieID){
            //ở movie detail
            danhSachPhim.danhSachPhim.map(item=>{
                if(item.maPhim===this.props.movieID){
                    if(this.danhSachPhim.length >0){
                        this.danhSachPhim=[]  
                    }
                    this.danhSachPhim.push(item)
                }
            })
        }else{
            //ở trang chủ
            if(this.danhSachPhim.length >0){
                this.danhSachPhim=[]  
            }
            danhSachPhim.danhSachPhim.map(item=>{
                
                this.danhSachPhim.push(item)
                
            })

        }
    }
    
    danhSachPhimTheoRapDaChon=(maCumRap)=>{
        this.taoDanhSachPhim(this.props.danhSachPhim)
        this.props.getDanhSachPhimTheoRapDaChon(this.danhSachPhim)
        
    }
    render() {
        let{tenCumRap,diaChi,maCumRap}=this.props;
        return (
            <li className={this.props.themeMode?"nav-item nav-item-dark":"nav-item nav-item-light"}>
                <a className="nav-link " data-toggle="pill" href="#cgv-1" onClick={()=>{this.danhSachPhimTheoRapDaChon(maCumRap)}} >
                    <div>
                        <img
                            src="../img/cgv-aeon-binh-tan-15380175062534.jpg"
                            alt="cgv-aeon-binh-tan"
                        />
                    </div>
                    <div className="theater-info">
                        <h3 className={this.props.themeMode?"theater-name theater-name-dark ":"theater-name theater-name-light "}>
                            {tenCumRap}
                        </h3>
                        <p className="theater-location">
                            {diaChi}
                        </p>
                    </div>
                </a>
            </li>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        themeMode:state.userReducer.isDarkModeOn
    }
}
export default  connect(mapStateToProps,null)(TheaterInfo)