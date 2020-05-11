import React, { Component } from 'react'

export default class TheaterLogo extends Component {
    render() {
        return (
            <li className="nav-item ">
                <a
                    className="nav-link"
                    data-toggle="pill"
                    href="#cgv-theater">
                    <img src="../img/logo/CGV.png" alt="cgv" />
                </a>
            </li>
        )
    }
}
