import React, { Component } from 'react';
import img1 from '../../assets/cricketsec-3.jpg';
import img2 from '../../assets/phtosec-3.jpg';
import img3 from '../../assets/fdsec-3.jpg';
import './section3.css';
export default class Section3 extends Component {
  render() {
    return (
      <div className="social">
        <div className="socialText1">
          <h1>CHOOSE YOUR PATH</h1>
        </div>
        <div className="socialImage">
          <a href="/career">
            <div className="xxx">
              <img src={img1} alt="img" />
              <div className="content">
                <p>CRICKET</p>
              </div>
            </div>
            <div className="xxx">
              <img src={img2} alt="img" />
              <div className="content">
                <p>PHOTOGRAPHY</p>
              </div>
            </div>
            <div className="xxx">
              <img src={img3} alt="img" />
              <div className="content">
                <p>FASHION DESIGNING</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
