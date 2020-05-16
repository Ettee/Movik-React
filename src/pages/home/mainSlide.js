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
                            <img  src={'./img/slide/huong-giang-be-de-15822194729053.jpg'} />
                        </div>
                        <div className="item">
                            <img  src={'./img/slide/joker-15822194058572.jpg'} />
                        </div>
                        <div className="item">
                            <img  src={'./img/slide/little-15816462985668.jpg'} />
                        </div>
                        <div className="item">
                            <img  src={'./img/slide/tix-15819082429740.jpg'} />
                        </div>
                        <div className="item">
                            <img  src={'./img/slide/wild-15822193320074.jpg'} />
                        </div>
                    </OwlCarousel>
                </div>
            </div>  
            // <section className="main-slide-section">
            //     <div className="owl-carousel owl-theme owl-main-slide">
            //         <div className="item">
            //             <img src="./img/slide/huong-giang-be-de-15822194729053.jpg" alt="img" />
            //             <div className="main-slide-overlay" />
            //         </div>
            //         <div className="item">
            //             <img src="./img/slide/joker-15822194058572.jpg" alt="img" />
            //             <div className="main-slide-overlay" />
            //         </div>
            //         <div className="item">
            //             <img src="./img/slide/little-15816462985668.jpg" alt="img" />
            //             <div className="main-slide-overlay" />
            //         </div>
            //         <div className="item">
            //             <img src="./img/slide/tix-15819082429740.jpg" alt="img" />
            //             <div className="main-slide-overlay" />
            //         </div>
            //         <div className="item">
            //             <img src="./img/slide/wild-15822193320074.jpg" alt="img" />
            //             <div className="main-slide-overlay" />
            //         </div>
            //     </div>
            // </section>

        )
    }
}
