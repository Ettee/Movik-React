import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import swal from 'sweetalert';
import {withRouter} from "react-router-dom"
class ButtonXuatChieu extends Component {
    
    handleWhenNotLogin=()=>{
        if(localStorage.getItem("userAdmin")){
            swal({
                title:"Tài khoản admin không thể đặt vé",
                icon:"info"
            })
        }else{
            swal({
                title:"Bạn cần phải đăng nhập trước khi đặt vé",
                icon:"warning",
                buttons:"Chuyển đến trang đăng kí"
            }).then((ok)=>{
                if(ok){
                    this.props.history.push("/sign-up")
                }
            })
        }
        
    }
    renderButton=()=>{

        let{xuatChieu,date}=this.props;
        let dateProps;
        let listTime=[]
        let obj={
            time:"",
            maLichChieu:""
        }
        const style={
            color:"#fff",
            fontSize:"15px"
        }
        //console.log(xuatChieu)
        xuatChieu.map(item=>{
            obj={...obj}
            dateProps=new Date(item.ngayChieuGioChieu).toLocaleDateString() 
            if(dateProps===date){
                obj.time=new Date(item.ngayChieuGioChieu).toLocaleTimeString()
                obj.maLichChieu=item.maLichChieu
                listTime.push(obj)
            }
        })
        if(localStorage.getItem("userKhachHang")){
            return listTime.map((item,index)=>{
                return (
                    <NavLink to={`/pick-seat/${item.maLichChieu}`} key={index}>
                        <button className="btn-shadow m-1">
                            <div className="btn-showTime" style={style}>{item.time}</div>
                        </button>
                    </NavLink>    
                )
            })
        }else{

            return listTime.map((item,index)=>{
                return (
                    <button className="btn-shadow m-1" onClick={this.handleWhenNotLogin} key={index}>
                        <div className="btn-showTime" style={style}>{item.time}</div>
                    </button>  
                )
            }) 
        }
    }

    render() {
       
        return (
            <div>
                {this.renderButton()}
            </div>
           
        )
    }
}
export default withRouter(ButtonXuatChieu)