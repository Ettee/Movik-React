import Axios from 'axios';

export function login(){
    
}
export function getAllAvailableMovie(){
    let data= require('../../assets/data/all-available-movie.json');
    return data

}
export function getInComingMovie(){
    let data= require('../../assets/data/all-in-coming-movie.json');
    return data

}
export function wishList(maPhim){
    console.log(maPhim)

}
export function getAllMovieForSearchBlock(){
    let data =[
        {
            tenPhim:"Avenger 1",
            maPhim:1322
        },
        {
            tenPhim:"Avenger 2",
            maPhim:1323
        }
    ]
    return data
}
export function getTheaterByMovieID(maPhim){
    let data=[
        {
            tenRap:"ABC",
            maRap:1
        },
        {
            tenRap:"XYZ",
            maRap:2
        }
    ]
    return data
}
export function getDateShowTimeByMovieAndTheater(maPhim,maRap){
    let data=[
        {
            ngayChieu:"2021-04-09T00:00:00"
        },
        {
            ngayChieu:"2021-04-07T00:00:00"
        }
    ]
    return data
}
export function getStartTimeByMovieTheaterAndDate(maPhim,maRap,ngayChieu){
    let data=[
        {
            gioChieu:"2021-04-09T16:00:00",
            maXuatChieu:1
        },
        {
            gioChieu:"2021-04-09T10:00:00",
            maXuatChieu:2
        }
    ]
    return data
}