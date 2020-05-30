import React, { Component } from 'react'

export default class TitleAndAnimation extends Component {
    render() {
        return (
            <div className="img-slide position-relative">
                <img src="./img/header/home-slide.jpg" alt="" />
                <div className="khoi-slide">
                    <img className="slide-main" src="./img/header/moving-text.png" alt="" />
                    <img className="slide-sub" src="./img/header/alfa-home-slider-img-8.png" alt="" />
                    <img className="slide-under" src="./img/header/alfa-home-slider-img-7.png" alt="" />
                </div>
            </div>
        )
    }
}
