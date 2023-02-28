import { Component } from "react";

import Layout from "../components/Layout";

class CounterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countValue: 0,
      isEven: true,
    };
  }

  isEven = () => {
    this.setState((state) => ({
      valueDescription:
        state.countValue % 2 === 0
          ? "Введено четное число"
          : "Введено нечетное число",
    }));
  };

  handleIncrement = () => {
    this.setState((state) => ({
      countValue: state.countValue + 1,
    }));
  };

  handleReset = () => {
    this.setState({ countValue: 0 });
  };

  handleDecrement = () => {
    this.setState((state) => ({
      countValue: state.countValue > 0 ? state.countValue - 1 : 0,
    }));
  };

  render() {
    return (
      <Layout
        countValue={this.state.countValue}
        valueDescription={this.state.isEven}
        handleIncrement={this.handleIncrement}
        handleReset={this.handleReset}
        handleDecrement={this.handleDecrement}
      />
    );
  }
}

export default CounterContainer;
