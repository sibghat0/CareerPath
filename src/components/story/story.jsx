import React, { Component } from "react";
import firebase from "firebase";
import "./story.css";
import img1 from "../../assets/apj.jpg";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
export default class Story extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      tab: 0,
      loading: true,
    };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection("career")
      .doc(this.props.match.params.id)
      .onSnapshot((doc) => {
        this.setState({
          data: doc.data().content,
          loading: false,
        });
      });
  }

  render() {
    return (
      <div className="section">
        <h1>Our Achievers</h1>
        <div className="content">
          <div
            className="content2"
            style={{
              width: `${this.state.data.length * 100}%`,
              transform: `translateX(-${
                (100 / this.state.data.length) * this.state.tab
              }% )`,
            }}
          >
            {this.state.data.map((i) => {
              return (
                <div className="slide">
                  <img src={i.image} alt="img" />
                  {/* <div className="quote-icon">
                    <FaQuoteRight />
                  </div> */}
                  <h3>{i.name}</h3>
                  <p>
                    {i.text}
                    <br />
                    <br />
                    {i.text2}
                  </p>
                  <div className="swipe">
                    <button
                      className="prev-btn"
                      onClick={() => {
                        if (this.state.tab > 0) {
                          this.setState({
                            tab: this.state.tab - 1,
                          });
                        }
                      }}
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      className="next-btn"
                      onClick={() => {
                        if (this.state.tab < this.state.data.length - 1) {
                          this.setState({
                            tab: this.state.tab + 1,
                          });
                        }
                      }}
                    >
                      <FaChevronRight />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        ;
      </div>
    );
  }
}
