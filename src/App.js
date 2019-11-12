import React from 'react';
import './App.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Rate from './Rate/Rate';
import Main from './Main/Main';
import About from './About/About';
import Maps from './Map/Map';
import Game from './Game/Game';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <div className="site">
        <Header />

        <div className="container">
          <main>
            <Router>
              <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/calc" component={Rate} />
                <Route exact path="/about" component={About} />
                <Route exact path="/maps" component={Maps} />
                <Route exact path="/game" component={Game} />
              </Switch>
            </Router>
          </main>
        </div>

        <div className="container" id="cookie_info">
          <div className="site-content">
            <div className="well">На нашем сайте мы используем cookie для сбора информации технического характера.<br />В
                частности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего
            местоположения.&nbsp;<button className="btn btn-primary btn-sm">OK</button></div>
          </div>
        </div>

        <Footer />


      </div>
    )
  }

}

export default App;
