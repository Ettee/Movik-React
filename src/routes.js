import "./pages/home/Home"
import Home from "./pages/home/Home";
import Signup from "./pages/signup/signup";

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
    }
];
export { routesHome };