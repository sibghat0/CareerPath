import React, { Component } from 'react';
import './Home.css';

import Section1 from '../../components/section1/section1';
import Section2 from '../../components/section2/section2';
import Section3 from '../../components/section3/section3';
import Section4 from '../../components/section4/section4';
class Home extends Component {
  render() {
    return (
      <div className="container">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    );
  }
}
export default Home;
