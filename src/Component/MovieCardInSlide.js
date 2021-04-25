import React, { Component, Fragment } from 'react'
import { NavLink } from "react-router-dom";
import {connect} from "react-redux";
import * as action from "../redux/action";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import * as homeService from "../pages/home/homeService"
import { Button } from 'primereact/button';
import * as moment from 'moment';
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
    
    wishlist=(maPhim)=>{
        homeService.wishList(maPhim);
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
          <Fragment>
            <div
              className={
                this.props.themeMode ? "card-dark card" : "card-light card"
              }
            >
              <div
                className="card-content"
                style={{
                  backgroundImage: phimImgUrl,
                }}
              >
                {/* OVERLAY */}
                <div
                  className={
                    this.props.themeMode
                      ? "card-overlay card-overlay-dark"
                      : "card-overlay card-overlay-light"
                  }
                >
                  <div>
                    <a className="watchTrailer" href={movie?.trailer} data-lity>
                      <i className="far fa-play-circle" />
                    </a>
                  </div>
                  <NavLink to={`/detail-movie/${movie.maPhim}`}>
                    <button
                      className={classNameButton}
                    >
                      Mua vé
                    </button>
                  </NavLink>
                </div>
                {/* END OVERLAY */}
                <div className="card-tag">
                  <span className="card-tag-left">
                    <div className="age-tag">{movie.doTuoi}</div>
                    {this.props.isTicketNotAvailable ? (
                      <div className="wishlist">
                        <Button
                          icon="pi pi-bookmark"
                          className="p-button-rounded p-button-help"
                          onClick={() => {
                            this.wishlist(movie.maPhim);
                          }}
                        />
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </span>
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
                {this.props.recommend ? (
                  <div
                    className={
                      this.props.themeMode
                        ? "lengthFilm lengthFilm-dark"
                        : "lengthFilm lengthFilm-light"
                    }
                  >
                    Ngày chiếu:{" "}
                    {moment(movie.ngayKhoiChieu).format('L')}
                  </div>
                ) : (
                  <div
                    className={
                      this.props.themeMode
                        ? "lengthFilm lengthFilm-dark"
                        : "lengthFilm lengthFilm-light"
                    }
                  >
                    {movie.thoiLuong}
                  </div>
                )}
              </div>
            </div>
          </Fragment>
        );
    }
}
const mapStateToProps =state =>{
    return{
        themeMode:state.userReducer.isDarkModeOn
    };
}

export default connect(mapStateToProps,null)(MovieCardInSlide)