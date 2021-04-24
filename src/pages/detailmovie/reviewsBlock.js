import React, { Component } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import { Divider } from 'primereact/divider';
import { Avatar } from 'primereact/avatar';
import * as service  from "./service"
export default class ReviewsBlock extends Component {
    constructor(props){
        super(props)
        this.state={
            reviewData:[],
            reviewValue:""
        }
    }
    componentDidMount(){
        let data = service.getAllReview();
        
        this.setState({
            reviewData:data
        })
    }
    componentWillReceiveProps(nextProps){
        // console.log(nextProps)
    }
    renderReview=()=>{
        let {reviewData}=this.state;
        let userData={
            user_name:"tran thanh son",
            id_user:"1"
        }
        return reviewData.map((review,i)=>{
            if(review.id_user === userData.id_user){
                return(
                    <div className="review me" key={i}>
                        <div className="avarta">
                            <Avatar icon="pi pi-user" shape="circle"  />
                        </div>  
                        <div className="review-content">
                            <div className="review-header">
                                <div className="user-name ">{review.user_account}</div>
                                <div className="report-review">
                                    <Button icon="pi pi-times-circle" className="p-button-rounded p-button-danger p-button-outlined" onClick={()=>{this.deleteReview(review.review_id)}} />
                                </div>
                            </div>
                            <div className="content">
                                {review.review_content}
                            </div>
                        </div>
                    </div>
                )
            }else{
                return(
                    <div className="review other" key={i} >
                        <div className="avarta">
                            <Avatar icon="pi pi-user" shape="circle"  />
                        </div>  
                        <div className="review-content">
                            <div className="review-header">
                                <div className="user-name ">{review.user_account}</div>
                                <div className="report-review">
                                    <Button icon="pi pi-exclamation-circle" className="p-button-rounded p-button-warning p-button-outlined" onClick={()=>{this.deleteReview(review.review_id)}} />
                                </div>
                            </div>
                            <div className="content">
                                {review.review_content}
                            </div>
                        </div>
                    </div>
                )
            }
        })
    }
    deleteReview=(reviewID)=>{

    }
    reportReview=(reviewID)=>{

    }
    sendReview=(userId)=>{
        if(this.state.reviewValue!==""){
            console.log(this.state.reviewValue)
        }
    }
    onChangeMyReview=(e)=>{
        this.setState({
            reviewValue:e.target.value
        })
    }
    render() {
        return (
            <div className="review-section">
                <div className="all-reviews">
                    {this.renderReview()}
                </div>
                <Divider />
                <div className="my-input-review">
                    <div className="input-review">
                        <InputTextarea className="text-aria" rows={3} cols={30} value={this.state.reviewValue} onChange={this.onChangeMyReview} autoResize />
                    </div>
                    <div className="send-review">
                        <Button icon="pi pi-send" className="p-button-rounded p-button-success" onClick={this.sendReview} />
                    </div>
                </div>
            </div>
        )
    }
}

