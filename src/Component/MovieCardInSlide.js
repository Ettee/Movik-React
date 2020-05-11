import React, { Component } from 'react'

export default class MovieCardInSlide extends Component {
    render() {
        return (
            <div className="card">
                <div
                    className="card-content"
                    style={{
                        backgroundImage:
                            "url(../img/film_poster/joker-c18-15819301592912_215x318.jpg)"
                    }}
                >
                    {/* OVERLAY */}
                    <div className="card-overlay">
                        <div>
                            <a className="watchTrailer" href="https://www.youtube.com/watch?v=7n_eJiQ_GUc" data-lity>
                                <i className="far fa-play-circle" />
                            </a>
                        </div>
                        <button className="btn-buyticket">Mua vé</button>
                    </div>
                    {/* END OVERLAY */}
                    <div className="card-tag">
                        <span className="age-tag">C18</span>
                        <span className="rating-tag">
                            <div className="rating-score">6.4</div>
                            <div className="rating-star ">
                                <i className="fas fa-star fa-xs" />
                                <i className="fas fa-star fa-xs" />
                                <i className="fas fa-star fa-xs" />
                                <i className="fas fa-star fa-xs" />
                            </div>
                        </span>
                    </div>
                </div>
                <div className="film-content">
                    <div className="nameFilm">Joker (C18)</div>
                    <div className="lengthFilm">118 mins</div>
                </div>
            </div>
        )
    }
}
