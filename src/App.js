import React from 'react';
import './App.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Switch } from "react-router-dom";
import HomeTemplate from "./template/HomeTemplate";
import AdminTemplate from "./template/AdminTemplate";
import {routesHome,routesAdmin} from "./routes";
import LoginAdmin from './pages/admin/loginAdmin'
import { Route } from "react-router-dom";
import PageNotFound from './pages/404/pageNotFound';
function App() {
  const showMenuHome = routes => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
            <HomeTemplate
              key={index}
              exact={item.exact}
              path={item.path}
              Component={item.component}
            />
        );
      });
    }
  };
  const showMenuAdmin=routes=>{
    if(routes && routes.length >0){
      return routes.map((item,index)=>{
        return (
          <AdminTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        )
      })
    }
  }
  return (
    <BrowserRouter>
      <div>
        <Switch>
          {showMenuHome(routesHome)}
          {showMenuAdmin(routesAdmin)}
          <Route path='/login-admin' exact component={LoginAdmin}/>
          <Route path="" component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
