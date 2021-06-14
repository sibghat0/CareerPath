import React, { Component } from "react";
import "./section2.css";
import img1 from "../../assets/career-woman-using-her-smartphone-260nw-1186179382.jpg";
import img2 from "../../assets/section1.svg";
export default class Section2 extends Component {
  render() {
    return (
      <div className="info">
        <div className="img">
          <img src={img2} alt="img" />
        </div>
        <div className="text">
          <h1>Insights</h1>
          <p>
            Hey,readers! Welcome to this website, where you would be discovering different career ideas!
            This website descripts various paths alongwith the much needed inspiration.
            We will be more than overwhelmed when one of our readers today make it to the achievers section someday!
            Go,follow what you desire!
          </p>
        </div>
      </div>
    );
  }
}
