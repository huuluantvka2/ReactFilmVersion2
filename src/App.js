import React, { Component } from 'react';
import './App.css';
import Menu from './Components/Menu';
import TitleAndAnimation from './Components/TitleAndAnimation';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './Routes';

export default class App extends Component {
  render() {
    return (
      <Router >
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
        <section>
          {this.showRoute(routes)}
        </section>
        {/* begin footer */}
        <footer>
          <Footer />
          {/* Copyright */}
        </footer>
      </Router>
    );
  }
  showRoute = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route key={index} path={route.path} exact={route.exact} component={route.main} />
      })
    }
    return <Switch>{result}</Switch>
  };
}
