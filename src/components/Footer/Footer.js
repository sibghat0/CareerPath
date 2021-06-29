import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="flex-container">
          <div className="container-1">
            <div className="marfit-detail">
              <img src={logo} alt="Marfit Logo" />
              <p>
                We help teenagers & youth to bring out their creativity & become
                a highly successful professional so that they can achieve peace
                of mind, financial freedom & a career for life.
              </p>
            </div>
            <div className="company-terms">
              <div className="company-items">
                <h3>COMPANY</h3>
                <a href="/career">Career</a>
                <a href="/feed">Feed</a>
                <a href="/about">About Us</a>
              </div>

              <div className="company-items">
                <h3>POLICY & RULES</h3>
                <a href="#">Support Us</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Condition</a>
              </div>

              <div className="company-items">
                <h3>SUPPORT</h3>
                <a href="tel:+9748598179">
                  <i className="fas fa-phone-alt"></i>+91 9748598179
                </a>
                <a href="#">
                  <i className="fas fa-envelope"></i> careerpath@gmail.com
                </a>
              </div>
              {/* <div className="social">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div> */}
            </div>
          </div>
          <div className="container-2">
            {/* <h1
              style={{
                textTransform: "uppercase",
                fontSize: "40px",
                color: "#FC864D",
              }}
            >
              Social{" "}
            </h1> */}
            {/* <div className="icons-pack">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div> */}
            {/* <p>We Accept</p> */}
            {/* <img src={cards} alt='CardsImage' /> */}
          </div>
        </div>
        <div className="copyright">
          <p>
            &copy; Copyright 2021 . All rights reserved | Powered by{" "}
            <a style={{ color: "#FC864D" }} href="#" target="_blank">
              Career Path
            </a>
          </p>
        </div>
      </div>
    );
  }
}
