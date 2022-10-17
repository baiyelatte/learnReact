import React, { Component } from "react";
import "./index.css";
export default class navBar extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <div className="navBarBox">
          {children.map((item, index) => {
            return (
              <div key={item} className={`navBar${index} test`}>
                {item}
              </div>
            );
          })}
        </div>
        <h2>分割线-------------------------------</h2>
      </div>
    );
  }
}
