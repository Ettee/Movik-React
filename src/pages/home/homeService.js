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
            maXuatChieu:16531
        },
        {
            gioChieu:"2021-04-09T10:00:00",
            maXuatChieu:16522
        }
    ]
    return data
}

export function getAllTheaterCompany(){
    let data = require('../../assets/data/all-theater-company.json');
    return data;
}
export function getTheaterByCompany(companyId){
    switch (companyId) {
        case 1:
            let data1 = [
                {
                    theaterImg:"https://s3-ap-southeast-1.amazonaws.com/loket-gotix/blog/2020/01/19233344/6-Jenis-Studio-di-Bioskop-CGV-yang-Lain-dari-yang-Lain.jpg",
                    theaterName:"CGV Phan Van Tri",
                    theaterId:1,
                    theaterAddress:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    theaterImg:"https://s3-ap-southeast-1.amazonaws.com/loket-gotix/blog/2020/01/19233344/6-Jenis-Studio-di-Bioskop-CGV-yang-Lain-dari-yang-Lain.jpg",
                    theaterName:"CGV Quang Trung",
                    theaterId:2,
                    theaterAddress:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    theaterImg:"https://s3-ap-southeast-1.amazonaws.com/loket-gotix/blog/2020/01/19233344/6-Jenis-Studio-di-Bioskop-CGV-yang-Lain-dari-yang-Lain.jpg",
                    theaterName:"CGV Nguyen Van Luong",
                    theaterId:3,
                    theaterAddress:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    theaterImg:"https://s3-ap-southeast-1.amazonaws.com/loket-gotix/blog/2020/01/19233344/6-Jenis-Studio-di-Bioskop-CGV-yang-Lain-dari-yang-Lain.jpg",
                    theaterName:"CGV hahahaha",
                    theaterId:4,
                    theaterAddress:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                }

            ]
            return data1
        case 3:
            let data2 = [
                    {
                        theaterImg:"https://s3-ap-southeast-1.amazonaws.com/loket-gotix/blog/2020/01/19233344/6-Jenis-Studio-di-Bioskop-CGV-yang-Lain-dari-yang-Lain.jpg",
                        theaterName:"BHD Phan Van Tri",
                        theaterId:4,
                        theaterAddress:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    },
                    {
                        theaterImg:"https://s3-ap-southeast-1.amazonaws.com/loket-gotix/blog/2020/01/19233344/6-Jenis-Studio-di-Bioskop-CGV-yang-Lain-dari-yang-Lain.jpg",
                        theaterName:"BHD Quang Trung",
                        theaterId:5,
                        theaterAddress:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    },
                    {
                        theaterImg:"https://s3-ap-southeast-1.amazonaws.com/loket-gotix/blog/2020/01/19233344/6-Jenis-Studio-di-Bioskop-CGV-yang-Lain-dari-yang-Lain.jpg",
                        theaterName:"BHD Nguyen Van Luong",
                        theaterId:6,
                        theaterAddress:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    }
    
                ]
            return data2
        case 2:
            let data3 = [
                    {
                        theaterImg:"https://s3-ap-southeast-1.amazonaws.com/loket-gotix/blog/2020/01/19233344/6-Jenis-Studio-di-Bioskop-CGV-yang-Lain-dari-yang-Lain.jpg",
                        theaterName:"Lotte Phan Van Tri",
                        theaterId:7,
                        theaterAddress:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    },
                    {
                        theaterImg:"https://s3-ap-southeast-1.amazonaws.com/loket-gotix/blog/2020/01/19233344/6-Jenis-Studio-di-Bioskop-CGV-yang-Lain-dari-yang-Lain.jpg",
                        theaterName:"Lotte Quang Trung",
                        theaterId:8,
                        theaterAddress:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    },
                    {
                        theaterImg:"https://s3-ap-southeast-1.amazonaws.com/loket-gotix/blog/2020/01/19233344/6-Jenis-Studio-di-Bioskop-CGV-yang-Lain-dari-yang-Lain.jpg",
                        theaterName:"Lotte Nguyen Van Luong",
                        theaterId:9,
                        theaterAddress:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    }
    
            ]
            return data3
        
    }
}
export function getMovieShowByTheater(theaterId){
    switch (theaterId) {
        case 1:
            let data1 =[
                {
                    tenPhim:"Avenger 1",
                    poster:"https://cdn.europosters.eu/image/750/posters/avengers-one-sheet-i12720.jpg",
                    maPhim:1,
                    doTuoi:"PG-13",
                    thoiLuong:'118p',
                    rating:8,
                    schedule:[
                        {
                            scheduleId:1,
                            startTime:"2021-04-09T09:00:00",
                            endTime:"2021-04-09T12:00:00"
                        },
                        {
                            scheduleId:2,
                            startTime:"2021-04-09T13:00:00",
                            endTime:"2021-04-09T14:00:00"
                        },
                        {
                            scheduleId:3,
                            startTime:"2021-04-09T15:00:00",
                            endTime:"2021-04-09T16:00:00"
                        }
                    ]
                },
                {
                    tenPhim:"Avenger 2",
                    poster:"https://vcdn1-giaitri.vnecdn.net/2015/02/26/AFTER-PARTY-PAYOFF-DOMESTIC-8894-1424918696.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=DTpGEQT0069DkA9qhN9XpA",
                    maPhim:2,
                    doTuoi:"PG-13",
                    thoiLuong:'118p',
                    rating:8,
                    schedule:[
                        {
                            scheduleId:4,
                            startTime:"2021-04-09T09:00:00",
                            endTime:"2021-04-09T12:00:00"
                        }
                    ]
                },
                {
                    tenPhim:"Avenger 3",
                    poster:"https://images-na.ssl-images-amazon.com/images/I/51Zt2JwTw2L.jpg",
                    maPhim:3,
                    doTuoi:"PG-13",
                    thoiLuong:'118p',
                    rating:8,
                    schedule:[
                        {
                            scheduleId:5,
                            startTime:"2021-04-09T09:00:00",
                            endTime:"2021-04-09T12:00:00"
                        }
                    ]
                },
            ]
            return data1;
        case 2:
            let data2 =[
                {
                    tenPhim:"Avenger 1 ty3",
                    poster:"https://cdn.europosters.eu/image/750/posters/avengers-one-sheet-i12720.jpg",
                    maPhim:1,
                    doTuoi:"PG-13",
                    thoiLuong:'118p',
                    rating:8,
                    schedule:[
                        {
                            scheduleId:1,
                            startTime:"2021-04-09T09:00:00",
                            endTime:"2021-04-09T12:00:00"
                        },
                        {
                            scheduleId:2,
                            startTime:"2021-04-09T13:00:00",
                            endTime:"2021-04-09T14:00:00"
                        },
                        {
                            scheduleId:3,
                            startTime:"2021-04-09T15:00:00",
                            endTime:"2021-04-09T16:00:00"
                        }
                    ]
                },
                {
                    tenPhim:"Avenger 2",
                    poster:"https://vcdn1-giaitri.vnecdn.net/2015/02/26/AFTER-PARTY-PAYOFF-DOMESTIC-8894-1424918696.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=DTpGEQT0069DkA9qhN9XpA",
                    maPhim:2,
                    doTuoi:"PG-13",
                    thoiLuong:'118p',
                    rating:8,
                    schedule:[
                        {
                            scheduleId:4,
                            startTime:"2021-04-09T09:00:00",
                            endTime:"2021-04-09T12:00:00"
                        }
                    ]
                },
                {
                    tenPhim:"Avenger 3",
                    poster:"https://images-na.ssl-images-amazon.com/images/I/51Zt2JwTw2L.jpg",
                    maPhim:3,
                    doTuoi:"PG-13",
                    thoiLuong:'118p',
                    rating:8,
                    schedule:[
                        {
                            scheduleId:5,
                            startTime:"2021-04-09T09:00:00",
                            endTime:"2021-04-09T12:00:00"
                        }
                    ]
                },
                {
                    tenPhim:"Avenger 3",
                    poster:"https://images-na.ssl-images-amazon.com/images/I/51Zt2JwTw2L.jpg",
                    maPhim:3,
                    doTuoi:"PG-13",
                    thoiLuong:'118p',
                    rating:8,
                    schedule:[
                        {
                            scheduleId:5,
                            startTime:"2021-04-09T09:00:00",
                            endTime:"2021-04-09T12:00:00"
                        }
                    ]
                },
            ]
            return data2;   
        case 3:
                let data3 =[
                    {
                        tenPhim:"Avenger 1 ty3",
                        poster:"https://cdn.europosters.eu/image/750/posters/avengers-one-sheet-i12720.jpg",
                        maPhim:1,
                        doTuoi:"PG-13",
                        thoiLuong:'118p',
                        rating:8,
                        schedule:[
                            {
                                scheduleId:1,
                                startTime:"2021-04-09T09:00:00",
                                endTime:"2021-04-09T12:00:00"
                            },
                            {
                                scheduleId:2,
                                startTime:"2021-04-09T13:00:00",
                                endTime:"2021-04-09T14:00:00"
                            },
                            {
                                scheduleId:3,
                                startTime:"2021-04-09T15:00:00",
                                endTime:"2021-04-09T16:00:00"
                            }
                        ]
                    },
                    {
                        tenPhim:"Avenger 2",
                        poster:"https://vcdn1-giaitri.vnecdn.net/2015/02/26/AFTER-PARTY-PAYOFF-DOMESTIC-8894-1424918696.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=DTpGEQT0069DkA9qhN9XpA",
                        maPhim:2,
                        doTuoi:"PG-13",
                        thoiLuong:'118p',
                        rating:8,
                        schedule:[
                            {
                                scheduleId:4,
                                startTime:"2021-04-09T09:00:00",
                                endTime:"2021-04-09T12:00:00"
                            }
                        ]
                    },
                    {
                        tenPhim:"Avenger 3",
                        poster:"https://images-na.ssl-images-amazon.com/images/I/51Zt2JwTw2L.jpg",
                        maPhim:3,
                        doTuoi:"PG-13",
                        thoiLuong:'118p',
                        rating:8,
                        schedule:[
                            {
                                scheduleId:5,
                                startTime:"2021-04-09T09:00:00",
                                endTime:"2021-04-09T12:00:00"
                            }
                        ]
                    },
                ]
                return data3;
        case 7 :
            let data4 =[
                {
                    tenPhim:"Avenger heeeeeeeeeee",
                    poster:"https://cdn.europosters.eu/image/750/posters/avengers-one-sheet-i12720.jpg",
                    maPhim:1,
                    doTuoi:"PG-13",
                    thoiLuong:'118p',
                    rating:8,
                    schedule:[
                        {
                            scheduleId:1,
                            startTime:"2021-04-09T09:00:00",
                            endTime:"2021-04-09T12:00:00"
                        },
                        {
                            scheduleId:2,
                            startTime:"2021-04-09T13:00:00",
                            endTime:"2021-04-09T14:00:00"
                        },
                        {
                            scheduleId:3,
                            startTime:"2021-04-09T15:00:00",
                            endTime:"2021-04-09T16:00:00"
                        }
                    ]
                },
                {
                    tenPhim:"Avenger 2",
                    poster:"https://vcdn1-giaitri.vnecdn.net/2015/02/26/AFTER-PARTY-PAYOFF-DOMESTIC-8894-1424918696.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=DTpGEQT0069DkA9qhN9XpA",
                    maPhim:2,
                    doTuoi:"PG-13",
                    thoiLuong:'118p',
                    rating:8,
                    schedule:[
                        {
                            scheduleId:4,
                            startTime:"2021-04-09T09:00:00",
                            endTime:"2021-04-09T12:00:00"
                        }
                    ]
                },
                {
                    tenPhim:"Avenger 3",
                    poster:"https://images-na.ssl-images-amazon.com/images/I/51Zt2JwTw2L.jpg",
                    maPhim:3,
                    doTuoi:"PG-13",
                    thoiLuong:'118p',
                    rating:8,
                    schedule:[
                        {
                            scheduleId:5,
                            startTime:"2021-04-09T09:00:00",
                            endTime:"2021-04-09T12:00:00"
                        }
                    ]
                },
            ]
            return data4;
        default :
        let data5 =[
            {
                tenPhim:"Avenger heeeeeeeeeee",
                poster:"https://cdn.europosters.eu/image/750/posters/avengers-one-sheet-i12720.jpg",
                maPhim:1,
                doTuoi:"PG-13",
                thoiLuong:'118p',
                rating:8,
                schedule:[
                    {
                        scheduleId:1,
                        startTime:"2021-04-09T09:00:00",
                        endTime:"2021-04-09T12:00:00"
                    },
                    {
                        scheduleId:2,
                        startTime:"2021-04-09T13:00:00",
                        endTime:"2021-04-09T14:00:00"
                    },
                    {
                        scheduleId:3,
                        startTime:"2021-04-09T15:00:00",
                        endTime:"2021-04-09T16:00:00"
                    }
                ]
            },
            {
                tenPhim:"Avenger 2",
                poster:"https://vcdn1-giaitri.vnecdn.net/2015/02/26/AFTER-PARTY-PAYOFF-DOMESTIC-8894-1424918696.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=DTpGEQT0069DkA9qhN9XpA",
                maPhim:2,
                doTuoi:"PG-13",
                thoiLuong:'118p',
                rating:8,
                schedule:[
                    {
                        scheduleId:4,
                        startTime:"2021-04-09T09:00:00",
                        endTime:"2021-04-09T12:00:00"
                    }
                ]
            },
            {
                tenPhim:"Avenger 3",
                poster:"https://images-na.ssl-images-amazon.com/images/I/51Zt2JwTw2L.jpg",
                maPhim:3,
                doTuoi:"PG-13",
                thoiLuong:'118p',
                rating:8,
                schedule:[
                    {
                        scheduleId:5,
                        startTime:"2021-04-09T09:00:00",
                        endTime:"2021-04-09T12:00:00"
                    }
                ]
            },
        ]
        return data5;
    }
}

export function getAllTheaterCompanyByMovie(movieId){
    let data = require('../../assets/data/all-theater-company.json');
    return data;
}
export function getTheaterByCompanyAndMovie(companyId,movieId){
    switch (companyId) {
        case 1:
            let data1 = [
                {
                    theaterImg:"https://s3-ap-southeast-1.amazonaws.com/loket-gotix/blog/2020/01/19233344/6-Jenis-Studio-di-Bioskop-CGV-yang-Lain-dari-yang-Lain.jpg",
                    theaterName:"CGV Phan Van Tri",
                    theaterId:1,
                    theaterAddress:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    theaterImg:"https://s3-ap-southeast-1.amazonaws.com/loket-gotix/blog/2020/01/19233344/6-Jenis-Studio-di-Bioskop-CGV-yang-Lain-dari-yang-Lain.jpg",
                    theaterName:"CGV Quang Trung",
                    theaterId:2,
                    theaterAddress:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    theaterImg:"https://s3-ap-southeast-1.amazonaws.com/loket-gotix/blog/2020/01/19233344/6-Jenis-Studio-di-Bioskop-CGV-yang-Lain-dari-yang-Lain.jpg",
                    theaterName:"CGV Nguyen Van Luong",
                    theaterId:3,
                    theaterAddress:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    theaterImg:"https://s3-ap-southeast-1.amazonaws.com/loket-gotix/blog/2020/01/19233344/6-Jenis-Studio-di-Bioskop-CGV-yang-Lain-dari-yang-Lain.jpg",
                    theaterName:"CGV hahahaha",
                    theaterId:4,
                    theaterAddress:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                }

            ]
            return data1
        case 3:
            let data2 = [
                    {
                        theaterImg:"https://s3-ap-southeast-1.amazonaws.com/loket-gotix/blog/2020/01/19233344/6-Jenis-Studio-di-Bioskop-CGV-yang-Lain-dari-yang-Lain.jpg",
                        theaterName:"BHD Phan Van Tri",
                        theaterId:4,
                        theaterAddress:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    },
                    {
                        theaterImg:"https://s3-ap-southeast-1.amazonaws.com/loket-gotix/blog/2020/01/19233344/6-Jenis-Studio-di-Bioskop-CGV-yang-Lain-dari-yang-Lain.jpg",
                        theaterName:"BHD Quang Trung",
                        theaterId:5,
                        theaterAddress:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    },
                    {
                        theaterImg:"https://s3-ap-southeast-1.amazonaws.com/loket-gotix/blog/2020/01/19233344/6-Jenis-Studio-di-Bioskop-CGV-yang-Lain-dari-yang-Lain.jpg",
                        theaterName:"BHD Nguyen Van Luong",
                        theaterId:6,
                        theaterAddress:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    }
    
                ]
            return data2
        case 2:
            let data3 = [
                    {
                        theaterImg:"https://s3-ap-southeast-1.amazonaws.com/loket-gotix/blog/2020/01/19233344/6-Jenis-Studio-di-Bioskop-CGV-yang-Lain-dari-yang-Lain.jpg",
                        theaterName:"Lotte Phan Van Tri",
                        theaterId:7,
                        theaterAddress:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    },
                    {
                        theaterImg:"https://s3-ap-southeast-1.amazonaws.com/loket-gotix/blog/2020/01/19233344/6-Jenis-Studio-di-Bioskop-CGV-yang-Lain-dari-yang-Lain.jpg",
                        theaterName:"Lotte Quang Trung",
                        theaterId:8,
                        theaterAddress:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    },
                    {
                        theaterImg:"https://s3-ap-southeast-1.amazonaws.com/loket-gotix/blog/2020/01/19233344/6-Jenis-Studio-di-Bioskop-CGV-yang-Lain-dari-yang-Lain.jpg",
                        theaterName:"Lotte Nguyen Van Luong",
                        theaterId:9,
                        theaterAddress:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    }
    
            ]
            return data3
        
    }
}
export function getMovieShowByTheaterAndMovie(theaterId,movieId){
    switch (theaterId) {
        case 1:
            let data1 =[
                {
                    tenPhim:"Avenger 1",
                    poster:"https://cdn.europosters.eu/image/750/posters/avengers-one-sheet-i12720.jpg",
                    maPhim:1,
                    doTuoi:"PG-13",
                    thoiLuong:'118p',
                    rating:8,
                    schedule:[
                        {
                            scheduleId:1,
                            startTime:"2021-04-09T09:00:00",
                            endTime:"2021-04-09T12:00:00"
                        },
                        {
                            scheduleId:2,
                            startTime:"2021-04-09T13:00:00",
                            endTime:"2021-04-09T14:00:00"
                        },
                        {
                            scheduleId:3,
                            startTime:"2021-04-09T15:00:00",
                            endTime:"2021-04-09T16:00:00"
                        }
                    ]
                },
                {
                    tenPhim:"Avenger 2",
                    poster:"https://vcdn1-giaitri.vnecdn.net/2015/02/26/AFTER-PARTY-PAYOFF-DOMESTIC-8894-1424918696.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=DTpGEQT0069DkA9qhN9XpA",
                    maPhim:2,
                    doTuoi:"PG-13",
                    thoiLuong:'118p',
                    rating:8,
                    schedule:[
                        {
                            scheduleId:4,
                            startTime:"2021-04-09T09:00:00",
                            endTime:"2021-04-09T12:00:00"
                        }
                    ]
                },
                {
                    tenPhim:"Avenger 3",
                    poster:"https://images-na.ssl-images-amazon.com/images/I/51Zt2JwTw2L.jpg",
                    maPhim:3,
                    doTuoi:"PG-13",
                    thoiLuong:'118p',
                    rating:8,
                    schedule:[
                        {
                            scheduleId:5,
                            startTime:"2021-04-09T09:00:00",
                            endTime:"2021-04-09T12:00:00"
                        }
                    ]
                },
            ]
            return data1;
        case 2:
            let data2 =[
                {
                    tenPhim:"Avenger 1 ty3",
                    poster:"https://cdn.europosters.eu/image/750/posters/avengers-one-sheet-i12720.jpg",
                    maPhim:1,
                    doTuoi:"PG-13",
                    thoiLuong:'118p',
                    rating:8,
                    schedule:[
                        {
                            scheduleId:1,
                            startTime:"2021-04-09T09:00:00",
                            endTime:"2021-04-09T12:00:00"
                        },
                        {
                            scheduleId:2,
                            startTime:"2021-04-09T13:00:00",
                            endTime:"2021-04-09T14:00:00"
                        },
                        {
                            scheduleId:3,
                            startTime:"2021-04-09T15:00:00",
                            endTime:"2021-04-09T16:00:00"
                        }
                    ]
                },
                {
                    tenPhim:"Avenger 2",
                    poster:"https://vcdn1-giaitri.vnecdn.net/2015/02/26/AFTER-PARTY-PAYOFF-DOMESTIC-8894-1424918696.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=DTpGEQT0069DkA9qhN9XpA",
                    maPhim:2,
                    doTuoi:"PG-13",
                    thoiLuong:'118p',
                    rating:8,
                    schedule:[
                        {
                            scheduleId:4,
                            startTime:"2021-04-09T09:00:00",
                            endTime:"2021-04-09T12:00:00"
                        }
                    ]
                },
                {
                    tenPhim:"Avenger 3",
                    poster:"https://images-na.ssl-images-amazon.com/images/I/51Zt2JwTw2L.jpg",
                    maPhim:3,
                    doTuoi:"PG-13",
                    thoiLuong:'118p',
                    rating:8,
                    schedule:[
                        {
                            scheduleId:5,
                            startTime:"2021-04-09T09:00:00",
                            endTime:"2021-04-09T12:00:00"
                        }
                    ]
                },
                {
                    tenPhim:"Avenger 3",
                    poster:"https://images-na.ssl-images-amazon.com/images/I/51Zt2JwTw2L.jpg",
                    maPhim:3,
                    doTuoi:"PG-13",
                    thoiLuong:'118p',
                    rating:8,
                    schedule:[
                        {
                            scheduleId:5,
                            startTime:"2021-04-09T09:00:00",
                            endTime:"2021-04-09T12:00:00"
                        }
                    ]
                },
            ]
            return data2;   
        case 3:
                let data3 =[
                    {
                        tenPhim:"Avenger 1 ty3",
                        poster:"https://cdn.europosters.eu/image/750/posters/avengers-one-sheet-i12720.jpg",
                        maPhim:1,
                        doTuoi:"PG-13",
                        thoiLuong:'118p',
                        rating:8,
                        schedule:[
                            {
                                scheduleId:1,
                                startTime:"2021-04-09T09:00:00",
                                endTime:"2021-04-09T12:00:00"
                            },
                            {
                                scheduleId:2,
                                startTime:"2021-04-09T13:00:00",
                                endTime:"2021-04-09T14:00:00"
                            },
                            {
                                scheduleId:3,
                                startTime:"2021-04-09T15:00:00",
                                endTime:"2021-04-09T16:00:00"
                            }
                        ]
                    },
                    {
                        tenPhim:"Avenger 2",
                        poster:"https://vcdn1-giaitri.vnecdn.net/2015/02/26/AFTER-PARTY-PAYOFF-DOMESTIC-8894-1424918696.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=DTpGEQT0069DkA9qhN9XpA",
                        maPhim:2,
                        doTuoi:"PG-13",
                        thoiLuong:'118p',
                        rating:8,
                        schedule:[
                            {
                                scheduleId:4,
                                startTime:"2021-04-09T09:00:00",
                                endTime:"2021-04-09T12:00:00"
                            }
                        ]
                    },
                    {
                        tenPhim:"Avenger 3",
                        poster:"https://images-na.ssl-images-amazon.com/images/I/51Zt2JwTw2L.jpg",
                        maPhim:3,
                        doTuoi:"PG-13",
                        thoiLuong:'118p',
                        rating:8,
                        schedule:[
                            {
                                scheduleId:5,
                                startTime:"2021-04-09T09:00:00",
                                endTime:"2021-04-09T12:00:00"
                            }
                        ]
                    },
                ]
                return data3;
        case 7 :
            let data4 =[
                {
                    tenPhim:"Avenger heeeeeeeeeee",
                    poster:"https://cdn.europosters.eu/image/750/posters/avengers-one-sheet-i12720.jpg",
                    maPhim:1,
                    doTuoi:"PG-13",
                    thoiLuong:'118p',
                    rating:8,
                    schedule:[
                        {
                            scheduleId:1,
                            startTime:"2021-04-09T09:00:00",
                            endTime:"2021-04-09T12:00:00"
                        },
                        {
                            scheduleId:2,
                            startTime:"2021-04-09T13:00:00",
                            endTime:"2021-04-09T14:00:00"
                        },
                        {
                            scheduleId:3,
                            startTime:"2021-04-09T15:00:00",
                            endTime:"2021-04-09T16:00:00"
                        }
                    ]
                },
                {
                    tenPhim:"Avenger 2",
                    poster:"https://vcdn1-giaitri.vnecdn.net/2015/02/26/AFTER-PARTY-PAYOFF-DOMESTIC-8894-1424918696.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=DTpGEQT0069DkA9qhN9XpA",
                    maPhim:2,
                    doTuoi:"PG-13",
                    thoiLuong:'118p',
                    rating:8,
                    schedule:[
                        {
                            scheduleId:4,
                            startTime:"2021-04-09T09:00:00",
                            endTime:"2021-04-09T12:00:00"
                        }
                    ]
                },
                {
                    tenPhim:"Avenger 3",
                    poster:"https://images-na.ssl-images-amazon.com/images/I/51Zt2JwTw2L.jpg",
                    maPhim:3,
                    doTuoi:"PG-13",
                    thoiLuong:'118p',
                    rating:8,
                    schedule:[
                        {
                            scheduleId:5,
                            startTime:"2021-04-09T09:00:00",
                            endTime:"2021-04-09T12:00:00"
                        }
                    ]
                },
            ]
            return data4;
        default :
        let data5 =[
            {
                tenPhim:"Avenger heeeeeeeeeee",
                poster:"https://cdn.europosters.eu/image/750/posters/avengers-one-sheet-i12720.jpg",
                maPhim:1,
                doTuoi:"PG-13",
                thoiLuong:'118p',
                rating:8,
                schedule:[
                    {
                        scheduleId:1,
                        startTime:"2021-04-09T09:00:00",
                        endTime:"2021-04-09T12:00:00"
                    },
                    {
                        scheduleId:2,
                        startTime:"2021-04-09T13:00:00",
                        endTime:"2021-04-09T14:00:00"
                    },
                    {
                        scheduleId:3,
                        startTime:"2021-04-09T15:00:00",
                        endTime:"2021-04-09T16:00:00"
                    }
                ]
            },
            {
                tenPhim:"Avenger 2",
                poster:"https://vcdn1-giaitri.vnecdn.net/2015/02/26/AFTER-PARTY-PAYOFF-DOMESTIC-8894-1424918696.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=DTpGEQT0069DkA9qhN9XpA",
                maPhim:2,
                doTuoi:"PG-13",
                thoiLuong:'118p',
                rating:8,
                schedule:[
                    {
                        scheduleId:4,
                        startTime:"2021-04-09T09:00:00",
                        endTime:"2021-04-09T12:00:00"
                    }
                ]
            },
            {
                tenPhim:"Avenger 3",
                poster:"https://images-na.ssl-images-amazon.com/images/I/51Zt2JwTw2L.jpg",
                maPhim:3,
                doTuoi:"PG-13",
                thoiLuong:'118p',
                rating:8,
                schedule:[
                    {
                        scheduleId:5,
                        startTime:"2021-04-09T09:00:00",
                        endTime:"2021-04-09T12:00:00"
                    }
                ]
            },
        ]
        return data5;
    }
}

export function getRecommendMovie(){
    // tuy vao tai khoan ng dung co1 hoặc ko danh sách yêu thích để gọi api phù hợp
    let data =[
        {
            maPhim:1322,
            tenPhim:"Avenger End Game",
            moTa:"Avengers: Hồi kết là phim điện ảnh siêu anh hùng Mỹ ra mắt năm 2019, do Marvel Studios sản xuất và Walt Disney Studios Motion Pictures phân phối. Phim là phần thứ tư của loạt phim Avengers, sau Biệt đội siêu anh hùng, Avengers: Đế chế Ultron và Avengers: Cuộc chiến vô cực.",
            ngayKhoiChieu:"2021-04-09T00:00:00",
            trailer:"https://www.youtube.com/embed/TcMBFSGVi1c",
            hinhAnh:"https://cdn.europosters.eu/image/750/posters/avengers-endgame-journey-s-end-i73600.jpg",
            danhGia:2,
            doTuoi:"PG-13",
            thoiLuong:"120 phút"
        },
        {
            maPhim:1322,
            tenPhim:"Avenger End Game",
            moTa:"Avengers: Hồi kết là phim điện ảnh siêu anh hùng Mỹ ra mắt năm 2019, do Marvel Studios sản xuất và Walt Disney Studios Motion Pictures phân phối. Phim là phần thứ tư của loạt phim Avengers, sau Biệt đội siêu anh hùng, Avengers: Đế chế Ultron và Avengers: Cuộc chiến vô cực.",
            ngayKhoiChieu:"2021-04-09T00:00:00",
            trailer:"https://www.youtube.com/embed/TcMBFSGVi1c",
            hinhAnh:"https://cdn.europosters.eu/image/750/posters/avengers-endgame-journey-s-end-i73600.jpg",
            danhGia:2,
            doTuoi:"PG-15",
            thoiLuong:"120 phút"
        },
        {
            maPhim:1322,
            tenPhim:"Avenger End Game",
            moTa:"Avengers: Hồi kết là phim điện ảnh siêu anh hùng Mỹ ra mắt năm 2019, do Marvel Studios sản xuất và Walt Disney Studios Motion Pictures phân phối. Phim là phần thứ tư của loạt phim Avengers, sau Biệt đội siêu anh hùng, Avengers: Đế chế Ultron và Avengers: Cuộc chiến vô cực.",
            ngayKhoiChieu:"2021-04-09T00:00:00",
            trailer:"https://www.youtube.com/embed/TcMBFSGVi1c",
            hinhAnh:"https://cdn.europosters.eu/image/750/posters/avengers-endgame-journey-s-end-i73600.jpg",
            danhGia:2,
            doTuoi:"PG-15",
            thoiLuong:"120 phút"
        },
        {
            maPhim:1322,
            tenPhim:"Avenger End Game",
            moTa:"Avengers: Hồi kết là phim điện ảnh siêu anh hùng Mỹ ra mắt năm 2019, do Marvel Studios sản xuất và Walt Disney Studios Motion Pictures phân phối. Phim là phần thứ tư của loạt phim Avengers, sau Biệt đội siêu anh hùng, Avengers: Đế chế Ultron và Avengers: Cuộc chiến vô cực.",
            ngayKhoiChieu:"2021-04-09T00:00:00",
            trailer:"https://www.youtube.com/embed/TcMBFSGVi1c",
            hinhAnh:"https://cdn.europosters.eu/image/750/posters/avengers-endgame-journey-s-end-i73600.jpg",
            danhGia:2,
            doTuoi:"PG-15",
            thoiLuong:"120 phút"
        },
        {
            maPhim:1322,
            tenPhim:"Avenger End Game",
            moTa:"Avengers: Hồi kết là phim điện ảnh siêu anh hùng Mỹ ra mắt năm 2019, do Marvel Studios sản xuất và Walt Disney Studios Motion Pictures phân phối. Phim là phần thứ tư của loạt phim Avengers, sau Biệt đội siêu anh hùng, Avengers: Đế chế Ultron và Avengers: Cuộc chiến vô cực.",
            ngayKhoiChieu:"2021-04-09T00:00:00",
            trailer:"https://www.youtube.com/embed/TcMBFSGVi1c",
            hinhAnh:"https://cdn.europosters.eu/image/750/posters/avengers-endgame-journey-s-end-i73600.jpg",
            danhGia:2,
            doTuoi:"PG-15",
            thoiLuong:"120 phút"
        }
    ]
    return data;
}   