import React, { Component } from "react";

export default class Classcomponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      title: "CLICK BUTTON",
      des: "",
      job: "yehdek rabi ",
      click: 0,
    };

    this.affichePhoto = () => {
      this.setState({
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_nEhlJOnoj1rd6tG-oJCM_T1eGMj-Qmf3w&usqp=CAU",
      });
      this.setState({
        title: "Amine lim3alem",
      });
      this.setState({
        des: "nhab dele3",
      });
      this.setState({
        job: "injinieur",
      });
      setInterval(
        (this.handleCounter = () => {
          this.setState({ click: this.state.click + 1 });
          {
            /* Function that reapets it self every SEC*/
          }
        }),
        1000
      );
    };
  }
  render() {
    return (
      <div>
        <div class="card">
          <div className="espace">
            <img src={this.state.image} />
            <h1>{this.state.title} </h1>
            <h3>{this.state.des}</h3>
            <h5>{this.state.job}</h5>
            {this.state.click != 0 ? (
              <h1>{this.state.click}</h1>
            ) : (
              <h1></h1>
            )}{" "}
            {/*to not affiche 0*/}
          </div>
        </div>
        <button class="button-80" onClick={this.affichePhoto}>
          Show
        </button>
      </div>
    );
  }
}
