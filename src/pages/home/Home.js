import React, { Component } from 'react'
import MainSlide from "./mainSlide";
import LoginModal from "./loginModal";
import SearchBlock from "./searchBlock";
export default class Home extends Component {
    render() {
        return (
            <div>
                <MainSlide/>
                <LoginModal/>
                <SearchBlock/>

            </div>
        )
    }
}
