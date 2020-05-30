import React from 'react';
import './App.css';
import Menu from './Components/Menu';
import TitleAndAnimation from './Components/TitleAndAnimation';
import ContentWapperHim from './Components/ContentWapperHim';
import SlideFilms from './Components/SlideFilms';
import ChamNgon from './Components/ChamNgon';
import ContentWapperHer from './Components/ContentWapperHer';
import ExceptInfoFilms from './Components/ExceptInfoFilms';
import ImageInners from './Components/ImageInners';
import LogoItems from './Components/LogoItems';
import Footer from './Components/Footer';
function App() {
  return (
    <div>
    {/* begin header: menu,TitleAndAnimation  */}
    <header>
      {/* begin menu */}
      <Menu />
      {/* end menu */}
      {/* animation-title */}
      <TitleAndAnimation />
      {/* end animation-title */}
    </header>
    {/* end header */}
    {/* begin content: content-wapper-him, slide-film,chamngon,content wapper her, except-info-film ,image-inner,logo-item*/}
    <section className="overflow-hidden">
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
    </section>
    {/* begin footer */}
    <footer>
      <Footer />
      {/* Copyright */}
    </footer>
  </div>
  );
}

export default App;
