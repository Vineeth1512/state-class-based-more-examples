import React from "react";
import "./CounterApp.css";
class CounterApp extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handelIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <>
        <div className="counter-container">
          <h1>Counter App</h1>
          <h1>{this.state.count}</h1>
          <button
            onClick={this.handelIncrement}
            disabled={this.state.count == 10}
          >
            +
          </button>
          <button
            onClick={this.handleDecrement}
            disabled={this.state.count === 0}
          >
            -
          </button>

          <button onClick={() => this.setState({ count: 0 })}>Reset</button>
        </div>
      </>
    );
  }
}
export default CounterApp;
