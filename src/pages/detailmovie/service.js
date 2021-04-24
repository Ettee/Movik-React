import Axios from 'axios';

    export function getAllReview(maPhim){
        let data = require('../../assets/data/reviews.mock-data.json');
        return data
    }
    export function deleteReview(reviewId){

    }
    export function sendReview(paramObj){

    }
    export function reportReview(reviewId){

    }
    export function getMovieDetail(movieId){
        let data ={
            maPhim:1322,
            tenPhim:"Avenger 1",
            poster:"https://i.pinimg.com/originals/1f/26/d3/1f26d3c52508b1a46235e0cf7087ab65.jpg",
            trailer:"https://www.youtube.com/embed/mxY0upOB0ek",
            moTa:"Biệt đội siêu anh hùng là một phim của điện ảnh Hoa Kỳ được xây dựng dựa trên nguyên mẫu các thành viên trong biệt đội siêu anh hùng Avengers của hãng Marvel Comics, sản xuất bởi Marvel Studios và phân phối bởi Walt Disney Studios Motion Pictures. Đây là bộ phim thứ 6 trong Marvel Cinematic Universe.",
            ngayKhoiChieu:"2021-04-08T00:00:00",
            danhGia:7,
            theLoai:"Siêu Anh Hùng",
            doTuoi:"PG-13"
            

        }
        return data;
    }
