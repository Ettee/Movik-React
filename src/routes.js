import "./pages/home/Home"
import Home from "./pages/home/Home";
import Signup from "./pages/signup/signup";
import DetailMovie from "./pages/detailmovie/DetailMovie";
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
    }
];
export { routesHome };