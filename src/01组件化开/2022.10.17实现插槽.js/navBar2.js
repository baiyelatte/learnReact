import React, { Component } from "react";
import "./index.css";

class TestChilren extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <h2>名字：{name}</h2>
        <h2>年龄：{age}</h2>
      </div>
    );
  }
}
function TestChilren2(props) {
  return (
    <div>
      <TestChilren {...props}></TestChilren>
    </div>
  );
}

export default class navBar extends Component {
  render() {
    return (
      <div>
        {/*层层传值  还可以使用结构的方法对props的值进行全部的接受*/}
        <h2>分割线-------------------------------</h2>
        <TestChilren {...this.props}></TestChilren>
        <TestChilren2 {...this.props}>nixx</TestChilren2>
      </div>
    );
  }
}
