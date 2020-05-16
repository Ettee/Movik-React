import React, { Component } from 'react'

export default class MovieInTheaterBlock extends Component {
    render() {
        return (
            <div className="movie-of-picked-theater">
                <div className="nameFilm">Phim</div>
                <ul className="showing-time-list">
                    <li className="item-showing-time">
                        <button className="btn-shadow">
                            <a href="#">16:10</a>
                        </button>
                    </li>
                </ul>
            </div>
        )
    }
}
