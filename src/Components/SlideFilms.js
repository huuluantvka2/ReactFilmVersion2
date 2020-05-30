import React, { Component } from 'react';

class SlideFilms extends Component {
    render() {
        return (
            <div className="container-fluid mt-5">
                <div className="row no-margin">
                    <div className="col-md-12">
                        <div className="owl-carousel">
                            <div> <img src="./img/content/home-film-1.jpg" alt="" /> <a className="button-play" href="/#"><i className="fas fa-play" /></a></div>
                            <div> <img src="./img/content/home-film-2.jpg" alt="" /> <a className="button-play" href="/#"><i className="fas fa-play" /></a></div>
                            <div> <img src="./img/content/home-film-3.jpg" alt="" /> <a className="button-play" href="/#"><i className="fas fa-play" /></a></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SlideFilms;