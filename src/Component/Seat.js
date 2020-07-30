import React, { Component } from 'react'

export default class Seat extends Component {
    constructor(props){
        super(props)
        this.state={
            seatActive:false,
            seatIndex:[],
            lstSeatBooking:[],
            maGheArr:[]
        }
    }
    handleSeatOnClick=(index,maGhe,tenGhe,giaVe)=>{
        const currentState=this.state.seatActive
        let seatIndex=[]
        let objBooking={}
        seatIndex=[...this.state.seatIndex]
        if(seatIndex.indexOf(index)===-1){
            seatIndex.push(index)
        }else{
            seatIndex.splice(seatIndex.indexOf(index),1)
        }
        objBooking={
            maGhe,
            tenGhe,
            giaVe
        }
        this.props.layDanhSachGheDaChon(objBooking)
        this.setState({
            seatActive:!currentState,
            seatIndex,
        }) 
    }
    renderGhe=()=>{
        let {danhSachPhim}=this.props
        
        return danhSachPhim.slice(0, 70).map((item,index)=>{
            if(item.daDat){
                return(
                    <div className="col-lg-1 col-md-2 col-sm-4 col-6">
                        <div className="seat-item text-center inactive">{item.tenGhe}</div>
                    </div>
                )
            }else{
                    if(this.state.seatIndex.indexOf(index)!==-1 ){
                        //khi ghế đc chọn
                        if(item.loaiGhe==="Vip"){
                            return (
                                <div className="col-lg-1 col-md-2 col-sm-4 col-6">
                                    <div 
                                        className="seat-item text-center active vip"
                                        onClick={()=>{this.handleSeatOnClick(index,item.maGhe,item.tenGhe,item.giaVe)}}
                                    >{item.tenGhe}</div>
                                </div>
                            )
                        }else{
                            return (
                                <div className="col-lg-1 col-md-2 col-sm-4 col-6">
                                    <div 
                                        className="seat-item text-center active"
                                        onClick={()=>{this.handleSeatOnClick(index,item.maGhe,item.tenGhe,item.giaVe)}}
                                    >{item.tenGhe}</div>
                                </div>
                            )
                        }
                        
                    }else{
                        //khi ghế chưa đc chọn
                        if(item.loaiGhe==="Vip"){
                            return (
                                <div className="col-lg-1 col-md-2 col-sm-4 col-6">
                                    <div 
                                        className="seat-item text-center vip"
                                        onClick={()=>{this.handleSeatOnClick(index,item.maGhe,item.tenGhe,item.giaVe)}}
                                    >{item.tenGhe}</div>
                                </div>
                            )
                        }else{
                            return (
                                <div className="col-lg-1 col-md-2 col-sm-4 col-6">
                                    <div 
                                        className="seat-item text-center"
                                        onClick={()=>{this.handleSeatOnClick(index,item.maGhe,item.tenGhe,item.giaVe)}}
                                    >{item.tenGhe}</div>
                                </div>
                            )
                        }
                    }
               
            }
        })
    }
    
        
    
    render() {
        
        return (
            <div className="seat-row row">
            {/* ghế sẽ có 3 trạng thái đã chọn (add class inactive vào), đang chọn (add class active) và trạng thái chưa chọn  */}
            {/* react component this */}
            {this.renderGhe()}
            {/* END react component this */}
        </div>
        )
    }
}
