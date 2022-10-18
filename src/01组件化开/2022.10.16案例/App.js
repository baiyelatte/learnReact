import React, { Component } from "react";
import Chilren from "./chilren";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ["流行", "精选", "新款"],
      currentItem: 0,
    };
  }
  render() {
    const { title, currentItem } = this.state;
    return (
      <div>
        <Chilren
          titles={title}
          changeIndex={(index) => this.changeIndex(index)}
        ></Chilren>
        <h2>{title[currentItem]}</h2>
      </div>
    );
  }
  changeIndex(index) {
    this.setState({
      currentItem: index,
    });
  }
}
