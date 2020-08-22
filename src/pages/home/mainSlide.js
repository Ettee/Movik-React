import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
export default class MainSlide extends Component {
    render() {
        return (
            <div className="main-slide-section">
                <div>
                    <OwlCarousel items={1}
                        className="owl-theme"
                        autoplay
                        loop
                        dots
                        loop
                         >
                        <div className="item">
                            <img  src={'./img/slide/dinh-thu-oan-khuat-15967340117741.png'} />
                        </div>
                        <div className="item">
                            <img  src={'./img/slide/ca-sau-15972253022491.png'} />
                        </div>
                        <div className="item">
                            <img  src={'./img/slide/bi-mat-thien-duong-15972163589211.jpg'} />
                        </div>
                        <div className="item">
                            <img  src={'./img/slide/du-lich-chet-choc-15961360123636.jpg'} />
                        </div>
                    </OwlCarousel>
                </div>
            </div>  

        )
    }
}
