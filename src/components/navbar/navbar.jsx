import React, { Component } from 'react'
import "./navbar.css"

export default class Navbar extends Component {
    render() {
        return (
             <div className="navbar">
                      <ul className="links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>  
    
                </ul>
            </div>
        )
    }
}
