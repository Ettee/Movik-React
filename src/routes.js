import "./pages/home/Home"
import Home from "./pages/home/Home";
import Signup from "./pages/signup/signup";
import DetailMovie from "./pages/detailmovie/DetailMovie";
import Theater from "./pages/theater/theater";
import UserProfile from "./pages/userProfile/userProfile"
const routesHome=[
    {
        path:"/",
        exact:true,
        component:Home
    },
    {
        path: "/home",
        exact: false,
        component:Home
    },
    {
        path:"/sign-up",
        exact:false,
        component:Signup
    },
    {
        path:"/detail-movie/:id",
        exact:false,
        component:DetailMovie
    },
    {
        path:"/pick-seat/:maLichChieu",
        exact:false,
        component:Theater
    },
    {
        path:"/profile/:taiKhoan",
        exact:false,
        component:UserProfile
    }
];
export { routesHome };