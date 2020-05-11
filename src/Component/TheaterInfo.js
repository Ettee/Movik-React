import React, { Component } from 'react'

export default class TheaterInfo extends Component {
    render() {
        return (
            <li className="nav-item">
                <a className="nav-link " data-toggle="pill" href="#cgv-1">
                    <div>
                        <img
                            src="../img/cgv-aeon-binh-tan-15380175062534.jpg"
                            alt="cgv-aeon-binh-tan"
                        />
                    </div>
                    <div className="theater-info">
                        <h3 className="theater-name">
                            <span style={{ color: "red" }}>CGV</span>-Vincom Gò Vấp
                        </h3>
                        <p className="theater-location">Tầng 5 TTTM LotteMart...</p>
                    </div>
                </a>
            </li>
        )
    }
}
