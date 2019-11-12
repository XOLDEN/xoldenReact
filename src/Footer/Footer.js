import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer" className="footer">
        <div className="footer-bottom">
          <div className="container">
            <div className="flex-container">
              <div className="flex-item">
                <h1 className="footer-title"><a href="/">2019 &copy; My first site on React</a></h1>
                <p> All Rights Reserved</p>
              </div>
              <div className="flex-item">
                <div className="module-body">
                  <ul className="list-unstyled">
                    <li><a href="/sitemap/" tooltip="Карта сайта">Карта сайта</a></li>
                    <li><a href="/sitemaps.xml" target="_blank" tooltip="Google Sitemap">Google Sitemap</a></li>
                  </ul>
                </div>
              </div>
              <div className="flex-item">
                <div className="module-body">
                  <ul className="list-unstyled">
                    <li><a href="/">Главная</a></li>
                    <li><a href="/calc">Калькулятор обмена валюты</a></li>
                    <li><a href="/maps">Пункты обмена</a></li>
                    <li><a href="/game">Игра</a></li>
                    <li><a href="/about">О нас</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }

}

export default Footer;
