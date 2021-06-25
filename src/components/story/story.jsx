import React, { Component } from "react";
import firebase from "firebase";
import "./story.css";
import img1 from "../../assets/apj.jpg";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
export default class Story extends Component {
  constructor() {
    super();

    this.state = {
      data: [
        // {
        //   id: 1,
        //   name: "Sachin",
        //   image: img1,
        //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, at error sapiente blanditiis quibusdam assumenda sit nihil molestiae veritatis voluptatum dicta. Maxime explicabo fugiat pariatur exercitationem aperiam ipsum aliquid assumenda?sidduancsoc snsovnsiubsvovnziu svbajvncbavnasv avnasoj;vivnavno oaovnoasnvsoanv asvnosavsoivnosavnsaoivnanvvoianv oavnosvsoiavnsoanvc Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, at error sapiente blanditiis quibusdam assumenda sit nihil molestiae veritatis voluptatum dicta. Maxime explicabo fugiat pariatur exercitationem aperiam ipsum aliquid assumenda?sidduancsoc snsovnsiubsvovnziu svbajvncbavnasv avnasoj;vivnavno oaovnoasnvsoanv asvnosavsoivnosavnsaoivnanvvoianv oavnosvsoiavnsoanvc",
        // },
        // {
        //   id: 2,
        //   name: "Sachin",
        //   image: img1,
        //   // image:
        //   //   "https://www.google.com/imgres?imgurl=https%3A%2F%2Fc.ndtvimg.com%2F2021-03%2Fu0812bl8_sachin-tendulkar-afp_625x300_27_March_21.jpg&imgrefurl=https%3A%2F%2Fsports.ndtv.com%2Fcricket%2Fsachin-tendulkar-tests-positive-for-coronavirus-says-quarantined-myself-at-home-2400041&tbnid=xetlqhXhyg5-rM&vet=12ahUKEwj294WY8aHxAhWphEsFHVH3D-wQMygHegUIARCNAQ..i&docid=c7mjiCM9EM_iwM&w=806&h=605&q=sachin%20tendulkar&ved=2ahUKEwj294WY8aHxAhWphEsFHVH3D-wQMygHegUIARCNAQ",
        //   text: "lorem2",
        // },
        // {
        //   id: 3,
        //   name: "Sachin",
        //   image: img1,
        //   // image:
        //   //   "https://www.google.com/imgres?imgurl=https%3A%2F%2Fc.ndtvimg.com%2F2021-03%2Fu0812bl8_sachin-tendulkar-afp_625x300_27_March_21.jpg&imgrefurl=https%3A%2F%2Fsports.ndtv.com%2Fcricket%2Fsachin-tendulkar-tests-positive-for-coronavirus-says-quarantined-myself-at-home-2400041&tbnid=xetlqhXhyg5-rM&vet=12ahUKEwj294WY8aHxAhWphEsFHVH3D-wQMygHegUIARCNAQ..i&docid=c7mjiCM9EM_iwM&w=806&h=605&q=sachin%20tendulkar&ved=2ahUKEwj294WY8aHxAhWphEsFHVH3D-wQMygHegUIARCNAQ",
        //   text: "lorem3",
        // },
        // {
        //   id: 4,
        //   name: "Sachin",
        //   image: img1,
        //   // image:
        //   //   "https://www.google.com/imgres?imgurl=https%3A%2F%2Fc.ndtvimg.com%2F2021-03%2Fu0812bl8_sachin-tendulkar-afp_625x300_27_March_21.jpg&imgrefurl=https%3A%2F%2Fsports.ndtv.com%2Fcricket%2Fsachin-tendulkar-tests-positive-for-coronavirus-says-quarantined-myself-at-home-2400041&tbnid=xetlqhXhyg5-rM&vet=12ahUKEwj294WY8aHxAhWphEsFHVH3D-wQMygHegUIARCNAQ..i&docid=c7mjiCM9EM_iwM&w=806&h=605&q=sachin%20tendulkar&ved=2ahUKEwj294WY8aHxAhWphEsFHVH3D-wQMygHegUIARCNAQ",
        //   text: "lorem4",
        // },
        // {
        //   id: 5,
        //   name: "Sachin",
        //   image: img1,
        //   // image:
        //   //   "https://www.google.com/imgres?imgurl=https%3A%2F%2Fc.ndtvimg.com%2F2021-03%2Fu0812bl8_sachin-tendulkar-afp_625x300_27_March_21.jpg&imgrefurl=https%3A%2F%2Fsports.ndtv.com%2Fcricket%2Fsachin-tendulkar-tests-positive-for-coronavirus-says-quarantined-myself-at-home-2400041&tbnid=xetlqhXhyg5-rM&vet=12ahUKEwj294WY8aHxAhWphEsFHVH3D-wQMygHegUIARCNAQ..i&docid=c7mjiCM9EM_iwM&w=806&h=605&q=sachin%20tendulkar&ved=2ahUKEwj294WY8aHxAhWphEsFHVH3D-wQMygHegUIARCNAQ",
        //   text: "lorem5",
        // },
        // {
        //   id: 6,
        //   name: "Sachin",
        //   image: img1,
        //   // image:
        //   //   "https://www.google.com/imgres?imgurl=https%3A%2F%2Fc.ndtvimg.com%2F2021-03%2Fu0812bl8_sachin-tendulkar-afp_625x300_27_March_21.jpg&imgrefurl=https%3A%2F%2Fsports.ndtv.com%2Fcricket%2Fsachin-tendulkar-tests-positive-for-coronavirus-says-quarantined-myself-at-home-2400041&tbnid=xetlqhXhyg5-rM&vet=12ahUKEwj294WY8aHxAhWphEsFHVH3D-wQMygHegUIARCNAQ..i&docid=c7mjiCM9EM_iwM&w=806&h=605&q=sachin%20tendulkar&ved=2ahUKEwj294WY8aHxAhWphEsFHVH3D-wQMygHegUIARCNAQ",
        //   text: "lorem6",
        // },
      ],
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
