import React, { Component } from "react";
import NavBar from "./navBar";
import NavBar2 from "./navBar2";
export default class App extends Component {
  render() {
    return (
      <div>
        {/*双标签内部的元素会存在于子元素的this.props.chilren中*/}
        <NavBar2 name={"余洋"} age={18}></NavBar2>
        <NavBar
          leftSlot={<span>nixx</span>}
          centerSlot={<span>woxx</span>}
          rightSlot={<span>taxx</span>}
        />
      </div>
    );
  }
}
