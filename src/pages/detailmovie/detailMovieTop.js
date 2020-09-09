import React, { Component } from 'react'

export default class DetailMovieTop extends Component {
    renderRatingCircle=(diem)=>{
        switch (diem) {
            case diem=10:
                return "c100 p100 big";  
            case diem=9 :
                return "c100 p90 big";
            case diem <9 && diem>7:
                return "c100 p80 big";                
            case diem=7:
                return "c100 p70 big";           
            case diem<7 && diem >5:
                return "c100 p60 big";
            case diem =5:
                return "c100 p50 big";
            case diem < 5 && diem > 3:
                return "c100 p40 big";
            default:
                return "c100 p80 big";      
        }
    }
    render() {
        const {movie}=this.props;
        let RatingCircleClassName =this.renderRatingCircle(movie.danhGia);
        return (
            <section className="bg-cover-section">
                <div
                    className="bg-cover-fade"
                    style={{
                        backgroundImage:
                            `url(${movie?.hinhAnh})`
                    }}
                ></div>
                <div className="bg-overlay-fade" />
                <div className="film-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="film-posterTop">
                                    <div
                                        className="film-imgTop card-content"
                                        style={{
                                            backgroundImage:
                                                "url("+movie?.hinhAnh+")"
                                        }}
                                    >
                                        {/* OVERLAY */}
                                        <div className="card-overlay">
                                            <div>
                                                <a
                                                    className="watchTrailer"
                                                    href={movie?.trailer}
                                                    data-lity
                                                >
                                                    <i className="far fa-play-circle" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="film-title">
                                        <div>
                                            <div className="ngayKhoiChieu">
                                                Khởi chiều:<span> {new Date(movie?.ngayKhoiChieu).toLocaleDateString()}</span>
                                            </div>
                                            <div>
                                                <span className="age-tag">C18</span>
                                                <span className="film-title-name text-uppercase">{movie?.tenPhim}</span>
                                            </div>
                                            <div>
                                                <span className="film-title-moreInfo">
                                                    110 phút - 2D/Digital
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="circle-wrap">
                                    <div className={RatingCircleClassName}>
                                    <span>{movie?.danhGia}.0</span>
                                        <div className="slice">
                                            <div className="bar" />
                                            <div className="fill" />
                                        </div>
                                    </div>
                                </div>
                                <div className="buy-ticket">
                                    <a href="#theater-block-home">
                                        <button className="btn btn-buynow text-uppercase active shadow ">
                                            Mua vé
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
