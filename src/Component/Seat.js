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
        if(typeof danhSachPhim !== "undefined"){
            return danhSachPhim.map((item,index)=>{
                if(item.isBooked){
                    return(
                        <div className="col-lg-1 col-md-2 col-sm-4 col-6" key={index}>
                            <div className="seat-item text-center inactive">{item.seatName}</div>
                        </div>
                    )
                }else{
                        if(this.state.seatIndex.indexOf(index)!==-1 ){
                            //khi ghế đc chọn
                            if(item.loaiGhe==="vip"){
                                return (
                                    <div className="col-lg-1 col-md-2 col-sm-4 col-6" key={index}>
                                        <div 
                                            className="seat-item text-center active vip"
                                            onClick={()=>{this.handleSeatOnClick(index,item.seatId,item.seatName,50000)}}
                                        >{item.seatName}</div>
                                    </div>
                                )
                            }else{
                                return (
                                    <div className="col-lg-1 col-md-2 col-sm-4 col-6" key={index}>
                                        <div 
                                            className="seat-item text-center active"
                                            onClick={()=>{this.handleSeatOnClick(index,item.seatId,item.seatName,50000)}}
                                        >{item.seatName}</div>
                                    </div>
                                )
                            }
                            
                        }else{
                            //khi ghế chưa đc chọn
                            if(item.loaiGhe==="vip"){
                                return (
                                    <div className="col-lg-1 col-md-2 col-sm-4 col-6" key={index}>
                                        <div 
                                            className="seat-item text-center vip"
                                            onClick={()=>{this.handleSeatOnClick(index,item.seatId,item.seatName,50000)}}
                                        >{item.seatName}</div>
                                    </div>
                                )
                            }else{
                                return (
                                    <div className="col-lg-1 col-md-2 col-sm-4 col-6" key={index}>
                                        <div 
                                            className="seat-item text-center"
                                            onClick={()=>{this.handleSeatOnClick(index,item.seatId,item.seatName,50000)}}
                                        >{item.seatName}</div>
                                    </div>
                                )
                            }
                        }
                   
                }
            })
        }   
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
