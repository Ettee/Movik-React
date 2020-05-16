import React, { Component } from 'react'

export default class TheaterLogo extends Component {
    render() {
        let {logo}=this.props;
        return (
            <li className="nav-item " key={this.props.key}>
                <a
                    className="nav-link"
                    data-toggle="pill"
                    href="#cgv-theater"
                    
                    >
                    <img src={logo} alt="cgv" 
                        onClick={()=>{
                            this.props.LayDanhSachLichChieuTheoMaHeThongRap(this.props.maHeThongRap)
                        }}
                    />
                </a>
            </li>
        )
    }
}
