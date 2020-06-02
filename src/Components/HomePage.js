import React, { Component } from 'react';
import ContentWapperHim from './ContentWapperHim';
import SlideFilms from './SlideFilms';
import ChamNgon from './ChamNgon';
import ContentWapperHer from './ContentWapperHer';
import ExceptInfoFilms from './ExceptInfoFilms';
import ImageInners from './ImageInners';
import LogoItems from './LogoItems';
class HomePage extends Component {
    render() {
        return (
            <div className="containter-fluid mt-4">
        <div className="row no-margin">
          {/* begin content wapper him */}
          <ContentWapperHim />
          {/* end content wapper him */}
        </div>
        {/* slide-film */}
        <SlideFilms />
        {/* end slide-film */}
        {/* chamngon */}
        <ChamNgon />
        {/* end chamngon */}
        <div className="container-fluid">
          <div className="row no-margin no-margin">
            {/* content wapper her */}
            <ContentWapperHer />
            {/* end content wapper her */}
          </div>
        </div>
        {/* except-info-film */}
        <ExceptInfoFilms />
        {/* end except-info-film */}
        {/* image-inner */}
        <ImageInners />
        {/* end image-inner */}
        {/* logo-item */}
        <LogoItems />
        {/* end logo-item */}
      </div>
        );
    }
}

export default HomePage;