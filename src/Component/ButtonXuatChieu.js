import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import swal from 'sweetalert';
export default class ButtonXuatChieu extends Component {

    renderButton=()=>{

        let{xuatChieu,date}=this.props;
        let dateProps;
        let listTime=[]
        let obj={
            time:"",
            maLichChieu:""
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
            return listTime.map(item=>{
                return (
                    <NavLink to={`/pick-seat/${item.maLichChieu}`}>
                        <button className="btn-shadow m-1">
                            <a>{item.time}</a>
                        </button>
                    </NavLink>    
                )
            })
        }else{
            return listTime.map(item=>{
                return (
                    <NavLink to={`/sign-up`}>
                        <button className="btn-shadow m-1">
                            <a>{item.time}</a>
                        </button>
                    </NavLink>    
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
