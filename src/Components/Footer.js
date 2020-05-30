import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer text-center">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="main">
                                <h6>EDGE`S PRODUCTION</h6>
                                <div className="menu">
                                    <p>About Edge</p>
                                    <p>Lastest Video</p>
                                    <p>Studio Tour</p>
                                    <p>Press &amp; News</p>
                                    <p>Help(FAQ)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="main">
                                <h6>ABOUT</h6>
                                <div className="menu">
                                    <p>Lorem ipsum dolor sit amet. Turel upn gravida nibh vel velit auctor aliquet aen sollic conseut ipsutis.</p>
                                </div>
                                <div className="info bg-transparent">
                                    <div><i className="fab fa-youtube" /></div>
                                    <div><i className="fab fa-instagram" /></div>
                                    <div><i className="fab fa-twitter" /></div>
                                    <div><i className="fab fa-facebook-f" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="main">
                                <h6>NEWS &amp; FILM UPDATES</h6>
                                <div className="menu">
                                    <p>Lorem Ipsner gravida nibh velml auctsi aliquet. Aene sollic conseut.</p>
                                </div>
                                <div className="inputWithIcon">
                                    <input type="text" placeholder="Your email" />
                                    <i className="fa fa-envelope fa-lg fa-fw" aria-hidden="true" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="main">
                                <h6>FOLLOW ON INSTAGRAM</h6>
                                <div className="menu">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Copyright */}
                <div className="footer-copyright text-center py-3">
                    © 2020 Copyright
        <a href="/#"> GUNNERSKMA</a>
                </div>
            </div>
        );
    }
}

export default Footer;