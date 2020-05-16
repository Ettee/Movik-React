import React, { Component } from 'react'

export default class TrailerBlock extends Component {
    render() {
        let {movie}=this.props;
        return (
            <section className="movie-trailer-section">
                <h1 className="title-section">Trailer</h1>
                <div className="container">
                    <div className="play-trailer">
                        <iframe
                            width="100%"
                            height="100%"
                            src={movie?.trailer}
                            frameBorder={0}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </section>

        )
    }
}
