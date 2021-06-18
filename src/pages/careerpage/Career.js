import React, { Component } from "react";
import "./career.css";
import cap from "../../assets/graduation-cap.png";
import search from "../../assets/zoom (1).png";
import boy from "../../assets/Blogging-bro.1c32fe35 (1).svg";
import img1 from "../../assets/cricketsec-3.jpg";
import img2 from "../../assets/phtosec-3.jpg";
import img3 from "../../assets/fdsec-3.jpg";
export default class Section11 extends Component {
  render() {
    return (
      <div className="cp">
        <div className="choose">
          <img src={cap} alt="img" />
          <h1>Choose Your Path</h1>
          <div className="search">
            <input type="text" placeholder="  Search.." />
            <img src={search} alt="img" />
          </div>
        </div>
        <div className="window">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quas,
            officiis a omnis vitae cumque libero possimus saepe inventore.
            Maiores amet rem, veniam dolores officia voluptate sequi. Dolores,
            mollitia cum!
          </p>
          <img src={boy} alt="img" />
        </div>
        <div className="options">
          <div className="xxx">
            <img src={img1} alt="img" />
            <div className="content">
              <p>Cricket</p>
            </div>
          </div>
          <div className="xxx">
            <img src={img2} alt="img" />
            <div className="content">
              <p>Cricket</p>
            </div>
          </div>
          <div className="xxx">
            <img src={img3} alt="img" />
            <div className="content">
              <p>Cricket</p>
            </div>
          </div>
          <div className="xxx">
            <img src={img1} alt="img" />
            <div className="content">
              <p>Cricket</p>
            </div>
          </div>
          <div className="xxx">
            <img src={img1} alt="img" />
            <div className="content">
              <p>Cricket</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
