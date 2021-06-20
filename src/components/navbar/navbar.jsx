import React, { Component } from "react";
import "./navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar colorchange">
        <div className="title">
          <h4>Career Path</h4>
        </div>
        <div className="other">
          <ul className="links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Feed</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
