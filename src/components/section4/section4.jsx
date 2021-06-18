import React, { Component } from "react";
import "./section4.css";
import img1 from "../../assets/apj.jpg";
import img2 from "../../assets/tagore.jpg";
import img3 from "../../assets/swami.jpg";
export default class Section4 extends Component {
  render() {
    return (
      <div className="quotes">
        <div className="socialText">
          <h1>Quotes</h1>
        </div>
        <div className="box">
          <div className="kkkg">
            <div className="name">
              <img src={img1} alt="img" />
              <h4>APJ ABDUL KALAM</h4>
            </div>
            <p>
              " Winners are not those who never fail but those who never quit. "
            </p>
          </div>
          <div className="kkkg">
            <div className="name">
              <img src={img2} alt="img" />
              <h4>Rabindranath Tagore</h4>
            </div>
            <p>
              " Take risks in your life. If you win,you can lead.If you lose,you
              can guide. "
            </p>
          </div>
          <div className="kkkg">
            <div className="name">
              <img src={img3} alt="img"></img>
              <h4>Swami Vivekananda</h4>
            </div>
            <p>
              " You can't cross the sea by merely standing and staring at the
              water. "
            </p>
          </div>
        </div>
      </div>
    );
  }
}
