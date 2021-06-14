import React, { Component } from "react";
import "./section1.css";
import img from "../../assets/career-path-development.jpg";
export default class Section1 extends Component {
  render() {
    return (
      <div className="imgCont">
        <img src={img} alt="img" />
      </div>
    );
  }
}
