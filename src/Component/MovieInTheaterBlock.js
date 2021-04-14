import React, { Component } from 'react'
import ButtonXuatChieu from './ButtonXuatChieu'
export default class MovieInTheaterBlock extends Component {
    renderNgayChieu=()=>{
        let date=[];
        let uniqueDate;
        let arrDate=[];
        let xuatChieu=[];
        this.props.lstXuatChieu.forEach(item=>{
            xuatChieu.push(item)
            date.push(new Date(item.ngayChieuGioChieu).toLocaleDateString());
            uniqueDate=new Set(date)//remove duplicate element using Set
            arrDate=[...uniqueDate]//convert Set back to Array by spread operator
        })
        
        return arrDate.map((item,index)=>{
           
            return(
                <div className={this.props.themeMode?"showTimeDate showTimeDate-dark mx-2":"showTimeDate showTimeDate-light mx-2"} key={index}>
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
            <div className={this.props.themeMode?"movie-of-picked-theater movie-of-picked-theater-dark":"movie-of-picked-theater movie-of-picked-theater-light"}>
                <div className="film-desc">
                    <div className="filmImg mx-2">
                        <img src={hinhAnh} alt="film-img" />
                    </div>
                    <div className="nameFilm">{tenPhim}</div>
                </div>
                <ul className="showing-time-list">
                    <li className={this.props.themeMode?"item-showing-time item-showing-time-dark":"item-showing-time item-showing-time-light"} key={maPhim}>
                       {this.renderNgayChieu()}
                    </li>
                </ul>
            </div>
        )
    }
}
