import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class CategoryFilmChildren extends Component {
    render() {
        return (
            <div className="col-md-6 no-padding">
                <div className="khoi">
                    <div className="img--to">
                        <img src="img/imgfilm/1.jpg" alt="" />
                        <Link to="/movie-watch-space"><div className="icon" style={{ backgroundImage: 'url(https://cinerama.qodeinteractive.com/wp-content/plugins/cinerama-core/assets/img/play.svg)' }} /></Link>
                        <div className="hoder">
                            <div className="txt">
                                <h3 className="name">AMAZING CAPTION</h3>
                                <p className="content">Whatever It Is - Always Awesome</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
