import React, { Component } from 'react'
import "./Home.css";
import img from "../../assets/career-path-development.jpg"
import img1 from "../../assets/career-woman-using-her-smartphone-260nw-1186179382.jpg"

 class Home extends Component {
    render() {
        return (
            
            <div className="container">
            <div className="navbar">
                      <ul className="links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>  
    
                </ul>
            </div>
            <div className="imgCont">
            <img src={img}></img>
            </div>
            <div className="info">
            <img src={img1} />
            <div className="text">
            <h4>Heading 1</h4>
            <p>ffhssbfiugfdhsaasdsagdsaodyasdsadhasdsadsadfasdasdfadas fhgasdasdhsasfvdosadhasdvasdsgfdgfdgfdgfgfgdgfggfdhfdfgfggsdgsgsd asfhasidbsadgaivdiaFFFFFFFFDAiryfdQUYSFQytsdfuQYCSnhfbfgffgww</p>
            </div>
            </div>
            </div>
        )
    }
}
export default Home;