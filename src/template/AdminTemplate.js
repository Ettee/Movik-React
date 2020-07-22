import React,{Fragment} from 'react';
import { Route } from "react-router-dom";
import Navbar from "../Component/AdminComponent/navbar"; 
const style={
    paddingLeft:"0"
}

const AdminLayout = props => {
    return (
      <Fragment>
          <div className="container-fluid" style={style} >
            <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-4 no-paddingXRight">
                    <Navbar/>
                </div>
                <div className="col-xl-10 col-lg-9 col-md-8 bg-dark ">
                    {props.children}
                </div>
            </div>
          </div>
      </Fragment>
    );
  };
export default function AdminTemplate({Component,...props}) {
    return (
       <Route
           {...props}
           render={propsComponent =>(
               <AdminLayout>
                   <Component {...propsComponent} />
               </AdminLayout>
           )}
        />
    )
}
