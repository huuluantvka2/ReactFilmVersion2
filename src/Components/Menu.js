import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg fixed-top no-boxshadow slide-img">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/#"><img width="70%" src="./img/header/Logo-light.png" alt="" /></a>
                    <button className="navbar-toggler icon-toggle" type="button" data-toggle="collapse" data-target="#supportResponsive">
                        <span className="navbar-toggler-icon"><i className="fas fa-bars" /></span>
                    </button>
                    <div className="collapse navbar-collapse" id="supportResponsive">
                        <ul className="navbar-nav from-word">
                            <li className="nav-item"><Link to="/" className="nav-link">Trang chủ</Link></li>
                            <li className="nav-item dropdown"><a className="nav-link" href="/#" data-toggle="dropdown">Thể loại</a>
                                <div className="dropdown-content">
                                    <Link to="/category-films" className="dropdown-item text-center">Phim hành động</Link>
                                    <Link to="/category-films" className="dropdown-item text-center">Phim hành động</Link>
                                    <Link to="/category-films" className="dropdown-item text-center">Phim hành động</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown"><a className="nav-link" href="/#" data-toggle="dropdown">Quốc gia</a>
                                <div className="dropdown-content">
                                    <a href="/#" className="dropdown-item text-center">Việt Nam</a>
                                    <a href="/#" className="dropdown-item text-center">Việt Nam</a>
                                    <a href="/#" className="dropdown-item text-center">Việt Nam</a>
                                    <a href="/#" className="dropdown-item text-center">Việt Nam</a>
                                    <a href="/#" className="dropdown-item text-center">Việt Nam</a>
                                    <a href="/#" className="dropdown-item text-center">Việt Nam</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown"><a className="nav-link" href="/#" data-toggle="dropdown">Phim lẻ</a>
                                <div className="dropdown-content">
                                    <a href="/#" className="dropdown-item text-center">Phim lẻ 2020</a>
                                    <a href="/#" className="dropdown-item text-center">Phim lẻ 2020</a>
                                    <a href="/#" className="dropdown-item text-center">Phim lẻ 2020</a>
                                    <a href="/#" className="dropdown-item text-center">Phim lẻ 2020</a>
                                    <a href="/#" className="dropdown-item text-center">Phim lẻ 2020</a>
                                    <a href="/#" className="dropdown-item text-center">Phim lẻ 2020</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown"><a className="nav-link" href="/#" data-toggle="dropdown">Phim bộ</a>
                                <div className="dropdown-content">
                                    <a href="/#" className="dropdown-item text-center">Việt Nam</a>
                                    <a href="/#" className="dropdown-item text-center">Việt Nam</a>
                                    <a href="/#" className="dropdown-item text-center">Việt Nam</a>
                                    <a href="/#" className="dropdown-item text-center">Việt Nam</a>
                                    <a href="/#" className="dropdown-item text-center">Việt Nam</a>
                                    <a href="/#" className="dropdown-item text-center">Việt Nam</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown"><a className="nav-link" href="/#" data-toggle="dropdown">Phim chiếu rạp</a>
                                <div className="dropdown-content">
                                    <a href="/#" className="dropdown-item text-center">Việt Nam</a>
                                    <a href="/#" className="dropdown-item text-center">Việt Nam</a>
                                    <a href="/#" className="dropdown-item text-center">Việt Nam</a>
                                    <a href="/#" className="dropdown-item text-center">Việt Nam</a>
                                    <a href="/#" className="dropdown-item text-center">Việt Nam</a>
                                    <a href="/#" className="dropdown-item text-center">Việt Nam</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown"><a className="nav-link" href="/#" data-toggle="dropdown">Phim thuyết minh</a>
                                <div className="dropdown-content">
                                    <a href="/#" className="dropdown-item text-center">Việt Nam</a>
                                    <a href="/#" className="dropdown-item text-center">Việt Nam</a>
                                    <a href="/#" className="dropdown-item text-center">Việt Nam</a>
                                    <a href="/#" className="dropdown-item text-center">Việt Nam</a>
                                    <a href="/#" className="dropdown-item text-center">Việt Nam</a>
                                    <a href="/#" className="dropdown-item text-center">Việt Nam</a>
                                </div>
                            </li>
                        </ul>
                        <ul className="navbar-nav from-word ml-auto">
                            <li className="nav-item"><a className="nav-link" href="/#"><i className="fab fa-youtube" /></a></li>
                            <li className="nav-item"><a className="nav-link" href="/#"><i className="fab fa-instagram" /></a></li>
                            <li className="nav-item"><a className="nav-link" href="/#"><i className="fab fa-twitter" /></a></li>
                            <li className="nav-item"><a className="nav-link" href="/#"><i className="fab fa-facebook" /></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
