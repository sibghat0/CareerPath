import React, { Component } from "react";
import "./Home.css";

import Navbar from "../../components/navbar/navbar";
import Section1 from "../../components/section1/section1";
import Section2 from "../../components/section2/section2";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Section1 />
        <Section2 />
      </div>
    );
  }
}
export default Home;
