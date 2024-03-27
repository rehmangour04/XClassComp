/** @format */

import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prev) => ({
      count: prev.count - 1,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h2>Counter App</h2>
        <p>Count: {count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}
export default App;
