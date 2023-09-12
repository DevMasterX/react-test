import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 5,
    };
  }

  handleIncrement = (event) => {
    console.log("Кликнули в увеличить");

    const { target } = event;

    setTimeout(() => {
      console.log(target);
    }, 1000);
  };

  handleDecrement = (event) => {
    console.log("Кликнули в уменьшить");
    console.log(event);
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>
        <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            Увеличить на 1
          </button>
          <button type="button " onClick={this.handleDecrement}>
            Уменьшить на 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
