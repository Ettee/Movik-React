import React, { Component } from 'react'

export default class TheaterLogo extends Component {
    render() {
        let {logo,maHeThongRap,biDanh}=this.props;
        return (
            <li className="nav-item " >
                <a
                    className="nav-link"
                    data-toggle="pill"
                    href="#cgv-theater" 
                    >
                    <img 
                        src={logo} 
                        alt={biDanh} 
                        onClick={()=>{this.props.LayDanhSachLichChieuTheoMaHeThongRap(maHeThongRap)}}
                    />
                </a>
            </li>
        )
    }
}
