import React, { Component } from 'react'
import "./Home.css";

 class Home extends Component {
    render() {
        return (
            <div>
            <div className="container">
            <div className="navbar">
                      <ul className="links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>  
    
                </ul>
            </div>
            <img src="https://www.u-wah.com/images/career.png"></img>
            </div>
            </div>
            
        )
    }
}
export default Home;