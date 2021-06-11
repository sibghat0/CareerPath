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
            <div className="imgCont">
            <img src="https://previews.123rf.com/images/artitcom/artitcom1807/artitcom180700014/104840328-creative-illustration-of-business-infographics-rise-career-to-success-finance-opportunity-concept-wi.jpg"></img>
            </div>
            </div>
            </div>
            
        )
    }
}
export default Home;