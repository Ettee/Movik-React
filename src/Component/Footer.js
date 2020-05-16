import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="about-movik">
                                <div>MOVIK</div>
                                <div className="about-content">
                                    <div>
                                        <span>
                                            <a href="#" target="_blank" rel="noopener noreferrer">
                                                FAQ
                                            </a>
                                        </span>
                                        <span>
                                            <a href="#" target="_blank" rel="noopener noreferrer">
                                                Thỏa thuận sử dụng
                                            </a>
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            <a href="#" target="_blank" rel="noopener noreferrer">
                                                Brands Guidelines
                                            </a>
                                        </span>
                                        <span>
                                            <a href="#" target="_blank" rel="noopener noreferrer">
                                                Chính sách bảo mật
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="partners">
                                <div>Đối tác</div>
                                <div className="partners-logo">
                                    <img src="../img/partners_logo/AGRIBANK.png" alt="true" />
                                    <img src="../img/partners_logo/bhd.png" alt="true"  />
                                    <img src="../img/partners_logo/bt.jpg" alt="true"  />
                                    <img src="../img/partners_logo/cgv.png" alt="true"  />
                                    <img src="../img/partners_logo/cinestar.png" alt="true"  />
                                    <img src="../img/partners_logo/cnx.jpg" alt="true"  />
                                    <img src="../img/partners_logo/dcine.png" alt="true"  />
                                    <img src="../img/partners_logo/dongdacinema.png" alt="true"  />
                                    <img src="../img/partners_logo/galaxycine.png" alt="true"  />
                                    <img src="../img/partners_logo/IVB.png" alt="true"  />
                                    <img src="../img/partners_logo/laban.png" alt="true"  />
                                    <img src="../img/partners_logo/megags.png" alt="true"  />
                                    <img src="../img/partners_logo/payoo.jpg" alt="true"  />
                                    <img src="../img/partners_logo/STARLIGHT.png" alt="true"  />
                                    <img src="../img/partners_logo/TOUCH.png" alt="true"  />
                                    <img src="../img/partners_logo/VCB.png" alt="true"  />
                                    <img src="../img/partners_logo/VIETTINBANK.png" alt="true"  />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-footer">
                                <div>Liên hệ</div>
                                <div className="contact-icon">
                                    <a href="https://www.facebook.com/ette9773" target="_blank">
                                        <img src="../img/icon/facebook-logo.png" alt="true" />
                                    </a>
                                    <a href="https://www.instagram.com/ettee_st/" target="_blank">
                                        <img src="../img/icon/zalo-logo.png" alt="true" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="footer-line" />
                    <div className="about-me">
                        <div className="creator">
                            Made by Tran Thanh Son <br />
                            Cybersoft FE35
                        </div>
                        <div>
                            Email:{" "}
                            <span>
                                <a href="mailto:thanhson1859@gmail.com?subject=From Movik">
                                    thanhson1859@gmail.com
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
