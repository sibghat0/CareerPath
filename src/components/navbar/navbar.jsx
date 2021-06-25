import React, { Component } from "react";
import "./navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar colorchange">
        <div className="title">
          <h4>
            <a href="/">Career Path</a>
          </h4>
        </div>
        <div className="other">
          <ul className="links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/career">Career</a>
            </li>
            <li>
              <a href="/feed">Feed</a>
            </li>
            <li>
              <a href="/feed">About</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
