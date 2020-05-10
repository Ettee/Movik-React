import React, { Component } from 'react'
export default class SearchBlock extends Component {
    render() {
        return (
            <section className="search-movie-section">
                <div className="search-movie-box">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="search-item-for-movie-ticket form-group ">
            
                                <select className="form-control select-option custom-select" >
                                    <option disabled selected hidden>Phim</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>4</option>
                                    <option>4</option>
                                    <option>4</option>
                                    <option>4</option>
                                    <option>4</option>
                                    <option>4</option>
                                    <option>4</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="search-item-for-movie-ticket form-group">
                               
                                <select className="form-control select-option custom-select" >
                                    <option disabled selected hidden>Rạp</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="search-item-for-movie-ticket form-group">
                            
                                <select className="form-control select-option custom-select" >
                                    <option disabled selected hidden>Ngày chiếu</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="search-item-for-movie-ticket form-group">
                                <select className="form-control select-option custom-select" >
                                    <option selected hidden>Xuất chiếu</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="search-item-for-movie-ticket">
                                <a href="#">
                                    <button className="btn  btn-buynow text-uppercase">
                                        Mua vé ngay
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
