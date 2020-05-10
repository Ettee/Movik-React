import "./pages/home/Home"
import Home from "./pages/home/Home"

const routesHome=[
    {
        path:"/",
        exact:true,
        component:Home
    },
    {
        path: "/home",
        exact: false,
        component: Home
      },
];
export { routesHome };