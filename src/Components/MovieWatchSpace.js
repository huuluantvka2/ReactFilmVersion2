import React, { Component } from 'react';

class MovieWatchSpace extends Component {
    render() {
        return (
            <div className="container-fluid bg-content mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 left-content">
                            <div className="col-12 no-padding">
                                <iframe title="hi" width="100%" height={450} src="https://www.youtube.com/embed/ITlQ0oU7tDA" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                <a href="/#"><img className="img-full" src="./img/content/portfolio-single4-img-11.jpg" alt="" /></a>
                            </div>
                            <div className="col-12 mt-5">
                                <h3 className="my-3 leave-comment">Comment</h3>
                                <div className="media">
                                    <img className="d-flex rounded-circle avatar z-depth-1-half mr-3" src="https://avatars3.githubusercontent.com/u/57451218?s=460&u=6cc153ec778602b4a2189760dc761ee54a7b8a78&v=4" alt="Avatar" />
                                    <div className="media-body">
                                        <h5 className="mt-0 font-weight-bold blue-text">Hữu Luân</h5>
                                        <p>
                                            Ta về ta tắm ao ta <br />
                      Nhỡ may chế‌t đuối người nhà vớt lên
                    </p>
                                    </div>
                                </div>
                                <div className="media">
                                    <img className="d-flex rounded-circle avatar z-depth-1-half mr-3" src="./img/nongto.png" alt="Avatar" />
                                    <div className="media-body">
                                        <h5 className="mt-0 font-weight-bold blue-text">Nông Tô</h5>
                                        <p>
                                            Ta về ta tắm ao ta <br />
                      Nhỡ may chế‌t đuối người nhà vớt lên
                    </p>
                                    </div>
                                </div>
                                <div className="media">
                                    <img className="d-flex rounded-circle avatar z-depth-1-half mr-3" src="./img/kaito.png" alt="Avatar" />
                                    <div className="media-body">
                                        <h5 className="mt-0 font-weight-bold blue-text">Kaito</h5>
                                        <p>
                                            Ta về ta tắm ao ta <br />
                      Ao nhà hết nước ta sang ao người.
                    </p>
                                    </div>
                                </div>
                                {/* Material form grid */}
                                <h3 className="my-3 leave-comment">cào phím viết một bình luận</h3>
                                <form>
                                    {/* Grid row */}
                                    <div className="row">
                                        {/* Grid column */}
                                        <div className="col">
                                            {/* Material input */}
                                            <div className="md-form mt-0">
                                                <input type="text" className="form-control" placeholder="Họ tên" />
                                            </div>
                                        </div>
                                        {/* Grid column */}
                                        {/* Grid column */}
                                        <div className="col">
                                            {/* Material input */}
                                            <div className="md-form mt-0">
                                                <input type="email" className="form-control" placeholder="Email" />
                                            </div>
                                        </div>
                                        {/* Grid column */}
                                    </div>
                                    {/* Grid row */}
                                </form>
                                {/* Material form grid */}
                                <div className="md-form mb-4 pink-textarea active-pink-textarea">
                                    <textarea id="form18" className="md-textarea form-control" rows={3} defaultValue={""} />
                                    <label htmlFor="form18">Mời bạn nhập bình luận</label>
                                </div>
                                <button className="btn btn-blue">Send Message</button>
                            </div>
                        </div>
                        <div className="col-md-4 right-content">
                            <div className="positon-right-content sticky-top top70">
                                <h1 className="text-center my-3">Mắt Biếc</h1>
                                <p>
                                    <i>Nội dung Mắt biếc ít kịch tính, diễn biến đơn giản, nhiều đoạn
                                    trong phim gây cảm giác lê thê. Khán giả, dù biết trước nội dung
                                    qua truyện gốc hay chưa, đều phải kiên nhẫn để vượt qua những đoạn
                                    này Mắt biếc kể về mối tình xuyên thời gian của Ngạn dành cho Hà
                                    Lan - cô bạn học từ ấu thơ. Tình yêu đó không hề thay đổi khi cả
                                    hai lớn lên, chia tách, băng qua nhiều biến cố của cuộc đời. "Mắt
                                    biếc" của Hà Lan được chọn đưa lên poster quảng bá, nhưng khi xem
                                    phim, có thể thấy Ngạn (Trần Nghĩa đóng) mới là nhân vật trung
                    tâm.</i>
                                </p>
                                <hr />
                                <div className="extra-info">
                                    <p className="years">Năm: <span>1972</span></p>
                                    <p>Director : <span><a href="#"> Victor Vũ</a></span></p>
                                    <p>Quốc gia : <span><a href="#"> Việt Nam</a></span></p>
                                    <p>
                                        Diễn viên : <span><a href="#"> Trúc Anh, Trần Nghĩa, Hữu Luân</a></span>
                                    </p>
                                    <p>Thể loại : <span><a href="#"> Phim tình cảm</a></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieWatchSpace;