import React, { Component, Fragment } from 'react'
import { NavLink } from "react-router-dom";
import {connect} from "react-redux";
import * as action from "../redux/action";
class MovieCardInSlide extends Component {

    renderRatingStar = (diem) => {
        if (diem >= 9) {
            return (
                <Fragment>
                    <div>
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                    </div>
                </Fragment>
            )
        } else {
            if (diem < 9 && diem >= 7) {
                return (
                    <Fragment>
                        <div>
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                        </div>


                    </Fragment>
                )
            } else {
                if (diem < 7 && diem >= 5) {
                    return (
                        <Fragment>
                            <div>
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                            </div>


                        </Fragment>
                    )
                } else {
                    if (diem < 5 && diem > 3) {
                        return (
                            <Fragment>
                                <div>
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                </div>

                            </Fragment>
                        )
                    } else {
                        return (
                            <Fragment>
                                <i className="fa fa-star" />

                            </Fragment>
                        )
                    }
                }
            }
        }
    }
    transferMovieName=(name)=>{
        this.props.transferMovieName(name)
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
                <div className={this.props.themeMode?"card-dark card":"card-light card"} >
                    <div
                        className="card-content"
                        style={{
                            backgroundImage: phimImgUrl
                        }}
                    >
                        {/* OVERLAY */}
                        <div className={this.props.themeMode?"card-overlay card-overlay-dark":"card-overlay card-overlay-light"}>
                            <div>
                                <a className="watchTrailer" href={movie?.trailer} data-lity>
                                    <i className="far fa-play-circle" />
                                </a>
                            </div>
                            <NavLink to={`/detail-movie/${movie.maPhim}`}>
                                <button className={classNameButton} onClick={()=>{this.transferMovieName(movie.tenPhim)}}>Mua vé</button>
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
                        {this.props.recommend?
                        <div className={this.props.themeMode?"lengthFilm lengthFilm-dark":"lengthFilm lengthFilm-light"}>Ngày chiếu: {new Date(movie.ngayKhoiChieu).toLocaleDateString()}</div>:<div className={this.props.themeMode?"lengthFilm lengthFilm-dark":"lengthFilm lengthFilm-light"}>118 phút</div> }
                    
                    </div>
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps =state =>{
    return{
        themeMode:state.userReducer.isDarkModeOn
    };
}
const mapDispatchToProps = dispatch => {
    return {
        transferMovieName: (name) => {
            dispatch(action.actTransferMovieName(name));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MovieCardInSlide)