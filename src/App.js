import React from 'react';
import './App.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Switch } from "react-router-dom";
import HomeTemplate from "./template/HomeTemplate";
import {routesHome} from "./routes";
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
  return (
    <BrowserRouter>
      <div>
        <Switch>
          {showMenuHome(routesHome)}
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
