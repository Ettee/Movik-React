import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import LoginModal from "../pages/home/loginModal";
import swal from 'sweetalert';

// Component HomeLayout
const HomeLayout = props => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <LoginModal/>
      <Footer/>
    </Fragment>
  );
};

export default function HomeTemplate({ Component, ...props }) {
  
  // if (props.path.indexOf("pick-seat") !== -1) {
  //   console.log("có pick seat")
  //   if(localStorage.getItem("userKhachHang")){
  //     console.log("có pick seat và đã đăng nhập")
  //     return (
  //       <Route
  //         {...props}
  //         render={propsComponent => (
  //           <HomeLayout>
  //             <Component {...propsComponent} />
  //           </HomeLayout>
  //         )
  //       }
  //       />
  //     );
  //   }else{
  //     console.log("có pick seat và chưa đăng nhập")
  //     swal({
  //       title: "Bạn phải đăng nhập trước khi đặt vé",
  //       icon: "info",
  //       buttons: ["Tạo tài khoản", "Đăng nhập"],
  //       dangerMode: true,
  //     })
  //     .then((ok) => {
  //       if (ok) {
  //         console.log("chuyển về trang home")
  //         history.push('/')
  //       } else {
  //         console.log("chuyển qua sign up")
  //         history.push('/sign-up')
  //       }
  //     });
  //   }
  // }else{
  //   console.log("không có pick seat")
  //   return (
  //     <Route
  //       {...props}
  //       render={propsComponent => (
  //         <HomeLayout>
  //           <Component {...propsComponent} />
  //         </HomeLayout>
  //       )
  //     }
  //     />
  //   );
  // } 
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
