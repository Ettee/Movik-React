import Axios from 'axios';
export function updateUserInfo(userInfObj){
    return true;
}
export function getUserBookingHistory(user){
    let data=[
        {
            ticketId:"1",
            movieName:"Avenger 1",
            thoiLuong:"120p",
            saleTime:"2021-04-09T09:00:00",
            seats:["09","10"],
            theaterName:'CGV Quang Trung',
            roomName:"Rạp 5",
            salePrice:"100000"

        },
        {
            ticketId:"2",
            movieName:"Avenger 1",
            saleTime:"2021-04-09T09:00:00",
            seats:["09","10"],
            theaterName:'CGV Quang Trung',
            roomName:"Rạp 4",
            salePrice:"75000"
        }

    ]
    return data
}