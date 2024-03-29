import React, { Component } from "react";
import "./career.css";
import cap from "../../assets/graduation-cap.png";
import firebase from "firebase";
import search1 from "../../assets/zoom (1).png";
import Lottie from "react-lottie";
import loader from "../../loader/lf30_editor_v1fleg6c.json";
import boy from "../../assets/Blogging-bro.1c32fe35 (1).svg";

export default class Career extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        // {
        //   img: img1,
        //   opt: "cricket",
        // },
        // {
        //   img: img2,
        //   opt: "photography",
        // },
        // {
        //   img: img3,
        //   opt: "art and creation",
        // },
      ],
      search: "",
      loading: true,
    };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection("career")
      .get()
      .then((snap) => {
        var temp = [];
        snap.forEach((doc) => {
          const data = doc.data();
          data.id = doc.id;
          temp.push(data);
        });
        this.setState({
          data: temp,
          loading: false,
        });
      });
  }

  // handleChange = (e) => {
  //   this.setState({
  //     search: e.target.value,
  //   });
  // };

  render() {
    // const { data, search } = this.state;
    // const searchFilter = data.filter((data) =>
    //   data.opt.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    // );
    return (
      <div className="cp">
        {this.state.loading ? (
          <Lottie
            options={{ animationData: loader }}
            height={400}
            width={400}
          />
        ) : (
          <>
            <div className="choose">
              <img src={cap} alt="img" />
              <h1>Choose Your Path</h1>
              <div className="search">
                <input
                  type="search"
                  placeholder="  Search.."
                  onChange={this.handleChange}
                />
                <img src={search1} alt="img" />
              </div>
            </div>
            <div className="window">
              <p>
                Almost everyone needs a role model, irrespective of what career
                field one chooses. But how do you choose a role model? Is it
                something that just comes to you when you see their work or is
                it a conscious choice based on variables? No one exactly knows
                that; But, we are here to help make that process a tad bit
                easier for you.
              </p>
              <img src={boy} alt="img" />
            </div>
            <div className="options">
              {this.state.data.map((e) => {
                return (
                  <a href={`/career/${e.id}`}>
                    <div className="xxx">
                      <img src={e.img} alt="img" />
                      <div className="content">
                        <p>{e.opt}</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </>
        )}
      </div>
    );
  }
}
