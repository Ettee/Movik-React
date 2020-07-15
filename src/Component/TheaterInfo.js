import React, { Component } from 'react'

export default class TheaterInfo extends Component {
    constructor(props){
        super(props)
        this.danhSachPhim=[]
    }
    taoDanhSachPhim=(danhSachPhim)=>{
        let {maCumRap}=this.props;
        if(danhSachPhim.maCumRap===maCumRap){
            if(this.props.movieID){
                console.log(this.props.movieID)
                danhSachPhim.danhSachPhim.map(item=>{
                    if(item.maPhim===this.props.movieID){
                        this.danhSachPhim.push(item)
                    }
                })
            }else{
                danhSachPhim.danhSachPhim.map(item=>{
                    this.danhSachPhim.push(item)
                })
            }
            
        }
    }
    componentDidMount(){
        let {danhSachPhim}=this.props
        this.taoDanhSachPhim(danhSachPhim)
    }
    danhSachPhimTheoRapDaChon=()=>{
        //console.log(this.danhSachPhim)
        this.props.getDanhSachPhimTheoRapDaChon(this.danhSachPhim)
        
    }
    render() {
        let{tenCumRap,diaChi}=this.props;
       
        return (
            <li className="nav-item">
                <a className="nav-link " data-toggle="pill" href="#cgv-1" onClick={this.danhSachPhimTheoRapDaChon} >
                    <div>
                        <img
                            src="../img/cgv-aeon-binh-tan-15380175062534.jpg"
                            alt="cgv-aeon-binh-tan"
                        />
                    </div>
                    <div className="theater-info">
                        <h3 className="theater-name">
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
