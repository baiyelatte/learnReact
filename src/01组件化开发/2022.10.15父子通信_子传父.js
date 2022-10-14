import React, { Component } from "react";
import PropTypes from "prop-types";

class Children extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const { btn } = this.props;
    return (
      <div>
        <button onClick={btn}>+++</button>
      </div>
    );
  }
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      numm: 1,
    };
  }
  render() {
    return (
      <div>
        <h2>数字:{this.state.numm}</h2>
        <button onClick={() => this.add()}>+++++++</button>
        <Children btn={() => this.add()}></Children>
      </div>
    );
  }
  add() {
    this.setState({
      numm: this.state.numm + 1,
    });
  }
}
