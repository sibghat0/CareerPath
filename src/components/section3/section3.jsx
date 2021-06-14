import React, { Component } from 'react'
import img1 from "../../assets/cricketsec-3.jpg";
import img2 from "../../assets/phtosec-3.jpg";
import img3 from "../../assets/fdsec-3.jpg";
import "./section3.css";
export default class Section3 extends Component {
    render() {
        return (
            <div className="social">
       <div className="socialText">
        <h1>CHOOSE YOUR PATH</h1>
       </div>
            <div className="socialImage">
            <div className="cricket"><img src={img1} alt="img" /></div>
            <div className="cricket"><img src={img2} alt="img" /></div>
            <div className="cricket"><img src={img3} alt="img" /></div>
            </div>
          </div>
           
        )
    }
}
