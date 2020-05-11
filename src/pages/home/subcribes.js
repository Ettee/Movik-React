import React, { Component } from 'react'

export default class Subcribes extends Component {
    render() {
        return (
            <section className="subscribe-section" id="subs-block">
                <div className="container vertically-center">
                    <h1 className="title-section">Đăng kí</h1>
                    <p>
                        Hãy đăng kí để nhận các chương trình khuyến mãi và thông tin các bộ phim
                        mới nhất
                    </p>
                    <div className="subs-content">
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                name="subs-email"
                                id="subscriber-email"
                                placeholder="Your email..."
                            />
                        </div>
                        <div className="subs-btn">
                            <button className="text-uppercase">Đăng kí</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
