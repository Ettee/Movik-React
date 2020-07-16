import React, { Component, Fragment } from 'react'
import { NavLink } from "react-router-dom";
export default class MovieCardInSlide extends Component {

    renderRatingStar = (diem) => {
        if (diem >= 9) {
            return (
                <Fragment>
                    <div>
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                    </div>
                </Fragment>
            )
        } else {
            if (diem < 9 && diem >= 7) {
                return (
                    <Fragment>
                        <div>
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>


                    </Fragment>
                )
            } else {
                if (diem < 7 && diem >= 5) {
                    return (
                        <Fragment>
                            <div>
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </div>


                        </Fragment>
                    )
                } else {
                    if (diem < 5 && diem > 3) {
                        return (
                            <Fragment>
                                <div>
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>

                            </Fragment>
                        )
                    } else {
                        return (
                            <Fragment>
                                <i className="fas fa-star" />

                            </Fragment>
                        )
                    }
                }
            }
        }
    }
    render() {
        let classNameButton = "btn-buyticket";
        let classNameRating = "rating-tag";
        if (this.props.isTicketNotAvailable) {
            classNameButton = 'btn-buyticket disable';
            classNameRating = 'rating-tag disable'
        }
        const { movie } = this.props;
        let phimImgUrl = "url(" + movie?.hinhAnh + ")";
        return (
            <Fragment >
                <div className="card" >
                    <div
                        className="card-content"
                        style={{
                            backgroundImage: phimImgUrl
                        }}
                    >
                        {/* OVERLAY */}
                        <div className="card-overlay">
                            <div>
                                <a className="watchTrailer" href={movie?.trailer} data-lity>
                                    <i className="far fa-play-circle" />
                                </a>
                            </div>
                            <NavLink to={`/detail-movie/${movie.maPhim}`}>
                                <button className={classNameButton} >Mua vé</button>
                            </NavLink>

                        </div>
                        {/* END OVERLAY */}
                        <div className="card-tag">
                            <span className="age-tag">C18</span>
                            <span className={classNameRating}>
                                <div className="rating-score">{movie.danhGia}.0</div>
                                <div className="rating-star ">
                                    {this.renderRatingStar(movie.danhGia)}
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="film-content">
                        <div className="nameFilm">{movie?.tenPhim}</div>
                        <div className="lengthFilm">118 mins</div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
