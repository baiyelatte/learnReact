import React, { Component } from "react";
import PropTypes from "prop-types";
import "./chilren.css";

export default class chilren extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }
  static propTypes = {
    titles: PropTypes.array.isRequired,
  };
  render() {
    const { titles, changeIndex } = this.props;
    const { currentIndex } = this.state;
    return (
      <div className="chilrenBox">
        {titles.map((item, index) => {
          return (
            <div
              key={item}
              className={
                "chilrenBoxItem " + (currentIndex === index ? "active" : "")
              }
              onClick={() => this.chengeContent(index)}
            >
              {item}
            </div>
          );
        })}
      </div>
    );
  }
  chengeContent(index) {
    this.props.changeIndex(index);
    this.setState({
      currentIndex: index,
    });
  }
}
