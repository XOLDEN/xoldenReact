import React from 'react';
import './Map.css';

class About extends React.Component {
  render() {
    return (
      <div>
        <iframe title="maps" src="https://yandex.ru/map-widget/v1/?um=constructor%3A4776fa98246757588a11ea8d606b6da5918949089884ae78a34d9c97ec8cac63&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
      </div>
    )
  }

}

export default About;
