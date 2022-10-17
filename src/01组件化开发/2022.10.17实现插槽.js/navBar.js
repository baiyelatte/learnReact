import React, { Component } from "react";
import "./index.css";
export default class navBar extends Component {
  render() {
    const { leftSlot, rightSlot, centerSlot } = this.props;
    return (
      <div>
        <div className="navBarBox">
          <div>{leftSlot}</div>
          <div>{rightSlot}</div>
          <div>{centerSlot}</div>
        </div>
      </div>
    );
  }
}
