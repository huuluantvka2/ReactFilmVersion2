import React, { Component } from 'react';

class ImageInners extends Component {
    render() {
        return (
            <div className="container-fluid overflow-hidden my-5">
                <div className="row no-margin">
                    <div className="col-md-6 no-padding">
                        <div className="block-image">
                            <a href="/#"><img src="./img/content/Home-7-Masonry-gallery-1.jpg" className="img-full" alt="" /></a>
                        </div>
                    </div>
                    <div className="col-md-6 no-padding">
                        <div className="row no-margin">
                            <div className="col-md-6 no-padding">
                                <div className="block-image">
                                    <a href="/#"><img src="./img/content/Home-7-Masonry-gallery-2.jpg" className="img-full" alt="" /></a>
                                </div>
                            </div>
                            <div className="col-md-6 no-padding">
                                <div className="block-image">
                                    <a href="/#"><img src="./img/content/Home-7-Masonry-gallery-3.jpg" className="img-full" alt="" /></a>
                                </div>
                            </div>
                            <div className="col-md-6 no-padding">
                                <div className="block-image">
                                    <a href="/#"><img src="./img/content/Home-7-Masonry-gallery-4.jpg" className="img-full" alt="" /></a>
                                </div>
                            </div>
                            <div className="col-md-6 no-padding">
                                <div className="block-image">
                                    <a href="/#"><img src="./img/content/Home-7-Masonry-gallery-5.jpg" className="img-full" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageInners;