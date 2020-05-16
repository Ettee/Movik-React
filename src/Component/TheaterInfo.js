import React, { Component } from 'react'

export default class TheaterInfo extends Component {
    constructor(props){
        super(props)
        this.danhSachPhim=[]
    }
    taoDanhSachPhim=(danhSachPhim)=>{
        danhSachPhim.lstLichChieuTheoPhim.map(item=>{
            this.danhSachPhim.push(item.maLichChieu)
        })
    }
    render() {
        let{tenCumRap,diaChi,danhSachPhim}=this.props;
        this.taoDanhSachPhim(danhSachPhim)
        console.log(this.danhSachPhim)
        this.props.getDanhSachXuatChieu(this.danhSachPhim)
        return (
            <li className="nav-item">
                <a className="nav-link " data-toggle="pill" href="#cgv-1" >
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
