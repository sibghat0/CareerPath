import React, { Component } from "react";
import "./navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="title">
          <h4>Title</h4>
        </div>
        <div className="other">
          <ul className="links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
