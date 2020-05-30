import React, { Component } from 'react';

class LogoItems extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row no-margin">
                    <div className="col-md-12">
                        <div className="owl-carousel logo-under">
                            <div> <img src="./img/logo film/1.png" alt="" /></div>
                            <div> <img src="./img/logo film/2.png" alt="" /></div>
                            <div> <img src="./img/logo film/3.png" alt="" /></div>
                            <div> <img src="./img/logo film/4.png" alt="" /></div>
                            <div> <img src="./img/logo film/5.png" alt="" /></div>
                            <div> <img src="./img/logo film/6.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LogoItems;