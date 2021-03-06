import React, { Component } from 'react';
import TrailerBlock from "./trailerBlock"
import ReviewsBlock from "./reviewsBlock";
import * as moment from "moment";
export default class DetailBlock extends Component {
    render() {
        let{movie}=this.props;
        return (
            <section className="movie-detail">
                <div className="movie-nav">
                    {/* Nav pills */}
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="pill" href="#movieInfo">
                                Thông tin
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="pill" href="#movieReviewUser">
                                Reviews
                            </a>
                        </li>
                    </ul>
                    {/* Tab panes */}
                    <div className="tab-content">
                        <div className="tab-pane container active" id="movieInfo">
                            <div className="row">
                                <div className="col-md-6 ">
                                    <div className="movie-info info-side">
                                        <div className="date-info info">
                                            <div className="row">
                                                <div className="col-md-6 key-info">Ngày phát hành</div>
                                                <div className="col-md-6 value-info">{moment(movie?.ngayKhoiChieu).format('L')}</div>
                                            </div>
                                        </div>
                                        <div className="director-info info">
                                            <div className="row">
                                                <div className="col-md-6 key-info">Đạo diễn</div>
                                                <div className="col-md-6 value-info">Dave Wilson</div>
                                            </div>
                                        </div>
                                        <div className="actor-info info">
                                            <div className="row">
                                                <div className="col-md-6 key-info">Diễn viên</div>
                                                <div className="col-md-6 value-info">
                                                    Toby Kebbell, Eiza González, Vin Diesel
                                                </div>
                                            </div>
                                        </div>
                                        <div className="movieType-info info">
                                            <div className="row">
                                                <div className="col-md-6 key-info">Thể Loại</div>
                                                <div className="col-md-6 value-info">{movie?.theLoai}</div>
                                            </div>
                                        </div>
                                        <div className="nation-info info">
                                            <div className="row">
                                                <div className="col-md-6 key-info">Quốc Gia SX</div>
                                                <div className="col-md-6 value-info">Mỹ</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <div className="movie-descript info-side">
                                        <div className="descript-title">Nội dung</div>
                                        <div className="descript-content">
                                            {movie?.moTa}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane container fade" id="movieReviewUser"> 
                            <ReviewsBlock movie={movie} />
                        </div>
                    </div>
                </div>
                <div className="container">
                    {/* <TrailerBlock movie={movie}/> */}
                </div>
            </section>

        )
    }
}
