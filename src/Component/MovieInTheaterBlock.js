import React, { Component } from 'react'
import ButtonXuatChieu from './ButtonXuatChieu'
export default class MovieInTheaterBlock extends Component {
    renderNgayChieu=()=>{
        let date=[];
        let uniqueDate;
        let arrDate=[];
        let xuatChieu=[];
        this.props.lstXuatChieu.map(item=>{
            xuatChieu.push(item)
            date.push(new Date(item.ngayChieuGioChieu).toLocaleDateString());
            uniqueDate=new Set(date)//remove duplicate element using Set
            arrDate=[...uniqueDate]//convert Set back to Array by spread operator
        })
        
        return arrDate.map(item=>{
           
            return(
                <div className="showTimeDate mx-2">
                    <p>{item}</p>
                    <div className="btn-xuatChieu">
                        <ButtonXuatChieu
                            xuatChieu={xuatChieu}
                            date={item}
                        />
                    </div>
                </div>
            )
        })
    }
    
    render() {
        let {maPhim,tenPhim,hinhAnh}=this.props
        return (
            <div className="movie-of-picked-theater">
                <div className="film-desc">
                    <div className="filmImg mx-2">
                        <img src={hinhAnh} alt="film-img" />
                    </div>
                    <div className="nameFilm">{tenPhim}</div>
                </div>
                <ul className="showing-time-list">
                    <li className="item-showing-time" key={maPhim}>
                       {this.renderNgayChieu()}
                    </li>
                </ul>
            </div>
        )
    }
}
