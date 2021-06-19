import React, { Component } from "react";
import "./story.css";
import img1 from "../../assets/apj.jpg";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
export default class Story extends Component {
  render() {
    return (
      <div className="section">
        <div className="content">
          <img src={img1} alt="img"></img>
          <div className="quote-icon">
            <FaQuoteRight />
          </div>
          <h3>Sachin Tendulkar</h3>
          <p>
            Sachin Tendulkar has been the most complete batsman of his time, the
            most prolific runmaker of all time, and arguably the biggest cricket
            icon the game has ever known. His batting was based on the purest
            principles: perfect balance, economy of movement, precision in
            stroke-making, and that intangible quality given only to geniuses -
            anticipation. If he didn't have a signature stroke - the upright,
            back-foot punch comes close - it's because he was equally proficient
            at each of the full range of orthodox shots (and plenty of
            improvised ones as well) and can pull them out at will.
          </p>
          <div className="swipe">
            <button className="prev-btn">
              <FaChevronLeft />
            </button>
            <button className="next-btn">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
