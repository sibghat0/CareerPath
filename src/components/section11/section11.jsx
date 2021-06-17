import React, { Component } from 'react'
import "./section11.css";
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
                    <img src={cap} alt="img"></img>
                    <h1>Choose Your Path</h1>
                    <div className="search">
                    <input type="text" placeholder="  Search.."/>
                    <img src={search} alt="img"></img>
                </div></div>
            <div className="window">
            <p></p>
            <img src={boy} alt="img"></img>
            </div>
            <div className="options">
            <div className="row">
            <div className="xxx"><img src={img1} alt="img" /></div>
            <div className="xxx"><img src={img2} alt="img" /></div>
            </div>
            <div className="row">
            <div className="xxx"><img src={img1} alt="img" /></div>
            <div className="xxx"><img src={img2} alt="img" /></div>
            </div>
            <div className="row">
            <div className="xxx"><img src={img1} alt="img" /></div>
            <div className="xxx"><img src={img2} alt="img" /></div>
            </div>
            </div>
            </div>
        )
    }
}
