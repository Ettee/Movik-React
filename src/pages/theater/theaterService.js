import Axios from 'axios';
export function getDetailRoomByShowId(showId){
    let data={
        roomDetail:{
            showId:"1",
            theaterAddress:"L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh",
            startTime:"2021-04-09T07:00:00",
            endTime:"2021-04-09T12:00:00",
            scheduleDate:"2021-04-09T00:00:00",
            theaterName:"BHD Star Cineplex - Phạm Hùng",
            movieName:"Kiều",
            roomName:"Rạp 5"
            
        },
        seatList:[
            {
                seatId:1,
                type:"thuong",
                seatName:"01",
                isBooked:false
            },
            {
                seatId:2,
                type:"thuong",
                seatName:"02",
                isBooked:false
            },
            {
                seatId:3,
                type:"thuong",
                seatName:"03",
                isBooked:false
            },
            {
                seatId:4,
                type:"thuong",
                seatName:"04",
                isBooked:false
            },
            {
                seatId:5,
                type:"thuong",
                seatName:"05",
                isBooked:false
            },
            {
                seatId:6,
                type:"thuong",
                seatName:"06",
                isBooked:false
            },
            {
                seatId:7,
                type:"thuong",
                seatName:"07",
                isBooked:false
            },
            {
                seatId:8,
                type:"thuong",
                seatName:"08",
                isBooked:false
            },
            {
                seatId:9,
                type:"thuong",
                seatName:"09",
                isBooked:false
            },
            {
                seatId:10,
                type:"thuong",
                seatName:"10",
                isBooked:true
            },
            {
                seatId:11,
                type:"thuong",
                seatName:"11",
                isBooked:true
            },
            {
                seatId:12,
                type:"thuong",
                seatName:"12",
                isBooked:false
            },
            {
                seatId:13,
                type:"vip",
                seatName:"13",
                isBooked:true
            },
            {
                seatId:14,
                type:"vip",
                seatName:"14",
                isBooked:false
            },
            {
                seatId:15,
                type:"vip",
                seatName:"15",
                isBooked:true
            },
            {
                seatId:16,
                type:"vip",
                seatName:"16",
                isBooked:false
            },
        ]
    }
    return data
}
export function bookTicket(obj){
    let data ={
        ticketId:'801d9dc7-f588-4833-a9d2-b5b969346dde',
        movieName:'Avenger 1',
        poster:'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg',
        thoiLuong:"120p",
        startTime:"2021-04-09T09:00:00",
        scheduleDate:"2021-04-09T00:00:00",
        theaterName:"BHD Star Cineplex - Phạm Hùng",
        roomName:"Rạp 5",
        seats:["09","10"]
    }
    return data
}