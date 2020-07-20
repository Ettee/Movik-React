import "./pages/home/Home"
import Home from "./pages/home/Home";
import Signup from "./pages/signup/signup";
import DetailMovie from "./pages/detailmovie/DetailMovie";
import Theater from "./pages/theater/theater";
import UserProfile from "./pages/userProfile/userProfile";
import UserManagement from "./pages/admin/userManagement";
import movieManagement from "./pages/admin/movieManagement"
import bookingManagement from "./pages/admin/bookingManagement"
import theaterManagement from "./pages/admin/theaterManagement"
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
const routesAdmin=[
    {
        path:"/admin",
        exact:true,
        component:UserManagement
    },
    {
        path:"/admin/movieManagement",
        exact:false,
        component:movieManagement
    },
    {
        path:"/admin/theaterManagement",
        exact:false,
        component:theaterManagement
    },
    {
        path:"/admin/bookingManagement",
        exact:false,
        component:bookingManagement
    },
]
export { routesHome,routesAdmin };