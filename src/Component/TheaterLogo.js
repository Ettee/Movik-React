import React, { Component } from 'react'
import { event } from 'jquery'

export default class TheaterLogo extends Component {
    constructor(props){
        super(props)
    }
    render() {
        let {logo,maHeThongRap,biDanh,key}=this.props;
        return (
            <li className="nav-item " key={key}>
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
