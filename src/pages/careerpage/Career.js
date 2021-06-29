import React, { Component } from "react";
import "./career.css";
import cap from "../../assets/graduation-cap.png";
import firebase from "firebase";
import search1 from "../../assets/zoom (1).png";
import boy from "../../assets/Blogging-bro.1c32fe35 (1).svg";
import img1 from "../../assets/cricketsec-3.jpg";
import img2 from "../../assets/phtosec-3.jpg";
import img3 from "../../assets/fdsec-3.jpg";
export default class Section11 extends Component {
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
          Almost everyone needs a role model, irrespective of what career field one chooses.
           But how do you choose a role model? Is it something that just comes to you when you see their work or 
           is it a conscious choice based on variables? No one exactly knows that;
           But, I am here to help make that process a tad bit easier for you.
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
      </div>
    );
  }
}
