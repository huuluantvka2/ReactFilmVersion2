import React, { Component } from 'react';
import CategoryFilmChildren from './CategoryFilmChildren';
class CategoryFilm extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <CategoryFilmChildren />
                    <CategoryFilmChildren />
                    <CategoryFilmChildren />
                    <CategoryFilmChildren />
                    <div className="col-md-12 no-padding">
                        <div className="khoi">
                            <div className="img--to">
                                <img src="img/imgfilm/4.jpg" alt="" />
                                <div className="icon" style={{ backgroundImage: 'url(https://cinerama.qodeinteractive.com/wp-content/plugins/cinerama-core/assets/img/play.svg)' }} />
                                <div className="hoder">
                                    <div className="txt">
                                        <h3 className="name">AMAZING CAPTION</h3>
                                        <p className="content">Whatever It Is - Always Awesome</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CategoryFilmChildren />
                    <CategoryFilmChildren />
                    <CategoryFilmChildren />
                    <CategoryFilmChildren />
                </div>
            </div>
        );
    }
}

export default CategoryFilm;