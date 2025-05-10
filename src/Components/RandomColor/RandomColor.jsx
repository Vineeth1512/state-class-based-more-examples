import React from "react";
import "./RandomColor.css";
export default class RandomColor extends React.Component {
  constructor() {
    super();

    this.state = {
      color: "#ffffff",
    };
  }
  randormColorGenerator = () => {
    let chars = "abcdef0123456789";
    let hexa = "#";

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      console.log(randomIndex);

      hexa += chars[randomIndex];
    }
    console.log(hexa);
    this.setState({ color: hexa });
  };

  render() {
    return (
      <>
        <div
          className="container"
          style={{ backgroundColor: this.state.color }}
        >
          <div className="color-box">
            <h1>{this.state.color}</h1>
            <button onClick={this.randormColorGenerator}>RandomColor</button>
          </div>
        </div>
      </>
    );
  }
}
