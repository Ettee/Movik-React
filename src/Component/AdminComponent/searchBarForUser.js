import React, { Component } from 'react'

export default class SearchBarForUser extends Component {
    
    render() {
        const style={
            fontSize:"25px",
            color:"#fb4226",
            border:"2px solid #fb4226 ",
            borderRadius:"50%",
            padding:"9px",
            cursor:"pointer"
        }
        return (
            <div className="col-xl-10 col-lg-9 col-md-8 bg-dark py-2 top-navbar m-auto">
                <div className="row align-items-center ">
                    <div className="col-md-3">
                        <h4 className="text-light text-uppercase mb-0">Quản lý người dùng</h4>
                    </div>
                    <div className="col-md-5">
                        <form>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control search-input"
                                    placeholder="Search..."
                                    onChange={e => {
                                        this.props.getKeyWord(e.target.value);
                                    }}
                                />
                            </div>
                        </form>
                    </div>    
                    <div className="col-md-4 text-right" >
                        <i className="fas fa-user-plus" style={style} data-toggle="modal" data-target="#signUpAdmin"></i>
                    </div>
                </div>
            </div>

        )
    }
}
