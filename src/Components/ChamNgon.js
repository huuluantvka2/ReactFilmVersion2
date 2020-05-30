import React, { Component } from 'react';

class ChamNgon extends Component {
    render() {
        return (
            <div id="carousel-example-2" className="carousel slide carousel-fade" data-ride="carousel">
          {/*Indicators*/}
          <ol className="carousel-indicators">
            <li data-target="#carousel-example-2" data-slide-to={0} className="active" />
            <li data-target="#carousel-example-2" data-slide-to={1} />
            <li data-target="#carousel-example-2" data-slide-to={2} />
          </ol>
          {/*/.Indicators*/}
          {/*Slides*/}
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active position-relative">
              <div className="view">
                <img className="d-block w-100" width="100%" height={250} src="./img/nenden.png" alt="First slide" />
              </div>
              <div className="carousel-caption position-status">
                <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
                <p className="mt-3"> <i>Ta về ta tắm ao ta </i><br />
                  <i>Dù trong dù đục cũng là cá‌i ao</i></p>
              </div>
            </div>
            <div className="carousel-item position-relative">
              <div className="view">
                <img className="d-block w-100" width="100%" height={250} src="./img/nenden.png" alt="First slide" />
              </div>
              <div className="carousel-caption position-status">
                <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
                <p className="mt-3"> <i>Ta về ta tắm ao ta </i><br />
                  <i>Ao nhà hết nước ta sang ao người</i></p>
              </div>
            </div>
            <div className="carousel-item position-relative">
              <div className="view">
                <img className="d-block w-100" width="100%" height={250} src="./img/nenden.png" alt="First slide" />
              </div>
              <div className="carousel-caption position-status">
                <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
                <p className="mt-3"> <i>Ta về ta tắm ao ta </i><br />
                  <i>Nhỡ may chế‌t đuối người nhà vớt lên</i></p>
              </div>
            </div>
          </div>
          {/*/.Slides*/}
          {/*Controls*/}
          <a className="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
          {/*/.Controls*/}
        </div>
        );
    }
}

export default ChamNgon;