import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import LoginModal from "../pages/home/loginModal";
import Loading from "../pages/loading/loading";
// Component HomeLayout
const HomeLayout = props => {
  return (
    <Fragment>
      <Loading/>
      <Header />
      {props.children}
      <LoginModal />
      <Footer />
    </Fragment>
  );
};

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={propsComponent => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )
    }
    />
  );
}
